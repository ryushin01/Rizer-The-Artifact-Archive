import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

import { ArtifactFilters } from "./artifact-filters";

const meta = {
  title: "Widgets/ArtifactTable/ArtifactFilters",
  component: ArtifactFilters,
  args: { q: "검", gallery: "norse", status: "published" },
} satisfies Meta<typeof ArtifactFilters>;
export default meta;

/** 주소 쿼리로 보내는 GET 검색 폼. 칸마다 레이블이 있고 지금 조건을 보여 준다. */
export const Default: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("search", { name: "유물 검색" })).toBeVisible();
    await expect(canvas.getByLabelText("검색어")).toHaveValue("검");
    await expect(canvas.getByRole("button", { name: "검색" })).toBeVisible();
  },
};
