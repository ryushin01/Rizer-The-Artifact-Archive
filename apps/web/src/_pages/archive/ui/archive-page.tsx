import { type ArtifactQuery, type Locale, parseArtifactQuery } from "@rizer/domain";
import type { Metadata } from "next";
import { Suspense } from "react";

import { ARCHIVE_PAGE_SIZE, ArchiveFilters, ArchiveHydrator } from "@/features/filter-archive";
import { getArtifacts } from "@/shared/api/index.server";
import { MESSAGES } from "@/shared/i18n";
import { Container } from "@/shared/ui";
import { ArchiveGrid } from "./archive-grid";

import { ArchiveHeader } from "./archive-header";
import { ArchiveLayout } from "./archive-layout";

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

const alternates = { languages: { ko: "/artifacts", en: "/en/artifacts" } };
export const metadata: Metadata = { title: MESSAGES.ko.meta.archiveTitle, description: MESSAGES.ko.meta.archiveDescription, alternates };
export const metadataEn: Metadata = { title: MESSAGES.en.meta.archiveTitle, description: MESSAGES.en.meta.archiveDescription, alternates };

const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

/** 화면 주소의 조건(검색어·전시실·종류·정렬). 잘못된 값만 버리고 나머지는 지킨다. */
function parseQuery(params: Record<string, string | string[] | undefined>): ArtifactQuery {
  return parseArtifactQuery(Object.fromEntries(["q", "gallery", "kind", "sort"].map((k) => [k, one(params[k])])));
}

async function Results({ searchParams, locale }: Props & { locale: Locale }) {
  const parsed = parseQuery(await searchParams);
  const query: ArtifactQuery = locale === "ko" ? parsed : { ...parsed, locale };
  const { items, total, offline } = await getArtifacts({ ...query, limit: ARCHIVE_PAGE_SIZE });
  return (
    <>
      <ArchiveHydrator
        key={JSON.stringify(query)}
        query={query}
        items={items}
        total={total}
        error={offline ? MESSAGES[locale].archive.loadError : undefined}
      />
      <ArchiveFilters key={`f-${JSON.stringify(query)}`} />
      <ArchiveGrid />
    </>
  );
}

export function ArchivePage({ searchParams, locale = "ko" }: Props & { locale?: Locale }) {
  return (
    <main id="main" tabIndex={-1}>
      <Container>
        <ArchiveHeader />
        <ArchiveLayout>
          <Suspense fallback={<p>{MESSAGES[locale].archive.loading}</p>}>
            <Results searchParams={searchParams} locale={locale} />
          </Suspense>
        </ArchiveLayout>
      </Container>
    </main>
  );
}

export const ArchivePageEn = (props: Props) => <ArchivePage {...props} locale="en" />;
