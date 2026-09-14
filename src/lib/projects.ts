import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export type ProjectStatus = "live" | "beta" | "archived";

/**
 * 개인정보 처리 안내 — 전부 선택 필드. frontmatter에 privacy가 없으면 상세 페이지에
 * 해당 섹션이 렌더되지 않는다(새 프로젝트는 MDX 추가만으로 동작).
 * 항목은 교육부 「학습지원 소프트웨어 선정 기준」의 필수기준에 대응한다.
 */
export interface ProjectPrivacy {
  collects?: string[]; // 수집 항목 (최소처리 원칙)
  storage?: string; // 저장 위치
  storageNote?: string; // 저장·안전조치 부연
  retention?: string; // 보관 기간·파기
  rights?: string; // 열람·정정·삭제·처리정지 방법
  thirdParty?: string; // 제3자 제공·위탁
  under14?: string; // 만 14세 미만 아동 처리
  policyUrl?: string; // 앱 자체 개인정보 처리방침 링크
}

export interface ProjectFrontmatter {
  title: string;
  description: string;
  thumbnail: string;
  liveUrl: string;
  status: ProjectStatus;
  tags: string[];
  date: string; // YYYY-MM-DD
  featured: boolean;
  repoUrl?: string;
  ctaText: string; // frontmatter 선택 필드 — 미지정 시 "사용해보기"
  privacy?: ProjectPrivacy;
}

export interface Project extends ProjectFrontmatter {
  slug: string;
}

export interface ProjectWithContent extends Project {
  content: string;
}

const UPLOAD_PREFIX = "/uploads/";

/**
 * 관리자 화면(Pages CMS)에서 고른 업로드 원본(`/uploads/...`)은 빌드 때 웜톤 4:3 프레임을
 * 입혀 `/thumbnails/<slug>.png`로 생성되므로(scripts/make-thumbnails.mjs), 화면에는 그
 * 프레임본을 쓴다. 그 밖의 경로는 지정한 값을 그대로 사용한다.
 */
function resolveThumbnail(slug: string, thumbnail: string): string {
  return thumbnail.startsWith(UPLOAD_PREFIX) ? `/thumbnails/${slug}.png` : thumbnail;
}

const STATUSES: ProjectStatus[] = ["live", "beta", "archived"];

const REQUIRED_FIELDS = [
  "title",
  "description",
  "thumbnail",
  "liveUrl",
  "status",
  "tags",
  "date",
] as const;

const PRIVACY_TEXT_KEYS = [
  "storage",
  "storageNote",
  "retention",
  "rights",
  "thirdParty",
  "under14",
  "policyUrl",
] as const;

/** frontmatter의 privacy 블록을 읽는다. 값이 하나도 없으면 undefined(섹션 숨김) */
function parsePrivacy(raw: unknown): ProjectPrivacy | undefined {
  if (typeof raw !== "object" || raw === null) return undefined;
  const data = raw as Record<string, unknown>;
  const privacy: ProjectPrivacy = {};

  if (Array.isArray(data.collects)) {
    const collects = data.collects.map(String).filter(Boolean);
    if (collects.length > 0) privacy.collects = collects;
  }
  for (const key of PRIVACY_TEXT_KEYS) {
    const value = data[key];
    if (typeof value === "string" && value.trim() !== "") {
      privacy[key] = value.trim();
    }
  }

  return Object.keys(privacy).length > 0 ? privacy : undefined;
}

function parseProjectFile(filePath: string): ProjectWithContent {
  const slug = path.basename(filePath, ".mdx");
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  for (const field of REQUIRED_FIELDS) {
    if (data[field] === undefined || data[field] === null || data[field] === "") {
      throw new Error(
        `[content/projects/${slug}.mdx] frontmatter에 필수 필드 "${field}"가 없습니다.`
      );
    }
  }
  if (!STATUSES.includes(data.status)) {
    throw new Error(
      `[content/projects/${slug}.mdx] status는 ${STATUSES.join(" | ")} 중 하나여야 합니다. (현재: "${data.status}")`
    );
  }
  if (!Array.isArray(data.tags)) {
    throw new Error(
      `[content/projects/${slug}.mdx] tags는 문자열 배열이어야 합니다.`
    );
  }

  // YAML에서 따옴표 없는 날짜는 Date 객체로 파싱되므로 문자열로 통일
  const date =
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : String(data.date);

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    thumbnail: resolveThumbnail(slug, String(data.thumbnail)),
    liveUrl: String(data.liveUrl),
    status: data.status,
    tags: data.tags.map(String),
    date,
    featured: Boolean(data.featured),
    repoUrl: data.repoUrl ? String(data.repoUrl) : undefined,
    ctaText: data.ctaText ? String(data.ctaText) : "사용해보기",
    privacy: parsePrivacy(data.privacy),
    content,
  };
}

export function getAllProjects(): Project[] {
  const files = fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"));

  return files
    .map((file) => {
      const { content: _content, ...meta } = parseProjectFile(
        path.join(PROJECTS_DIR, file)
      );
      return meta;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getProjectBySlug(slug: string): ProjectWithContent | null {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return parseProjectFile(filePath);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}
