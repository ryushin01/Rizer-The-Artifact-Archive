# 아키텍처

## 앱 구성

```
브라우저 ──▶ apps/web (공개 사이트) ──서버 fetch(캐시 태그)──▶ apps/admin /api/public/*
   │              ▲                                              │
   │              └──── POST /api/revalidate (저장할 때) ◀────────┤
   └── 검색(redux-saga) ─▶ web /api/search ─('use cache' 거침)───▶│
   └── 딥줌 타일(DZI) ───▶ 시드: 공개 사이트 /tiles 정적 파일 · 새 이미지: 스토리지(Vercel Blob · 개발은 admin /files)
                                                                  │
                                       apps/admin ──▶ PostgreSQL(Neon · 개발은 PGlite)
```

- **관리 화면(apps/admin)이 데이터의 주인입니다.** DB와 스토리지를 쓰고, 공개 사이트가 읽는 공개 API(`/api/public/artifacts`, `/api/public/artifacts/:slug`)를 내보냅니다. 계약 타입은 `packages/domain`의 `api.ts`입니다. 목록은 해설·출처를 뺀 요약만 주고 `limit`·`offset`으로 나눠 받을 수 있습니다(`total`은 전체 개수).
- **공개 사이트(apps/web)는 DB를 모릅니다.** 서버에서 공개 API를 `'use cache'` + `cacheTag`로 읽어 두고, 관리 화면이 저장하면 `/api/revalidate`로 태그를 비웁니다. 개발 중에 PGlite를 한 프로세스만 열게 되는 장점도 있습니다.
- **브라우저는 관리 화면을 직접 부르지 않습니다.** 아카이브 검색(사가)은 공개 사이트의 `/api/search`를 부르고, 이것이 같은 캐시를 거쳐 공개 API를 읽습니다. 같은 검색은 DB까지 가지 않고, 저장하면 태그가 비워집니다.
- **공개 API의 요청 제한:** 누구나 부를 수 있는 주소라 IP마다 분당 120번으로 막습니다(인스턴스 안의 고정 창, 429 + `Retry-After`, `@rizer/domain/rate-limit`). 공개 사이트의 서버는 두 앱이 함께 가진 비밀값(`REVALIDATE_SECRET`)을 Bearer로 보내 제한을 받지 않으므로, 검색어를 바꿔 가며 캐시를 비켜 가는 요청은 공개 사이트의 `/api/search`가 같은 한도로 셉니다.
- 이미지는 DB에 **스토리지 키**로 저장하고, 공개 API가 응답할 때 공개 주소로 바꿉니다. 스토리지 도메인(개발 포트, Blob 도메인)이 바뀌어도 데이터를 고치지 않습니다. `tiles/`로 시작하는 시드 타일 키는 공개 사이트의 정적 파일 주소로 바꿉니다(Blob 작업 한도 때문, [배포](deployment.md)).

## 화면 구조: Feature-Sliced Design

두 앱 모두 `src` 아래 FSD 계층을 씁니다. Next.js 앱이라 계층 이름은 `_app`, `_pages`이고, `src/app`의 라우트 파일은 `_pages`·`_app`을 다시 내보내기만 합니다. `pnpm lint`가 두 가지로 검사합니다. ESLint(`packages/config/eslint-fsd.mjs`)는 계층 간 import 경계를, Steiger(`steiger.config.mjs`, `fsd/typo-in-layer-name`만 끔)는 공개 API·세그먼트 이름·한 곳에서만 쓰는 슬라이스를 봅니다.

한 페이지에서만 쓰는 코드는 그 페이지 슬라이스에 두고, 두 곳 이상에서 쓰게 되면 `features`·`widgets`로 올립니다.

| 계층 | 공개 사이트 예 | 관리 화면 예 |
|---|---|---|
| `_app` | 루트 레이아웃, 스토어 조립(`model`), styled-components 등록부(`styles`), `/api/revalidate` | 루트·콘솔 레이아웃, 전역 CSS |
| `_pages` | 첫 화면(히어로·고정 문장·컬렉션·전시실·연표·질문), 아카이브(결과 격자), 유물 화면(딥줌 뷰어·해설 패널) | 대시보드(요약 칸), 유물 목록, 유물 편집(폼·업로드·공개·삭제, 서버 액션 `api/`), 주석 편집기, 로그인 |
| `widgets` | 메뉴·진행선, 입장 화면, 커서, 바닥글 | 사이드바·머리글, 유물 표·검색 |
| `features` | 아카이브 검색, 안내 투어, 움직임 설정 (슬라이스 + 사가 + UI) | — |
| `entities` | 유물 카드 | 유물 상태 배지, 사용자 역할 |
| `shared` | 디자인 토큰, API 클라이언트, 기본 UI | 폼 도우미, 오류 화면 |

관리 화면의 서버 코드(DB, 인증, 스토리지, 공개 API)는 FSD 밖 `src/server`, `src/db`에 둡니다.

## 상태 관리: Redux Toolkit + redux-saga (공개 사이트)

| 슬라이스 | 사가가 맡는 비동기 흐름 |
|---|---|
| `archive` | 검색어는 300ms 기다렸다가, 버튼 필터는 바로 불러온다(공개 사이트의 `/api/search`). `takeLatest`로 이전 요청을 취소해 늦게 온 응답이 화면을 덮지 않는다. 끝나면 주소를 `replaceState`로 맞춘다. "더 보기"는 `takeLeading`으로 한 번만 읽어 붙이고(`limit`·`offset`, 주소에는 남기지 않음), 그사이 조건이 바뀌었으면 결과를 버린다 |
| `tour` | 안내 투어: 8초마다 다음 주석. 기다리는 동안 멈춤·직접 선택이 오면 `race`로 투어를 끝낸다(사용자 선택 우선) |
| `motion` | 운영체제의 "동작 줄이기"를 `eventChannel`로 따라가고, 사이트 설정을 저장한 뒤 `html[data-motion]`을 바꾼다 |

스토어는 요청마다 만들고(`makeStore`), 서버에서 읽은 데이터는 `ArchiveHydrator`·`TourSync`가 처음 마운트할 때 바로 넣어 서버 렌더링 결과와 맞춘다.

## 딥줌과 주석

1. 원본을 `packages/tiles`(sharp)가 겹침 1px WebP 타일의 DZI 피라미드로 자른다. 업로드와 시드 이미지는 510px 타일이다(254px보다 파일 수가 약 4분의 1이라 Vercel Blob 업로드 작업 한도를 덜 쓴다). 라이브러리 기본값과 `pnpm tiles` CLI는 254px이다. 미리보기(긴 변 1600px, 첫 화면·공유 이미지), 썸네일(긴 변 960px, 카드·관리 목록), LQIP(24px data URL), 대표 색도 만든다. 원본은 타일과 미리보기에 한 번씩만 해독하고 나머지는 미리보기에서 만든다. 서버 업로드는 약 2억 6800만 픽셀까지 자르고, 더 큰 원본은 CLI(10억까지)로 자른다.
2. 키에 버전(`artifacts/<id>/v<시각>/`)을 넣어, CDN이 1년 캐시해도 새 타일이 바로 보인다. 새로 자르면 이전 버전은 지운다.
3. 운영에서는 브라우저가 서명된 주소로 Vercel Blob(또는 R2)에 원본을 직접 올리고(서버리스 요청 크기 제한 회피), 서버가 타일을 만든다. 80MB를 넘는 원본은 `pnpm tiles` CLI로 자른다.
4. 유물별 공유 이미지(1200×630)는 그린 PNG를 유물의 캐시 태그로 보관해(`'use cache'`), 공유될 때마다 사진을 받아 다시 그리지 않습니다. 저장하면 태그가 비워져 다음 요청에서 새로 그립니다.
5. 주석은 W3C Web Annotation의 부분 집합이고, 영역은 **백분율**(`xywh=percent:x,y,w,h`)로 저장한다. 다시 타일링하거나 해상도가 바뀌어도 위치가 맞는다. `toWebAnnotation()`으로 JSON-LD를 내보낼 수 있다.
6. 공개 사이트는 OpenSeadragon 위에 주석마다 실제 `<button>`을 얹는다. 관리 화면은 Annotorious로 사각형을 그리고 고친다.

## 관리 화면의 편집

- **편집 충돌(낙관적 잠금):** 유물 폼과 주석 편집기는 화면이 읽은 수정 시각을 함께 보냅니다. 저장은 `WHERE updated_at = 읽은 시각`일 때만 쓰고, 그사이 다른 곳이 저장했으면 덮어쓰지 않고 안내합니다(입력은 남김). 시각은 밀리초로 잘라 비교합니다(`date_trunc`).
- **주석 편집기:** 실행 취소·다시 실행(버튼, Ctrl·⌘+Z, Ctrl·⌘+Shift+Z) 기록을 순수 리듀서(`model/history.ts`)로 둡니다. 같은 칸을 1초 안에 이어서 고치면 한 번으로 묶고, 100개까지 둡니다. 저장한 목록과 지금 목록이 다를 때만 "저장하지 않음"으로 봅니다.
- **저장하지 않고 떠나기:** 새로 고침·창 닫기는 `beforeunload`, 사이드바 같은 앱 안의 링크는 클릭을 캡처 단계에서 받아 확인 창으로 묻습니다(`useUnsavedChangesWarning`). App Router가 막는 API를 주지 않아 브라우저의 뒤로 가기는 막지 못합니다.
- **초안 미리보기:** 비공개 유물의 "공개 사이트에서 미리 보기"는 관리 화면 라우트가 로그인을 확인하고 10분짜리 서명(HMAC-SHA256, `@rizer/domain/preview`)을 붙여 공개 사이트의 `/api/preview`로 보냅니다. 공개 사이트는 서명을 확인하고 초안 모드(`draftMode`)를 켜며, 그동안 `'use cache'`를 건너뛰고 `?preview=1` + Bearer 비밀값으로 비공개 유물도 읽습니다. 화면에 안내와 끝내기(POST)를 두고 `noindex`로 냅니다.

## 언어판 (한국어·영어)

- **주소:** 한국어는 그대로, 영어는 `/en/...`이다. `<html lang>`이 달라야 하므로 라우트 그룹 `src/app/(ko)`와 `src/app/en`이 각자 루트 레이아웃을 갖는다. 언어를 바꾸는 링크는 루트 레이아웃이 달라 전체 페이지로 이동한다(`<a>`).
- **화면 전환:** SSGOI가 맡는다. 각 언어의 라우트 그룹 `(site)` 레이아웃(`_app/layouts/page-transitions.tsx`)이 `Ssgoi`와 라우트 경계(`RouteBoundary`: `usePathname`을 `key`와 `data-ssgoi-transition`으로 쓰는 요소)를 둔다. 유물 카드 사진(`data-zoom-exit-key`)과 상세 화면의 딥줌 뷰어 틀(`data-zoom-enter-key`)에 같은 slug를 달아, 아카이브와 관련 유물에서 카드가 뷰어로 커진다. SSGOI는 누른 요소가 아니라 같은 키의 첫 요소에서 커지므로, 같은 유물이 두 번 나오는 첫 화면(히어로 바로가기·컬렉션)은 fade로 둔다. 규칙은 `page-transitions.config.ts`에 있고, `/en` 접두어는 middleware로 떼고 비교한다.
  - SSGOI의 Next.js용 경계(`SsgoiRouteBoundary`, 안에 Suspense를 둠)는 쓰지 않는다. 이 경계로는 Lighthouse CI(데스크톱 시뮬레이션)에서 유물 목록 LCP가 0.37초에서 1.26초로 늦어졌다(실제 브라우저 측정은 같아 원인은 확인하지 못함). `(site)`의 화면들은 바닥글처럼 `usePathname`을 Suspense 밖에서 읽어도 멈추지 않으므로 SSGOI 문서의 수동 경계처럼 직접 둔다.
  - 없는 주소(`[...missing]`)는 `(site)` 바깥에 둔다. 경계가 페이지보다 먼저 `usePathname`을 읽으면, 페이지가 `notFound()`를 내기 전에 미리 그리기가 멈춘다(`CLIENT_HOOK_DYNAMIC`).
  - 스크롤 위치도 규칙이 정한다. 쌍 규칙(`from`·`to`)은 새로 가는 화면을 맨 위에서 열고, 뒤로 가면 보던 자리로 돌려놓는다. `on` 규칙은 범위 안끼리 오갈 때 두 화면 모두 처음 위치로 돌아가므로 쓰지 않는다.
  - SSGOI는 `prefers-reduced-motion`을 스스로 읽지 않는다. 움직임 설정(`selectReducedMotion`)이 꺼짐이면 같은 규칙·middleware에 전환만 한 프레임 안에 끝나는 설정(`reducedConfig`)으로 바꾼다. 규칙을 비우면 들어오는 화면이 늘 맨 위로 가서 뒤로 가도 보던 자리를 잃는다.
  - `patches/@ssgoi__core@7.5.0.patch`: SSGOI 7.5.0은 문서의 첫 화면을 맨 위로 보내, 새로고침 때 브라우저가 되살린 위치를 지운다. 첫 화면에서는 위치를 옮기지 않고 기록만 하며, 화면이 열린 직후의 스크롤(늦게 오는 목록 뒤의 복원 등)도 바로 기록하게 고쳤다(`dist/internal.js`와 같은 내용을 `internal.cjs`에도). SSGOI를 올릴 때는 업스트림이 고쳤는지 확인해 패치를 지우거나, 새 버전에 맞게 `pnpm patch @ssgoi/core`로 다시 만든다. E2E '새로고침해도 보던 자리를 지킨다'가 이 동작을 검사한다.
  - SSGOI는 화면이 열린 직후 10프레임 동안의 스크롤을 기록하지 않는다(스크롤 복원 중의 움직임을 사용자의 스크롤로 착각하지 않으려는 것). E2E에서 스크롤 위치를 검사할 때는 그 뒤에 스크롤한다(`waitForFrames`).
- **화면 문구:** `shared/i18n/messages.ts`의 사전과 `useMessages()`를 쓴다. 번역 도구를 넣지 않은 것은 Cache Components와 맞추려면 요청 정보를 읽지 않는 편이 단순하기 때문이다. 언어는 라우트가 정적으로 넘긴다.
- **유물 내용:** 번역 원본은 `packages/domain/src/seed/en`이다. 공개 API는 `locale=en`일 때 **DB 값이 시드 한국어와 같은 필드만** 번역으로 바꾼다. 큐레이터가 고친 내용을 낡은 번역으로 덮지 않기 위해서이고, 제목이나 해설이 번역되지 않으면 `contentLang: "ko"`로 알려 화면에 `lang`을 표시한다.
- **영어 검색:** DB에 영어가 없으므로 `searchEnglish()`가 시드 번역에서 찾은 slug를 저장소 질의의 `alsoSlugs`·`rankSlugs`로 넘긴다.
- **주석에서 맞은 결과:** 검색어가 이름이 아니라 주석에서 맞으면 공개 API가 그 주석의 투어 번호·제목(`matchedNote`)을 붙이고(영어판은 번역 주석에서 찾음), 카드는 `?note=N`으로 그 주석을 바로 연다.
- **검색 조건:** `parseArtifactQuery()`가 조건마다 따로 검증해 틀린 값만 버린다. 검색어는 앞의 60자를 쓴다.

## 접근성 (KWCAG 2.2)

- **키보드:** 딥줌 사진은 화살표·+/−·0으로 조작하고, 주석 번호는 Tab으로 지나가는 버튼이다. 관리 화면의 주석은 끌기 없이 '보이는 영역으로 추가'와 숫자 입력으로도 만든다(6.5.1 단일 포인터).
- **정지:** 스크롤 연출, 히어로 자동 전환, 안내 투어, 커서 효과는 메뉴의 움직임 버튼이나 운영체제 설정으로 멈춘다(6.2.2).
- **대체 텍스트:** 유물마다 사진 속 실제 물건을 설명하는 `imageAlt`가 있다. 뷰어는 초점을 받는 요소를 품고 있어 `role="img"` 대신 설명 글을 둔다.
- **대비:** 본문 4.5:1 이상. 붉은 강조색(`accent`)은 큰 글자·도형에만, 작은 글자는 `accentText`. 밝은 FAQ 섹션은 초점 표시를 파랑으로 바꾼다.
- **검증:** 스토리 테스트와 E2E가 axe로 검사한다. axe 통과가 KWCAG 준수를 보장하지는 않으므로 33개 항목을 직접 점검해 [점검 기록](accessibility.md)에 남긴다.

## 보안

- 두 앱 모두 `packages/config/security-headers.mjs`의 CSP를 쓴다. 이미지·연결은 공개 API와 타일 도메인만 허용한다.
- 관리 화면만 `'unsafe-eval'`을 허용한다. 주석 편집기(Annotorious)가 자기 번들에 넣은 PixiJS가 eval로 셰이더 코드를 만들어, 외부 패치(`@pixi/unsafe-eval`)를 쓸 수 없기 때문이다. 외부 스크립트는 여전히 막혀 있다.
- 공개 API는 공개 상태의 유물만 내보내고 CORS는 읽기(`GET`)만 연다. `/api/revalidate`는 Bearer 비밀값을 시간 차 없는 비교로 확인한다.
- 로그인은 이메일마다 15분에 5번 틀리면 15분 잠근다. 실패는 쿼리 하나(upsert + `CASE`)로 세어 동시 요청으로 피할 수 없다. 비밀번호가 공개된 게스트 계정은 잠그지 않는다(잠그면 데모를 막을 수 있다).
- 인증은 next-auth 4(Auth.js v4)를 유지한다. Auth.js v5는 2026-07에도 beta(5.0.0-beta.32)이고 v4가 같은 날 보안 패치(4.24.15)를 받았다. 1.0.0에 beta 인증을 넣지 않고, v5가 정식으로 나오면 옮긴다(쿠키 이름이 바뀌어 다시 로그인해야 함).
- 두 앱이 함께 가진 `REVALIDATE_SECRET`은 캐시 비우기(관리 → 공개), 서버끼리의 읽기(공개 → 관리, 요청 제한 제외·초안 읽기), 초안 미리보기 서명(앞머리 `preview:`로 다른 용도와 구분)에 쓴다. 비교는 모두 시간 차 없는 비교다.
- 밖에서 받은 이동 주소(관리 화면 로그인의 `callbackUrl`, 미리 보기를 끝낸 뒤의 `next`)는 `safeLocalPath`로 해석한 출처까지 비교한다. "/"로 시작하는지만 보면 `/\evil.com`(URL 해석에서 `//evil.com`)을 놓친다.
- 스토리지 키는 `safeKey`로 경로 조작(`../`)을 막는다. 업로드는 형식(JPG·PNG·WebP·TIFF)과 크기(80MB)를 서버에서 다시 확인한다.
