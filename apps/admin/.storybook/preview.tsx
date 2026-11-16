import type { Decorator, Preview } from "@storybook/nextjs-vite";
import { sb } from "storybook/test";

import { Toaster } from "@rizer/ui/components/sonner";

import "../src/_app/styles/globals.css";

// 서버 액션(서버 전용 코드)은 스토리에서 돌 수 없으므로 같은 폴더의 __mocks__로 바꾼다.
sb.mock(import("../src/_pages/artifact-editor/api/actions.ts"));
sb.mock(import("../src/_pages/artifact-editor/api/upload-actions.ts"));
// 로그인은 Auth.js 클라이언트를 흉내 낸다(스토리에서 결과를 정한다).
sb.mock(import("next-auth/react"), { spy: true });

/** 앱처럼 한국어 문서에 알림(sonner)을 둔다. */
const withShell: Decorator = (Story) => (
  <div lang="ko" className="min-h-svh bg-background p-6 text-foreground antialiased">
    <Story />
    <Toaster position="top-center" />
  </div>
);

const preview: Preview = {
  decorators: [withShell],
  parameters: {
    nextjs: { appDirectory: true },
    layout: "fullscreen",
    // 접근성 위반(axe)이 있으면 스토리 테스트를 실패시킨다(pnpm test:storybook).
    a11y: { test: "error" },
  },
};

export default preview;
