// 스토리용 업로드 액션(.storybook/preview.tsx의 sb.mock이 바꿔 끼운다).
import { fn } from "storybook/test";

import type { ActionResult } from "@/shared/lib/form";

export const requestUploadAction = fn(async () => ({ ok: false as const, message: "스토리에서는 올리지 않습니다." })).mockName(
  "requestUploadAction",
);

export const processUploadAction = fn(async (): Promise<ActionResult> => ({ ok: true, message: "" })).mockName(
  "processUploadAction",
);
