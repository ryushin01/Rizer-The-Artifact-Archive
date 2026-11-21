/**
 * 관리 화면(어드민)이 꺼져 있거나 DB(Neon)에 닿지 않을 때 공개 사이트가 대신 보여 줄 사본을 만든다.
 * 시드를 넣은 어드민의 공개 API에서 공개 유물 목록과 상세(한국어·영어)를 모두 받아
 * src/shared/api/snapshot/archive-snapshot.json에 쓴다(상세의 관련 유물은 슬러그만). 이미지 주소는 공개 사이트의 정적 타일(/tiles/…)로 바꾼다.
 *
 * 쓰는 법: 시드 데이터로 어드민을 띄우고(예: PGLITE_DATA_DIR=memory:// pnpm dev:admin)
 *   pnpm --filter @rizer/web snapshot            # ADMIN_URL(기본 http://localhost:3000)
 * 시드 유물·해설을 바꾸면 다시 만든다.
 */
import { writeFile } from "node:fs/promises";

const ADMIN_URL = (process.env.ADMIN_URL ?? "http://localhost:3000").replace(/\/$/, "");
// 어드민이 공개 API의 요청 제한을 건너뛰게 하는 서버끼리의 비밀값(개발 값은 .env.development)
const SECRET = process.env.REVALIDATE_SECRET ?? "dev-revalidate-secret";
const OUT = new URL("../src/shared/api/snapshot/archive-snapshot.json", import.meta.url);

async function get(path: string): Promise<unknown> {
  const res = await fetch(`${ADMIN_URL}${path}`, {
    headers: { accept: "application/json", authorization: `Bearer ${SECRET}` },
  });
  if (!res.ok) throw new Error(`${path}: ${res.status}`);
  return res.json();
}

/** 정적 타일의 절대 주소(http://…/tiles/…)를 공개 사이트 기준 경로(/tiles/…)로 */
const localize = (value: unknown): unknown =>
  JSON.parse(JSON.stringify(value).replace(/"https?:\/\/[^"/]+\/tiles\//g, '"/tiles/'));

type List = { items: { slug: string }[]; total: number };
type Detail = { artifact: unknown; annotations: unknown[]; related: { slug: string }[] };

const snapshot: Record<string, { list: unknown[]; details: Record<string, unknown> }> = {};
for (const locale of ["ko", "en"] as const) {
  const suffix = locale === "ko" ? "" : `?locale=${locale}`;
  const list = (await get(`/api/public/artifacts${suffix}`)) as List;
  const details: Record<string, unknown> = {};
  for (const { slug } of list.items) {
    const detail = (await get(`/api/public/artifacts/${encodeURIComponent(slug)}${suffix}`)) as Detail;
    // 같은 전시실의 다른 유물은 목록에 있으므로 슬러그만 남긴다(사본 크기를 절반 넘게 줄임).
    details[slug] = localize({ ...detail, related: detail.related.map((r) => r.slug) });
  }
  snapshot[locale] = { list: localize(list.items) as unknown[], details };
  console.log(`${locale}: 유물 ${list.items.length}점`);
}

await writeFile(OUT, `${JSON.stringify(snapshot)}\n`);
console.log(`사본을 썼습니다: ${OUT.pathname}`);
