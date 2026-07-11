import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// output: 'export' 필수 선언 — 빌드 타임에 정적 파일로 생성
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
