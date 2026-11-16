import { galleryName, kindName, type Artifact, type Locale } from "@rizer/domain";

import { localePath, MESSAGES } from "@/shared/i18n";

/**
 * 유물 화면의 구조화 데이터(JSON-LD, schema.org). 검색 엔진이 유물 이름·설명·사진·언어와 화면의 위치(이동 경로)를 읽는다.
 * 화면에는 보이지 않는다.
 */
export function artifactStructuredData(artifact: Artifact, locale: Locale, site: string) {
  const url = `${site}${localePath(locale, `/artifacts/${artifact.slug}`)}`;
  const t = MESSAGES[locale];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": url,
        url,
        name: artifact.title,
        ...(artifact.titleOriginal && artifact.titleOriginal !== artifact.title && { alternateName: artifact.titleOriginal }),
        description: artifact.summary,
        abstract: artifact.power,
        inLanguage: artifact.contentLang ?? locale,
        dateModified: artifact.updatedAt,
        keywords: [galleryName(artifact.gallery, locale), kindName(artifact.kind, locale)].join(", "),
        ...(artifact.image && { image: { "@type": "ImageObject", contentUrl: artifact.image.previewUrl, caption: artifact.imageAlt } }),
        isPartOf: { "@type": "WebSite", name: "Rizer Archive", url: `${site}${localePath(locale, "/")}` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Rizer Archive", item: `${site}${localePath(locale, "/")}` },
          { "@type": "ListItem", position: 2, name: t.meta.archiveTitle, item: `${site}${localePath(locale, "/artifacts")}` },
          { "@type": "ListItem", position: 3, name: artifact.title, item: url },
        ],
      },
    ],
  };
}

/**
 * <script type="application/ld+json">에 넣을 문자열. 큐레이터가 쓴 글에 "</script>"가 들어 있어도 스크립트가
 * 끝나지 않도록 <를 이스케이프한다.
 */
export const jsonLdText = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
