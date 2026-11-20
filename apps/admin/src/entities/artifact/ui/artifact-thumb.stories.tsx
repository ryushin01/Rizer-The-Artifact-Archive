import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

import { makeSummaryFixture } from "../model/fixtures";
import { ArtifactThumb } from "./artifact-thumb";

const image = makeSummaryFixture(0).image!;
const meta = {
  title: "Entities/Artifact/ArtifactThumb",
  component: ArtifactThumb,
  args: { src: image.thumbUrl, alt: "", color: image.dominantColor },
} satisfies Meta<typeof ArtifactThumb>;
export default meta;

/** 목록의 정사각 썸네일. 옆에 유물 이름이 있으므로 대체 텍스트는 비운다. */
export const WithImage: StoryObj<typeof meta> = {};

/** 이미지가 없으면 화면 낭독기에 "이미지 없음"을 알린다. */
export const WithoutImage: StoryObj<typeof meta> = {
  args: { src: undefined },
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getByText("이미지 없음")).toBeInTheDocument();
  },
};
