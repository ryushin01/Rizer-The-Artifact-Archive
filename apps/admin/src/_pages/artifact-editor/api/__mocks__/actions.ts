// 스토리용 서버 액션(.storybook/preview.tsx의 sb.mock이 바꿔 끼운다). 결과는 스토리에서 mockResolvedValue로 정한다.
import { fn } from "storybook/test";

import type { ActionResult, FormState } from "@/shared/lib/form";

export const saveArtifactAction = fn(async (_prev: FormState, _formData: FormData): Promise<FormState> => ({
  status: "success",
  message: "저장했습니다.",
})).mockName("saveArtifactAction");

export const setStatusAction = fn(async (_id: string, status: string): Promise<ActionResult> => ({
  ok: true,
  message: status === "published" ? "공개했습니다." : "비공개로 바꿨습니다.",
})).mockName("setStatusAction");

export const deleteArtifactAction = fn(async (_id: string): Promise<ActionResult> => ({ ok: true, message: "" })).mockName(
  "deleteArtifactAction",
);
