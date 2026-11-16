import { PixelLimitError } from "@rizer/tiles";
import { describe, expect, it } from "vitest";

import { tilingErrorMessage } from "./process";

describe("타일 생성 실패 안내", () => {
  it("너무 큰 원본은 CLI로 자르라고 안내한다", () => {
    expect(tilingErrorMessage(new PixelLimitError(300_000_000, 268_402_689))).toMatch(/pnpm tiles/);
  });

  it("그 밖의 실패는 손상된 이미지인지 확인하라고 안내한다", () => {
    expect(tilingErrorMessage(new Error("Input buffer contains unsupported image format"))).toMatch(/손상되지 않은 이미지/);
  });
});
