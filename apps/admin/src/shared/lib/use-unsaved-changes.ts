"use client";

import { useEffect } from "react";

export const UNSAVED_MESSAGE = "저장하지 않은 변경이 있습니다. 이 화면을 떠나면 사라집니다. 떠날까요?";

/** 같은 출처의 다른 화면으로 가는 링크 클릭인지(새 창·내려받기·보조 키 클릭·같은 화면의 #이동은 아니다). */
function leavingLink(event: MouseEvent): HTMLAnchorElement | null {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return null;
  const link = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
  if (!link || (link.target && link.target !== "_self") || link.hasAttribute("download")) return null;
  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin) return null; // 다른 사이트로 가면 beforeunload가 묻는다.
  if (url.pathname === window.location.pathname && url.search === window.location.search) return null;
  return link;
}

/**
 * 저장하지 않은 변경이 있으면 화면을 떠나기 전에 묻는다.
 * - 새로 고침·창 닫기·다른 사이트로 이동: 브라우저의 beforeunload 확인 창.
 * - 사이드바 등 앱 안의 링크(클라이언트 이동): App Router는 이동을 막는 API가 없어, 링크 클릭을 캡처 단계에서 먼저 받아
 *   확인 창(window.confirm)으로 묻고 취소하면 이동을 막는다(React·Next의 Link 처리기보다 먼저 돈다).
 * 브라우저의 뒤로 가기는 막지 못한다(App Router가 popstate를 직접 처리).
 */
export function useUnsavedChangesWarning(dirty: boolean, message = UNSAVED_MESSAGE) {
  useEffect(() => {
    if (!dirty) return;
    const onBeforeUnload = (event: BeforeUnloadEvent) => event.preventDefault();
    const onClick = (event: MouseEvent) => {
      if (!leavingLink(event) || window.confirm(message)) return;
      event.preventDefault();
      event.stopPropagation();
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    document.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
      document.removeEventListener("click", onClick, true);
    };
  }, [dirty, message]);
}
