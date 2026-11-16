/**
 * 초안 미리보기 링크의 서명(서버에서 쓴다). 관리 화면이 만들고 공개 사이트가 확인한다.
 * 두 앱이 함께 가진 비밀값(REVALIDATE_SECRET)으로 "preview:{slug}:{만료 시각}"에 HMAC-SHA256을 건다.
 * 앞머리(preview:)를 붙여, 같은 비밀값을 쓰는 다른 용도(캐시 비우기)의 값과 섞이지 않게 한다.
 * Web Crypto를 써서 Node와 엣지 어디서든 같은 코드로 돈다.
 */
export const PREVIEW_TTL_MS = 10 * 60_000;

const hex = (buffer: ArrayBuffer) => [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, "0")).join("");

export async function signPreview(secret: string, slug: string, expiresAt: number): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return hex(await crypto.subtle.sign("HMAC", key, encoder.encode(`preview:${slug}:${expiresAt}`)));
}

/** 길이가 같으면 끝까지 비교해, 어디서 달라지는지가 걸린 시간으로 드러나지 않게 한다. */
function sameText(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** 서명이 맞고 만료되지 않았는지. 너무 먼 만료 시각(유효 시간의 두 배 넘게)도 받지 않는다. */
export async function verifyPreview(
  secret: string,
  slug: string,
  expiresAt: number,
  signature: string,
  now = Date.now(),
): Promise<boolean> {
  if (!Number.isFinite(expiresAt) || expiresAt < now || expiresAt > now + PREVIEW_TTL_MS * 2) return false;
  return sameText(await signPreview(secret, slug, expiresAt), signature);
}
