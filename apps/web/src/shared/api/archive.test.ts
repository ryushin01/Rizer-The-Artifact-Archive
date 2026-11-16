import { afterEach, describe, expect, it, vi } from "vitest";

import { fetchArtifact, fetchArtifacts, listUrl, toSearchParams } from "./archive";

afterEach(() => vi.unstubAllGlobals());

describe("toSearchParams", () => {
  it("기본값과 빈 값은 빼고 쿼리를 만든다", () => {
    expect(toSearchParams({ q: "검", gallery: "norse", sort: "featured" }).toString()).toBe("q=%EA%B2%80&gallery=norse");
    expect(toSearchParams({ sort: "oldest" }).toString()).toBe("sort=oldest");
  });
});

describe("listUrl", () => {
  it("브라우저는 공개 사이트의 검색 API(캐시를 거침)를, 서버는 관리 화면의 공개 API를 부른다", () => {
    expect(listUrl({ kind: "weapon", limit: 24, locale: "en" }, true)).toBe("/api/search?kind=weapon&limit=24&locale=en");
    expect(listUrl({ kind: "weapon" }, false)).toMatch(/^https?:\/\/[^/]+\/api\/public\/artifacts\?kind=weapon$/);
  });
});

describe("archive api", () => {
  it("브라우저에서 목록을 부른다", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ items: [], total: 0 })));
    vi.stubGlobal("fetch", fetchMock);
    await expect(fetchArtifacts({ kind: "weapon" })).resolves.toEqual({ items: [], total: 0 });
    expect(fetchMock.mock.calls[0]![0]).toBe("/api/search?kind=weapon");
  });

  it("받은 헤더를 지키며 JSON을 달라고 한다", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response("{}"));
    vi.stubGlobal("fetch", fetchMock);
    await fetchArtifact("excalibur", { headers: { authorization: "Bearer x" } }, "en", { preview: true });
    const [url, init] = fetchMock.mock.calls[0]! as [string, RequestInit];
    expect(url).toMatch(/\/api\/public\/artifacts\/excalibur\?locale=en&preview=1$/);
    const headers = new Headers(init.headers);
    expect(headers.get("authorization")).toBe("Bearer x");
    expect(headers.get("accept")).toBe("application/json");
  });

  it("없는 유물은 null, 다른 오류는 던진다", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("{}", { status: 404 })));
    await expect(fetchArtifact("nope")).resolves.toBeNull();
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("{}", { status: 500 })));
    await expect(fetchArtifact("x")).rejects.toThrow("500");
  });
});
