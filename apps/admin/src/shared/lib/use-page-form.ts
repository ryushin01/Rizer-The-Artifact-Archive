"use client";

import { type FormEvent, useActionState, useRef, useState } from "react";
import { unstable_rethrow } from "next/navigation";
import { toast } from "sonner";

import { formDataToObject, type FormState } from "./form";
import { ACTION_ERROR_MESSAGE } from "./use-guarded-action";

type PageFormState = FormState & { attempt: number };
type FormValues = Record<string, string | string[]>;

/**
 * 화면 전체를 차지하는 폼을 서버 액션으로 제출한다.
 * 성공하면 알림을 띄우고, 실패하면 입력값과 필드 오류를 돌려준다.
 * attempt를 form의 key로 써서 다시 마운트해야 defaultValue가 복원된다.
 * 액션이 던지면(연결 끊김, 서버 오류) 오류 화면으로 넘기지 않고 입력값을 그대로 둔 채 안내한다.
 */
export function usePageForm(
  action: (prev: FormState, formData: FormData) => Promise<FormState>,
  defaults: FormValues,
) {
  // pending은 다음 렌더에야 true가 되어 빠른 연속 클릭을 못 막으므로 ref로 잠근다.
  // 성공해서 화면을 떠나는 경우(redirect)에는 잠금을 풀지 않는다(이동 신호를 다시 던지므로 아래에 닿지 않는다).
  const locked = useRef(false);
  const [state, formAction, pending] = useActionState(
    async (prev: PageFormState, formData: FormData): Promise<PageFormState> => {
      let result: FormState;
      try {
        result = await action(prev, formData);
      } catch (error) {
        unstable_rethrow(error);
        console.error(error);
        result = { status: "error", formError: ACTION_ERROR_MESSAGE, fieldErrors: {}, values: formDataToObject(formData) };
      }
      locked.current = false;
      const attempt = prev.attempt + 1;
      if (result.status === "success") {
        toast.success(result.message);
        return { status: "idle", attempt };
      }
      if (result.status === "error" && result.formError) toast.error(result.formError);
      return { ...result, attempt };
    },
    { status: "idle", attempt: 0 },
  );
  // 마지막으로 고친 때의 시도 번호. 저장에 성공하면 시도 번호가 바뀌어 저장한 것으로 본다. 실패하면 아직 저장하지 않은 것이다.
  const [touchedAt, setTouchedAt] = useState<number | null>(null);
  const dirty = touchedAt !== null && (touchedAt === state.attempt || state.status === "error");
  const errors = state.status === "error" ? state.fieldErrors : {};
  const values = state.status === "error" ? state.values : defaults;

  /** form의 onSubmit. 처리 중이면 제출을 막는다. */
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (locked.current) event.preventDefault();
    else locked.current = true;
  };

  return {
    formAction,
    onSubmit,
    /** form의 onChange. 고쳤다고 기록한다(저장하지 않고 떠날 때 묻는 데 쓴다). */
    onChange: () => setTouchedAt(state.attempt),
    dirty,
    /** 저장에 실패해 보낸 값을 다시 그리고 있다(고친 것이 없어도 그 값은 보낼 때의 화면 내용이다). */
    failed: state.status === "error",
    pending,
    formKey: state.attempt,
    formError: state.status === "error" ? state.formError : undefined,
    text(name: string) {
      const v = values[name];
      return Array.isArray(v) ? (v[0] ?? "") : (v ?? "");
    },
    invalid(name: string) {
      return Boolean(errors[name]?.length);
    },
    errors(name: string) {
      return errors[name]?.map((message) => ({ message }));
    },
    errorCount: Object.values(errors).filter((e) => e?.length).length,
  };
}
