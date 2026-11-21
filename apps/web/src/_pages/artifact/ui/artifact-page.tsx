import type { Locale } from "@rizer/domain";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { TourSync } from "@/features/annotation-tour";
import { getArtifact, getArtifacts } from "@/shared/api/index.server";
import { siteUrl } from "@/shared/config";
import { localePath, MESSAGES } from "@/shared/i18n";
import { SnapshotNotice } from "@/shared/ui";

import { artifactStructuredData, jsonLdText } from "../model/structured-data";
import { ArtifactDossier } from "./artifact-dossier";
import { DeepZoomViewer } from "./deep-zoom-viewer";
import { PreviewBanner } from "./preview-banner";

import { ArtifactLayout, Offline, ViewerColumn } from "./artifact-layout";

type Props = { params: Promise<{ slug: string }> };
type LocaleProps = Props & { locale?: Locale };

/** 공개 유물을 모두 미리 그린다. 새로 공개한 유물은 요청 때 그리고 캐시한다. */
export async function generateStaticParams() {
  const { items } = await getArtifacts();
  return items.length ? items.map((a) => ({ slug: a.slug })) : [{ slug: "excalibur" }];
}

async function metadataFor({ params }: Props, locale: Locale): Promise<Metadata> {
  const { slug } = await params;
  const detail = await getArtifact(slug, locale);
  if (!detail) return { title: { absolute: MESSAGES[locale].notFound.pageTitle } };
  if (detail === "offline") return { title: MESSAGES[locale].meta.artifactFallback };
  const { artifact } = detail;
  return {
    // 초안 미리보기는 검색 엔진에 남기지 않는다.
    ...(detail.preview && { robots: { index: false, follow: false } }),
    title: artifact.title,
    description: `${artifact.summary} ${artifact.power}`,
    openGraph: {
      title: `${artifact.title} · Rizer Archive`,
      description: artifact.summary,
    },
    alternates: {
      canonical: localePath(locale, `/artifacts/${slug}`),
      languages: { ko: `/artifacts/${slug}`, en: `/en/artifacts/${slug}` },
    },
  };
}

export const generateMetadata = (props: Props) => metadataFor(props, "ko");
export const generateMetadataEn = (props: Props) => metadataFor(props, "en");

async function Content({ params, locale = "ko" }: LocaleProps) {
  const { slug } = await params;
  const detail = await getArtifact(slug, locale);
  if (detail === "offline") return <Offline />;
  if (!detail) notFound();
  const { artifact, annotations, related } = detail;
  return (
    <ArtifactLayout>
      <script
        type="application/ld+json"
        // 구조화 데이터는 JSON 문자열로 넣는다(큐레이터가 쓴 글의 <는 jsonLdText가 이스케이프한다).
        dangerouslySetInnerHTML={{ __html: jsonLdText(artifactStructuredData(artifact, locale, siteUrl())) }}
      />
      <TourSync key={artifact.id} ids={annotations.map((a) => a.id)} />
      <ViewerColumn>
        {artifact.image ? (
          <DeepZoomViewer
            key={artifact.image.dziUrl}
            title={artifact.title}
            image={artifact.image}
            imageAlt={artifact.imageAlt}
            annotations={annotations}
            transitionKey={artifact.slug}
          />
        ) : (
          <p>{MESSAGES[locale].artifact.preparing}</p>
        )}
      </ViewerColumn>
      <ArtifactDossier
        artifact={artifact}
        annotations={annotations}
        related={related}
        banner={
          detail.preview ? (
            <PreviewBanner
              exitTo={localePath(locale, artifact.status === "published" ? `/artifacts/${artifact.slug}` : "/artifacts")}
            />
          ) : (
            detail.offline && <SnapshotNotice />
          )
        }
      />
    </ArtifactLayout>
  );
}

export function ArtifactPage({ locale = "ko", ...props }: LocaleProps) {
  return (
    <main id="main" tabIndex={-1}>
      <Suspense fallback={<p style={{ padding: 40 }}>{MESSAGES[locale].artifact.loading}</p>}>
        <Content {...props} locale={locale} />
      </Suspense>
    </main>
  );
}

export const ArtifactPageEn = (props: Props) => <ArtifactPage {...props} locale="en" />;
