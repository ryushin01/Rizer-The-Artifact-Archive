import { securityHeaders } from "@rizer/config/security-headers";
import type { NextConfig } from "next";

const origin = (url?: string) =>
  url?.startsWith("http") ? [new URL(url).origin] : [];

// 공개 API(어드민)와 딥줌 타일(R2 또는 개발 중에는 어드민의 /files)에서 데이터를 받는다.
const api = origin(process.env.NEXT_PUBLIC_ARCHIVE_API_URL);
// 큐레이터가 새로 올린 이미지는 스토리지(R2·Blob)에서 온다. 시드 타일은 이 사이트의 /tiles 정적 파일이다.
// 시드 타일을 저장소 밖(R2 등)으로 옮기면 STATIC_TILES_URL에 그 주소를 둔다(어드민과 같은 값).
const tiles = [
  ...origin(process.env.STORAGE_PUBLIC_URL),
  ...origin(process.env.STATIC_TILES_URL),
  ...(process.env.STORAGE_DRIVER === "blob"
    ? ["https://*.public.blob.vercel-storage.com"]
    : []),
];
const headers = securityHeaders({
  imgSrc: [...api, ...tiles],
  connectSrc: [...api, ...tiles],
});
// Storybook은 미리보기를 같은 출처의 iframe으로 띄우므로 /storybook 아래만 같은 출처 프레임을 허용한다.
const storybookHeaders = headers.map((header) => {
  if (header.key === "X-Frame-Options")
    return { ...header, value: "SAMEORIGIN" };
  if (header.key === "Content-Security-Policy")
    // Storybook에서는 next/font/google이 글꼴을 Google 서버에서 받는다(운영 사이트는 Next가 직접 담는다).
    return {
      ...header,
      value: header.value
        .replace("frame-ancestors 'none'", "frame-ancestors 'self'")
        .replace(
          "font-src 'self' data:",
          "font-src 'self' data: https://fonts.gstatic.com",
        )
        .replace(
          "style-src 'self' 'unsafe-inline'",
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        ),
    };
  return header;
});

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactCompiler: true,
  cacheComponents: true,
  // Partial Prefetching(링크가 화면의 공통 껍데기만 미리 받음)을 켜면 카드 → 유물 화면 전환에서 불러오는 화면이 먼저 보인다.
  // 지금처럼 캐시된 화면 전체를 미리 받는다. Next 17에서 기본값이 되면 전환을 확인하며 옮긴다.
  partialPrefetching: false,
  compiler: { styledComponents: true },
  headers: async () => [
    { source: "/((?!storybook/).*)", headers },
    { source: "/storybook/:path*", headers: storybookHeaders },
    // 시드 딥줌 타일: 경로에 버전이 들어 있어 내용이 바뀌지 않는다. 어드민의 주석 편집기도 읽는다.
    {
      source: "/tiles/:path*",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        { key: "Access-Control-Allow-Origin", value: "*" },
        { key: "Cross-Origin-Resource-Policy", value: "cross-origin" },
      ],
    },
  ],
  // 디자인 시스템(Storybook)은 빌드할 때 public/storybook에 만든다. 정적 파일이라 폴더 주소로는 열리지 않아 index.html로 보낸다.
  redirects: async () => [
    {
      source: "/storybook",
      destination: "/storybook/index.html",
      permanent: false,
    },
  ],
  images: { unoptimized: true },
  // 공유 이미지가 읽는 한글 글꼴. process.cwd() 기준으로 읽으므로 추적 목록에 직접 넣는다.
  outputFileTracingIncludes: {
    "/artifacts/[slug]/opengraph-image": ["./assets/fonts/Pretendard-Bold.otf"],
  },
};

export default nextConfig;
