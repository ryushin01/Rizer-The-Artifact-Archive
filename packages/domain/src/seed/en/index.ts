import { EN_ASIA_MORE } from "./asia-more";
import { EN_CELTIC_ASIA } from "./celtic-asia";
import { EN_EUROPE_MORE } from "./europe-more";
import { EN_EUROPE_NORTH } from "./europe-north";
import { EN_FEATURED } from "./featured";
import { EN_MEDITERRANEAN, EN_MORE } from "./mediterranean";
import { EN_MEDITERRANEAN_MORE } from "./mediterranean-more";
import type { EnArtifact } from "./types";

export type { EnArtifact } from "./types";

/** 시드 유물의 영어 번역. 공개 API가 locale=en일 때 덮어쓴다. */
export const SEED_EN: Record<string, EnArtifact> = {
  ...EN_FEATURED,
  ...EN_EUROPE_NORTH,
  ...EN_MEDITERRANEAN,
  ...EN_CELTIC_ASIA,
  ...EN_MORE,
  ...EN_EUROPE_MORE,
  ...EN_MEDITERRANEAN_MORE,
  ...EN_ASIA_MORE,
};
