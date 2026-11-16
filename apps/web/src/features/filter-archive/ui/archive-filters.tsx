"use client";

import {
  GALLERIES,
  galleryName,
  KINDS,
  kindName,
  SEARCH_MAX_LENGTH,
  type ArtifactQuery,
  type GalleryId,
  type KindId,
} from "@rizer/domain";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { useLocale, useMessages } from "@/shared/i18n";
import { media } from "@/shared/config";
import { IconChevronDown, IconSearch, MonoLabel } from "@/shared/ui";

import { cleared, hasActiveFilters, queryChanged, selectArchive } from "../model/slice";

const SORTS: { value: ArtifactQuery["sort"]; label: "sortFeatured" | "sortOldest" | "sortNewest" | "sortTitle" }[] = [
  { value: "featured", label: "sortFeatured" },
  { value: "oldest", label: "sortOldest" },
  { value: "newest", label: "sortNewest" },
  { value: "title", label: "sortTitle" },
];

/**
 * 아카이브 검색·필터. 바꿀 때마다 사가가 목록을 다시 불러온다(검색어는 잠시 기다림).
 * 전시실은 라디오 버튼이라 화살표 키로 고를 수 있다.
 */
export function ArchiveFilters() {
  const dispatch = useDispatch();
  const locale = useLocale();
  const t = useMessages().archive;
  const { query, total, status, error } = useSelector(selectArchive);
  const id = useId();

  return (
    <Wrap role="search" aria-label={t.searchLabel} onSubmit={(e) => e.preventDefault()}>
      <Row>
        <Search>
          <label htmlFor={`${id}-q`}>
            <MonoLabel>{t.search}</MonoLabel>
          </label>
          <SearchBox>
            <IconSearch />
            <input
              id={`${id}-q`}
              type="search"
              placeholder={t.placeholder}
              defaultValue={query.q ?? ""}
              maxLength={SEARCH_MAX_LENGTH}
              onChange={(e) => dispatch(queryChanged({ q: e.target.value.trim() || undefined }))}
              autoComplete="off"
            />
          </SearchBox>
        </Search>
        <SelectField>
          <label htmlFor={`${id}-kind`}>
            <MonoLabel>{t.kind}</MonoLabel>
          </label>
          <SelectBox>
            <select
              id={`${id}-kind`}
              value={query.kind ?? ""}
              onChange={(e) => dispatch(queryChanged({ kind: (e.target.value || undefined) as KindId | undefined }))}
            >
              <option value="">{t.allKinds}</option>
              {KINDS.map((k) => (
                <option key={k.id} value={k.id}>
                  {kindName(k.id, locale)}
                </option>
              ))}
            </select>
            <IconChevronDown />
          </SelectBox>
        </SelectField>
        <SelectField>
          <label htmlFor={`${id}-sort`}>
            <MonoLabel>{t.sort}</MonoLabel>
          </label>
          <SelectBox>
            <select
              id={`${id}-sort`}
              value={query.sort}
              onChange={(e) => dispatch(queryChanged({ sort: e.target.value as ArtifactQuery["sort"] }))}
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>
                  {t[s.label]}
                </option>
              ))}
            </select>
            <IconChevronDown />
          </SelectBox>
        </SelectField>
      </Row>

      <Chips>
        <legend>
          <MonoLabel>{t.gallery}</MonoLabel>
        </legend>
        <ChipList>
          {[{ id: "" as const }, ...GALLERIES].map((g) => (
            <Chip key={g.id || "all"}>
              <input
                type="radio"
                name={`${id}-gallery`}
                value={g.id}
                checked={(query.gallery ?? "") === g.id}
                onChange={() => dispatch(queryChanged({ gallery: (g.id || undefined) as GalleryId | undefined }))}
              />
              <span>{g.id ? galleryName(g.id, locale) : t.allGalleries}</span>
            </Chip>
          ))}
        </ChipList>
      </Chips>

      <Summary>
        {/* 처음부터 있는 알림 영역. 찾는 중·결과 수·불러오기 실패를 여기서 알린다(role="status"가 polite를 뜻한다). */}
        <p role="status">{status === "loading" ? t.searching : status === "error" ? error : t.total(total)}</p>
        {hasActiveFilters(query) && (
          <ResetButton type="button" onClick={() => dispatch(cleared())}>
            {t.clear}
          </ResetButton>
        )}
      </Summary>
    </Wrap>
  );
}

const Wrap = styled.form`
  display: grid;
  gap: 20px;
`;
const Row = styled.div`
  display: grid;
  gap: 16px;
  ${media.md} {
    grid-template-columns: 1fr 180px 180px;
    align-items: end;
  }
`;
const Search = styled.div`
  display: grid;
  gap: 8px;
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 16px;
  min-height: 52px;
  border: 1px solid ${({ theme }) => theme.color.lineStrong};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.color.surface};
  &:focus-within {
    outline: 3px solid ${({ theme }) => theme.color.focus};
    outline-offset: 2px;
  }
  svg {
    width: 18px;
    color: ${({ theme }) => theme.color.muted};
  }
  input {
    flex: 1;
    min-width: 0;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    outline: none;
    padding: 12px 0;
  }
  input::placeholder {
    color: ${({ theme }) => theme.color.muted};
  }
`;
const SelectField = styled.div`
  display: grid;
  gap: 8px;
`;
/** 셀렉트 안쪽 여백(테두리 안쪽). 화살표도 오른쪽 끝에서 같은 거리에 둔다. */
const SELECT_INSET = 14;
/** 화살표 그림의 너비(IconChevronDown은 상자 끝이 곧 그림 끝이다) */
const SELECT_ICON = 14;
/**
 * 셀렉트와 직접 그린 화살표. 브라우저 기본 화살표는 위치를 맞출 수 없어 appearance: none으로 지우고,
 * 화살표를 칸 오른쪽 끝에서 왼쪽 글자와 같은 거리(테두리 + 안쪽 여백)에 둔다. 화살표는 꾸밈이라 누르기·낭독에서 뺀다.
 */
const SelectBox = styled.div`
  position: relative;
  select {
    width: 100%;
    min-height: 52px;
    padding: 0 ${SELECT_INSET + SELECT_ICON + 8}px 0 ${SELECT_INSET}px;
    border: 1px solid ${({ theme }) => theme.color.lineStrong};
    border-radius: ${({ theme }) => theme.radius.sm};
    background: ${({ theme }) => theme.color.surface};
    color: inherit;
    font: inherit;
    appearance: none;
    cursor: pointer;
  }
  svg {
    position: absolute;
    top: 50%;
    right: ${SELECT_INSET + 1}px;
    width: ${SELECT_ICON}px;
    height: ${(SELECT_ICON * 9) / 14}px;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.color.muted};
    pointer-events: none;
  }
`;
const Chips = styled.fieldset`
  border: 0;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
  legend {
    padding: 0;
    margin-bottom: 10px;
  }
`;
const ChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
const Chip = styled.label`
  position: relative;
  input {
    position: absolute;
    inset: 0;
    opacity: 0;
    margin: 0;
    cursor: pointer;
  }
  span {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 8px 18px;
    border-radius: ${({ theme }) => theme.radius.pill};
    border: 1px solid ${({ theme }) => theme.color.lineStrong};
    font-size: 14px;
    transition: background 0.2s;
  }
  input:checked + span {
    background: ${({ theme }) => theme.color.text};
    color: ${({ theme }) => theme.color.ink};
    border-color: ${({ theme }) => theme.color.text};
  }
  input:hover + span {
    border-color: ${({ theme }) => theme.color.text};
  }
  input:focus-visible + span {
    outline: 3px solid ${({ theme }) => theme.color.focus};
    outline-offset: 2px;
  }
`;
const Summary = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.color.muted};
`;
const ResetButton = styled.button`
  border: 0;
  background: none;
  padding: 8px 0;
  min-height: 44px;
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.text};
`;
