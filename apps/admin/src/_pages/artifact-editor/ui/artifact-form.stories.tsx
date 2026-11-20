import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, mocked, userEvent, waitFor, within } from "storybook/test";

import { makeArtifactFixture } from "@/entities/artifact";

import { saveArtifactAction } from "../api/actions";
import { ArtifactForm } from "./artifact-form";

const meta = {
  title: "Pages/ArtifactEditor/ArtifactForm",
  component: ArtifactForm,
  args: { readOnly: false },
} satisfies Meta<typeof ArtifactForm>;
export default meta;

/** 새 유물. 서버가 검증에 실패하면 오류를 칸에 잇고(설명과 함께 읽힘) 첫 오류 칸으로 초점을 옮긴다. */
export const ValidationError: StoryObj<typeof meta> = {
  beforeEach: () => {
    mocked(saveArtifactAction).mockResolvedValue({
      status: "error",
      fieldErrors: { slug: ["소문자, 숫자, 하이픈(-)만 쓸 수 있습니다."] },
      values: { slug: "Bad Slug" },
    });
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "만들기" }));
    // 서버 액션이 돌아오면 폼을 다시 그리고 첫 오류 칸으로 초점을 옮긴다(바쁜 컴퓨터에서는 1초를 넘기도 한다).
    await waitFor(() => expect(canvas.getByLabelText("주소")).toHaveAttribute("aria-invalid", "true"), { timeout: 5000 });
    const slug = canvas.getByLabelText("주소");
    await waitFor(() => expect(slug).toHaveFocus(), { timeout: 5000 });
    await expect(slug).toHaveAccessibleDescription(/소문자, 숫자, 하이픈\(-\)만 쓸 수 있습니다/);
    await expect(canvas.getByRole("alert")).toHaveTextContent("입력값 1곳을 확인해 주세요.");
  },
};

/** 기존 유물을 고칠 때는 폼이 그린 내용의 버전을 함께 보내(낙관적 잠금) 그사이 다른 곳의 저장을 덮어쓰지 않는다. */
export const Edit: StoryObj<typeof meta> = {
  args: { artifact: makeArtifactFixture(0), version: 3 },
  play: async ({ canvasElement }) => {
    const form = canvasElement.querySelector("form")!;
    await expect(form.querySelector('input[name="expectedVersion"]')).toHaveValue("3");
    await expect(within(canvasElement).getByLabelText("이름")).toHaveValue("엑스칼리버");
  },
};

/** 게스트는 읽기 전용으로 본다. */
export const ReadOnly: StoryObj<typeof meta> = {
  args: { artifact: makeArtifactFixture(1), readOnly: true },
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getByLabelText("이름")).toHaveAttribute("readonly");
  },
};
