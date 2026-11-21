# Rizer — The Artifact Archive

## 1. 프로젝트 개요

전설 속 유물을 딥줌으로 확대해 보고 부분마다 달린 해설을 읽는 온라인 전시실(`apps/web`)과, 큐레이터가 유물·해설·주석을 편집하는 관리 화면(`apps/admin`)입니다. 한국어 UI(영어판 `/en`).

- 화면 축: 전시실(공개 웹) · 큐레이터 어드민
- 운영: 전시실 https://rizer-ryushin01.vercel.app · 관리 화면 https://rizer-admin-ryushin01.vercel.app/login (**게스트로 둘러보기**로 읽기 전용 입장) · Storybook https://rizer-ryushin01.vercel.app/storybook/index.html
- 먼저 `README.md`, `docs/development.md`(명령·환경 변수·알려진 함정), `docs/architecture.md`(데이터 흐름·FSD·상태 관리·접근성)를 읽습니다.

## 2. 기술 스택과 구조

- pnpm + Turborepo 모노레포. `apps/web`(Next.js 16.4, styled-components, Redux Toolkit + redux-saga, OpenSeadragon, SSGOI), `apps/admin`(Next.js 16.4, shadcn/ui, Drizzle ORM, PGlite·Neon, NextAuth, Annotorious), `packages/{config,domain,storage,tiles,ui}`
- Next.js 16.4는 학습 데이터와 다릅니다. 코드를 쓰기 전에 `apps/<앱>/node_modules/next/dist/docs/`의 해당 문서를 읽습니다(Cache Components, `revalidateTag(tag, profile)`, 오류 화면의 `retry` 등).
- FSD: 층 순서 `_app` → `_pages` → `widgets` → `features` → `entities` → `shared`(Next.js라 계층 이름이 `_app`, `_pages`). `src/app`의 라우트 파일은 다시 내보내기만 합니다. 한 페이지에서만 쓰는 코드는 그 페이지 슬라이스에 두고, 두 곳 이상에서 쓰면 `features`·`widgets`로 올립니다. 관리 화면의 서버 코드는 FSD 밖 `src/server`, `src/db`에 둡니다.
- 경계는 `pnpm lint`가 강제합니다: ESLint(`packages/config/eslint-fsd.mjs`)는 계층 간 import, Steiger(각 앱의 `steiger.config.mjs`)는 공개 API·세그먼트 이름·한 곳에서만 쓰는 슬라이스를 봅니다.
- 공개 사이트는 styled-components + Redux Toolkit + redux-saga만, 관리 화면은 shadcn/ui(`packages/ui`, Base UI의 `render` prop)만 씁니다. 두 스타일 체계를 섞지 않습니다.
- 공개 사이트의 styled 컴포넌트 파일은 `"use client"`입니다. 서버 컴포넌트는 데이터를 읽어 props로 넘깁니다.

## 3. 설치·개발 명령

- 패키지 매니저: pnpm만 씁니다(`packageManager`에 고정), Node.js 24(`.node-version`). 명령은 저장소 루트에서 실행하고, 앱 하나는 `pnpm --filter <이름>`으로 실행합니다.

```bash
pnpm install
pnpm dev                                  # 관리 화면(3000) + 공개 사이트(3001), .env 없이 PGlite로 돎
pnpm dev:admin                            # 관리 화면만
pnpm storybook                            # 공개 사이트 Storybook(6006)
pnpm --filter @rizer/admin storybook      # 관리 화면 Storybook(6007)
pnpm --filter @rizer/admin db:reset       # 개발 DB(PGlite) 지우고 다시 시드
pnpm seed:images                          # 시드 원본 받아 타일로 자르기(--synthetic, --only, --missing)
pnpm --filter @rizer/admin export:seed-tiles   # 공개용 정적 타일과 seed-images.json 다시 만들기
pnpm tiles <원본> <출력 폴더> [이름]
pnpm --filter @rizer/web snapshot         # 공개 사이트용 사본 다시 만들기(시드로 띄운 관리 화면 필요)
```

- 오프라인 대체: 공개 사이트가 관리 화면 공개 API(`ARCHIVE_API_URL`)에 8초 안에 닿지 못하면 `apps/web/src/shared/api/snapshot/archive-snapshot.json`(서버에서만 읽음)으로 목록·상세·검색(`/api/search`, `x-archive-snapshot: 1`)을 답하고 `role="status"` 안내를 띄웁니다. 유물·해설 시드를 바꾸면 사본도 다시 만듭니다. 자세히: `docs/development.md`.

- 개발 값은 각 앱의 `.env.development`, 운영 변수 목록은 `.env.example`에 있습니다. 이름만: admin `DATABASE_URL`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`, `SEED_DEMO`, `CURATOR_PASSWORD`, `STORAGE_DRIVER`, `S3_*`, `BLOB_READ_WRITE_TOKEN`, `STORAGE_PUBLIC_URL`, `STATIC_TILES_URL`, `WEB_URL`, `WEB_REVALIDATE_URL`, `REVALIDATE_SECRET` / web `ARCHIVE_API_URL`, `NEXT_PUBLIC_ARCHIVE_API_URL`, `REVALIDATE_SECRET`, `SITE_URL`, `STORAGE_PUBLIC_URL`
- 빌드 때 읽는 변수(`next.config.ts`의 CSP 등)는 `turbo.json`의 `build.env`에 적어야 Vercel 빌드에 넘어갑니다.

## 4. 검사·테스트 명령

완료 기준: 루트에서 `pnpm typecheck && pnpm lint && pnpm test && pnpm test:storybook && pnpm e2e && pnpm build`가 모두 통과.

CI(`.github/workflows/ci.yml`, `main` 푸시·모든 PR)는 이 순서로 돕니다.

```bash
pnpm install --frozen-lockfile
pnpm audit --prod --audit-level high
pnpm typecheck                            # next typegen + tsc7
pnpm lint                                 # ESLint + Steiger
pnpm test:coverage                        # Vitest 단위
pnpm --filter @rizer/web exec playwright install --with-deps chromium
pnpm test:storybook                       # 두 앱의 모든 스토리 + axe
pnpm --filter @rizer/admin seed:images --synthetic
pnpm build
pnpm e2e                                  # Playwright(관리 3180, 공개 3181, 관리 화면 끈 공개 3182, 메모리 DB)
pnpm --filter @rizer/web size             # size-limit: JS 470 kB, CSS 96 kB(gzip)
pnpm --filter @rizer/web lhci             # Lighthouse CI(lighthouserc.json)
```

- `apps/web/e2e/offline.spec.ts`는 localhost 밖 요청을 모두 막고 두 앱이 내용과 axe 위반 없이 뜨는지, 관리 화면이 꺼진 공개 사이트(3182)가 사본으로 대체하는지 봅니다.
- E2E·Lighthouse 환경 값은 CI의 `env`와 `apps/web/e2e/env.ts`에 있습니다. 로컬에서 Lighthouse를 잴 때는 그 값을 넣고 두 앱을 빌드한 뒤 돌립니다.
- 스토리(`*.stories.tsx`)와 테스트를 컴포넌트 옆에 둡니다. 관리 화면의 서버 액션은 스토리에서 `sb.mock()`과 같은 폴더의 `__mocks__`로 바꿉니다.
- **Testing Library 원칙:** 구현 세부가 아니라 사용자가 보는 동작을 검사하고, 요소는 역할·이름(`getByRole`)으로 찾습니다. 버그를 고치면 고치기 전에 실패하는 테스트를 함께 넣습니다. 도구는 단위·컴포넌트 Vitest + `@testing-library/react`(+ `user-event`, `jest-dom`), 사가는 `redux-saga-test-plan`, 화면 흐름 Playwright E2E, 접근성 axe(Storybook 스토리 테스트 `addon-a11y`, E2E의 `@axe-core/playwright`)입니다.

## 5. 코드 스타일

- TypeScript strict(`packages/config/tsconfig.base.json`을 모든 앱·패키지가 이어받음), `any`·`as` 단언·`@ts-ignore` 금지. 타입 검사는 `tsc7`(`packages/config`의 TypeScript 7), 도구용 TypeScript는 6입니다.
- **포매터 없음:** Prettier·Biome 설정이 없습니다(표준과 다른 점). 주변 코드 모양(큰따옴표, 세미콜론)을 그대로 따르고, 포매터를 새로 들이지 않습니다.
- 위 FSD·스타일 체계 규칙을 지킵니다. `apps/admin`은 CommonJS 패키지라 tsx 스크립트는 `.mts`로 씁니다.
- 유물 데이터의 원본은 `packages/domain/src/seed`(카탈로그·주석)입니다. 바꾸면 `docs/credits.md`와 영어 번역(`seed/en`)도 맞춥니다. 사진은 CC0 소장품만 쓰고 출처(`source`)를 밝힙니다.
- 데이터를 읽는 서버 컴포넌트는 Suspense 안에 둡니다(CI 빌드 프리렌더 오류). 그 밖의 함정은 `docs/development.md`의 `알려진 함정` 표를 먼저 봅니다.
- 접근성(WCAG 2.2·KWCAG 2.2, 기본은 공통 규칙): 새 UI는 KWCAG 2.2 항목을 직접 점검하고(`docs/accessibility.md`), 보이는 글자를 접근 이름에 낱말로 넣습니다(6.5.3). 자동 검사는 eslint-plugin-jsx-a11y recommended(`packages/config/eslint-next.mjs`), Storybook·Playwright의 axe, Lighthouse 접근성 100점 하한입니다.

## 6. Git·PR

- **흐름: GitHub Flow.** `main`에 직접 커밋·푸시하지 않고, 최신 `main`에서 브랜치를 만들어 PR로만 병합합니다.
- **브랜치 이름:** `feat/…`, `fix/…`, `refactor/…`, `docs/…`, `test/…`, `chore/…`, `release/…`(실제로는 `perf/…`도 씀, 예: `feat/artifacts-300`, `perf/artifact-viewer-tbt`).
- **커밋 메시지: Conventional Commits가 표준**입니다(`<타입>: <한국어 요약> (x.y.z)`, 타입 `feat`, `fix`, `refactor`, `perf`, `docs`, `test`, `style`, `chore`, `ci`, `build`). 이 저장소의 실제 관례는 다릅니다: 기능 PR은 타입 없이 버전을 괄호 없이 붙였고(`유물 300점으로 늘리기 1.2.0: 새 유물 100점, …`), 타입을 쓴 PR도 버전을 괄호 없이 끝에 붙였습니다(`fix: 딥줌 뷰어를 캔버스로 그려 CI Lighthouse 점수가 러너에 따라 떨어지던 문제 1.0.1`). 새 PR은 표준 형식(`feat: … (1.3.0)`)으로 씁니다. 문서·잡일은 버전 없이 `docs: …`, `chore: …`. 호환이 깨지면 본문에 `BREAKING CHANGE:`.
- 본문은 한국어 목록으로 적습니다.
- **작성자:** 커밋 작성자는 항상 ryushin01(`ryushin0 <141554987+ryushin01@users.noreply.github.com>`)입니다(기여자는 ryushin01만 남김). 백엔드 코드가 있는 저장소라 공동 작성자 줄은 `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>` 하나만 넣습니다.
- GitHub Actions가 커밋하는 워크플로는 작성자를 ryushin01로 설정합니다(`github-actions[bot]` 금지). Dependabot PR은 그대로 병합하지 말고 같은 변경을 ryushin01 커밋으로 다시 만들어 병합합니다.
- **버전: Semantic Versioning.** 루트와 두 앱(`apps/web`, `apps/admin`)의 `package.json` `version`, README 버전 배지를 함께 맞춥니다. `packages/*`는 `0.1.0` 그대로 둡니다.
- **변경 기록: Keep a Changelog 기반.** `CHANGELOG.md`(제목 `# 변경 기록`)에 최신 버전을 위에 두고 `## x.y.z — YYYY-MM-DD` 아래 요약 문단과 주제별 `###` 소제목(예: `### 새 유물`, `### 운영`)으로 적습니다. `[Unreleased]` 절과 추가·변경·수정·제거 소제목은 쓰지 않습니다(표준과 다른 점).
- **병합:** squash(제목 끝에 `(#번호)`). CI가 통과하면 바로 병합하고 CodeRabbit 리뷰는 기다리지 않습니다.

## 7. 배포·릴리스

- Vercel 프로젝트 둘: `rizer-web`(Root `apps/web`), `rizer-admin`(Root `apps/admin`, 리전 `iad1`). `vercel.json`의 `git.deploymentEnabled`로 `main`만 배포하고 PR 미리보기는 끕니다.
- DB는 Neon `rizer-db`, 큐레이터 업로드는 Vercel Blob `rizer-archive`, 시드 타일은 `apps/web/public/tiles`(저장소에 포함)입니다. 자세한 순서는 `docs/deployment.md`.
- 공개 데모: 관리 화면의 게스트 계정(`guest@rizer.dev`)은 저장·삭제·업로드가 거절되는 읽기 전용입니다.
- 릴리스: 병합 뒤 `v1.2.0` 태그, 제목 `v1.2.0 — <요약>` 형식의 GitHub 릴리스(대상은 병합 커밋 전체 SHA, 본문은 CHANGELOG 해당 절)를 만들고 `bash ~/Documents/Archive/Backup/backup.sh`로 백업합니다.
- 진행 기록: Obsidian 보관함 `Rizer-The-Artifact-Archive v1.0.0 고도화 계획.md`. 소개가 크게 바뀌면 프로필 저장소 `ryushin01/ryushin01` README 표를 고칩니다.

## 8. 보안·주의사항

- 비밀값과 운영 `.env`는 커밋하지 않습니다. 공개 데모에 운영 DB 접속 정보나 유료 키를 넣지 않습니다.
- DB 스키마(`apps/admin/src/db/schema.ts`)를 바꾸면 `pnpm --filter @rizer/admin db:generate`로 마이그레이션을 만들어 커밋합니다. 마이그레이션은 관리 화면이 DB를 열 때 자동 적용되므로(`src/db/index.ts`), 운영 Neon에도 배포 뒤 바로 적용됩니다. 되돌리기 어려운 변경은 조심합니다.
- 시드 타일은 Vercel Blob에 두지 않습니다(Hobby 고급 작업 월 2,000회 한도). 유물을 더 늘리기 전에 R2(`STORAGE_DRIVER=s3`, `STATIC_TILES_URL`)로 옮기기를 권합니다. Git LFS는 쓰지 않습니다.
- 공개 사이트 주소를 바꿀 때는 `docs/deployment.md`의 순서를 지킵니다(환경 변수만 먼저 바꾸지 않기).
- 관리 화면 CSP의 `allowEval`(Annotorious의 PixiJS)과 `apps/web/public/favicon.png`(Storybook 로고 대신 아이콘으로 잡히도록)는 이유가 있어 둔 것입니다.

- CI·배포·릴리스 상태는 명령 결과(`gh run`, `gh release`, `curl`, Vercel API)로 확인한 것만 말합니다.
- 먼저 묻기: 새 런타임 의존성, 빌드·배포 설정(`next.config.ts`, `turbo.json`, `vercel.json`, `tsconfig`) 변경, 운영 Neon에 적용될 되돌리기 어려운 마이그레이션.
- 절대 금지: 비밀값을 `NEXT_PUBLIC_*`에 넣기, 운영 `.env` 커밋, `eslint-disable`·`--no-verify`로 검사 우회, `main` 직접 푸시.

## 9. 공통 규칙

규칙은 3계층입니다. 1층 전역(`~/.claude/CLAUDE.md`, OpenCode는 `~/.config/opencode/AGENTS.md`로 같은 파일) → 2층 ryushin01 공통(`~/Documents/GitHub/CLAUDE.md`, Claude Code만 읽음) → 3층 이 파일. 충돌하면 이 파일이 우선합니다. 2층을 읽지 못하는 도구를 위해 핵심을 아래에 요약합니다.

- 답변·커밋·PR·문서·주석은 한국어로 씁니다.
- 허락을 묻지 않고 끝까지 진행한 뒤 한 번에 보고합니다. 비용이 드는 일, 비밀값 새로 만들기, 디자인 결정, 되돌리기 어려운 일, 다른 조직 저장소에 공개로 글 올리기는 진행 전에 보고하고 결정을 받습니다.
- 사용자의 진행 중 작업을 보호합니다. 커밋하지 않은 변경이 있으면 `git worktree add`로 따로 작업하고 끝나면 지웁니다.
- 다른 세션 공지는 ryushin01 그룹 세션에만 보냅니다(Etc 그룹·다른 계정 세션 제외).
