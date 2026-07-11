import type { Metadata } from "next";

const TITLE = "About";
const DESCRIPTION = "[placeholder] 소개 페이지 설명";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h1>
      <div className="mt-6 max-w-2xl space-y-4 leading-relaxed">
        <p>[placeholder] 자기 소개</p>
        <p>[placeholder] 하는 일 / 만드는 것</p>
      </div>
      <section className="mt-10">
        <h2 className="text-lg font-semibold">Contact</h2>
        <ul className="text-ink-soft mt-3 space-y-1 text-sm">
          <li>[placeholder] 이메일</li>
          <li>[placeholder] GitHub 링크</li>
          <li>[placeholder] SNS 링크</li>
        </ul>
      </section>
    </div>
  );
}
