import type { Artifact } from "@rizer/domain";
import { describe, expect, it } from "vitest";

import { artifactStructuredData, jsonLdText } from "./structured-data";

const artifact = {
  slug: "excalibur",
  title: "엑스칼리버",
  titleOriginal: "Excalibur",
  summary: "호수의 여인이 준 검",
  power: "칼집을 지니면 피를 흘리지 않는다.",
  gallery: "arthurian",
  kind: "weapon",
  imageAlt: "십자형 코등이가 달린 긴 검",
  updatedAt: "2026-11-16T00:00:00.000Z",
  image: { previewUrl: "https://example.com/preview.webp" },
} as Artifact;

describe("유물 구조화 데이터", () => {
  it("이름·설명·사진과 이동 경로를 언어별 주소로 만든다", () => {
    const data = artifactStructuredData(artifact, "en", "https://rizer.test");
    const [work, crumbs] = data["@graph"] as unknown as [Record<string, unknown>, { itemListElement: { item: string }[] }];
    expect(work).toMatchObject({
      "@type": "CreativeWork",
      url: "https://rizer.test/en/artifacts/excalibur",
      name: "엑스칼리버",
      alternateName: "Excalibur",
      inLanguage: "en",
      image: { contentUrl: "https://example.com/preview.webp" },
    });
    expect(crumbs.itemListElement.map((c) => c.item)).toEqual([
      "https://rizer.test/en",
      "https://rizer.test/en/artifacts",
      "https://rizer.test/en/artifacts/excalibur",
    ]);
  });

  it("글 속의 </script>가 스크립트를 끝내지 못하게 한다", () => {
    const text = jsonLdText(artifactStructuredData({ ...artifact, summary: "</script><script>alert(1)</script>" }, "ko", "https://rizer.test"));
    expect(text).not.toContain("</script>");
    expect(JSON.parse(text)["@graph"][0].description).toBe("</script><script>alert(1)</script>");
  });
});
