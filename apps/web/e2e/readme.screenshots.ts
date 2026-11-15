import { expect, type Page, test } from "@playwright/test";

import { ADMIN_URL } from "./env";
import { loginAsCurator, skipGate } from "./helpers";

/**
 * README 화면 촬영 (pnpm --dir apps/web screenshots). 결과: 저장소 루트의 docs/images/*.jpg
 * 먼저 유물 이미지를 받아 둡니다(pnpm seed:images, Open Access CC0 소장품). 어드민은 새 메모리 DB(시드)로 뜹니다.
 * 평소 E2E에는 들어가지 않습니다(SCREENSHOTS=1일 때만 프로젝트가 생김).
 */
const OUT = "../../docs/images";

test.describe.configure({ mode: "serial" });

async function shoot(page: Page, name: string, wait = 1500) {
  await page.waitForLoadState("networkidle", { timeout: 10_000 }).catch(() => {});
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(wait);
  await page.screenshot({ path: `${OUT}/${name}.jpg`, type: "jpeg", quality: 82 });
}

/** 이 글자가 쓰인 가장 큰 제목이 화면 위쪽 ratio 높이에 오게 합니다. */
async function scrollToHeading(page: Page, text: string, ratio = 0.08) {
  await page.evaluate(
    ([label, at]) => {
      const heading = [...document.querySelectorAll("h1, h2, h3")]
        .filter((el) => el.textContent?.includes(label as string))
        .sort((a, b) => parseFloat(getComputedStyle(b).fontSize) - parseFloat(getComputedStyle(a).fontSize))[0];
      if (!heading) throw new Error(`${label} 제목을 찾지 못했습니다.`);
      window.scrollTo({
        top: heading.getBoundingClientRect().top + window.scrollY - window.innerHeight * (at as number),
        behavior: "instant",
      });
    },
    [text, ratio] as const,
  );
  await page.waitForTimeout(1800);
}

test.describe("공개 사이트", () => {
  test.use({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });

  test("입장 화면", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(2500);
    await shoot(page, "web-gate");
  });

  test("홈 구역", async ({ page }) => {
    test.setTimeout(120_000);
    await skipGate(page);
    await page.goto("/");
    await page.waitForTimeout(3000);
    await shoot(page, "web-hero");
    await scrollToHeading(page, "대표 유물");
    await shoot(page, "web-collection");
    await scrollToHeading(page, "전시실");
    await shoot(page, "web-realms");
    await scrollToHeading(page, "전해진 곳");
    await shoot(page, "web-map");
  });

  test("유물 화면", async ({ page }) => {
    test.setTimeout(120_000);
    await skipGate(page);
    // 성배의 포도 덩굴 주석으로 확대
    await page.goto("/artifacts/holy-grail?note=2");
    await shoot(page, "web-viewer", 4000);
    // 검·거울·방울을 이은 합성 이미지
    await page.goto("/artifacts/cheonbuin");
    await shoot(page, "web-composite", 4000);
    // 영어판: 엑스칼리버의 코등이 주석
    await page.goto("/en/artifacts/excalibur?note=2");
    await shoot(page, "web-english", 4000);
  });

  test("아카이브", async ({ page }) => {
    await skipGate(page);
    await page.goto("/artifacts");
    await page.getByRole("radio", { name: /북유럽/ }).check();
    await expect(page.getByRole("status")).toHaveText(/^유물 \d+점$/);
    await shoot(page, "web-archive");
  });
});

test.describe("모바일", () => {
  test.use({ viewport: { width: 390, height: 664 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });

  test("유물 화면", async ({ page }) => {
    await skipGate(page);
    await page.goto("/artifacts/excalibur");
    await shoot(page, "web-mobile", 4000);
  });
});

test.describe("어드민", () => {
  test.use({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });

  test("로그인·대시보드·편집·주석", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto(`${ADMIN_URL}/login`);
    await shoot(page, "admin-login");
    await loginAsCurator(page);
    await shoot(page, "admin-dashboard");
    await page.goto(`${ADMIN_URL}/artifacts/art_excalibur`);
    await shoot(page, "admin-edit");
    await page.goto(`${ADMIN_URL}/artifacts/art_shield_of_achilles/annotations`);
    await expect(page.locator(".openseadragon-canvas")).toBeVisible();
    await page.getByRole("button", { name: /^1\./ }).first().click();
    await shoot(page, "admin-annotations", 3000);
  });
});
