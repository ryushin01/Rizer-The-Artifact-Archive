import { eq } from "drizzle-orm";
import { describe, expect, it } from "vitest";

import { loginAttempts } from "@/db/schema";
import { SEED_USERS } from "@/db/seed";
import { createTestDb, TEST_PASSWORD } from "@/db/testing";

import { authenticate } from "./authenticate";
import { createLoginAttemptRepository } from "./login-attempts";

const CURATOR = SEED_USERS.curator.email;
const GUEST = SEED_USERS.guest.email;
const minutes = (n: number) => n * 60_000;

describe("로그인 잠금", () => {
  it("큐레이터는 15분 안에 5번 틀리면 잠기고, 잠긴 동안에는 맞는 비밀번호도 받지 않는다", async () => {
    const db = await createTestDb();
    const now = new Date("2026-11-16T00:00:00Z");
    for (let i = 0; i < 4; i++) expect(await authenticate(db, CURATOR, "wrong", now)).toEqual({ ok: false, reason: "invalid" });
    expect(await authenticate(db, CURATOR, "wrong", now)).toEqual({ ok: false, reason: "locked" });
    expect(await authenticate(db, CURATOR, TEST_PASSWORD, new Date(now.getTime() + minutes(14)))).toEqual({ ok: false, reason: "locked" });
    // 풀린 뒤에는 들어오고, 기록이 지워진다.
    const later = await authenticate(db, CURATOR, TEST_PASSWORD, new Date(now.getTime() + minutes(16)));
    expect(later.ok).toBe(true);
    expect(await db.select().from(loginAttempts)).toEqual([]);
  });

  it("마지막 실패가 15분 넘게 지났으면 처음부터 다시 센다", async () => {
    const db = await createTestDb();
    const start = new Date("2026-11-16T00:00:00Z");
    for (let i = 0; i < 4; i++) await authenticate(db, CURATOR, "wrong", start);
    expect(await authenticate(db, CURATOR, "wrong", new Date(start.getTime() + minutes(16)))).toEqual({ ok: false, reason: "invalid" });
    const [row] = await db.select().from(loginAttempts).where(eq(loginAttempts.email, CURATOR));
    expect(row?.failures).toBe(1);
  });

  it("동시에 온 실패도 모두 센다(읽고 쓰는 사이에 끼어들어 잠금을 피하지 못한다)", async () => {
    const db = await createTestDb();
    const repo = createLoginAttemptRepository(db);
    const now = new Date("2026-11-16T00:00:00Z");
    await Promise.all(Array.from({ length: 20 }, () => repo.recordFailure("someone@rizer.dev", now)));
    const [row] = await db.select().from(loginAttempts).where(eq(loginAttempts.email, "someone@rizer.dev"));
    expect(row?.failures).toBe(20);
    expect(await repo.lockedUntil("someone@rizer.dev", now)).toEqual(new Date(now.getTime() + minutes(15)));
  });

  it("게스트 계정은 몇 번을 틀려도 잠기지 않는다(비밀번호가 공개된 읽기 전용 계정)", async () => {
    const db = await createTestDb();
    const now = new Date("2026-11-16T00:00:00Z");
    for (let i = 0; i < 8; i++) expect(await authenticate(db, GUEST, "wrong", now)).toEqual({ ok: false, reason: "invalid" });
    const result = await authenticate(db, GUEST, TEST_PASSWORD, now);
    expect(result.ok && result.user.role).toBe("guest");
    expect(await db.select().from(loginAttempts)).toEqual([]);
  });

  it("없는 계정도 틀린 것으로 세고, 이메일 대소문자는 구분하지 않는다", async () => {
    const db = await createTestDb();
    const now = new Date("2026-11-16T00:00:00Z");
    for (let i = 0; i < 5; i++) await authenticate(db, " Nobody@Rizer.dev ", "wrong", now);
    expect(await authenticate(db, "nobody@rizer.dev", "wrong", now)).toEqual({ ok: false, reason: "locked" });
  });
});
