import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

import { ArtifactPagination } from "./artifact-pagination";

const meta = {
  title: "Widgets/ArtifactTable/ArtifactPagination",
  component: ArtifactPagination,
  args: { page: 2, pageCount: 4, params: { q: "검" } },
} satisfies Meta<typeof ArtifactPagination>;
export default meta;

/** 지금 쪽은 aria-current="page"이고, 다른 쪽 링크는 검색 조건을 유지한다. */
export const Default: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    const nav = within(canvasElement).getByRole("navigation", { name: "유물 목록 쪽" });
    await expect(within(nav).getByRole("link", { name: "2 쪽" })).toHaveAttribute("aria-current", "page");
    await expect(within(nav).getByRole("link", { name: "3 쪽" })).toHaveAttribute("href", expect.stringContaining("q="));
  },
};
