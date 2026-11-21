import "server-only";

import { CACHE_TAGS, type ArtifactDetailResponse, type ArtifactListResponse, type ArtifactQuery, type Locale } from "@rizer/domain";
import { cacheLife, cacheTag } from "next/cache";
import { draftMode } from "next/headers";

import { fetchArtifact, fetchArtifacts } from "./archive";
import { snapshotDetail, snapshotList } from "./snapshot";

/**
 * 관리 화면이 공개 사이트의 서버로 알아보는 비밀값(두 앱이 함께 가진 REVALIDATE_SECRET).
 * 이 요청은 공개 API의 요청 제한을 받지 않고, 초안 미리보기로 비공개 유물도 읽는다. 서버에서만 쓴다.
 */
function serverInit(): RequestInit {
  const secret = process.env.REVALIDATE_SECRET;
  // 관리 화면이 답하지 않으면 오래 기다리지 않고 저장해 둔 사본으로 넘어간다.
  const signal = AbortSignal.timeout(ARCHIVE_TIMEOUT_MS);
  return secret ? { headers: { authorization: `Bearer ${secret}` }, signal } : { signal };
}

/** 관리 화면(공개 API)을 기다리는 시간 */
const ARCHIVE_TIMEOUT_MS = 8000;

/**
 * 서버에서 읽는 공개 API. 결과를 캐시해 두고, 어드민이 바꾸면 /api/revalidate로 태그를 비운다.
 * 어드민에 닿지 못하면(꺼져 있음, DB 끊김, 시간 초과) 저장해 둔 사본(snapshot.ts)으로 답하고 offline을 붙인다.
 * 이때는 짧게만 캐시해, 다음 요청에서 다시 시도한다.
 */
export async function getArtifacts(query: Partial<ArtifactQuery> = {}): Promise<ArtifactListResponse & { offline?: boolean }> {
  "use cache";
  cacheTag(CACHE_TAGS.artifacts);
  try {
    const result = await fetchArtifacts(query, serverInit());
    cacheLife("days");
    return result;
  } catch (error) {
    console.warn("[archive] 공개 API에 닿지 못했습니다:", error instanceof Error ? error.message : error);
    cacheLife("seconds");
    return { ...(await snapshotList(query)), offline: true };
  }
}

/**
 * 초안 미리보기로 읽은 유물이면 preview가 참이다(화면이 안내를 띄우고 검색 엔진에서 뺀다).
 * 어드민에 닿지 못해 저장해 둔 사본으로 읽었으면 offline이 참이다(화면이 안내를 띄운다).
 */
export type ArtifactDetail = ArtifactDetailResponse & { preview?: boolean; offline?: boolean };

/**
 * 유물 하나. 없으면 null. 어드민에 닿지 못하면 저장해 둔 사본으로 답하고, 사본에도 없으면 "offline"
 * (둘 다 404로 굳지 않게 짧게만 캐시한다).
 * 초안 모드(관리 화면의 "공개 사이트에서 미리 보기")면 Next.js가 이 캐시를 건너뛰고, 비공개 유물도 읽는다.
 */
export async function getArtifact(slug: string, locale: Locale = "ko"): Promise<ArtifactDetail | null | "offline"> {
  "use cache";
  cacheTag(CACHE_TAGS.artifacts, CACHE_TAGS.artifact(slug));
  const { isEnabled: preview } = await draftMode();
  try {
    const result = await fetchArtifact(slug, serverInit(), locale, { preview });
    cacheLife("days");
    return result && preview ? { ...result, preview: true } : result;
  } catch (error) {
    console.warn(`[archive] ${slug}을(를) 불러오지 못했습니다:`, error instanceof Error ? error.message : error);
    cacheLife("seconds");
    const copy = await snapshotDetail(slug, locale);
    return copy ? { ...copy, offline: true } : "offline";
  }
}
