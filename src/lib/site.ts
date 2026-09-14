import copy from "../../content/site.json";

// 사이트 주소 — 배포 설정 성격이라 코드에 유지
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://happydol.healthydol.workers.dev";

// 관리자 편집 화면(Pages CMS) — 저장소·브랜치가 주소에 들어가므로 배포 설정 성격이라 코드에 유지
export const ADMIN_URL = "https://app.pagescms.org/Gi-A-Bi/happydol/main";

// 아래 문구들은 content/site.json에서 관리 (Pages CMS 관리자 화면으로 편집 가능)
export const SITE_NAME = copy.siteName;
export const OPERATOR_NAME = copy.operatorName;
export const SITE_DESCRIPTION = copy.siteDescription;
export const CONTACT_EMAIL = copy.contactEmail;
export const HERO_TAGLINE = copy.heroTagline;
export const HERO_TITLE = copy.heroTitle;
export const HERO_SUBTITLE = copy.heroSubtitle;
export const HERO_QUOTE = copy.heroQuote;
export const HERO_QUOTE_SOURCE = copy.heroQuoteSource;
export const HERO_IMAGE = copy.heroImage;
export const HERO_IMAGE_ALT = copy.heroImageAlt;
// 프로젝트 상세의 개인정보 섹션 안내 문구 — 심의 대상 여부를 단정하지 않는다
export const PRIVACY_NOTICE = copy.privacyNotice;

// 학운위 심의 대상 판단 순서도 — 교육부 가이드 문구 그대로. 임의 요약·단정 금지
export interface Screening {
  title: string;
  steps: string[];
  outcomes: string[];
  source: string;
}
export const SCREENING: Screening = copy.screening;
export const ABOUT_DESCRIPTION = copy.aboutDescription;
export const ABOUT_PARAGRAPHS: string[] = copy.aboutParagraphs;
