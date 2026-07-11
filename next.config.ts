import type { NextConfig } from "next";

// 비용 원칙(₩0): 정적 내보내기 전용 — SSR/API Route/ISR 등 서버 기능 금지.
// 유료 전환 시 업그레이드 경로: output 제거 + images.unoptimized 해제
// (Vercel/Cloudflare 서버 렌더링·이미지 최적화 사용 가능해짐)
const nextConfig: NextConfig = {
  output: "export",
  images: {
    // 정적 내보내기에는 이미지 최적화 서버(/_next/image)가 없음
    unoptimized: true,
  },
};

export default nextConfig;
