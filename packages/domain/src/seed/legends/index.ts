import type { SeedArtifact } from "../catalog";
import { ASIA_EXTRA } from "./asia-extra";
import { ASIA_MORE } from "./asia-more";
import { CELTIC_ASIA } from "./celtic-asia";
import { EUROPE_EXTRA } from "./europe-extra";
import { EUROPE_MORE } from "./europe-more";
import { EUROPE_NORTH } from "./europe-north";
import { LEGEND_IMAGES } from "./images";
import { EXTRA_IMAGES } from "./images-extra";
import { MORE_IMAGES } from "./images-more";
import { MEDITERRANEAN } from "./mediterranean";
import { MEDITERRANEAN_EXTRA } from "./mediterranean-extra";
import { MEDITERRANEAN_MORE } from "./mediterranean-more";
import { MORE_LEGENDS } from "./more";

const IMAGES = { ...LEGEND_IMAGES, ...MORE_IMAGES, ...EXTRA_IMAGES };

/** 나무위키 「전설의 무기」·「전설의 도구」에서 더 고른 유물. 해설과 사진(대역)을 합쳐 시드 유물로 만든다. */
export const LEGEND_ARTIFACTS: SeedArtifact[] = [
  ...EUROPE_NORTH,
  ...MEDITERRANEAN,
  ...CELTIC_ASIA,
  ...MORE_LEGENDS,
  ...EUROPE_MORE,
  ...MEDITERRANEAN_MORE,
  ...ASIA_MORE,
  ...EUROPE_EXTRA,
  ...MEDITERRANEAN_EXTRA,
  ...ASIA_EXTRA,
].map((entry) => {
  const image = IMAGES[entry.slug];
  if (!image) throw new Error(`전설 유물 ${entry.slug}의 사진이 없습니다.`);
  return { ...entry, ...image, status: "published", featured: entry.featured ?? false };
});
