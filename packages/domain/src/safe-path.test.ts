import { describe, expect, it } from "vitest";

import { safeLocalPath } from "./safe-path";

describe("safeLocalPath", () => {
  it("같은 사이트의 경로는 쿼리·해시까지 그대로 받는다", () => {
    expect(safeLocalPath("/artifacts?q=%ED%86%A0%EB%A5%B4#note-2")).toBe("/artifacts?q=%ED%86%A0%EB%A5%B4#note-2");
    expect(safeLocalPath("/en/artifacts/excalibur")).toBe("/en/artifacts/excalibur");
  });

  it("다른 사이트로 읽히는 값은 fallback으로 바꾼다", () => {
    for (const value of [
      "/\\evil.com",
      "/\\/evil.com",
      "//evil.com",
      "/\t/evil.com",
      "https://evil.com",
      "evil.com",
      "",
      "javascript:alert(1)",
      // 해석하면 경로가 "//evil.com"이 된다(다시 해석하면 다른 사이트).
      "/a/..//evil.com",
      "/./\\evil.com",
      "/%2e%2e//evil.com",
      "/a/../\\evil.com",
    ]) {
      expect(safeLocalPath(value), value).toBe("/");
    }
    expect(safeLocalPath(undefined, "/artifacts")).toBe("/artifacts");
    expect(safeLocalPath(["/a"])).toBe("/");
  });
});
