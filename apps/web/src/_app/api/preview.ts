import "server-only";

import { localeSchema, safeLocalPath, slugSchema } from "@rizer/domain";
import { verifyPreview } from "@rizer/domain/preview";
import { draftMode } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

import { localePath } from "@/shared/i18n";

/**
 * 초안 미리보기 시작. 관리 화면이 서명한 링크(/api/preview?slug=…&exp=…&sig=…)로 들어오면 서명을 확인하고
 * 초안 모드 쿠키를 켠 뒤 유물 화면으로 보낸다. 서명은 두 앱이 함께 가진 REVALIDATE_SECRET으로 확인한다.
 * 보낼 주소는 받은 값이 아니라 검증한 slug로 만들어 다른 사이트로 보내지 못하게 한다.
 */
export async function previewHandler(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const slug = slugSchema.safeParse(params.get("slug")).data;
  const locale = localeSchema.safeParse(params.get("locale")).data ?? "ko";
  const secret = process.env.REVALIDATE_SECRET;
  const valid =
    secret && slug && (await verifyPreview(secret, slug, Number(params.get("exp")), params.get("sig") ?? ""));
  if (!valid) {
    return new NextResponse("미리 보기 링크가 맞지 않거나 만료됐습니다. 관리 화면에서 다시 눌러 주세요.", {
      status: 401,
      headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
    });
  }
  (await draftMode()).enable();
  return NextResponse.redirect(new URL(localePath(locale, `/artifacts/${slug}`), request.url), 307);
}

/** 초안 미리보기 끝내기(유물 화면의 안내에 있는 폼이 POST로 보낸다). 쿠키를 끄고 같은 사이트의 주소로만 돌려보낸다. */
export async function exitPreviewHandler(request: NextRequest) {
  (await draftMode()).disable();
  const next = safeLocalPath((await request.formData().catch(() => null))?.get("next"));
  return NextResponse.redirect(new URL(next, request.url), 303);
}
