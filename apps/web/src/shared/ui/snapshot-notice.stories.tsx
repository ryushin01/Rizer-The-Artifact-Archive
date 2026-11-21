import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

import { SnapshotNotice } from "./snapshot-notice";

const meta = {
  title: "Shared/SnapshotNotice",
  component: SnapshotNotice,
} satisfies Meta<typeof SnapshotNotice>;
export default meta;

/** 관리 서버에 닿지 못해 저장해 둔 사본으로 보여 주는 중이라는 안내(role="status") */
export const Default: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toHaveTextContent(/저장해 둔 사본으로 전시를 보여 드립니다/);
  },
};
