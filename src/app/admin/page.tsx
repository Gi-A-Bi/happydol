import type { Metadata } from "next";
import AdminRedirect from "./AdminRedirect";
import { ADMIN_URL } from "@/lib/site";

// 관리자 진입 페이지 — 정적 HTML 한 장. 열리면 Pages CMS(GitHub 로그인)로 바로 넘어간다.
// 사이트에 인증·서버 코드를 두지 않기 위한 구성 (비용 ₩0, output: 'export' 유지)
const TITLE = "관리자";

export const metadata: Metadata = {
  title: TITLE,
  description: "운영자용 콘텐츠 관리 화면으로 이동합니다.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <AdminRedirect href={ADMIN_URL} />
      <h1 className="text-2xl font-bold tracking-tight">{TITLE}</h1>
      <p className="text-ink-soft mt-3 text-sm leading-relaxed">
        GitHub 계정으로 로그인하는 관리 화면으로 이동합니다. 자동으로 넘어가지
        않으면 아래 버튼을 눌러주세요.
      </p>
      <a
        href={ADMIN_URL}
        className="bg-cocoa text-cream hover:bg-cocoa-deep mt-8 inline-block rounded-full px-8 py-4 text-base font-semibold transition-colors"
      >
        관리 화면 열기
      </a>
    </div>
  );
}
