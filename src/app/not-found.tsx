import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20 sm:py-28">
      <p className="text-ink-soft text-xs font-semibold tracking-[0.2em] uppercase">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        페이지를 찾을 수 없어요
      </h1>
      <p className="text-ink-soft mt-4">
        주소가 바뀌었거나 삭제된 페이지예요.
      </p>
      <Link
        href="/"
        className="bg-cocoa text-cream hover:bg-cocoa-deep mt-10 inline-block rounded-full px-6 py-3 text-sm font-medium transition-colors"
      >
        홈으로 가기
      </Link>
    </div>
  );
}
