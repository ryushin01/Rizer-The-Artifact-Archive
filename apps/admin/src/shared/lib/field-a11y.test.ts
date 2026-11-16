import { describe, expect, it } from "vitest";

import { fieldA11y } from "./field-a11y";

describe("fieldA11y", () => {
  it("올바른 칸에는 aria-invalid를 붙이지 않고 설명만 잇는다", () => {
    expect(fieldA11y("slug", { invalid: false, description: true }).control).toEqual({
      "aria-invalid": undefined,
      "aria-describedby": "slug-description",
      "aria-errormessage": undefined,
    });
    expect(fieldA11y("title", { invalid: false }).control["aria-describedby"]).toBeUndefined();
  });

  it("잘못된 칸은 오류 문구를 aria-errormessage와 aria-describedby로 함께 잇는다", () => {
    const { control, errorId } = fieldA11y("slug", { invalid: true, description: true });
    expect(errorId).toBe("slug-error");
    expect(control).toEqual({
      "aria-invalid": true,
      "aria-describedby": "slug-description slug-error",
      "aria-errormessage": "slug-error",
    });
  });
});
