/**
 * 입력 칸과 그 설명·오류 문구를 잇는 속성(KWCAG 7.3.1 오류 정정, 7.3.2 레이블).
 * - 잘못된 값일 때만 aria-invalid="true"를 붙인다(빈 칸이나 처음 값에는 붙이지 않는다).
 * - 오류 문구는 aria-errormessage로 잇고, 화면 낭독기 지원이 고르지 않아 aria-describedby로도 함께 잇는다.
 * - 설명 문구가 있으면 aria-describedby로 잇는다.
 * 설명·오류 요소에는 돌려주는 descriptionId·errorId를 id로 준다.
 */
export function fieldA11y(id: string, { invalid, description = false }: { invalid: boolean; description?: boolean }) {
  const descriptionId = `${id}-description`;
  const errorId = `${id}-error`;
  const describedBy = [description ? descriptionId : null, invalid ? errorId : null].filter(Boolean).join(" ");
  return {
    descriptionId,
    errorId,
    control: {
      "aria-invalid": invalid ? (true as const) : undefined,
      "aria-describedby": describedBy || undefined,
      "aria-errormessage": invalid ? errorId : undefined,
    },
  };
}
