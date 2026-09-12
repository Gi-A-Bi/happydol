import copy from "../../content/site.json";

// 사이트 주소 — 배포 설정 성격이라 코드에 유지
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://happydol.healthydol.workers.dev";

// 관리자 화면 — Pages CMS(무료, GitHub 로그인). 이 저장소의 .pages.yml 설정으로 폼이 구성되며
// 저장 = 커밋 = 자동 배포. 사이트 자체에는 로그인·서버 코드가 없다 (정적 내보내기 유지)
export const ADMIN_URL = "https://app.pagescms.org/Gi-A-Bi/happydol";

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
export const ABOUT_DESCRIPTION = copy.aboutDescription;
export const ABOUT_PARAGRAPHS: string[] = copy.aboutParagraphs;
