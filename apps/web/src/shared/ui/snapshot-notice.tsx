"use client";

import styled from "styled-components";

import { useMessages } from "@/shared/i18n";

/**
 * 관리 서버(공개 API)에 닿지 못해 저장해 둔 사본으로 보여 주는 중이라는 안내.
 * 화면 전환 없이 내용이 바뀐 것을 알리므로 role="status"로 둔다.
 */
export function SnapshotNotice() {
  const t = useMessages().snapshot;
  return (
    <Notice role="status">
      <p>{t.notice}</p>
    </Notice>
  );
}

const Notice = styled.div`
  margin: 12px auto;
  max-width: 1200px;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.color.lineStrong};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  p {
    font-size: 14px;
    line-height: 1.6;
    color: ${({ theme }) => theme.color.text};
  }
`;
