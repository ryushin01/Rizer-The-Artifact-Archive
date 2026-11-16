import type { MetadataRoute } from "next";
import { connection } from "next/server";

import { getArtifacts } from "@/shared/api/index.server";
import { siteUrl } from "@/shared/config";

/** 요청 때 만든다. 빌드 중에는 어드민 API가 꺼져 있을 수 있다(목록 자체는 캐시된 함수가 읽는다). */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connection();
  const base = siteUrl();
  const { items } = await getArtifacts();
  // 한국어판과 영어판은 서로의 다른 언어 주소다(hreflang). 페이지 메타데이터의 alternates와 같다.
  const languages = (path: string) => ({ alternates: { languages: { ko: `${base}${path}`, en: `${base}${path === "/" ? "/en" : `/en${path}`}` } } });
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1, ...languages("/") },
    { url: `${base}/artifacts`, changeFrequency: "weekly", priority: 0.8, ...languages("/artifacts") },
    ...items.map((a) => ({ url: `${base}/artifacts/${a.slug}`, lastModified: a.updatedAt, priority: 0.6, ...languages(`/artifacts/${a.slug}`) })),
    { url: `${base}/en`, changeFrequency: "monthly", priority: 0.9, ...languages("/") },
    { url: `${base}/en/artifacts`, changeFrequency: "weekly", priority: 0.7, ...languages("/artifacts") },
    ...items.map((a) => ({ url: `${base}/en/artifacts/${a.slug}`, lastModified: a.updatedAt, priority: 0.5, ...languages(`/artifacts/${a.slug}`) })),
  ];
}
