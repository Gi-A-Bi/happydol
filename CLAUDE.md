# 쇼케이스 사이트 — 작업 지침

## 프로젝트 개요
- 내 웹 앱들을 소개하는 개인 브랜드 쇼케이스 사이트
- Next.js (App Router) + Tailwind CSS + MDX, 배포는 Cloudflare Workers 정적 자산 (정적 내보내기)
- 상세 기획은 @PROJECT.md 참조 (구조·디자인 방향·프로젝트 목록)

## 비용 원칙 (현 단계)
- 수익화 전까지 운영 비용 ₩0이 원칙. 유료 서비스·API·무료 티어를 벗어날 수 있는
  의존성은 추가하지 말 것
- 단, 비용을 들이면 더 나은 선택지가 있는 경우에는 "무료로 구현 + 유료 대안을
  주석/문서에 기록" 방식으로 진행할 것. 나중에 수익화되면 그 기록을 보고 업그레이드한다
- 아키텍처는 유료 전환을 막지 않게 설계할 것 (예: 정적 내보내기 → 서버 기능이
  필요해지면 되돌릴 수 있게, 배포 설정과 앱 로직을 분리)

## 명령어
- 개발 서버: `npm run dev`
- 빌드: `npm run build`
- 타입 체크: `npm run typecheck`
- 린트: `npm run lint`

## 핵심 아키텍처 규칙
- 프로젝트 데이터는 `content/projects/*.mdx`가 유일한 소스.
  새 프로젝트 추가 = MDX 파일 1개 추가로 끝나야 하며, 코드 수정이 필요하면 잘못된 설계
- frontmatter 스키마(title, description, thumbnail, liveUrl, repoUrl(선택),
  ctaText(선택, 기본 "사용해보기"), status, tags, date, featured)를 변경할 때는
  반드시 먼저 설명하고 승인받을 것
- 컴포넌트는 `src/components/`, 페이지는 App Router 규칙대로. 과도한 추상화 금지
- 서버 함수(SSR, API Route, ISR, Server Actions) 사용 금지 — `output: 'export'` 정적
  내보내기로만 빌드. `images.unoptimized: true` 유지 (이미지 최적화 서버 없음)
- 모든 동적 라우트는 `generateStaticParams` + `dynamicParams = false` 필수

## 작업 규칙
- 요청하지 않은 코드는 리팩토링하지 말 것 — 변경은 최소 범위로
- 코드 변경 후 `npm run build`와 `npm run typecheck` 통과 확인. 실패 시 보고
- 커밋은 논리 단위로 작게, 하나의 커밋에 하나의 변경
- 두 가지 접근이 가능하면 임의로 결정하지 말고 둘 다 설명하고 선택을 물을 것
- 새 패키지 추가는 이유를 설명하고 승인 후 설치

## 디자인 규칙
- 방향: 절제된 미니멀, 타이포그래피와 여백 중심 (레퍼런스는 @PROJECT.md)
- 색상·폰트·간격은 Tailwind 설정의 디자인 토큰으로만 사용. 임의 hex 값 하드코딩 금지
- 애니메이션은 hover/transition 수준까지만. 라이브러리 추가 금지
- 모든 페이지는 모바일 우선 반응형

## SEO / 품질
- 모든 페이지에 메타태그 + OG 태그 필수. 새 페이지 추가 시 sitemap 반영 확인
- 이미지는 next/image 사용, alt 텍스트 필수
- og:image·썸네일 실제 파일은 PNG/JPG 사용 (SNS 크롤러는 SVG 미지원 — 현재 placeholder
  SVG는 임시). OG 이미지 자동 생성이 필요해지면 satori + @resvg/resvg-js 빌드 스크립트(무료)로
- Lighthouse 성능·접근성 90+ 유지가 목표. 이를 해치는 변경은 사전에 알릴 것

## 콘텐츠 관리
- 사이트 문구(히어로·About·사이트명 등)는 `content/site.json`이 소스 — `src/lib/site.ts`가
  re-export. 문구 수정은 JSON만 고치면 됨 (코드 수정 금지)
- 웹 관리자: Pages CMS (pagescms.org, GitHub 로그인) — 설정은 `.pages.yml`.
  저장 = 커밋 = 자동 배포. MDX 본문의 커스텀 컴포넌트(SectionTitle 등) 구조는 유지할 것

## 배포 / 분석
- Cloudflare Workers 정적 자산: 설정은 `wrangler.jsonc` (name: happydol, 자산 디렉토리 `./out`,
  404는 `not_found_handling: "404-page"`). 서버 코드 없는 순수 정적 구성 — 정적 자산 서빙은 무료
- 빌드 커맨드 `npm run build` → 배포 `npx wrangler deploy`
- 분석: Cloudflare Web Analytics (무료) — `src/app/layout.tsx`에 주석 처리된 비콘 스크립트
  자리 있음. 토큰 발급 후 주석 해제

## 하지 말 것
- 결제·인증 로직 임의 추가 (아직 수익화 모델 미정 — CTA는 frontmatter로만 제어)
- 배포 설정(wrangler.jsonc, Cloudflare 대시보드 설정 등) 무단 변경
- 콘텐츠 텍스트(내 소개, 프로젝트 설명) 임의 창작 — placeholder로 두고 표시할 것
