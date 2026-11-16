"use client";

import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectReducedMotion } from "@/features/motion-preference";
import { theme } from "@/shared/config";

/** 점이 포인터에 이만큼(px) 가까워지면 멈춘다. */
const SETTLE_PX = 0.1;
const INTERACTIVE = "a, button, [role='button'], input, select, label";

/**
 * 마우스를 따라오는 붉은 점. 시스템 커서는 그대로 두고 장식으로만 더한다.
 * 정밀 포인터(마우스)일 때만, 움직임을 끄지 않았을 때만 보인다.
 * 포인터가 움직일 때만 프레임을 돌리고, 점이 포인터에 닿으면 멈춘다(가만히 보는 동안 매 프레임 그리지 않는다).
 */
export function CursorDot() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useSelector(selectReducedMotion);

  useEffect(() => {
    if (reduced || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const dot = ref.current;
    if (!dot) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let frame = 0;
    let visible = false;
    let hover = false;
    const step = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      const settled = Math.abs(x - cx) < SETTLE_PX && Math.abs(y - cy) < SETTLE_PX;
      if (settled) {
        cx = x;
        cy = y;
      }
      dot.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      frame = settled ? 0 : requestAnimationFrame(step);
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        visible = true;
        dot.dataset.visible = "true";
      }
      // 속성은 바뀔 때만 쓴다(움직일 때마다 스타일을 다시 계산하지 않게).
      const over = Boolean((e.target as Element | null)?.closest?.(INTERACTIVE));
      if (over !== hover) {
        hover = over;
        dot.dataset.hover = String(over);
      }
      if (!frame) frame = requestAnimationFrame(step);
    };
    const onLeave = () => {
      visible = false;
      dot.dataset.visible = "false";
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, [reduced]);

  if (reduced) return null;
  return <Dot ref={ref} aria-hidden data-visible="false" />;
}

const Dot = styled.div`
  position: fixed;
  top: -7px;
  left: -7px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${theme.color.accent};
  box-shadow: 0 0 18px ${theme.color.accent};
  pointer-events: none;
  z-index: ${theme.z.cursor};
  opacity: 0;
  transition:
    opacity 0.3s,
    width 0.3s,
    height 0.3s,
    top 0.3s,
    left 0.3s;
  &[data-visible="true"] {
    opacity: 1;
  }
  &[data-hover="true"] {
    width: 34px;
    height: 34px;
    top: -17px;
    left: -17px;
    background: rgba(226, 40, 60, 0.35);
  }
  @media (hover: none), (pointer: coarse) {
    display: none;
  }
`;
