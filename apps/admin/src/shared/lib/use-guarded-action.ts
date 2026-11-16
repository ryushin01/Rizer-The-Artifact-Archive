"use client";

import { unstable_rethrow } from "next/navigation";
import { useRef, useTransition } from "react";
import { toast } from "sonner";

/** 서버에 닿지 못했거나 서버가 처리하지 못했을 때의 안내 */
export const ACTION_ERROR_MESSAGE = "요청을 처리하지 못했습니다. 연결을 확인한 뒤 다시 시도해 주세요.";

/**
 * Next.js가 처리해야 하는 신호(서버 액션의 redirect, 로그인 만료로 로그인 화면으로 보내기 등)인지.
 * 서버 액션이 redirect하면 브라우저의 액션 Promise가 이 신호로 거부된다.
 */
export function isNavigationSignal(error: unknown): boolean {
  try {
    unstable_rethrow(error);
    return false;
  } catch {
    return true;
  }
}

/**
 * 버튼으로 바로 실행하는 서버 액션(주석 저장, 공개 전환, 삭제)을 감싼다.
 * - 처리 중에는 다시 실행하지 않는다. pending은 다음 렌더에야 true가 되어 빠른 연속 클릭을 못 막으므로 ref로 잠근다.
 * - 액션이 던진 오류(네트워크 끊김, 서버 오류)는 알림으로 바꾸고 잠금을 푼다. 전환(startTransition) 안에서 던진 오류는
 *   가장 가까운 오류 경계로 가서 화면 전체가 오류 화면으로 바뀌고, 편집 중인 내용(주석 편집기)이 사라지기 때문이다.
 * - 성공해서 화면을 떠나는 액션(redirect)의 신호는 Next.js가 처리하도록 다시 던지고, 잠금은 풀지 않는다.
 */
export function useGuardedAction() {
  const [pending, startTransition] = useTransition();
  const locked = useRef(false);
  const run = (action: () => Promise<void>) => {
    if (locked.current) return;
    locked.current = true;
    startTransition(async () => {
      try {
        await action();
      } catch (error) {
        unstable_rethrow(error);
        console.error(error);
        toast.error(ACTION_ERROR_MESSAGE);
      }
      locked.current = false;
    });
  };
  return { pending, run };
}
