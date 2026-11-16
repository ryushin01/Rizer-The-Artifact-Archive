import { readFile } from "node:fs/promises";

import { expect, test } from "@playwright/test";

import { ADMIN_URL, CURATOR } from "./env";
import { createArtifact, expectNoA11yViolations, expectNotFound, loginAsCurator, skipGate } from "./helpers";

/** 1×1 PNG. 업로드·타일링 흐름만 확인한다. */
const PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
  "base64",
);

test.describe("어드민: 게스트", () => {
  test("둘러볼 수 있지만 저장은 거절된다", async ({ page }) => {
    await page.goto(`${ADMIN_URL}/login`);
    await page.getByRole("button", { name: "게스트로 둘러보기" }).click();
    await expect(page.getByRole("heading", { name: /게스트님, 반갑습니다/ })).toBeVisible();
    await expect(page.getByRole("link", { name: "새 유물" })).toHaveCount(0);

    await page.getByRole("link", { name: "유물", exact: true }).click();
    await expect(page.getByText("게스트로 둘러보는 중입니다")).toBeVisible();
    // 목록은 30점씩 쪽을 나눈다.
    const pages = page.getByRole("navigation", { name: "유물 목록 쪽" });
    await expect(pages.getByRole("link", { name: "1 쪽" })).toHaveAttribute("aria-current", "page");
    await pages.getByRole("link", { name: "2 쪽" }).click();
    await expect(page).toHaveURL(/page=2/);
    await expect(pages.getByRole("link", { name: "2 쪽" })).toHaveAttribute("aria-current", "page");
    await pages.getByRole("link", { name: "1 쪽" }).click();
    await page.getByRole("link", { name: "엑스칼리버" }).click();
    await page.getByRole("button", { name: "저장" }).click();
    const toast = page.locator("[data-sonner-toast]").filter({ hasText: /게스트 계정은 둘러보기만/ });
    await expect(toast).toBeVisible();
    // 알림이 나타나는 애니메이션(투명도)이 끝난 뒤 대비를 잰다.
    await expect(toast).toHaveAttribute("data-mounted", "true");
    await page.waitForTimeout(500);
    await expectNoA11yViolations(page);
  });
});

test.describe("어드민: 큐레이터", () => {
  test("유물을 만들고 이미지를 올려 공개하면 공개 사이트에 보이고, 지우면 사라진다", async ({ page }) => {
    const slug = `e2e-relic-${Date.now()}`;
    await loginAsCurator(page);
    await createArtifact(page, { slug, title: "시험의 검" });
    await page.locator('input[type="file"]').setInputFiles({ name: "relic.png", mimeType: "image/png", buffer: PNG });
    await expect(page.getByText(/타일 \d+개를 만들었습니다/)).toBeVisible({ timeout: 30_000 });

    await page.getByRole("button", { name: "공개하기" }).click();
    await expect(page.getByText("공개했습니다.")).toBeVisible();

    const web = await page.context().newPage();
    await skipGate(web);
    await expect(async () => {
      await web.goto(`/artifacts/${slug}`);
      await expect(web.getByRole("heading", { level: 1, name: "시험의 검" })).toBeVisible({ timeout: 3_000 });
    }).toPass({ timeout: 15_000 });

    await page.getByRole("button", { name: "삭제" }).click();
    await page.getByRole("alertdialog").getByRole("button", { name: "삭제" }).click();
    await expect(page).toHaveURL(/\/artifacts\?deleted=1/);
    // 캐시 비우기 알림은 응답 뒤(after)에 가므로 반영될 때까지 다시 연다.
    await expect(async () => {
      await web.goto(`/artifacts/${slug}`);
      await expectNotFound(web);
    }).toPass({ timeout: 15_000 });
  });

  test("주석을 W3C JSON으로 내보내고, 고친 파일을 가져와 편집기에 올린다", async ({ page }) => {
    await loginAsCurator(page);
    await page.goto(`${ADMIN_URL}/artifacts/art_excalibur/annotations`);
    await expect(page.locator(".openseadragon-canvas")).toBeVisible();

    const [download] = await Promise.all([page.waitForEvent("download"), page.getByRole("button", { name: "JSON 내보내기" }).click()]);
    const exported = JSON.parse(await readFile(await download.path(), "utf8")) as { type: string; items: { body: unknown }[] };
    expect(exported.type).toBe("AnnotationPage");
    expect(exported.items.length).toBeGreaterThan(1);

    const one = { ...exported, items: exported.items.slice(0, 1) };
    await page.locator('input[type="file"]').setInputFiles({ name: "notes.json", mimeType: "application/json", buffer: Buffer.from(JSON.stringify(one)) });
    await expect(page.getByText(/주석 1개를 가져왔습니다/)).toBeVisible();

    await page.locator('input[type="file"]').setInputFiles({ name: "broken.json", mimeType: "application/json", buffer: Buffer.from("{ not json") });
    await expect(page.getByText("JSON 파일을 읽지 못했습니다.")).toBeVisible();
    // 저장하지 않고 떠나므로 시드 주석은 그대로다.
  });

  test("주석을 고치면 공개 사이트에 바로 반영된다", async ({ page }) => {
    const title = `자루 끝 ${Date.now()}`;
    await loginAsCurator(page);
    // 주석 편집기(Annotorious·PixiJS)가 운영 CSP(unsafe-eval 없음)에서도 오류 없이 떠야 한다.
    const pageErrors: string[] = [];
    page.on("pageerror", (e) => pageErrors.push(e.message));
    await page.goto(`${ADMIN_URL}/artifacts/art_durandal/annotations`);
    await expect(page.locator(".openseadragon-canvas")).toBeVisible();
    await page.waitForTimeout(1_000);
    expect(pageErrors).toEqual([]);
    await page.getByRole("button", { name: /1\.\s*자루 끝/ }).click();
    // 펼친 주석의 입력칸만 보인다(나머지는 hidden).
    await page.getByRole("textbox", { name: "제목" }).fill(title);
    await page.getByRole("button", { name: "저장", exact: true }).click();
    await expect(page.getByText(/주석 4개를 저장했습니다/)).toBeVisible();

    await skipGate(page);
    await expect(async () => {
      await page.goto("/artifacts/durandal");
      await expect(page.getByRole("button", { name: `주석 1: ${title}` })).toBeVisible({ timeout: 5_000 });
    }).toPass({ timeout: 20_000 });
  });
});

test.describe("어드민: 로고", () => {
  // 파비콘·사이드바와 같은 브랜드 로고(public/brand/logo.png)를 쓴다. 로고를 바꿀 때 로그인 화면에만 예전 아이콘이 남은 적이 있다.
  test("로그인 화면과 사이드바가 같은 브랜드 로고를 보여 준다", async ({ page }) => {
    const loaded = (img: HTMLImageElement) => img.complete && img.naturalWidth > 0;
    await page.goto(`${ADMIN_URL}/login`);
    const loginLogo = page.getByRole("main").locator('img[src*="brand"]');
    await expect(loginLogo).toBeVisible();
    await expect.poll(() => loginLogo.evaluate(loaded)).toBe(true);

    await loginAsCurator(page);
    const sidebarLogo = page.getByRole("img", { name: "Rizer Archive" });
    await expect(sidebarLogo).toBeVisible();
    await expect.poll(() => sidebarLogo.evaluate(loaded)).toBe(true);
  });
});

test.describe("어드민: 접근성", () => {
  test("로그인 화면에 접근성 위반이 없다", async ({ page }) => {
    await page.goto(`${ADMIN_URL}/login`);
    await expect(page.getByRole("heading", { name: "Rizer Archive 관리" })).toBeVisible();
    await expectNoA11yViolations(page);
  });

  test("큐레이터의 대시보드·유물 목록·새 유물·주석 편집기에 접근성 위반이 없다", async ({ page }) => {
    await loginAsCurator(page);
    await expectNoA11yViolations(page);
    await page.goto(`${ADMIN_URL}/artifacts`);
    await expect(page.getByRole("link", { name: "엑스칼리버" })).toBeVisible();
    await expectNoA11yViolations(page);
    await page.goto(`${ADMIN_URL}/artifacts/new`);
    await expect(page.getByRole("button", { name: "만들기" })).toBeVisible();
    await expectNoA11yViolations(page);
    await page.goto(`${ADMIN_URL}/artifacts/art_excalibur/annotations`);
    await expect(page.locator(".openseadragon-canvas")).toBeVisible();
    await expectNoA11yViolations(page);
  });

  test("유물 폼의 오류는 칸에 이어지고, 실패하면 첫 오류 칸으로 초점이 간다", async ({ page }) => {
    await loginAsCurator(page);
    await page.goto(`${ADMIN_URL}/artifacts/new`);
    await page.getByRole("button", { name: "만들기" }).click();
    const title = page.getByLabel("이름", { exact: true });
    await expect(title).toBeFocused();
    await expect(title).toHaveAttribute("aria-invalid", "true");
    await expect(title).toHaveAccessibleDescription(/이름을 입력하세요/);
    // Next.js의 경로 알림(route announcer)도 role="alert"라 문구로 고른다.
    await expect(page.getByRole("alert").filter({ hasText: /입력값 \d+곳을 확인해 주세요/ })).toBeVisible();
    await expectNoA11yViolations(page);
  });
});

test.describe("어드민: 편집 충돌·실행 취소·미리 보기", () => {
  test("두 곳에서 같은 유물을 고치면 늦게 저장한 쪽은 덮어쓰지 않고 안내한다(낙관적 잠금)", async ({ page, context }) => {
    await loginAsCurator(page);
    const other = await context.newPage();
    for (const p of [page, other]) await p.goto(`${ADMIN_URL}/artifacts/art_ame_no_nuboko`);
    await page.getByLabel("권능", { exact: true }).fill(`먼저 고친 권능 ${Date.now()}`);
    await page.getByRole("button", { name: "저장", exact: true }).click();
    await expect(page.getByText(/저장했습니다/)).toBeVisible();

    const late = `늦게 고친 권능 ${Date.now()}`;
    await other.getByLabel("권능", { exact: true }).fill(late);
    await other.getByRole("button", { name: "저장", exact: true }).click();
    await expect(other.getByRole("alert").filter({ hasText: /다른 곳에서 먼저 저장했습니다/ })).toBeVisible();
    // 늦게 고친 내용은 지우지 않아 옮겨 적을 수 있다.
    await expect(other.getByLabel("권능", { exact: true })).toHaveValue(late);
    // 새로 고치면 먼저 저장한 내용이 보인다.
    await other.reload();
    await expect(other.getByLabel("권능", { exact: true })).toHaveValue(/먼저 고친 권능/);
  });

  test("주석 편집기는 실행 취소·다시 실행하고, 저장하지 않고 떠나려 하면 묻는다", async ({ page }) => {
    await loginAsCurator(page);
    await page.goto(`${ADMIN_URL}/artifacts/art_mjolnir/annotations`);
    await expect(page.locator(".openseadragon-canvas")).toBeVisible();
    const undo = page.getByRole("button", { name: "실행 취소" });
    await expect(undo).toBeDisabled();
    await page.getByRole("button", { name: /^1\.\s*망치 머리/ }).click();
    const title = page.getByRole("textbox", { name: "제목" });
    await title.fill("고친 제목");
    await expect(page.getByRole("button", { name: "저장", exact: true })).toBeEnabled();

    // 사이드바로 떠나려 하면 확인 창이 뜬다. 취소하면 머문다.
    page.once("dialog", (dialog) => void dialog.dismiss());
    await page.getByRole("link", { name: "대시보드" }).click();
    await expect(page).toHaveURL(/\/annotations$/);

    // 실행 취소로 처음 내용으로 돌아오면 저장할 것이 없다. 단축키로 다시 실행하고 다시 취소한다.
    await undo.click();
    await expect(title).toHaveValue("망치 머리");
    await expect(page.getByRole("button", { name: "저장됨" })).toBeDisabled();
    await page.keyboard.press("ControlOrMeta+Shift+z");
    await expect(title).toHaveValue("고친 제목");
    await page.getByRole("button", { name: "다시 실행" }).focus();
    await page.keyboard.press("ControlOrMeta+z");
    await expect(title).toHaveValue("망치 머리");

    // 저장할 것이 없으면 묻지 않고 떠난다.
    await page.getByRole("link", { name: "대시보드" }).click();
    await expect(page).toHaveURL(`${ADMIN_URL}/`);
  });

  test("비공개 유물을 공개 사이트에서 미리 보고, 끝내면 방문자 화면으로 돌아간다", async ({ page, context }) => {
    const slug = `e2e-preview-${Date.now()}`;
    await loginAsCurator(page);
    await createArtifact(page, { slug, title: "미리 보는 검" });
    const [preview] = await Promise.all([
      context.waitForEvent("page"),
      page.getByRole("link", { name: /공개 사이트에서 미리 보기/ }).click(),
    ]);
    await expect(preview.getByRole("heading", { level: 1, name: "미리 보는 검" })).toBeVisible();
    await expect(preview.getByText(/관리 화면에서 연 미리 보기입니다/)).toBeVisible();
    // 초안 모드 화면은 요청 때 그리므로 메타데이터가 스트리밍되어 <body> 끝에 붙는다(Next 문서의 Streaming metadata).
    await expect(preview.locator('meta[name="robots"]').first()).toHaveAttribute("content", /noindex/);

    await preview.getByRole("button", { name: "미리 보기 끝내기" }).click();
    await expect(preview).toHaveURL(/\/artifacts$/);
    // 미리 보기를 끝내면 비공개 유물은 보이지 않는다.
    await preview.goto(`/artifacts/${slug}`);
    await expectNotFound(preview);
    // 서명이 틀리거나 만료된 링크는 받지 않는다.
    expect((await preview.request.get(`/api/preview?slug=${slug}&exp=${Date.now() + 60_000}&sig=bad`)).status()).toBe(401);
    // 끝낸 뒤 갈 주소는 같은 사이트 안만 받는다. "/\evil.example"은 URL 해석에서 "//evil.example"(다른 사이트)이 된다.
    const exit = await preview.request.post("/api/preview/exit", { form: { next: "/\\evil.example" }, maxRedirects: 0 });
    expect(exit.status()).toBe(303);
    const location = new URL(exit.headers()["location"] ?? "", preview.url());
    expect([location.origin, location.pathname]).toEqual([new URL(preview.url()).origin, "/"]);
  });

  test("로그인 뒤 돌아갈 주소는 같은 사이트 안만 받는다", async ({ page }) => {
    await page.goto(`${ADMIN_URL}/login?callbackUrl=${encodeURIComponent("/\\evil.example")}`);
    await page.getByLabel("이메일").fill(CURATOR.email);
    await page.getByLabel("비밀번호").fill(CURATOR.password);
    await page.getByRole("button", { name: "로그인" }).click();
    await expect(page.getByRole("heading", { name: /반갑습니다/ })).toBeVisible();
    await expect(page).toHaveURL(`${ADMIN_URL}/`);
  });
});

test.describe("공개 API 요청 제한", () => {
  // IP마다 따로 센다. 로컬 next start는 받은 x-forwarded-for를 그대로 쓰므로 테스트마다 다른 IP로 보내,
  // 다른 테스트의 검색이 막히지 않게 한다(Vercel은 방문자가 보낸 값을 덮어쓴다).
  const as = (ip: string) => ({ headers: { "x-forwarded-for": ip } });

  test("관리 화면의 공개 API와 공개 사이트의 검색 API 모두 IP마다 분당 120번까지 받는다", async ({ request }) => {
    const exhaust = async (url: string, ip: string) => {
      let status = 0;
      for (let i = 0; i < 125 && status !== 429; i++) status = (await request.get(url, as(ip))).status();
      return status;
    };
    const api = `${ADMIN_URL}/api/public/artifacts?limit=1`;
    expect(await exhaust(api, "203.0.113.10")).toBe(429);
    expect(Number((await request.get(api, as("203.0.113.10"))).headers()["retry-after"])).toBeGreaterThan(0);
    expect((await request.get(api, as("203.0.113.11"))).status()).toBe(200);

    // 관리 화면은 공개 사이트 서버의 요청(비밀값)을 세지 않으므로, 검색어를 바꿔 캐시를 비켜 가는 요청은 공개 사이트가 센다.
    const search = "/api/search?q=%EA%B2%80&limit=1";
    expect(await exhaust(search, "203.0.113.12")).toBe(429);
    expect(Number((await request.get(search, as("203.0.113.12"))).headers()["retry-after"])).toBeGreaterThan(0);
    expect((await request.get(search, as("203.0.113.13"))).status()).toBe(200);
  });
});
