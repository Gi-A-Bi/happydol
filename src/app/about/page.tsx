import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/site";

const TITLE = "About";
const DESCRIPTION =
  "초등교사가 교실에서 직접 쓰려고 만든 도구들을 소개합니다";

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
        <p>
          초등학교 교사입니다. 우리 반에 필요한 도구가 있으면 직접 만들어
          쓰는데, 그렇게 만든 앱들이 하나둘 쌓이면서 동료 선생님들과도
          나누게 되었습니다.
        </p>
        <p>
          자리 배치, 1인 1역, 채점처럼 반복되는 학급운영의 일들을 조금 더
          편하게 만드는 것이 목표입니다. 모두 실제 교실에서 쓰면서 다듬고
          있습니다.
        </p>
      </div>
      <section className="mt-10">
        <h2 className="text-lg font-semibold">Contact</h2>
        <ul className="text-ink-soft mt-3 space-y-1 text-sm">
          <li>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-cocoa underline underline-offset-4 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
