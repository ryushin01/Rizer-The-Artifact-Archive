import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

import { makeArtifactFixture } from "@/entities/artifact";

import { ImageCard } from "./image-card";

const meta = {
  title: "Pages/ArtifactEditor/ImageCard",
  component: ImageCard,
  args: { artifact: makeArtifactFixture(0), readOnly: false },
} satisfies Meta<typeof ImageCard>;
export default meta;

/** 썸네일과 크기, 원본 올리기(파일 선택 버튼이 초점을 받음), 주석 편집 링크 */
export const WithImage: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("img")).toHaveAccessibleName(/검/);
    await expect(canvas.getByRole("button", { name: /원본 이미지 바꾸기, 파일 선택/ })).toBeEnabled();
    await expect(canvas.getByRole("link", { name: /주석 편집/ })).toHaveAttribute("href", "/artifacts/art_fixture_0/annotations");
  },
};

export const WithoutImage: StoryObj<typeof meta> = { args: { artifact: makeArtifactFixture(1, { image: null }) } };

export const ReadOnly: StoryObj<typeof meta> = { args: { readOnly: true } };
