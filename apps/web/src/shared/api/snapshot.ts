import "server-only";

import {
  type ArtifactDetailResponse,
  type ArtifactListResponse,
  type ArtifactQuery,
  type ArtifactSummary,
  artifactDetailResponseSchema,
  artifactSchema,
  artifactSummarySchema,
  type Locale,
} from "@rizer/domain";

/**
 * 관리 화면(공개 API)이 꺼졌거나 DB에 닿지 않을 때 대신 보여 줄 공개 유물 사본(시드 300점, 한국어·영어).
 * `pnpm --filter @rizer/web snapshot`이 만든 snapshot/archive-snapshot.json을 처음 쓸 때만 읽는다(약 2.9MB, 서버에서만).
 * 이미지는 이 사이트의 정적 타일(/tiles/…)을 가리키므로 외부 연결 없이 모두 보인다.
 */
// 상세의 관련 유물은 사본 크기를 줄이려고 슬러그만 담았다.
const detailSchema = artifactDetailResponseSchema.extend({ related: artifactSchema.shape.slug.array() });
type SnapshotDetail = ReturnType<typeof detailSchema.parse>;
type LocaleSnapshot = { list: ArtifactSummary[]; details: Map<string, SnapshotDetail> };

let loaded: Promise<Record<Locale, LocaleSnapshot>> | undefined;

function load(): Promise<Record<Locale, LocaleSnapshot>> {
  loaded ??= import("./snapshot/archive-snapshot.json").then(({ default: raw }) => {
    const read = (locale: Locale): LocaleSnapshot => ({
      list: artifactSummarySchema.array().parse(raw[locale].list),
      details: new Map(Object.entries(raw[locale].details).map(([slug, detail]) => [slug, detailSchema.parse(detail)])),
    });
    return { ko: read("ko"), en: read("en") };
  });
  return loaded;
}

const contains = (value: string, q: string) => value.toLocaleLowerCase().includes(q);

/** 관리 화면의 검색과 같은 순서: 이름·원어가 맞은 유물, 소유자·요약이 맞은 유물, 나머지 */
function relevance(item: ArtifactSummary, q: string): number {
  if (contains(item.title, q) || contains(item.titleOriginal, q)) return 0;
  if (contains(item.owner, q) || contains(item.summary, q)) return 1;
  return 2;
}

const ORDER: Record<ArtifactQuery["sort"], (a: ArtifactSummary, b: ArtifactSummary) => number> = {
  // 사본의 목록은 관리 화면의 기본 순서(추천)대로 저장되어 있다.
  featured: () => 0,
  oldest: (a, b) => a.recordYear - b.recordYear || a.title.localeCompare(b.title),
  newest: (a, b) => b.recordYear - a.recordYear || a.title.localeCompare(b.title),
  title: (a, b) => a.title.localeCompare(b.title),
};

/** 사본에서 공개 유물 목록. 검색은 이름·원어·소유자·요약·본문·주석에서 찾는다. */
export async function snapshotList(query: Partial<ArtifactQuery> = {}): Promise<ArtifactListResponse> {
  const { list, details } = (await load())[query.locale ?? "ko"];
  const q = query.q?.toLocaleLowerCase();
  const matches = (item: ArtifactSummary) => {
    if (query.gallery && item.gallery !== query.gallery) return false;
    if (query.kind && item.kind !== query.kind) return false;
    if (!q) return true;
    const detail = details.get(item.slug);
    return (
      relevance(item, q) < 2 ||
      (detail !== undefined &&
        (contains(detail.artifact.story, q) || detail.annotations.some((a) => contains(a.title, q) || contains(a.body, q))))
    );
  };
  const order = ORDER[query.sort ?? "featured"];
  const sorted = list
    .filter(matches)
    .map((item, index) => ({ item, index }))
    .sort((a, b) => (q ? relevance(a.item, q) - relevance(b.item, q) : 0) || order(a.item, b.item) || a.index - b.index)
    .map(({ item }) => item);
  const offset = query.offset ?? 0;
  return { items: query.limit ? sorted.slice(offset, offset + query.limit) : sorted.slice(offset), total: sorted.length };
}

/** 사본에서 공개 유물 하나. 사본에 없으면 null. */
export async function snapshotDetail(slug: string, locale: Locale = "ko"): Promise<ArtifactDetailResponse | null> {
  const { list, details } = (await load())[locale];
  const detail = details.get(slug);
  if (!detail) return null;
  return {
    artifact: detail.artifact,
    annotations: detail.annotations,
    related: detail.related.flatMap((s) => list.filter((item) => item.slug === s)),
  };
}
