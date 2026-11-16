import { describe, expect, it } from "vitest";

import { createTestDb } from "@/db/testing";

import { localizeArtifact } from "./localize";
import { withMatchedNotes } from "./matched-notes";
import { toArtifactSummary } from "./public";
import { createArtifactRepository } from "./repository";

const storage = { publicUrl: (key: string) => `/files/${key}` };

async function search(q: string, locale?: "en") {
  const repo = createArtifactRepository(await createTestDb());
  const rows = await repo.list({ q, status: "published", alsoSlugs: undefined });
  const items = rows.map((row) => toArtifactSummary(row, storage)).map((item) => (locale ? localizeArtifact(item) : item));
  return withMatchedNotes(repo, items, q, locale);
}

describe("주석에서 맞은 검색 결과", () => {
  it("주석에서 맞은 유물에 그 주석의 투어 번호와 제목을 붙인다", async () => {
    const grail = (await search("덩굴")).find((item) => item.slug === "holy-grail");
    expect(grail?.matchedNote).toEqual({ number: 2, title: "포도 덩굴 속 인물" });
  });

  it("이름이 맞은 유물에는 붙이지 않는다", async () => {
    const excalibur = (await search("엑스칼리버")).find((item) => item.slug === "excalibur");
    expect(excalibur).toBeDefined();
    expect(excalibur).not.toHaveProperty("matchedNote");
  });

  it("영어판은 화면에 보일 번역 주석에서 찾는다", async () => {
    const repo = createArtifactRepository(await createTestDb());
    const grail = localizeArtifact(toArtifactSummary((await repo.getBySlug("holy-grail"))!, storage));
    const [item] = await withMatchedNotes(repo, [grail], "vine", "en");
    expect(item?.matchedNote?.number).toBe(2);
    expect(item?.matchedNote?.title).toMatch(/vine/i);
  });

  it("검색어가 없으면 그대로 둔다", async () => {
    const repo = createArtifactRepository(await createTestDb());
    const items = (await repo.list({ limit: 3 })).map((row) => toArtifactSummary(row, storage));
    expect(await withMatchedNotes(repo, items, undefined)).toBe(items);
  });
});
