import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";

import { motionSlice } from "@/features/motion-preference";
import { theme } from "@/shared/config";

import { CursorDot } from "./cursor-dot";

/** requestAnimationFrame을 손으로 돌린다. 몇 번 돌았는지와 아직 남은 요청을 본다. */
function manualFrames() {
  const queue: FrameRequestCallback[] = [];
  vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => queue.push(cb));
  vi.spyOn(window, "cancelAnimationFrame").mockImplementation(() => {});
  return {
    queue,
    /** 더 요청하지 않을 때까지(최대 limit번) 돌리고, 돈 횟수를 돌려준다. */
    flush(limit = 500) {
      let n = 0;
      while (queue.length && n < limit) {
        queue.shift()!(performance.now());
        n++;
      }
      return n;
    },
  };
}

function renderDot() {
  const store = configureStore({ reducer: { motion: motionSlice.reducer } });
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CursorDot />
      </ThemeProvider>
    </Provider>,
  );
  return document.querySelector<HTMLElement>("[data-visible]")!;
}

const move = (x: number, y: number) => window.dispatchEvent(new MouseEvent("pointermove", { clientX: x, clientY: y }));

describe("CursorDot", () => {
  it("포인터가 움직일 때만 프레임을 돌리고, 점이 포인터에 닿으면 멈춘다", () => {
    vi.stubGlobal("matchMedia", (media: string) => ({ matches: true, media, addEventListener() {}, removeEventListener() {} }));
    const frames = manualFrames();
    const dot = renderDot();
    // 움직이기 전에는 프레임을 요청하지 않는다.
    expect(frames.queue).toHaveLength(0);

    move(10, 20);
    move(12, 24);
    // 한 번 움직이는 동안 쌓인 요청은 하나뿐이고, 몇십 프레임 안에 멈춘다.
    expect(frames.queue).toHaveLength(1);
    const ran = frames.flush();
    expect(ran).toBeLessThan(500);
    expect(frames.queue).toHaveLength(0);
    expect(dot.style.transform).toBe("translate3d(12px, 24px, 0px)");
    expect(dot.dataset.visible).toBe("true");
  });
});
