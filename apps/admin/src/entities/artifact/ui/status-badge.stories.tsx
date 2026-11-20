import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

import { StatusBadge } from "./status-badge";

const meta = { title: "Entities/Artifact/StatusBadge", component: StatusBadge, args: { status: "published" } } satisfies Meta<
  typeof StatusBadge
>;
export default meta;

/** 상태는 색만이 아니라 글자로도 알린다(KWCAG 5.4.1). */
export const Published: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getByText("공개")).toBeVisible();
  },
};

export const Draft: StoryObj<typeof meta> = {
  args: { status: "draft" },
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getByText("비공개")).toBeVisible();
  },
};
