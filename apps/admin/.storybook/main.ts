import type { StorybookConfig } from "@storybook/nextjs-vite";

/**
 * 관리 화면(shadcn/ui·Tailwind)의 컴포넌트 스토리. 공개 사이트처럼 스토리마다 접근성(axe)을 검사한다(pnpm test:storybook).
 * 관리 화면은 로그인 뒤에만 쓰는 도구라 Storybook을 배포하지 않고 개발과 CI에서만 쓴다(pnpm --filter @rizer/admin storybook).
 */
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y", "@storybook/addon-vitest"],
  framework: { name: "@storybook/nextjs-vite", options: {} },
  core: { disableTelemetry: true },
};

export default config;
