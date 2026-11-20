import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { toast } from "sonner";
import { describe, expect, it, vi } from "vitest";

import { makeArtifactFixture } from "@/entities/artifact";
import { ACTION_ERROR_MESSAGE } from "@/shared/lib/use-guarded-action";

import { ArtifactForm } from "./artifact-form";

const saveArtifactAction = vi.hoisted(() => vi.fn());
vi.mock("../api/actions", () => ({ saveArtifactAction }));
vi.mock("sonner", () => ({ toast: { success: vi.fn(), error: vi.fn() } }));

/** 폼이 다시 마운트되기를 기다리는 시간. 바쁜 컴퓨터에서는 기본값(1초)이 짧다. */
const WAIT = { timeout: 5000 };

describe("ArtifactForm", () => {
  it("만들기 버튼을 더블 클릭해도 저장 요청은 한 번이다", async () => {
    let resolve!: (v: unknown) => void;
    saveArtifactAction.mockReturnValue(new Promise((r) => (resolve = r)));
    render(<ArtifactForm readOnly={false} />);
    await userEvent.dblClick(screen.getByRole("button", { name: "만들기" }));
    await vi.waitFor(() => expect(saveArtifactAction).toHaveBeenCalledTimes(1), WAIT);
    await new Promise((r) => setTimeout(r, 50));
    expect(saveArtifactAction).toHaveBeenCalledTimes(1);
    // React는 진행 중인 액션들을 함께 묶으므로, 다음 테스트를 막지 않게 끝내 둔다.
    resolve({ status: "idle" });
    await vi.waitFor(() => expect(screen.getByRole("button", { name: "만들기" })).toBeEnabled(), WAIT);
  });

  it("저장 요청이 실패해도(연결 끊김) 오류 화면으로 넘기지 않고 입력값을 남긴 채 안내한다", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    saveArtifactAction.mockRejectedValue(new TypeError("Failed to fetch"));
    render(<ArtifactForm readOnly={false} />);
    await userEvent.type(screen.getByLabelText("이름"), "시험의 검");
    await userEvent.click(screen.getByRole("button", { name: "만들기" }));
    await vi.waitFor(() => expect(toast.error).toHaveBeenCalledWith(ACTION_ERROR_MESSAGE), WAIT);
    expect(screen.getByLabelText("이름")).toHaveValue("시험의 검");
    // 다시 누를 수 있다.
    await vi.waitFor(() => expect(screen.getByRole("button", { name: "만들기" })).toBeEnabled(), WAIT);
  });

  it("저장하는 동안에는 칸을 고칠 수 없어, 저장이 실패해 폼을 다시 그려도 고친 내용을 잃지 않는다", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.mocked(toast.error).mockClear();
    let reject!: (error: unknown) => void;
    saveArtifactAction.mockReturnValue(new Promise((_, r) => (reject = r)));
    render(<ArtifactForm readOnly={false} />);
    await userEvent.type(screen.getByLabelText("이름"), "시험의 검");
    await userEvent.click(screen.getByRole("button", { name: "만들기" }));
    await vi.waitFor(() => expect(screen.getByLabelText("이름")).toHaveAttribute("readonly"), WAIT);
    await userEvent.type(screen.getByLabelText("이름"), " 추가");
    expect(screen.getByLabelText("이름")).toHaveValue("시험의 검");

    reject(new TypeError("Failed to fetch"));
    await vi.waitFor(() => expect(toast.error).toHaveBeenCalledWith(ACTION_ERROR_MESSAGE), WAIT);
    await vi.waitFor(() => expect(screen.getByLabelText("이름")).not.toHaveAttribute("readonly"), WAIT);
    expect(screen.getByLabelText("이름")).toHaveValue("시험의 검");
  });

  it("셀렉트·체크박스만 바꿔도 저장하지 않은 변경으로 보고, 다른 화면 링크로 떠나기 전에 묻는다", async () => {
    const confirm = vi.spyOn(window, "confirm").mockReturnValue(false);
    const { unmount } = render(
      <>
        {/* jsdom은 실제로 화면을 옮기지 못하므로, 묻지 않고 지나간 클릭도 여기서 멈춘다. */}
        <a href="/artifacts" onClick={(event) => event.preventDefault()}>
          유물 목록
        </a>
        <ArtifactForm readOnly={false} />
      </>,
    );
    const leave = () => userEvent.click(screen.getByRole("link", { name: "유물 목록" }));
    await leave();
    expect(confirm).not.toHaveBeenCalled();

    await userEvent.click(screen.getByRole("combobox", { name: "전시실" }));
    await userEvent.click(await screen.findByRole("option", { name: "북유럽·게르만 신화" }));
    await leave();
    expect(confirm).toHaveBeenCalledTimes(1);
    unmount();

    // 체크박스는 숨은 input의 change 이벤트가 폼까지 올라온다.
    confirm.mockClear();
    render(
      <>
        <a href="/artifacts" onClick={(event) => event.preventDefault()}>
          유물 목록
        </a>
        <ArtifactForm readOnly={false} />
      </>,
    );
    await userEvent.click(screen.getByRole("checkbox"));
    await leave();
    expect(confirm).toHaveBeenCalledTimes(1);
    confirm.mockRestore();
  });

  it("고치기 시작한 뒤 화면을 다시 읽어도(공개 전환 등) 처음 버전을 보내, 그사이 다른 곳의 저장을 덮어쓰지 않는다", async () => {
    const artifact = makeArtifactFixture(0);
    const sent = () => document.querySelector<HTMLInputElement>('input[name="expectedVersion"]')?.value;
    const { rerender } = render(<ArtifactForm artifact={artifact} version={1} readOnly={false} />);
    expect(sent()).toBe("1");
    // 고친 것이 없으면 새로 읽은 내용과 버전을 따른다.
    rerender(<ArtifactForm artifact={{ ...artifact, title: "다른 곳의 이름" }} version={2} readOnly={false} />);
    expect(sent()).toBe("2");
    expect(screen.getByLabelText("이름")).toHaveValue("다른 곳의 이름");
    // 고치기 시작하면 그때의 버전을 붙잡아 둔다. 고친 칸도 그대로 둔다.
    await userEvent.type(screen.getByLabelText("이름"), " 고침");
    rerender(<ArtifactForm artifact={{ ...artifact, title: "또 다른 이름" }} version={3} readOnly={false} />);
    expect(sent()).toBe("2");
    expect(screen.getByLabelText("이름")).toHaveValue("다른 곳의 이름 고침");

    saveArtifactAction.mockClear();
    saveArtifactAction.mockResolvedValue({ status: "idle" });
    await userEvent.click(screen.getByRole("button", { name: "저장" }));
    await vi.waitFor(() => expect(saveArtifactAction).toHaveBeenCalledTimes(1), WAIT);
    expect((saveArtifactAction.mock.calls[0]![1] as FormData).get("expectedVersion")).toBe("2");
  });

  it("고치지 않고 저장했다가 충돌로 실패하면, 화면을 다시 읽어도 보낸 값의 버전을 그대로 둔다", async () => {
    const artifact = makeArtifactFixture(0);
    const sent = () => document.querySelector<HTMLInputElement>('input[name="expectedVersion"]')?.value;
    saveArtifactAction.mockResolvedValue({ status: "error", formError: "먼저 저장했습니다.", fieldErrors: {}, values: { title: artifact.title, expectedVersion: "1" } });
    const { rerender } = render(<ArtifactForm artifact={artifact} version={1} readOnly={false} />);
    await userEvent.click(screen.getByRole("button", { name: "저장" }));
    await vi.waitFor(() => expect(screen.getByRole("alert")).toHaveTextContent("먼저 저장했습니다."), WAIT);
    // 공개 전환 등으로 화면을 다시 읽어 새 버전이 와도, 폼은 아직 예전 화면의 값을 그리고 있다.
    rerender(<ArtifactForm artifact={{ ...artifact, title: "다른 곳의 이름" }} version={2} readOnly={false} />);
    expect(sent()).toBe("1");
    expect(screen.getByLabelText("이름")).toHaveValue(artifact.title);
  });

  it("칸마다 레이블이 있고 필드 오류를 그 칸 아래에 보여 준다", async () => {
    saveArtifactAction.mockResolvedValue({
      status: "error",
      fieldErrors: { slug: ["소문자, 숫자, 하이픈(-)만 쓸 수 있습니다."] },
      values: { slug: "Bad Slug" },
    });
    render(<ArtifactForm readOnly={false} />);
    await userEvent.click(screen.getByRole("button", { name: "만들기" }));
    // 실패하면 폼을 다시 그리며 입력값과 오류를 복원한다.
    await vi.waitFor(() => expect(screen.getByLabelText("주소")).toHaveAttribute("aria-invalid", "true"), WAIT);
    const slug = screen.getByLabelText("주소");
    expect(slug).toHaveValue("Bad Slug");
    expect(screen.getByText("소문자, 숫자, 하이픈(-)만 쓸 수 있습니다.")).toBeInTheDocument();
    // 오류 문구와 설명이 칸에 이어지고(aria-describedby·aria-errormessage), 첫 오류 칸으로 초점이 간다.
    expect(slug).toHaveAccessibleDescription(/공개 사이트 주소.*소문자, 숫자, 하이픈\(-\)만 쓸 수 있습니다/);
    expect(slug).toHaveAccessibleErrorMessage("소문자, 숫자, 하이픈(-)만 쓸 수 있습니다.");
    await vi.waitFor(() => expect(slug).toHaveFocus(), WAIT);
    // 올바른 칸에는 aria-invalid를 붙이지 않는다.
    expect(screen.getByLabelText("이름")).not.toHaveAttribute("aria-invalid");
    // 알림은 폼 전체의 요약 하나만(칸마다 알리지 않는다).
    expect(screen.getAllByRole("alert")).toHaveLength(1);
    expect(screen.getByRole("alert")).toHaveTextContent("입력값 1곳을 확인해 주세요.");
  });
});
