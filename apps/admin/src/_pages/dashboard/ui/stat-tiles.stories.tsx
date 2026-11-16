import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

import { StatTiles } from "./stat-tiles";

const meta = {
  title: "Pages/Dashboard/StatTiles",
  component: StatTiles,
  args: { stats: { total: 100, published: 96, draft: 4, withImage: 98, annotations: 413 } },
} satisfies Meta<typeof StatTiles>;
export default meta;

/** 숫자마다 이름과 단위가 함께 읽힌다. */
export const Default: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("전체 유물")).toBeVisible();
    await expect(canvas.getByText("2점 없음")).toBeVisible();
  },
};
