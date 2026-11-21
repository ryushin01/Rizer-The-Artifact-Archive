import "server-only";

import { parseArtifactQuery } from "@rizer/domain";
import { clientIp, createRateLimiter, PUBLIC_RATE_LIMIT, RATE_LIMIT_MESSAGE } from "@rizer/domain/rate-limit";
import { NextResponse, type NextRequest } from "next/server";

import { getArtifacts } from "@/shared/api/index.server";

/**
 * 브라우저 검색(아카이브의 redux-saga)이 부르는 검색 API. 공개 사이트의 캐시(유물 태그)를 거쳐 관리 화면의 공개 API를 부른다.
 * 같은 조건은 캐시에서 바로 답해 DB까지 가지 않고, 관리 화면에서 저장하면 태그가 비워져 새로 읽는다.
 * 응답 자체는 CDN에 두지 않는다(태그를 비워도 CDN의 옛 응답이 남지 않게).
 * 관리 화면은 이 서버의 요청을 제한하지 않으므로, 검색어를 바꿔 가며 캐시를 비켜 DB까지 몰아치지 못하게 여기서 IP마다 센다.
 */
const limiter = createRateLimiter(PUBLIC_RATE_LIMIT);

export async function searchHandler(request: NextRequest) {
  const limited = limiter.hit(clientIp(request));
  if (!limited.ok) {
    return NextResponse.json(
      { message: RATE_LIMIT_MESSAGE },
      { status: 429, headers: { "cache-control": "no-store", "retry-after": String(limited.retryAfter) } },
    );
  }
  const query = parseArtifactQuery(Object.fromEntries(request.nextUrl.searchParams));
  // 관리 화면에 닿지 못했으면 저장해 둔 사본에서 찾은 결과다(화면은 서버가 그린 안내를 이미 띄우고 있다).
  const { offline, ...body } = await getArtifacts(query);
  return NextResponse.json(body, {
    headers: { "cache-control": "no-store", ...(offline && { "x-archive-snapshot": "1" }) },
  });
}
