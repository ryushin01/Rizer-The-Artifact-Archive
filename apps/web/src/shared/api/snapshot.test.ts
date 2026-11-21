// @vitest-environment node
import { existsSync } from "node:fs";
import { join } from "node:path";

import { beforeAll, describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));

const { snapshotDetail, snapshotList } = await import("./snapshot");

const PUBLIC_DIR = join(import.meta.dirname, "../../../public");

describe("저장해 둔 공개 유물 사본", () => {
  // 처음 한 번 사본(약 2.9MB)을 읽고 검증한다.
  beforeAll(() => snapshotList({ limit: 1 }), 60_000);

  it("관리 화면이 꺼져도 공개 유물 300점을 한국어·영어로 보여 줄 수 있다", async () => {
    expect((await snapshotList()).total).toBe(300);
    const en = await snapshotList({ locale: "en", limit: 3 });
    expect(en.total).toBe(300);
    expect(en.items).toHaveLength(3);
    expect(en.items[0]!.title).not.toBe((await snapshotList({ limit: 1 })).items[0]!.title);
  });

  it("전시실·종류로 거르고, 나눠 받아도 순서가 이어진다", async () => {
    const all = await snapshotList({ gallery: "arthurian" });
    expect(all.total).toBeGreaterThan(0);
    expect(all.items.every((a) => a.gallery === "arthurian")).toBe(true);
    const first = await snapshotList({ gallery: "arthurian", limit: 2 });
    const next = await snapshotList({ gallery: "arthurian", limit: 2, offset: 2 });
    expect([...first.items, ...next.items].map((a) => a.slug)).toEqual(all.items.slice(0, 4).map((a) => a.slug));
  });

  it("검색은 이름이 맞은 유물을 먼저 보여 준다", async () => {
    const { items } = await snapshotList({ q: "엑스칼리버" });
    expect(items[0]!.slug).toBe("excalibur");
  });

  it("오래된 순은 첫 기록 연도로 정렬한다", async () => {
    const { items } = await snapshotList({ sort: "oldest" });
    const years = items.map((a) => a.recordYear);
    expect(years).toEqual([...years].sort((a, b) => a - b));
  });

  it("상세는 주석과 같은 전시실의 유물을 담고, 사진은 이 사이트의 정적 타일을 가리킨다", async () => {
    const detail = await snapshotDetail("excalibur");
    expect(detail).not.toBeNull();
    expect(detail!.annotations.length).toBeGreaterThan(0);
    expect(detail!.related.length).toBeGreaterThan(0);
    expect(detail!.related.every((a) => a.gallery === detail!.artifact.gallery)).toBe(true);
    const image = detail!.artifact.image!;
    for (const url of [image.dziUrl, image.previewUrl, image.thumbUrl]) {
      expect(url).toMatch(/^\/tiles\//);
      expect(existsSync(join(PUBLIC_DIR, url!))).toBe(true);
    }
    expect(await snapshotDetail("no-such-artifact")).toBeNull();
  });
});
