export default function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto w-full max-w-3xl px-4 py-8 text-sm text-zinc-500 sm:px-6">
        {/* TODO: 이메일 구독 폼 자리 (Buttondown/ConvertKit 연동 시 이곳에 추가) */}
        <p>[placeholder] GitHub · SNS 링크</p>
        <p className="mt-2">© 2026 [placeholder]</p>
      </div>
    </footer>
  );
}
