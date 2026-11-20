import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

import { makeSummaryFixture } from "@/entities/artifact";

import { ArtifactTable } from "./artifact-table";

const meta = {
  title: "Widgets/ArtifactTable/ArtifactTable",
  component: ArtifactTable,
  args: { items: [0, 1, 2].map((i) => makeSummaryFixture(i, { status: i === 2 ? "draft" : "published" })) },
} satisfies Meta<typeof ArtifactTable>;
export default meta;

/** 유물 이름이 편집 화면으로 가는 링크이고, 표 머리와 (화면 낭독기용) 캡션이 있다. */
export const Default: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("columnheader")).toHaveLength(6);
    await expect(canvas.getByRole("link", { name: "엑스칼리버" })).toHaveAttribute("href", "/artifacts/art_fixture_0");
  },
};

export const Empty: StoryObj<typeof meta> = { args: { items: [] } };
