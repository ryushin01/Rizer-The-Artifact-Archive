/** E2E 포트와 환경 변수. 개발 서버(3000·3001)와 겹치지 않게 한다. CI의 빌드 단계도 같은 값을 쓴다. */
// README 촬영처럼 다른 포트가 필요할 때는 E2E_ADMIN_PORT·E2E_WEB_PORT로 바꿉니다.
export const ADMIN_PORT = Number(process.env.E2E_ADMIN_PORT ?? 3180);
export const WEB_PORT = Number(process.env.E2E_WEB_PORT ?? 3181);
export const ADMIN_URL = `http://localhost:${ADMIN_PORT}`;
/** 관리 화면이 꺼진 상황을 흉내 내는 공개 사이트(아무도 듣지 않는 주소를 관리 화면으로 둠) */
export const OFFLINE_WEB_PORT = Number(process.env.E2E_OFFLINE_WEB_PORT ?? 3182);
export const OFFLINE_WEB_URL = `http://localhost:${OFFLINE_WEB_PORT}`;
export const DEAD_ADMIN_URL = "http://localhost:3189";
export const CURATOR = { email: "curator@rizer.dev", password: "e2e-curator-pass" };

export const E2E_ENV = {
  // 어드민
  PGLITE_DATA_DIR: "memory://",
  SEED_DEMO: "1",
  CURATOR_PASSWORD: CURATOR.password,
  NEXTAUTH_URL: ADMIN_URL,
  NEXTAUTH_SECRET: "e2e-only-secret",
  WEB_URL: `http://localhost:${WEB_PORT}`,
  WEB_REVALIDATE_URL: `http://localhost:${WEB_PORT}/api/revalidate`,
  REVALIDATE_SECRET: "e2e-revalidate-secret",
  // 공개 사이트
  ARCHIVE_API_URL: ADMIN_URL,
  NEXT_PUBLIC_ARCHIVE_API_URL: ADMIN_URL,
  SITE_URL: `http://localhost:${WEB_PORT}`,
};
