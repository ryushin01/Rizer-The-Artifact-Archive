import { PUBLIC_API, type ArtifactDetailResponse, type ArtifactListResponse, type ArtifactQuery, type Locale } from "@rizer/domain";

import { apiBase } from "../config/env";

/** 공개 사이트의 검색 API. 브라우저의 검색(아카이브 사가)이 부른다(_app/api/search.ts). */
export const SEARCH_API = "/api/search";

/** 검색 조건을 주소 쿼리로. 기본값(정렬 featured)과 빈 값은 뺀다. */
export function toSearchParams(query: Partial<ArtifactQuery>): URLSearchParams {
  const params = new URLSearchParams();
  if (query.q) params.set("q", query.q);
  if (query.gallery) params.set("gallery", query.gallery);
  if (query.kind) params.set("kind", query.kind);
  if (query.sort && query.sort !== "featured") params.set("sort", query.sort);
  return params;
}

/** 목록을 부를 주소의 쿼리. 화면 주소(toSearchParams)에 더해 페이지 나누기와 언어를 넣는다. */
function listParams(query: Partial<ArtifactQuery>): string {
  // 페이지 나누기(limit·offset)는 API에만 보내고, 화면 주소(toSearchParams)에는 남기지 않는다.
  const params = toSearchParams(query);
  if (query.limit) params.set("limit", String(query.limit));
  if (query.offset) params.set("offset", String(query.offset));
  if (query.locale && query.locale !== "ko") params.set("locale", query.locale);
  const qs = params.toString();
  return qs ? `?${qs}` : "";
}

/**
 * 목록 주소. 브라우저는 공개 사이트의 검색 API(캐시를 거쳐 관리 화면을 부름)를, 서버는 관리 화면의 공개 API를 직접 부른다.
 * 브라우저가 관리 화면을 직접 부르지 않으므로 같은 검색이 DB까지 가지 않고 공개 사이트의 캐시에서 답한다.
 */
export function listUrl(query: Partial<ArtifactQuery>, inBrowser = typeof window !== "undefined"): string {
  return inBrowser ? `${SEARCH_API}${listParams(query)}` : `${apiBase()}${PUBLIC_API.artifacts}${listParams(query)}`;
}

class ArchiveApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
  }
}

async function getJson<T>(url: string, init?: RequestInit): Promise<T> {
  // 캐시는 호출하는 쪽('use cache' 함수, 사가)이 정한다. fetch 자체는 늘 원본을 읽는다.
  const headers = new Headers(init?.headers);
  headers.set("accept", "application/json");
  const res = await fetch(url, { cache: "no-store", ...init, headers });
  if (!res.ok) throw new ArchiveApiError(`아카이브 응답 ${res.status}`, res.status);
  return (await res.json()) as T;
}

/** 공개 유물 목록 */
export function fetchArtifacts(query: Partial<ArtifactQuery> = {}, init?: RequestInit) {
  return getJson<ArtifactListResponse>(listUrl(query), init);
}

/**
 * 공개 유물 하나(서버에서만 부른다). 없으면 null.
 * preview가 참이면 비공개 유물도 받는다(초안 미리보기). 관리 화면이 서버끼리의 비밀값을 확인하므로 init에 넣어 보낸다.
 */
export async function fetchArtifact(
  slug: string,
  init?: RequestInit,
  locale: Locale = "ko",
  { preview = false }: { preview?: boolean } = {},
): Promise<ArtifactDetailResponse | null> {
  const params = new URLSearchParams();
  if (locale !== "ko") params.set("locale", locale);
  if (preview) params.set("preview", "1");
  const qs = params.toString();
  try {
    return await getJson<ArtifactDetailResponse>(`${apiBase()}${PUBLIC_API.artifact(slug)}${qs ? `?${qs}` : ""}`, init);
  } catch (error) {
    if (error instanceof ArchiveApiError && error.status === 404) return null;
    throw error;
  }
}
