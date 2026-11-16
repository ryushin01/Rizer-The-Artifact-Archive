import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Component, type ReactNode } from "react";
import { toast } from "sonner";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { ACTION_ERROR_MESSAGE, isNavigationSignal, useGuardedAction } from "./use-guarded-action";

vi.mock("sonner", () => ({ toast: { success: vi.fn(), error: vi.fn() } }));

/** 오류 경계까지 올라온 오류를 보여 준다. 액션 실패가 화면 전체를 바꾸는지 확인한다. */
class Boundary extends Component<{ children: ReactNode }, { error: unknown }> {
  state = { error: null };
  static getDerivedStateFromError(error: unknown) {
    return { error };
  }
  render() {
    return this.state.error ? <p>오류 화면</p> : this.props.children;
  }
}

function Runner({ action }: { action: () => Promise<void> }) {
  const { pending, run } = useGuardedAction();
  return (
    <button type="button" onClick={() => run(action)} disabled={pending}>
      실행
    </button>
  );
}

const redirectSignal = () => Object.assign(new Error("NEXT_REDIRECT"), { digest: "NEXT_REDIRECT;push;/artifacts;307;" });

describe("useGuardedAction", () => {
  beforeEach(() => {
    vi.mocked(toast.error).mockClear();
  });

  it("액션이 던지면 오류 화면으로 넘기지 않고 알린 뒤 다시 실행할 수 있다", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    const action = vi.fn().mockRejectedValue(new TypeError("Failed to fetch"));
    render(
      <Boundary>
        <Runner action={action} />
      </Boundary>,
    );
    await userEvent.click(screen.getByRole("button", { name: "실행" }));
    await vi.waitFor(() => expect(toast.error).toHaveBeenCalledWith(ACTION_ERROR_MESSAGE));
    expect(screen.queryByText("오류 화면")).not.toBeInTheDocument();
    await vi.waitFor(() => expect(screen.getByRole("button", { name: "실행" })).toBeEnabled());
    await userEvent.click(screen.getByRole("button", { name: "실행" }));
    await vi.waitFor(() => expect(action).toHaveBeenCalledTimes(2));
  });

  it("처리 중에는 다시 실행하지 않는다", async () => {
    let finish!: () => void;
    const action = vi.fn(() => new Promise<void>((r) => (finish = r)));
    render(<Runner action={action} />);
    await userEvent.dblClick(screen.getByRole("button", { name: "실행" }));
    expect(action).toHaveBeenCalledTimes(1);
    finish();
    await vi.waitFor(() => expect(screen.getByRole("button", { name: "실행" })).toBeEnabled());
  });

  it("화면을 옮기는 신호(redirect)는 삼키지 않고 Next.js에 넘긴다", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    render(
      <Boundary>
        <Runner action={() => Promise.reject(redirectSignal())} />
      </Boundary>,
    );
    await userEvent.click(screen.getByRole("button", { name: "실행" }));
    // 테스트에는 Next.js의 RedirectBoundary가 없으므로 이 경계까지 올라온다.
    await screen.findByText("오류 화면");
    expect(toast.error).not.toHaveBeenCalled();
  });

  it("isNavigationSignal은 redirect 신호만 가려낸다", () => {
    expect(isNavigationSignal(redirectSignal())).toBe(true);
    expect(isNavigationSignal(new Error("boom"))).toBe(false);
    expect(isNavigationSignal(undefined)).toBe(false);
  });
});
