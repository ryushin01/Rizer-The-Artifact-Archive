import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

import { FormErrorAlert } from "./form-error-alert";

const meta = {
  title: "Shared/FormErrorAlert",
  component: FormErrorAlert,
  args: { message: "입력값 2곳을 확인해 주세요." },
} satisfies Meta<typeof FormErrorAlert>;
export default meta;

/** 폼 전체의 오류 안내. 알림 영역은 하나이고, 안쪽 상자는 알림 역할을 겹치지 않는다. */
export const Default: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    const alerts = within(canvasElement).getAllByRole("alert");
    await expect(alerts).toHaveLength(1);
    await expect(alerts[0]).toHaveTextContent("입력값 2곳을 확인해 주세요.");
  },
};

/** 메시지가 없어도 알림 영역은 남아(화면에서는 접힘) 다음 메시지가 읽힌다. */
export const Empty: StoryObj<typeof meta> = {
  args: { message: undefined },
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getByRole("alert")).toBeEmptyDOMElement();
  },
};
