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
      <h1 className="text-2xl font-bold">About</h1>
      <div className="mt-6 space-y-4 text-zinc-700">
        <p>[placeholder] 자기 소개</p>
        <p>[placeholder] 하는 일 / 만드는 것</p>
      </div>
      <section className="mt-10">
        <h2 className="text-lg font-semibold">Contact</h2>
        <ul className="mt-3 space-y-1 text-sm text-zinc-600">
          <li>[placeholder] 이메일</li>
          <li>[placeholder] GitHub 링크</li>
          <li>[placeholder] SNS 링크</li>
        </ul>
      </section>
    </div>
  );
}
