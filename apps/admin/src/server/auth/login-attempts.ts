import { eq, sql } from "drizzle-orm";

import type { Database } from "@/db/index";
import { loginAttempts } from "@/db/schema";

/** 연속으로 이만큼 틀리면 잠근다. */
const MAX_FAILURES = 5;
/** 잠그는 시간, 그리고 실패 횟수를 이어서 세는 시간 */
const LOCK_MINUTES = 15;
const WINDOW = LOCK_MINUTES * 60_000;

/**
 * 로그인 연속 실패 잠금 (이메일별).
 * - 15분 안에 5번 틀리면 그때부터 15분 동안 잠근다. 잠긴 동안에는 맞는 비밀번호도 받지 않는다.
 * - 성공하면 기록을 지운다. 마지막 실패가 15분 넘게 지났으면 처음부터 다시 센다.
 * 이메일 기준이라 남이 일부러 틀려 잠글 수도 있지만, 데모 어드민이라도 비밀번호 추측을 막는 쪽을 택했다.
 * 비밀번호가 공개된 게스트 계정은 잠그지 않는다(authenticate.ts).
 */
export function createLoginAttemptRepository(db: Database) {
  const key = (email: string) => email.trim().toLowerCase();
  return {
    /** 잠겨 있으면 풀리는 시각 */
    async lockedUntil(email: string, now: Date): Promise<Date | null> {
      const [row] = await db.select().from(loginAttempts).where(eq(loginAttempts.email, key(email)));
      return row?.lockedUntil && row.lockedUntil > now ? row.lockedUntil : null;
    },

    /**
     * 실패를 기록하고, 이번에 잠갔으면 풀리는 시각을 돌려준다.
     * 읽고 나서 쓰면 동시에 온 요청들이 같은 횟수를 읽어 잠금을 피하므로, 세기와 잠그기를 쿼리 하나로 한다.
     * (ON CONFLICT DO UPDATE의 식은 기존 줄의 값을 읽고, 같은 줄의 동시 갱신은 차례로 처리된다.)
     */
    async recordFailure(email: string, now: Date): Promise<Date | null> {
      const windowStart = new Date(now.getTime() - WINDOW).toISOString();
      const unlockAt = new Date(now.getTime() + WINDOW);
      // 테이블 이름을 직접 써서 기존 줄(excluded가 아닌 쪽)을 가리킨다.
      const failures = sql`(case when "login_attempts"."last_failed_at" > ${windowStart}::timestamptz then "login_attempts"."failures" + 1 else 1 end)`;
      const [row] = await db
        .insert(loginAttempts)
        .values({ email: key(email), failures: 1, lastFailedAt: now, lockedUntil: MAX_FAILURES <= 1 ? unlockAt : null })
        .onConflictDoUpdate({
          target: loginAttempts.email,
          set: {
            failures,
            lastFailedAt: now,
            lockedUntil: sql`case when ${failures} >= ${MAX_FAILURES} then ${unlockAt.toISOString()}::timestamptz else null end`,
          },
        })
        .returning({ lockedUntil: loginAttempts.lockedUntil });
      return row?.lockedUntil ?? null;
    },

    async recordSuccess(email: string) {
      await db.delete(loginAttempts).where(eq(loginAttempts.email, key(email)));
    },
  };
}
