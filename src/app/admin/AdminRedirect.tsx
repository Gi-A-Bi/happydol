"use client";

import { useEffect } from "react";

// 마운트 시 관리자 화면으로 이동 — 정적 페이지라 서버 리다이렉트 대신 클라이언트에서 처리
export default function AdminRedirect({ href }: { href: string }) {
  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return null;
}
