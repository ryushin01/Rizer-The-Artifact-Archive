import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

import { PreviewBanner } from "./preview-banner";

const meta = {
  title: "Pages/Artifact/PreviewBanner",
  component: PreviewBanner,
  args: { exitTo: "/artifacts" },
  decorators: [(Story) => <div style={{ maxWidth: 480 }}><Story /></div>],
} satisfies Meta<typeof PreviewBanner>;
export default meta;

/** 초안 미리보기 안내. 끝내기는 POST 폼이고, 끝낸 뒤 갈 주소를 함께 보낸다. */
export const Default: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/관리 화면에서 연 미리 보기입니다/)).toBeVisible();
    const button = canvas.getByRole("button", { name: "미리 보기 끝내기" });
    const form = button.closest("form")!;
    await expect(form).toHaveAttribute("action", "/api/preview/exit");
    await expect(form).toHaveAttribute("method", "post");
    await expect(form.querySelector('input[name="next"]')).toHaveValue("/artifacts");
  },
};
