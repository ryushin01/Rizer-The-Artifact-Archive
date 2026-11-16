import type { Region } from "@rizer/domain";

/** 편집기 목록의 주석 하나 */
export type Item = { id: string; title: string; body: string; region: Region };

/**
 * 실행 취소·다시 실행 기록. present가 지금 목록이고, past는 이전 목록들(오래된 것부터), future는 되돌린 목록들이다.
 * last는 마지막 변경의 묶음 열쇠와 시각이다. 같은 칸을 이어서 고치면(글자를 칠 때마다) 한 번의 변경으로 묶는다.
 */
export type History = { past: Item[][]; present: Item[]; future: Item[][]; last?: { key: string; at: number } };

export type HistoryAction =
  /** 목록을 바꾼다. update는 순수 함수여야 한다. coalesce가 같고 1초 안이면 앞의 변경과 묶는다. */
  | { type: "apply"; update: (list: Item[]) => Item[]; at: number; coalesce?: string }
  | { type: "undo" }
  | { type: "redo" };

/** 기록을 너무 많이 쌓지 않는다(메모리). */
const LIMIT = 100;
const COALESCE_MS = 1000;

export const startHistory = (present: Item[]): History => ({ past: [], present, future: [] });

export function historyReducer(state: History, action: HistoryAction): History {
  switch (action.type) {
    case "apply": {
      const next = action.update(state.present);
      if (next === state.present) return state;
      const last = action.coalesce ? { key: action.coalesce, at: action.at } : undefined;
      if (action.coalesce && state.last?.key === action.coalesce && action.at - state.last.at < COALESCE_MS) {
        return { ...state, present: next, future: [], last };
      }
      return { past: [...state.past, state.present].slice(-LIMIT), present: next, future: [], last };
    }
    case "undo": {
      const previous = state.past.at(-1);
      if (!previous) return state;
      return { past: state.past.slice(0, -1), present: previous, future: [state.present, ...state.future] };
    }
    case "redo": {
      const [next, ...rest] = state.future;
      if (!next) return state;
      return { past: [...state.past, state.present], present: next, future: rest };
    }
  }
}
