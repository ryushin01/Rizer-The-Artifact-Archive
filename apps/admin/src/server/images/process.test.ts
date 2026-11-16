import { PixelLimitError } from "@rizer/tiles";
import { describe, expect, it } from "vitest";

import { imageErrorMessage, UnreadableImageError } from "./process";

describe("타일 생성 실패 안내", () => {
  it("너무 큰 원본은 CLI로 자르라고 안내한다", () => {
    expect(imageErrorMessage(new PixelLimitError(300_000_000, 268_402_689))).toMatch(/pnpm tiles/);
  });

  it("해독하지 못한 원본은 손상된 이미지인지 확인하라고 안내한다", () => {
    expect(imageErrorMessage(new UnreadableImageError(new Error("unsupported image format")))).toMatch(/손상되지 않은 이미지/);
  });

  it("스토리지·파일 시스템 오류는 이미지 탓으로 안내하지 않는다", () => {
    expect(imageErrorMessage(new Error("BlobServiceNotAvailable"))).toBeNull();
    expect(imageErrorMessage(undefined)).toBeNull();
  });
});
