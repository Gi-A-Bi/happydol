import { ADMIN_URL, OPERATOR_NAME, SITE_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-line border-t">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <p className="font-semibold tracking-tight">{SITE_NAME}</p>
        <p className="text-ink-soft mt-2 text-sm">
          [placeholder] GitHub · SNS 링크
        </p>
        {/* TODO: 이메일 구독 폼 자리 (Buttondown/ConvertKit 연동 시 이곳에 추가) */}
        <div className="mt-10 flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-ink-soft text-xs tracking-wide">
            © 2026 {OPERATOR_NAME}
          </p>
          {/* 관리자 편집 화면 바로가기 — 열려 있어도 GitHub 권한이 있어야 편집 가능 */}
          <a
            href={ADMIN_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-ink-soft hover:text-ink text-xs tracking-wide transition-colors"
          >
            관리자
          </a>
        </div>
      </div>
    </footer>
  );
}
