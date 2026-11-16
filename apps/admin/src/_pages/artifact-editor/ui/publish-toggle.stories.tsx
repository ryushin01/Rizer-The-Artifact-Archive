import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, mocked, screen, userEvent, waitFor, within } from "storybook/test";

import { setStatusAction } from "../api/actions";
import { PublishToggle } from "./publish-toggle";

const meta = {
  title: "Pages/ArtifactEditor/PublishToggle",
  component: PublishToggle,
  args: { id: "art_1", status: "draft" },
} satisfies Meta<typeof PublishToggle>;
export default meta;

/** 바꿀 상태를 직접 넘기고, 결과를 알림으로 보인다. */
export const Publish: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    await userEvent.click(within(canvasElement).getByRole("button", { name: "공개하기" }));
    await expect(mocked(setStatusAction)).toHaveBeenCalledWith("art_1", "published");
    // 알림은 나타나는 동안 투명도가 바뀌므로 다 나타날 때까지 기다린다.
    await waitFor(() => expect(screen.getByText("공개했습니다.")).toBeVisible());
  },
};

export const Unpublish: StoryObj<typeof meta> = { args: { status: "published" } };
