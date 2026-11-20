import { describe, expect, it } from "vitest";

import { historyReducer, type Item, startHistory } from "./history";

const item = (id: string, title = id): Item => ({ id, title, body: "", region: { x: 0, y: 0, w: 10, h: 10 } });
const add = (id: string, at = 0) => ({ type: "apply" as const, at, update: (list: Item[]) => [...list, item(id)] });
const rename = (id: string, title: string, at: number) => ({
  type: "apply" as const,
  at,
  coalesce: `title:${id}`,
  update: (list: Item[]) => list.map((i) => (i.id === id ? { ...i, title } : i)),
});

describe("주석 편집기 실행 취소", () => {
  it("되돌리고 다시 실행하며, 새로 고치면 다시 실행할 것은 지운다", () => {
    let s = startHistory([]);
    s = historyReducer(s, add("a"));
    s = historyReducer(s, add("b"));
    s = historyReducer(s, { type: "undo" });
    expect(s.present.map((i) => i.id)).toEqual(["a"]);
    s = historyReducer(s, { type: "redo" });
    expect(s.present.map((i) => i.id)).toEqual(["a", "b"]);
    s = historyReducer(s, { type: "undo" });
    s = historyReducer(s, add("c"));
    expect(s.future).toEqual([]);
    expect(historyReducer(s, { type: "redo" })).toBe(s);
  });

  it("같은 칸을 1초 안에 이어서 고치면 한 번으로 묶는다", () => {
    let s = historyReducer(startHistory([]), add("a"));
    s = historyReducer(s, rename("a", "엑", 1000));
    s = historyReducer(s, rename("a", "엑스", 1500));
    s = historyReducer(s, rename("a", "엑스칼", 2200));
    expect(s.present[0]?.title).toBe("엑스칼");
    s = historyReducer(s, { type: "undo" });
    expect(s.present[0]?.title).toBe("a");
    // 1초 넘게 쉬면 따로 쌓는다.
    s = historyReducer(s, rename("a", "그람", 5000));
    s = historyReducer(s, rename("a", "그람!", 7000));
    expect(historyReducer(s, { type: "undo" }).present[0]?.title).toBe("그람");
  });

  it("되돌릴 것이 없으면 그대로이고, 기록은 100개까지만 둔다", () => {
    const empty = startHistory([]);
    expect(historyReducer(empty, { type: "undo" })).toBe(empty);
    let s = empty;
    for (let i = 0; i < 130; i++) s = historyReducer(s, add(`n${i}`, i));
    expect(s.past).toHaveLength(100);
  });
});
