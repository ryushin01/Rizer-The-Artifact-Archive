import type { Artifact, ArtifactSummary } from "@rizer/domain";
import { SEED_ARTIFACTS } from "@rizer/domain/seed";

/** 스토리·테스트용 사진. 네트워크 없이 그리도록 색 칸 SVG를 쓴다. */
const swatch = (hue: number) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500"><rect width="400" height="500" fill="hsl(${hue} 30% 40%)"/></svg>`,
  )}`;

/** 시드 유물로 만든 스토리용 유물(이미지는 색 칸). */
export function makeArtifactFixture(index: number, overrides: Partial<Artifact> = {}): Artifact {
  const seed = SEED_ARTIFACTS[index % SEED_ARTIFACTS.length]!;
  const url = swatch(index * 47);
  return {
    ...seed,
    id: `art_fixture_${index}`,
    image: { dziUrl: "/fixture.dzi", previewUrl: url, thumbUrl: url, width: 2000, height: 2500, lqip: url, dominantColor: "#2a2420" },
    annotationCount: (index % 5) + 1,
    updatedAt: "2026-11-16T00:00:00.000Z",
    ...overrides,
  };
}

/** 목록용 요약(해설·출처 제외) */
export function makeSummaryFixture(index: number, overrides: Partial<ArtifactSummary> = {}): ArtifactSummary {
  const { story: _story, source: _source, ...summary } = makeArtifactFixture(index);
  return { ...summary, ...overrides };
}
