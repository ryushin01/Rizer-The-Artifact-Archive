"use client";

import styled from "styled-components";

import { useMessages } from "@/shared/i18n";
import { Button, MonoLabel } from "@/shared/ui";

/**
 * 초안 미리보기 안내. 관리 화면의 "공개 사이트에서 미리 보기"로 들어온 동안 유물 화면 맨 위에 보인다.
 * 끝내기는 POST 폼이라 자바스크립트 없이도 동작하고, 끝낸 뒤 exitTo(공개 유물이면 그 화면, 아니면 아카이브)로 간다.
 */
export function PreviewBanner({ exitTo }: { exitTo: string }) {
  const t = useMessages().artifact;
  return (
    <Bar>
      <MonoLabel $tone="accent">[ {t.preview} ]</MonoLabel>
      <p>{t.previewNote}</p>
      <form action="/api/preview/exit" method="post">
        <input type="hidden" name="next" value={exitTo} />
        <Button type="submit" $variant="ghost">
          {t.previewExit}
        </Button>
      </form>
    </Bar>
  );
}

const Bar = styled.div`
  display: grid;
  gap: 10px;
  justify-items: start;
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.color.lineStrong};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.color.muted};
  }
`;
