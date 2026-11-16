import type { ArtifactListResponse } from "@rizer/domain";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";

import { makeArtifactFixture } from "@/entities/artifact";

import { ArchiveGrid } from "./archive-grid";

const first = [0, 1, 2, 3].map((i) => makeArtifactFixture(i));
const rest = [4, 5].map((i) => makeArtifactFixture(i, { title: `더 불러온 유물 ${i}` }));

const meta = {
  title: "Pages/Archive/ArchiveGrid",
  component: ArchiveGrid,
  parameters: {
    store: { archive: { query: { sort: "featured" }, items: first, total: 6, status: "idle", error: null, more: "idle" } },
  },
  // "더 보기"가 부르는 공개 사이트의 검색 API를 흉내 낸다. 다음 묶음(2점)을 돌려준다.
  beforeEach: () => {
    const original = window.fetch;
    window.fetch = async (input, init) => {
      if (String(input).includes("/api/search")) {
        const body: ArtifactListResponse = { items: rest, total: 6 };
        return new Response(JSON.stringify(body), { headers: { "content-type": "application/json" } });
      }
      return original(input, init);
    };
    return () => {
      window.fetch = original;
    };
  },
} satisfies Meta<typeof ArchiveGrid>;
export default meta;

/** "더 보기"를 누르면 다음 묶음을 붙이고, 새로 붙은 첫 카드로 초점을 옮기고, 몇 점을 더 불러왔는지 알린다. */
export const LoadMore: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("6점 중 4점")).toBeVisible();
    await userEvent.click(canvas.getByRole("button", { name: "유물 더 보기" }));
    await waitFor(() => expect(canvas.getAllByRole("listitem")).toHaveLength(6));
    await waitFor(() => expect(canvas.getByRole("link", { name: "더 불러온 유물 4" })).toHaveFocus());
    await expect(canvas.getByText(/2점을 더 불러왔습니다\./)).toBeInTheDocument();
    // 다 불러오면 버튼이 사라진다.
    await expect(canvas.queryByRole("button", { name: "유물 더 보기" })).toBeNull();
  },
};

/** 결과가 없을 때의 안내 */
export const Empty: StoryObj<typeof meta> = {
  parameters: { store: { archive: { query: { sort: "featured" }, items: [], total: 0, status: "idle", error: null, more: "idle" } } },
};

/** 공개 API에 닿지 못했을 때: "결과 없음"이 아니라 오류와 다시 시도 버튼. 다시 시도하면 브라우저에서 읽는다. */
export const Offline: StoryObj<typeof meta> = {
  parameters: {
    store: {
      archive: {
        query: { sort: "featured" },
        items: [],
        total: 0,
        status: "error",
        error: "유물 목록을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.",
        more: "idle",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/유물 목록을 불러오지 못했습니다/)).toBeVisible();
    await expect(canvas.queryByText(/조건에 맞는 유물이 없습니다/)).toBeNull();
    await userEvent.click(canvas.getByRole("button", { name: "다시 시도" }));
    await waitFor(() => expect(canvas.getAllByRole("listitem")).toHaveLength(2));
  },
};
