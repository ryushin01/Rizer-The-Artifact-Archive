import { compare } from "bcryptjs";

import type { Database } from "@/db/index";
import type { User } from "@/entities/user";
import { createUserRepository } from "@/server/users/repository";

import { createLoginAttemptRepository } from "./login-attempts";

/**
 * 없는 계정에도 비교를 한 번 해서, 응답 시간으로 계정이 있는지 알 수 없게 한다.
 * 비교에만 쓰는 임의 문자열의 해시(cost 10)다. 서버가 켜질 때마다 만들지 않도록 미리 만들어 둔다.
 */
const DUMMY_HASH = "$2b$10$JnjKYsfg0psG8ltdpVLOyuQmiC0/AKM21/H4AVOqev7D0Sv/SqkBC";

export type LoginResult = { ok: true; user: User } | { ok: false; reason: "invalid" | "locked" };

/**
 * 이메일·비밀번호 확인과 연속 실패 잠금.
 * 게스트 계정은 비밀번호를 로그인 화면에 공개한 읽기 전용 계정이라 잠그지 않는다. 잠그면 누구든 틀린 비밀번호를
 * 다섯 번 보내 모든 방문자의 "게스트로 둘러보기"를 15분씩 막을 수 있고, 잠금이 지키는 비밀도 없다.
 */
export async function authenticate(db: Database, email: string, password: string, now = new Date()): Promise<LoginResult> {
  const found = await createUserRepository(db).findForLogin(email);
  if (found?.user.role === "guest") {
    return (await compare(password, found.passwordHash)) ? { ok: true, user: found.user } : { ok: false, reason: "invalid" };
  }

  const attempts = createLoginAttemptRepository(db);
  if (await attempts.lockedUntil(email, now)) return { ok: false, reason: "locked" };
  const ok = await compare(password, found?.passwordHash ?? DUMMY_HASH);
  if (!found || !ok) return { ok: false, reason: (await attempts.recordFailure(email, now)) ? "locked" : "invalid" };
  await attempts.recordSuccess(email);
  return { ok: true, user: found.user };
}
