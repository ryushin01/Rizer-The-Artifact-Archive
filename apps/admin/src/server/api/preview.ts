import "server-only";

import { PREVIEW_TTL_MS, signPreview } from "@rizer/domain/preview";
import { NextResponse, type NextRequest } from "next/server";

import { getForAdmin } from "@/server/artifacts/queries";
import { getCurrentUser } from "@/server/auth/current-user";
import { webUrl } from "@/shared/config";

const text = (body: string, status: number) =>
  new NextResponse(body, { status, headers: { "content-type": "text/plain; charset=utf-8" } });

/**
 * 공개 사이트에서 미리 보기(비공개 유물도 공개 화면 모양으로 본다).
 * 로그인한 사용자만 쓸 수 있고(아니면 로그인 화면으로), 누를 때마다 10분짜리 서명을 만들어 공개 사이트의 /api/preview로 보낸다.
 * 공개 사이트는 서명을 확인하고 초안 모드(draftMode)를 켠 뒤 유물 화면으로 보낸다.
 */
export async function previewHandler(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await getCurrentUser();
  const { id } = await params;
  const found = await getForAdmin(id);
  if (!found) return text("유물을 찾을 수 없습니다.", 404);
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) return text("미리 보기 설정(REVALIDATE_SECRET)이 없습니다.", 503);
  const { slug } = found.artifact;
  const expiresAt = Date.now() + PREVIEW_TTL_MS;
  const url = new URL("/api/preview", webUrl());
  url.search = new URLSearchParams({ slug, exp: String(expiresAt), sig: await signPreview(secret, slug, expiresAt) }).toString();
  return NextResponse.redirect(url, 307);
}
