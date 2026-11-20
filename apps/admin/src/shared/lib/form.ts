import { z } from "zod";

/** 폼 서버 액션의 결과. 실패하면 입력값을 돌려줘 폼을 복원한다. */
export type FormState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | {
      status: "error";
      formError?: string;
      fieldErrors: Partial<Record<string, string[]>>;
      values: Record<string, string | string[]>;
    };

/** 메뉴 등에서 바로 실행하는 액션의 결과 */
export type ActionResult = { ok: boolean; message: string };

/** 낙관적 잠금에 걸렸을 때(화면을 연 뒤 다른 곳에서 먼저 저장함)의 안내 */
export const CONFLICT_MESSAGE =
  "이 화면을 연 뒤 다른 곳에서 먼저 저장했습니다. 덮어쓰지 않았습니다. 고친 내용을 따로 적어 두고 새로 고친 뒤 다시 저장해 주세요.";

/** 저장 기준이 없거나 잘못된 요청(낙관적 잠금을 건너뛰지 않도록 저장하지 않는다) */
export const MISSING_VERSION_MESSAGE = "저장 기준(화면을 연 때의 버전)을 받지 못해 저장하지 않았습니다. 새로 고친 뒤 다시 저장해 주세요.";

/** 폼·편집기가 보낸 버전(낙관적 잠금 기준, 0 이상의 정수). 없거나 잘못된 값이면 undefined다. */
export function expectedVersion(value: unknown): number | undefined {
  const n = typeof value === "number" ? value : typeof value === "string" && /^\d+$/.test(value) ? Number(value) : Number.NaN;
  return Number.isSafeInteger(n) && n >= 0 ? n : undefined;
}

/** FormData → 객체. 같은 이름이 여러 번 오면 배열로 모은다. */
export function formDataToObject(formData: FormData) {
  const result: Record<string, string | string[]> = {};
  for (const key of new Set(formData.keys())) {
    const values = formData.getAll(key).map(String);
    result[key] = values.length > 1 ? values : values[0];
  }
  return result;
}

export function formError(
  values: Record<string, string | string[]>,
  error: z.ZodError | string,
): FormState {
  return typeof error === "string"
    ? { status: "error", formError: error, fieldErrors: {}, values }
    : {
        status: "error",
        fieldErrors: z.flattenError(error).fieldErrors,
        values,
      };
}
