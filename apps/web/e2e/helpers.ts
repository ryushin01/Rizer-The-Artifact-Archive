import AxeBuilder from "@axe-core/playwright";
import { expect, type Page } from "@playwright/test";

import { ADMIN_URL, CURATOR } from "./env";

/** 입장 화면을 건너뛴다(같은 탭에서 이미 지나간 것처럼). */
export async function skipGate(page: Page) {
  await page.addInitScript(() => sessionStorage.setItem("rizer:gate", "1"));
}

/** axe 자동 검사. 위반이 있으면 실패한다(KWCAG를 모두 보장하지는 않는다). */
export async function expectNoA11yViolations(page: Page) {
  // 흐려졌다 돌아오는 전환(검색 결과의 투명도 등) 도중에 재면 명도 대비가 낮게 나온다. 끝이 있는 애니메이션은 끝나기를 기다린다.
  await page.evaluate(() => {
    const finite = document
      .getAnimations()
      .filter((a) => Number.isFinite(Number(a.effect?.getComputedTiming().endTime)) && a.playState === "running");
    return Promise.race([
      Promise.all(finite.map((a) => a.finished.catch(() => undefined))),
      new Promise((resolve) => setTimeout(resolve, 3000)),
    ]);
  });
  const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
  expect(result.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`)).toEqual([]);
}

/** 없는 유물 화면. 스트리밍 중에 notFound가 나오면 상태 코드는 200이지만 404 화면과 noindex가 나온다. */
export async function expectNotFound(page: Page, locale: "ko" | "en" = "ko") {
  await expect(page.getByRole("heading", { name: /Lost Relic/ })).toBeVisible();
  // 라우트 그룹의 not-found는 프레임워크가 같은 meta를 두 번 넣을 수 있다. 값은 같으므로 첫 번째만 본다.
  await expect(page.locator('head meta[name="robots"]').first()).toHaveAttribute("content", /noindex/);
  // 화면 제목으로도 404임을 알 수 있어야 한다(KWCAG 6.4.2).
  await expect(page).toHaveTitle(locale === "en" ? /^Page not found/ : /^페이지를 찾을 수 없습니다/);
  await expect(page.locator("title")).toHaveCount(1);
}

export async function loginAsCurator(page: Page) {
  await page.goto(`${ADMIN_URL}/login`);
  await page.getByLabel("이메일").fill(CURATOR.email);
  await page.getByLabel("비밀번호").fill(CURATOR.password);
  await page.getByRole("button", { name: "로그인" }).click();
  await expect(page.getByRole("heading", { name: /반갑습니다/ })).toBeVisible();
}

/** 관리 화면에서 새 유물(비공개)을 만든다. 만들면 편집 화면으로 옮겨 간다. */
export async function createArtifact(page: Page, { slug, title }: { slug: string; title: string }) {
  await page.goto(`${ADMIN_URL}/artifacts/new`);
  const fill = (label: string | RegExp, value: string) => page.getByLabel(label, { exact: typeof label === "string" }).fill(value);
  await fill("이름", title);
  await fill("원어 이름", "Sword of Trial");
  await fill("주소", slug);
  await fill("첫 기록 연도", "1200");
  await fill("첫 기록 문헌", "E2E 문헌");
  await fill("권능", "테스트를 통과시킨다.");
  await fill("요약", "E2E에서 만든 유물입니다.");
  await fill("본문", "첫 문단.\n\n둘째 문단.");
  await fill("이미지 설명(대체 텍스트)", "검은 점 하나");
  await fill("소장품 번호", "0");
  await fill("사진 속 소장품 이름", "Test object");
  await fill("소장품 페이지", "https://example.com/object");
  await fill("원본 이미지 주소", "https://example.com/object.jpg");
  await page.getByRole("button", { name: "만들기" }).click();
  await expect(page.getByText("유물을 만들었습니다")).toBeVisible();
}
