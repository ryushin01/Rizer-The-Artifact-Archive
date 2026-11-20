import "server-only";

import { clientIp, createRateLimiter, PUBLIC_RATE_LIMIT, RATE_LIMIT_MESSAGE } from "@rizer/domain/rate-limit";
import { NextResponse, type NextRequest } from "next/server";

import { getPublished, listPublished, parseLocale, parsePublicQuery } from "@/server/artifacts/queries";

import { isTrustedServer } from "./server-auth";

/**
 * 공개 API. 공개 사이트의 서버가 부르고(캐시 태그로 보관), 브라우저 검색도 공개 사이트의 검색 API를 거쳐 온다.
 * CDN에 두지 않는다. 공개 사이트가 알림(revalidate)을 받고 다시 그릴 때 CDN에 남은 옛 응답을 읽으면
 * 저장한 내용이 반영되지 않기 때문이다. 캐시는 공개 사이트 쪽('use cache' + 캐시 태그)이 맡는다.
 * 누구나 부를 수 있는 주소라 IP마다 분당 120번으로 제한한다(공개 사이트의 서버는 제외. 공개 사이트의 검색 API가 같은 한도로 따로 센다).
 */
const CACHE = "no-store";
const limiter = createRateLimiter(PUBLIC_RATE_LIMIT);

/** 한도를 넘었으면 429 응답, 아니면 null */
function rateLimited(request: NextRequest): NextResponse | null {
  if (isTrustedServer(request)) return null;
  const result = limiter.hit(clientIp(request));
  if (result.ok) return null;
  return NextResponse.json(
    { message: RATE_LIMIT_MESSAGE },
    { status: 429, headers: { "cache-control": CACHE, "retry-after": String(result.retryAfter) } },
  );
}

export async function listHandler(request: NextRequest) {
  const limited = rateLimited(request);
  if (limited) return limited;
  const body = await listPublished(parsePublicQuery(request.nextUrl.searchParams));
  return NextResponse.json(body, { headers: { "cache-control": CACHE } });
}

/** 유물 하나. ?preview=1은 공개 사이트의 서버(초안 미리보기)만 쓸 수 있고, 비공개 유물도 돌려준다. */
export async function detailHandler(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const limited = rateLimited(request);
  if (limited) return limited;
  const { slug } = await params;
  const preview = request.nextUrl.searchParams.get("preview") === "1" && isTrustedServer(request);
  const body = await getPublished(slug, parseLocale(request.nextUrl.searchParams.get("locale")), { includeDrafts: preview });
  if (!body) return NextResponse.json({ message: "유물을 찾을 수 없습니다." }, { status: 404, headers: { "cache-control": CACHE } });
  return NextResponse.json(body, { headers: { "cache-control": CACHE } });
}

/** 브라우저의 사전 요청(CORS). 허용 헤더는 next.config의 headers()가 붙인다. */
export function optionsHandler() {
  return new Response(null, { status: 204 });
}
