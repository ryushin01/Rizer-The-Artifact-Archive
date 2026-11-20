/**
 * 초안 미리보기 링크의 서명(서버에서 쓴다). 관리 화면이 만들고 공개 사이트가 확인한다.
 * 두 앱이 함께 가진 비밀값(REVALIDATE_SECRET)으로 "preview:{slug}:{만료 시각}"에 HMAC-SHA256을 건다.
 * 앞머리(preview:)를 붙여, 같은 비밀값을 쓰는 다른 용도(캐시 비우기)의 값과 섞이지 않게 한다.
 * Web Crypto를 써서 Node와 엣지 어디서든 같은 코드로 돈다.
 */
export const PREVIEW_TTL_MS = 10 * 60_000;

const hex = (buffer: ArrayBuffer) => [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, "0")).join("");

const encoder = new TextEncoder();

const previewKey = (secret: string, usage: "sign" | "verify") =>
  crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, [usage]);

const previewMessage = (slug: string, expiresAt: number) => encoder.encode(`preview:${slug}:${expiresAt}`);

export async function signPreview(secret: string, slug: string, expiresAt: number): Promise<string> {
  return hex(await crypto.subtle.sign("HMAC", await previewKey(secret, "sign"), previewMessage(slug, expiresAt)));
}

/** 16진수 서명 → 바이트. SHA-256 길이(64자)의 16진수가 아니면 null이다. */
function fromHex(value: string): Uint8Array<ArrayBuffer> | null {
  if (!/^[0-9a-f]{64}$/i.test(value)) return null;
  return Uint8Array.from(value.match(/../g)!, (pair) => parseInt(pair, 16));
}

/**
 * 서명이 맞고 만료되지 않았는지. 너무 먼 만료 시각(유효 시간의 두 배 넘게)도 받지 않는다.
 * 서명 비교는 직접 하지 않고 Web Crypto의 HMAC verify에 맡긴다(상수 시간 비교, Node·엣지 공통).
 */
export async function verifyPreview(
  secret: string,
  slug: string,
  expiresAt: number,
  signature: string,
  now = Date.now(),
): Promise<boolean> {
  if (!Number.isFinite(expiresAt) || expiresAt < now || expiresAt > now + PREVIEW_TTL_MS * 2) return false;
  const bytes = fromHex(signature);
  if (!bytes) return false;
  return crypto.subtle.verify("HMAC", await previewKey(secret, "verify"), bytes, previewMessage(slug, expiresAt));
}
