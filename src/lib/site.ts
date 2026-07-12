import copy from "../../content/site.json";

// 사이트 주소 — 배포 설정 성격이라 코드에 유지
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://happydol.healthydol.workers.dev";

// 아래 문구들은 content/site.json에서 관리 (Pages CMS 관리자 화면으로 편집 가능)
export const SITE_NAME = copy.siteName;
export const OPERATOR_NAME = copy.operatorName;
export const SITE_DESCRIPTION = copy.siteDescription;
export const CONTACT_EMAIL = copy.contactEmail;
export const HERO_TAGLINE = copy.heroTagline;
export const HERO_TITLE = copy.heroTitle;
export const HERO_SUBTITLE = copy.heroSubtitle;
export const ABOUT_DESCRIPTION = copy.aboutDescription;
export const ABOUT_PARAGRAPHS: string[] = copy.aboutParagraphs;
