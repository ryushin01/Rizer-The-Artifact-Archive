import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, screen, userEvent, waitFor, within } from "storybook/test";

import { DeleteArtifactButton } from "./delete-artifact-button";

const meta = {
  title: "Pages/ArtifactEditor/DeleteArtifactButton",
  component: DeleteArtifactButton,
  args: { id: "art_1", title: "엑스칼리버" },
} satisfies Meta<typeof DeleteArtifactButton>;
export default meta;

/** 지우기 전에 확인 대화상자(alertdialog)로 묻고, 취소하면 닫힌다. */
export const Confirm: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    await userEvent.click(within(canvasElement).getByRole("button", { name: "삭제" }));
    const dialog = await screen.findByRole("alertdialog", { name: "「엑스칼리버」을(를) 삭제할까요?" });
    await expect(dialog).toHaveAccessibleDescription(/되돌릴 수 없습니다/);
    await userEvent.click(within(dialog).getByRole("button", { name: "취소" }));
    await waitFor(() => expect(screen.queryByRole("alertdialog")).toBeNull());
  },
};
