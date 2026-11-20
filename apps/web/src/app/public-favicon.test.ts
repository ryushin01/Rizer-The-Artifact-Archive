import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

// Paseo처럼 프로젝트 아이콘을 자동으로 찾는 도구는 src/를 보지 않고 각 앱의 public/을 하위 폴더까지 뒤진다.
// apps/web/public/ 바로 아래에 아이콘이 없으면 `pnpm build`가 만든 public/storybook/favicon.svg(Storybook 로고)가
// 잡힐 수 있으므로(지금은 이름순으로 앞선 brand/logo.png 덕분에 피하고 있었다),
// public/ 바로 아래에 사이트 아이콘과 같은 favicon.png를 두어 먼저 찾게 한다.
// 사이트는 이 파일을 쓰지 않는다(사이트 아이콘은 이 폴더의 icon.png·favicon.ico·apple-icon.png).
describe("도구용 프로젝트 아이콘(apps/web/public/favicon.png)", () => {
  it("사이트 아이콘(apps/web/src/app/icon.png)과 같은 파일이다", () => {
    const appRoot = path.resolve(import.meta.dirname, "../..");
    const toolIcon = readFileSync(path.join(appRoot, "public/favicon.png"));
    const siteIcon = readFileSync(path.join(appRoot, "src/app/icon.png"));

    expect(
      toolIcon.equals(siteIcon),
      "apps/web/src/app/icon.png를 바꿨다면 apps/web/public/favicon.png에도 복사하세요",
    ).toBe(true);
  });
});
