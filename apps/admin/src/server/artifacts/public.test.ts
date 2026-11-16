import { describe, expect, it } from "vitest";

import { createTestDb } from "@/db/testing";
import type { StoredImage } from "@/entities/artifact";

import { toArtifactSummary } from "./public";
import { createArtifactRepository } from "./repository";

const storage = { publicUrl: (key: string) => `https://cdn.test/${key}` };
const base: StoredImage = {
  dziKey: "artifacts/art_x/v1/image.dzi",
  previewKey: "artifacts/art_x/v1/preview.webp",
  originalKey: "artifacts/art_x/original.jpg",
  width: 100,
  height: 200,
  lqip: "data:image/webp;base64,AA",
  dominantColor: "#000000",
  tileCount: 1,
  version: "1",
};

async function summaryWith(image: StoredImage) {
  const db = await createTestDb();
  const repo = createArtifactRepository(db);
  const row = (await repo.getBySlug("excalibur"))!;
  return toArtifactSummary({ ...row, image }, storage);
}

describe("공개 API의 이미지 주소", () => {
  it("썸네일 키가 있으면 썸네일 주소를 준다", async () => {
    const summary = await summaryWith({ ...base, thumbKey: "artifacts/art_x/v1/thumb.webp" });
    expect(summary.image?.thumbUrl).toBe("https://cdn.test/artifacts/art_x/v1/thumb.webp");
    expect(summary.image?.previewUrl).toBe("https://cdn.test/artifacts/art_x/v1/preview.webp");
  });

  it("정적 시드 타일은 키가 없어도 미리보기 옆의 썸네일을 쓴다", async () => {
    const summary = await summaryWith({
      ...base,
      dziKey: "tiles/art_x/v1/image.dzi",
      previewKey: "tiles/art_x/v1/preview.webp",
    });
    expect(summary.image?.thumbUrl).toBe("https://cdn.test/tiles/art_x/v1/thumb.webp");
  });

  it("썸네일이 없던 때 올린 이미지는 썸네일 주소를 주지 않는다(카드는 미리보기를 쓴다)", async () => {
    const summary = await summaryWith(base);
    expect(summary.image).not.toHaveProperty("thumbUrl");
  });
});
