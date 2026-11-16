"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useMessages } from "@/shared/i18n";
import styled, { css, keyframes } from "styled-components";

import { media } from "@/shared/config";
import { sessionFlag } from "@/shared/lib/safe-storage";
import { MonoLabel } from "@/shared/ui";

const GATE_KEY = "rizer:gate";

/**
 * 입장 화면. 한 번 지나가면 같은 탭에서는 다시 보이지 않는다(sessionStorage).
 * 돌아온 방문자에게 깜박이지 않도록, 루트 레이아웃의 인라인 스크립트가 그리기 전에 html[data-gate="seen"]을 붙인다.
 * 열려 있는 동안 입장 화면 말고는 모두 inert로 막고(본문만이 아니라 바로가기 링크·아래쪽 메뉴도),
 * 입장 버튼에 초점을 둔다. Esc로도 들어간다.
 */
const subscribeNothing = () => () => {};
/** 이번 탭에서 이미 지나갔는지. 서버에서는 알 수 없으므로 false(입장 화면은 CSS가 숨긴다). */
const useSeenOnLoad = () =>
  useSyncExternalStore(subscribeNothing, () => document.documentElement.dataset.gate === "seen", () => false);

/**
 * 입장 화면을 품은 body의 자식만 남기고 나머지를 inert로 막는다. 이미 inert였던 요소는 건드리지 않는다.
 * 돌려주는 함수가 막은 것만 푼다.
 */
function blockOutside(overlay: HTMLElement): () => void {
  let top: HTMLElement = overlay;
  while (top.parentElement && top.parentElement !== document.body) top = top.parentElement;
  const blocked = [...document.body.children].filter((el) => el !== top && !el.hasAttribute("inert"));
  for (const el of blocked) el.setAttribute("inert", "");
  return () => {
    for (const el of blocked.splice(0)) el.removeAttribute("inert");
  };
}

export function IntroGate() {
  const t = useMessages().gate;
  const seen = useSeenOnLoad();
  const [phase, setPhase] = useState<"open" | "leaving" | "gone">("open");
  const overlayRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const releaseRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (seen || !overlayRef.current) return;
    const release = blockOutside(overlayRef.current);
    releaseRef.current = release;
    document.body.style.overflow = "hidden";
    buttonRef.current?.focus();
    return () => {
      release();
      releaseRef.current = null;
      document.body.style.overflow = "";
    };
  }, [seen]);

  const enter = () => {
    if (phase !== "open") return;
    sessionFlag.set(GATE_KEY);
    document.documentElement.dataset.gate = "seen";
    releaseRef.current?.();
    releaseRef.current = null;
    document.body.style.overflow = "";
    const reduced = document.documentElement.dataset.motion === "reduce";
    setPhase(reduced ? "gone" : "leaving");
    if (!reduced) window.setTimeout(() => setPhase("gone"), 1100);
    document.getElementById("main")?.focus({ preventScroll: true });
  };

  if (phase === "gone" || (seen && phase === "open")) return null;
  return (
    <Overlay
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gate-title"
      data-gate
      $leaving={phase === "leaving"}
      onKeyDown={(e) => e.key === "Escape" && enter()}
    >
      <Rings aria-hidden />
      <h1 id="gate-title" className="sr-gate-title">
        {t.title}
      </h1>
      <Row>
        <Word aria-hidden>RIZER</Word>
        <EnterButton ref={buttonRef} type="button" onClick={enter}>
          <span>ENTER</span>
          <span>ARCHIVE</span>
          <span className="ko">{t.enter}</span>
        </EnterButton>
        <Word aria-hidden>ARCHIVE</Word>
      </Row>
      <Caption>
        <MonoLabel>[ THE ARTIFACT ARCHIVE OF LEGENDS ]</MonoLabel>
      </Caption>
    </Overlay>
  );
}

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.85; }
  50% { transform: scale(1.08); opacity: 1; }
`;

const Overlay = styled.div<{ $leaving: boolean }>`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.z.gate};
  display: grid;
  place-items: center;
  overflow: hidden;
  background: ${({ theme }) => theme.color.bg};
  transition:
    opacity 0.9s ${({ theme }) => theme.ease.out} 0.2s,
    transform 1.1s ${({ theme }) => theme.ease.out};
  ${({ $leaving }) =>
    $leaving &&
    css`
      opacity: 0;
      transform: scale(1.08);
      pointer-events: none;
    `}
  /* 돌아온 방문자: 하이드레이션 전에도 보이지 않게 한다. */
  html[data-gate="seen"] & {
    display: ${({ $leaving }) => ($leaving ? "grid" : "none")};
  }
  .sr-gate-title {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }
`;
const Rings = styled.div`
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(circle at 50% 50%, rgba(226, 40, 60, 0.55) 0 6%, transparent 18%),
    repeating-radial-gradient(circle at 50% 50%, rgba(170, 20, 40, 0.28) 0 2%, rgba(40, 60, 190, 0.18) 4%, transparent 9%);
  filter: blur(28px);
  animation: ${pulse} 4.5s ease-in-out infinite;
  ${media.reduced} {
    animation: none;
  }
`;
const Row = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(16px, 6vw, 96px);
  padding-inline: 16px;
`;
const Word = styled.span`
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 800;
  font-size: clamp(22px, 6.4vw, 92px);
  letter-spacing: 0.02em;
  display: none;
  ${media.sm} {
    display: block;
  }
`;
const EnterButton = styled.button`
  display: grid;
  place-content: center;
  gap: 2px;
  width: clamp(132px, 16vw, 168px);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  color: #fff;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 15px;
  letter-spacing: 0.1em;
  line-height: 1.25;
  background: radial-gradient(circle at 40% 30%, #ff4a5c, ${({ theme }) => theme.color.accent} 55%, #8f0f1e);
  box-shadow:
    0 0 0 8px rgba(255, 255, 255, 0.06),
    0 0 0 9px rgba(0, 0, 0, 0.8),
    0 20px 60px rgba(226, 40, 60, 0.55),
    inset 0 -10px 24px rgba(0, 0, 0, 0.35);
  transition: transform 0.4s ${({ theme }) => theme.ease.out};
  &:hover {
    transform: scale(1.05);
  }
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.focus};
    outline-offset: 10px;
  }
  .ko {
    margin-top: 6px;
    font-family: ${({ theme }) => theme.font.body};
    font-size: 12px;
    letter-spacing: 0;
  }
`;
const Caption = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  text-align: center;
`;
