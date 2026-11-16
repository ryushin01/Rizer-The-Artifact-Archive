import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, screen, userEvent, waitFor, within } from "storybook/test";

import { SidebarProvider } from "@rizer/ui/components/sidebar";

import { UserMenu } from "./user-menu";

const meta = {
  title: "Widgets/AppShell/UserMenu",
  component: UserMenu,
  args: { user: { id: "usr_curator", email: "curator@rizer.dev", name: "큐레이터", role: "curator" } },
  decorators: [
    (Story) => (
      <SidebarProvider>
        <div style={{ width: 260, paddingTop: 160 }}>
          <Story />
        </div>
      </SidebarProvider>
    ),
  ],
} satisfies Meta<typeof UserMenu>;
export default meta;

/** 계정 메뉴를 열면 이름·역할·이메일과 로그아웃이 보인다. */
export const Open: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    await userEvent.click(within(canvasElement).getByRole("button", { name: /큐레이터.*계정 메뉴/ }));
    // 메뉴는 펼쳐지는 동안 투명도가 바뀌므로 다 펼쳐질 때까지 기다린다.
    await waitFor(() => expect(screen.getByRole("menuitem", { name: "로그아웃" })).toBeVisible());
    await expect(screen.getByText("curator@rizer.dev")).toBeVisible();
  },
};
