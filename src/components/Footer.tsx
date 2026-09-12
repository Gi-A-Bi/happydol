import Link from "next/link";
import { OPERATOR_NAME, SITE_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-line border-t">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <p className="font-semibold tracking-tight">{SITE_NAME}</p>
        <p className="text-ink-soft mt-2 text-sm">
          [placeholder] GitHub · SNS 링크
        </p>
        {/* TODO: 이메일 구독 폼 자리 (Buttondown/ConvertKit 연동 시 이곳에 추가) */}
        <p className="text-ink-soft mt-10 flex flex-wrap items-center gap-x-3 text-xs tracking-wide">
          <span>© 2026 {OPERATOR_NAME}</span>
          {/* 운영자용 진입점 — /admin이 Pages CMS(GitHub 로그인)로 넘겨준다 */}
          <Link
            href="/admin"
            rel="nofollow"
            className="hover:text-cocoa underline-offset-4 transition-colors hover:underline"
          >
            관리자
          </Link>
        </p>
      </div>
    </footer>
  );
}
