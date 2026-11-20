import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

import { Button } from "@rizer/ui/components/button";

import { PageHeading } from "./page-heading";

const meta = {
  title: "Widgets/AppShell/PageHeading",
  component: PageHeading,
  args: { title: "유물", description: "전설 속 유물 300점" },
} satisfies Meta<typeof PageHeading>;
export default meta;

/** 화면 제목은 h1 하나다. */
export const Default: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getByRole("heading", { level: 1, name: "유물" })).toBeVisible();
  },
};

export const WithActions: StoryObj<typeof meta> = {
  args: { actions: <Button type="button">새 유물</Button> },
};
