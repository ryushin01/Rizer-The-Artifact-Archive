import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { signIn } from "next-auth/react";
import { expect, mocked, userEvent, within } from "storybook/test";

import { LoginForm } from "./login-form";

const meta = {
  title: "Pages/Login/LoginForm",
  component: LoginForm,
  args: { callbackUrl: "/", guest: { email: "guest@rizer.dev", password: "guest1234" } },
  decorators: [(Story) => <div style={{ maxWidth: 360 }}><Story /></div>],
} satisfies Meta<typeof LoginForm>;
export default meta;

/** 틀리면 폼 위의 알림 영역(처음부터 있음)이 알린다. */
export const WrongPassword: StoryObj<typeof meta> = {
  beforeEach: () => {
    mocked(signIn).mockResolvedValue({ error: "CredentialsSignin", status: 401, ok: false, url: null });
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText("이메일"), "curator@rizer.dev");
    await userEvent.type(canvas.getByLabelText("비밀번호"), "wrong");
    await userEvent.click(canvas.getByRole("button", { name: "로그인" }));
    await expect(await canvas.findByText("이메일 또는 비밀번호가 맞지 않습니다.")).toBeVisible();
    await expect(canvas.getByRole("alert")).toHaveTextContent("이메일 또는 비밀번호가 맞지 않습니다.");
  },
};

/** 게스트 버튼은 공개된 게스트 계정으로 바로 들어간다. */
export const Guest: StoryObj<typeof meta> = {
  beforeEach: () => {
    mocked(signIn).mockResolvedValue({ error: null, status: 200, ok: true, url: "/" });
  },
  play: async ({ canvasElement }) => {
    await userEvent.click(within(canvasElement).getByRole("button", { name: "게스트로 둘러보기" }));
    await expect(mocked(signIn)).toHaveBeenCalledWith("credentials", { email: "guest@rizer.dev", password: "guest1234", redirect: false });
  },
};
