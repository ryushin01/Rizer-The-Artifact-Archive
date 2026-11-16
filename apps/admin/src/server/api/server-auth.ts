import "server-only";

import { timingSafeEqual } from "node:crypto";

/**
 * 공개 사이트의 서버가 보낸 요청인지. 두 앱이 함께 가진 비밀값(REVALIDATE_SECRET)을 Bearer로 보낸다.
 * 이런 요청은 요청 제한을 받지 않고(공개 사이트가 캐시를 다시 채울 때 몰리므로), 초안 미리보기도 읽을 수 있다.
 */
export function isTrustedServer(request: Request): boolean {
  const secret = process.env.REVALIDATE_SECRET;
  const token = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? "";
  if (!secret || !token) return false;
  const a = Buffer.from(token);
  const b = Buffer.from(secret);
  return a.length === b.length && timingSafeEqual(a, b);
}
