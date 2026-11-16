import type { ArtifactSummary, Locale } from "@rizer/domain";

import { localizeAnnotations } from "./localize";
import { toAnnotation } from "./public";
import type { ArtifactRepository } from "./repository";

/**
 * 검색어가 이름이 아니라 주석에서 맞은 유물에 그 주석(투어 번호·제목)을 붙인다. 카드가 그 주석으로 바로 연다(?note=N).
 * 이름이 맞은 유물은 유물 화면 첫 모습이 곧 답이라 붙이지 않는다. 영어판은 화면에 보일 번역 주석에서 찾는다.
 */
export async function withMatchedNotes(r: ArtifactRepository, items: ArtifactSummary[], q: string | undefined, locale?: Locale) {
  if (!q || !items.length) return items;
  const needle = q.toLowerCase();
  const has = (text: string) => text.toLowerCase().includes(needle);
  const notes = await r.annotationsOf(items.map((item) => item.id));
  return items.map((item) => {
    if (has(item.title) || has(item.titleOriginal)) return item;
    const list = (notes.get(item.id) ?? []).map(toAnnotation);
    const shown = locale === "en" ? localizeAnnotations(item.slug, list) : list;
    const index = shown.findIndex((a) => has(a.title) || has(a.body));
    return index < 0 ? item : { ...item, matchedNote: { number: index + 1, title: shown[index]!.title } };
  });
}
