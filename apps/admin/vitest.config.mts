import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  test: {
    coverage: {
      provider: "v8",
      reporter: ["text-summary", "lcov"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/**/*.test.{ts,tsx}",
        "src/**/*.stories.tsx",
        "src/**/__mocks__/**",
        "src/app/**",
        "src/db/migrations/**",
        "src/**/index.ts",
      ],
    },
    projects: [
      // 단위 테스트: 저장소(PGlite)·서버 액션 도우미·작은 컴포넌트 (pnpm test)
      {
        plugins: [react()],
        resolve: { tsconfigPaths: true },
        test: {
          name: "unit",
          environment: "jsdom",
          setupFiles: ["./vitest.setup.ts"],
          include: ["src/**/*.test.{ts,tsx}"],
          // 저장소 테스트는 테스트마다 새 PGlite에 마이그레이션을 적용해 느린 컴퓨터에서는 5초를 넘긴다.
          testTimeout: 30_000,
        },
      },
      // 스토리 테스트: 모든 스토리를 실제 Chromium에서 그리고 접근성(axe)을 검사한다 (pnpm test:storybook)
      {
        plugins: [storybookTest({ configDir: ".storybook" })],
        test: {
          name: "storybook",
          browser: { enabled: true, headless: true, provider: playwright(), instances: [{ browser: "chromium" }] },
        },
      },
    ],
  },
});
