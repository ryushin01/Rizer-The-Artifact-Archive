import { describe, expect, it } from "vitest";

import { PREVIEW_TTL_MS, signPreview, verifyPreview } from "./preview";

describe("초안 미리보기 서명", () => {
  const now = 1_800_000_000_000;
  const exp = now + PREVIEW_TTL_MS;

  it("같은 비밀값·주소·만료 시각이면 맞다", async () => {
    expect(await verifyPreview("s3cret", "excalibur", exp, await signPreview("s3cret", "excalibur", exp), now)).toBe(true);
  });

  it("다른 주소·비밀값, 바꾼 만료 시각, 만료된 링크는 거절한다", async () => {
    const sig = await signPreview("s3cret", "excalibur", exp);
    expect(await verifyPreview("s3cret", "gram", exp, sig, now)).toBe(false);
    expect(await verifyPreview("other", "excalibur", exp, sig, now)).toBe(false);
    expect(await verifyPreview("s3cret", "excalibur", exp + 1, sig, now)).toBe(false);
    expect(await verifyPreview("s3cret", "excalibur", exp, sig, exp + 1)).toBe(false);
    expect(await verifyPreview("s3cret", "excalibur", exp, "short", now)).toBe(false);
    // 16진수가 아니거나 한 글자만 다른 서명도 거절한다(대소문자는 같은 값으로 본다).
    expect(await verifyPreview("s3cret", "excalibur", exp, `${sig.slice(0, -1)}z`, now)).toBe(false);
    const flipped = `${sig.slice(0, -1)}${sig.endsWith("0") ? "1" : "0"}`;
    expect(await verifyPreview("s3cret", "excalibur", exp, flipped, now)).toBe(false);
    expect(await verifyPreview("s3cret", "excalibur", exp, sig.toUpperCase(), now)).toBe(true);
  });

  it("너무 먼 만료 시각은 받지 않는다(서명을 오래 쓰지 못하게)", async () => {
    const far = now + PREVIEW_TTL_MS * 10;
    expect(await verifyPreview("s3cret", "excalibur", far, await signPreview("s3cret", "excalibur", far), now)).toBe(false);
  });
});
