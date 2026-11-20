import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

import { ReadOnlyBanner } from "./read-only-banner";

const meta = { title: "Widgets/AppShell/ReadOnlyBanner", component: ReadOnlyBanner } satisfies Meta<typeof ReadOnlyBanner>;
export default meta;

/** 게스트에게 둘러보기만 된다고 알린다. */
export const Default: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getByText(/게스트로 둘러보는 중입니다/)).toBeVisible();
  },
};
