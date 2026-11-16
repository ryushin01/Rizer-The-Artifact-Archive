/**
 * 한 서버 인스턴스 안의 고정 창 요청 제한(열쇠마다, 보통 IP). 관리 화면의 공개 API와 공개 사이트의 검색 API가 쓴다.
 * 서버리스라 인스턴스마다 따로 세므로 정밀한 전체 한도는 아니지만, 한 곳에서 몰아치는 요청을 DB에 닿기 전에 끊는다.
 * 열쇠가 너무 많이 쌓이지 않게 maxKeys를 넘으면 지난 창을 먼저, 그래도 많으면 가장 오래된 열쇠를 지운다.
 */
export function createRateLimiter({ limit, windowMs, maxKeys = 5_000 }: { limit: number; windowMs: number; maxKeys?: number }) {
  const windows = new Map<string, { count: number; resetAt: number }>();
  return {
    /** 이번 요청을 센다. 넘었으면 다시 시도할 수 있을 때까지의 초를 돌려준다. */
    hit(key: string, now = Date.now()): { ok: true } | { ok: false; retryAfter: number } {
      let window = windows.get(key);
      if (!window || window.resetAt <= now) {
        if (windows.size >= maxKeys) {
          for (const [k, w] of windows) if (w.resetAt <= now) windows.delete(k);
          if (windows.size >= maxKeys) windows.delete(windows.keys().next().value!);
        }
        window = { count: 0, resetAt: now + windowMs };
        windows.set(key, window);
      }
      window.count += 1;
      return window.count > limit ? { ok: false, retryAfter: Math.max(1, Math.ceil((window.resetAt - now) / 1000)) } : { ok: true };
    },
    get size() {
      return windows.size;
    },
  };
}

/** 공개 주소의 요청 한도: IP마다 분당 120번. 검색어를 칠 때(300ms 기다림) 보내는 요청으로는 닿지 않는다. */
export const PUBLIC_RATE_LIMIT = { limit: 120, windowMs: 60_000 } as const;

/** 한도를 넘었을 때의 안내 */
export const RATE_LIMIT_MESSAGE = "요청이 너무 많습니다. 잠시 후 다시 시도해 주세요.";

/**
 * 요청한 곳의 IP. Vercel은 x-forwarded-for의 첫 값에 실제 IP를 넣고, 방문자가 보낸 값은 덮어쓴다.
 * 알 수 없으면 한 묶음으로 센다.
 */
export function clientIp(request: { headers: { get(name: string): string | null } }): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}
