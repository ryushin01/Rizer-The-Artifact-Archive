import { expect, type Page, test } from "@playwright/test";

import { ADMIN_URL, OFFLINE_WEB_URL } from "./env";
import { expectNoA11yViolations, skipGate } from "./helpers";

/**
 * 포트폴리오라 외부 서비스가 끊겨도 전시실·관리 화면이 내용과 함께 보여야 한다.
 * localhost 밖으로 나가는 요청(글꼴 CDN, 오류 수집 등)을 모두 막고, 그런 요청이 아예 없는지 본다.
 */
const LOCAL = ["localhost", "127.0.0.1"];

async function blockExternal(page: Page): Promise<string[]> {
  const external: string[] = [];
  await page.context().route(
    (url) => !LOCAL.includes(url.hostname),
    async (route) => {
      external.push(route.request().url());
      await route.abort("internetdisconnected");
    },
  );
  return external;
}

test.describe("외부 요청을 모두 막은 상태", () => {
  test("전시실 첫 화면·아카이브·유물 화면이 내용과 함께 열리고 접근성 위반이 없다", async ({ page }) => {
    const external = await blockExternal(page);
    await skipGate(page);
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "먼저 만나는 대표 유물" })).toBeVisible();
    await expectNoA11yViolations(page);
    await page.goto("/artifacts");
    await expect(page.getByRole("link", { name: /엑스칼리버/ }).first()).toBeVisible();
    await expectNoA11yViolations(page);
    await page.goto("/artifacts/excalibur");
    await expect(page.getByRole("heading", { level: 1, name: "엑스칼리버" })).toBeVisible();
    await expect(page.locator(".rz-marker").first()).toBeVisible();
    await expectNoA11yViolations(page);
    expect(external).toEqual([]);
  });

  test("관리 화면에 게스트로 들어가 대시보드와 유물 목록을 본다", async ({ page }) => {
    const external = await blockExternal(page);
    await page.goto(`${ADMIN_URL}/login`);
    await page.getByRole("button", { name: "게스트로 둘러보기" }).click();
    await expect(page.getByRole("heading", { name: /게스트님, 반갑습니다/ })).toBeVisible();
    await expectNoA11yViolations(page);
    await page.goto(`${ADMIN_URL}/artifacts`);
    await expect(page.getByRole("link", { name: /엑스칼리버/ }).first()).toBeVisible();
    await expectNoA11yViolations(page);
    expect(external).toEqual([]);
  });
});

test.describe("관리 화면(공개 API·DB)이 꺼졌을 때", () => {
  test.use({ baseURL: OFFLINE_WEB_URL });

  test("저장해 둔 사본으로 아카이브와 유물을 보여 주고 상태 안내를 띄운다", async ({ page }) => {
    const external = await blockExternal(page);
    await skipGate(page);
    // 주소에 조건이 있는 목록은 요청 때 그리므로 관리 화면에 묻고, 닿지 못해 사본으로 답한다.
    await page.goto("/artifacts?gallery=arthurian");
    await expect(page.getByRole("status").filter({ hasText: "저장해 둔 사본" })).toBeVisible();
    await expect(page.getByRole("link", { name: /엑스칼리버/ }).first()).toBeVisible();
    await expectNoA11yViolations(page);
    // 브라우저 검색도 사본에서 찾는다.
    const search = await page.request.get("/api/search?q=%EC%97%91%EC%8A%A4%EC%B9%BC%EB%A6%AC%EB%B2%84");
    expect(search.ok()).toBe(true);
    expect(search.headers()["x-archive-snapshot"]).toBe("1");
    expect(((await search.json()) as { items: { slug: string }[] }).items[0]?.slug).toBe("excalibur");
    expect(external).toEqual([]);
  });
});
