import { describe, expect, it } from "vitest";

import { clientIp, createRateLimiter } from "./rate-limit";

describe("요청 제한", () => {
  it("창 안에서 한도를 넘으면 거절하고, 다음 창에서 다시 받는다", () => {
    const limiter = createRateLimiter({ limit: 3, windowMs: 60_000 });
    for (let i = 0; i < 3; i++) expect(limiter.hit("1.2.3.4", 0).ok).toBe(true);
    expect(limiter.hit("1.2.3.4", 1_000)).toEqual({ ok: false, retryAfter: 59 });
    // 다른 IP는 따로 센다.
    expect(limiter.hit("5.6.7.8", 1_000).ok).toBe(true);
    expect(limiter.hit("1.2.3.4", 60_000).ok).toBe(true);
  });

  it("열쇠가 maxKeys를 넘지 않게 지난 창과 오래된 열쇠를 지운다", () => {
    const limiter = createRateLimiter({ limit: 1, windowMs: 1_000, maxKeys: 3 });
    for (let i = 0; i < 10; i++) limiter.hit(`ip-${i}`, i * 10);
    expect(limiter.size).toBeLessThanOrEqual(3);
  });

  it("IP는 x-forwarded-for의 첫 값, 없으면 x-real-ip, 그것도 없으면 한 묶음", () => {
    expect(clientIp({ headers: new Headers({ "x-forwarded-for": "203.0.113.7, 10.0.0.1" }) })).toBe("203.0.113.7");
    expect(clientIp({ headers: new Headers({ "x-real-ip": "198.51.100.2" }) })).toBe("198.51.100.2");
    expect(clientIp({ headers: new Headers() })).toBe("unknown");
  });
});
