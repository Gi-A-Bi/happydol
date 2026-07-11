import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

// output: 'export' 필수 선언 — 빌드 타임에 정적 파일로 생성
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ["", "/projects", "/about"].map(
    (route) => ({
      url: `${SITE_URL}${route}`,
    })
  );

  const projectRoutes: MetadataRoute.Sitemap = getAllProjects().map(
    (project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified: new Date(project.date),
    })
  );

  return [...staticRoutes, ...projectRoutes];
}
