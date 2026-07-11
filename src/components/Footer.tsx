import { OPERATOR_NAME, SITE_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-line border-t">
      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
        <p className="font-semibold tracking-tight">{SITE_NAME}</p>
        <p className="text-ink-soft mt-2 text-sm">
          [placeholder] GitHub · SNS 링크
        </p>
        {/* TODO: 이메일 구독 폼 자리 (Buttondown/ConvertKit 연동 시 이곳에 추가) */}
        <p className="text-ink-soft mt-10 text-xs tracking-wide">
          © 2026 {OPERATOR_NAME}
        </p>
      </div>
    </footer>
  );
}
