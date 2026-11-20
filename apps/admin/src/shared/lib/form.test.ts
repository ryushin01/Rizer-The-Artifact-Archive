import { describe, expect, it } from "vitest";
import { z } from "zod";

import { expectedVersion, formDataToObject, formError } from "./form";

describe("formDataToObject", () => {
  it("같은 이름이 여러 번 오면 배열로 모은다", () => {
    const fd = new FormData();
    fd.append("name", "아줄");
    fd.append("categories", "abstract");
    fd.append("categories", "family");
    expect(formDataToObject(fd)).toEqual({
      name: "아줄",
      categories: ["abstract", "family"],
    });
  });
});

describe("formError", () => {
  it("문자열은 폼 전체 오류, Zod 오류는 필드 오류로 만든다", () => {
    expect(formError({ a: "1" }, "권한 없음")).toEqual({
      status: "error",
      formError: "권한 없음",
      fieldErrors: {},
      values: { a: "1" },
    });
    const parsed = z.object({ a: z.number() }).safeParse({ a: "x" });
    const state = formError({ a: "x" }, parsed.error!);
    expect(state.status === "error" && Object.keys(state.fieldErrors)).toEqual(["a"]);
  });
});

describe("expectedVersion", () => {
  it("0 이상의 정수만 받는다(폼은 문자열, 편집기는 숫자로 보낸다)", () => {
    expect(expectedVersion("0")).toBe(0);
    expect(expectedVersion("12")).toBe(12);
    expect(expectedVersion(7)).toBe(7);
    for (const value of [undefined, null, "", " 1", "1.5", "-1", "1e3", "2026-11-16T00:00:00.000Z", -1, 1.5, Number.NaN, "9007199254740993"]) {
      expect(expectedVersion(value), String(value)).toBeUndefined();
    }
  });
});
