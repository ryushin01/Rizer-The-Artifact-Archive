import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Component, type ReactNode } from "react";
import { toast } from "sonner";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { ACTION_ERROR_MESSAGE } from "@/shared/lib/use-guarded-action";

import { PublishToggle } from "./publish-toggle";

const setStatusAction = vi.hoisted(() => vi.fn());
vi.mock("../api/actions", () => ({ setStatusAction }));
vi.mock("sonner", () => ({ toast: { success: vi.fn(), error: vi.fn() } }));

describe("PublishToggle", () => {
  // 중괄호로 감싼다. 목 함수를 돌려주면 Vitest가 그것을 정리 함수로 여겨 테스트가 끝난 뒤 한 번 더 부른다.
  beforeEach(() => {
    setStatusAction.mockReset();
  });

  it("더블 클릭해도 공개 요청을 한 번만 보내고, 바꿀 상태를 직접 넘긴다", async () => {
    let resolve!: (v: { ok: boolean; message: string }) => void;
    setStatusAction.mockReturnValue(new Promise((r) => (resolve = r)));
    render(<PublishToggle id="art_1" status="draft" />);

    await userEvent.dblClick(screen.getByRole("button", { name: "공개하기" }));
    expect(setStatusAction).toHaveBeenCalledTimes(1);
    expect(setStatusAction).toHaveBeenCalledWith("art_1", "published");

    resolve({ ok: true, message: "공개했습니다." });
    // 끝나면 잠금이 풀려 다시 누를 수 있다.
    setStatusAction.mockResolvedValue({ ok: true, message: "" });
    await vi.waitFor(() => expect(screen.getByRole("button")).toBeEnabled());
    await userEvent.click(screen.getByRole("button"));
    expect(setStatusAction).toHaveBeenCalledTimes(2);
  });

  it("서버에 닿지 못해도 화면이 오류 화면으로 바뀌지 않고, 알린 뒤 다시 누를 수 있다", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    setStatusAction.mockImplementation(async () => {
      throw new TypeError("Failed to fetch");
    });
    render(
      <Boundary>
        <PublishToggle id="art_1" status="draft" />
      </Boundary>,
    );
    await userEvent.click(screen.getByRole("button", { name: "공개하기" }));
    await vi.waitFor(() => expect(toast.error).toHaveBeenCalledWith(ACTION_ERROR_MESSAGE));
    expect(screen.queryByText("오류 화면")).not.toBeInTheDocument();
    await vi.waitFor(() => expect(screen.getByRole("button", { name: "공개하기" })).toBeEnabled());
  });
});

class Boundary extends Component<{ children: ReactNode }, { error: unknown }> {
  state = { error: null };
  static getDerivedStateFromError(error: unknown) {
    return { error };
  }
  render() {
    return this.state.error ? <p>오류 화면</p> : this.props.children;
  }
}
