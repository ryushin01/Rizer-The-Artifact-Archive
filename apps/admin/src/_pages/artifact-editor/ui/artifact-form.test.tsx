import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { toast } from "sonner";
import { describe, expect, it, vi } from "vitest";

import { ACTION_ERROR_MESSAGE } from "@/shared/lib/use-guarded-action";

import { ArtifactForm } from "./artifact-form";

const saveArtifactAction = vi.hoisted(() => vi.fn());
vi.mock("../api/actions", () => ({ saveArtifactAction }));
vi.mock("sonner", () => ({ toast: { success: vi.fn(), error: vi.fn() } }));

describe("ArtifactForm", () => {
  it("만들기 버튼을 더블 클릭해도 저장 요청은 한 번이다", async () => {
    let resolve!: (v: unknown) => void;
    saveArtifactAction.mockReturnValue(new Promise((r) => (resolve = r)));
    render(<ArtifactForm readOnly={false} />);
    await userEvent.dblClick(screen.getByRole("button", { name: "만들기" }));
    await vi.waitFor(() => expect(saveArtifactAction).toHaveBeenCalledTimes(1));
    await new Promise((r) => setTimeout(r, 50));
    expect(saveArtifactAction).toHaveBeenCalledTimes(1);
    // React는 진행 중인 액션들을 함께 묶으므로, 다음 테스트를 막지 않게 끝내 둔다.
    resolve({ status: "idle" });
    await vi.waitFor(() => expect(screen.getByRole("button", { name: "만들기" })).toBeEnabled());
  });

  it("저장 요청이 실패해도(연결 끊김) 오류 화면으로 넘기지 않고 입력값을 남긴 채 안내한다", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    saveArtifactAction.mockRejectedValue(new TypeError("Failed to fetch"));
    render(<ArtifactForm readOnly={false} />);
    await userEvent.type(screen.getByLabelText("이름"), "시험의 검");
    await userEvent.click(screen.getByRole("button", { name: "만들기" }));
    await vi.waitFor(() => expect(toast.error).toHaveBeenCalledWith(ACTION_ERROR_MESSAGE));
    expect(screen.getByLabelText("이름")).toHaveValue("시험의 검");
    // 다시 누를 수 있다.
    await vi.waitFor(() => expect(screen.getByRole("button", { name: "만들기" })).toBeEnabled());
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
    await vi.waitFor(() => expect(screen.getByLabelText("주소")).toHaveAttribute("aria-invalid", "true"));
    const slug = screen.getByLabelText("주소");
    expect(slug).toHaveValue("Bad Slug");
    expect(screen.getByText("소문자, 숫자, 하이픈(-)만 쓸 수 있습니다.")).toBeInTheDocument();
    // 오류 문구와 설명이 칸에 이어지고(aria-describedby·aria-errormessage), 첫 오류 칸으로 초점이 간다.
    expect(slug).toHaveAccessibleDescription(/공개 사이트 주소.*소문자, 숫자, 하이픈\(-\)만 쓸 수 있습니다/);
    expect(slug).toHaveAccessibleErrorMessage("소문자, 숫자, 하이픈(-)만 쓸 수 있습니다.");
    await vi.waitFor(() => expect(slug).toHaveFocus());
    // 올바른 칸에는 aria-invalid를 붙이지 않는다.
    expect(screen.getByLabelText("이름")).not.toHaveAttribute("aria-invalid");
    // 알림은 폼 전체의 요약 하나만(칸마다 알리지 않는다).
    expect(screen.getAllByRole("alert")).toHaveLength(1);
    expect(screen.getByRole("alert")).toHaveTextContent("입력값 1곳을 확인해 주세요.");
  });
});
