"use client";

import styled from "styled-components";

import { useLocalePath, useMessages } from "@/shared/i18n";
import { Container, Display, LinkButton, MonoLabel } from "@/shared/ui";

/** 없는 주소. 오류 화면과 같은 틀을 쓴다(오류 화면은 표시를 "[ ERROR ]"로 바꾼다). */
export function NotFoundPage({
  code = "404",
  title = "Lost Relic",
  message,
  action,
}: {
  code?: string;
  title?: string;
  message?: string;
  action?: React.ReactNode;
}) {
  const t = useMessages().notFound;
  const path = useLocalePath();
  return (
    <main id="main" tabIndex={-1}>
      <Container>
        <Wrap>
          <MonoLabel $tone="accent">[ {code} ]</MonoLabel>
          <Display as="h1" $size="lg">
            {title}
          </Display>
          <p>{message ?? t.message}</p>
          {action ?? (
            <LinkButton href={path("/artifacts")} $variant="light">
              {t.action}
            </LinkButton>
          )}
        </Wrap>
      </Container>
    </main>
  );
}

const Wrap = styled.div`
  display: grid;
  justify-items: start;
  gap: 24px;
  min-height: 80vh;
  align-content: center;
  p {
    color: ${({ theme }) => theme.color.muted};
    max-width: 32em;
  }
`;
