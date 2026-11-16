const BASE = "http://same-site.invalid";

/**
 * 밖에서 받은 이동 주소(로그인 뒤 돌아갈 곳, 미리 보기를 끝낸 뒤 갈 곳)를 같은 사이트 안의 경로로만 받는다.
 * "/"로 시작하는지만 보면 "/\evil.com"을 놓친다. 브라우저와 URL 해석은 역슬래시를 슬래시로 읽어 "//evil.com"(다른 사이트)으로 간다.
 * 그래서 실제로 해석한 주소의 출처를 비교하고, 해석한 경로(쿼리·해시 포함)를 돌려준다. 아니면 fallback.
 */
export function safeLocalPath(value: unknown, fallback = "/"): string {
  if (typeof value !== "string" || !value.startsWith("/")) return fallback;
  try {
    const url = new URL(value, BASE);
    return url.origin === BASE ? `${url.pathname}${url.search}${url.hash}` : fallback;
  } catch {
    return fallback;
  }
}
