import { SectionTitle } from "@/components/mdx";
import ScreeningGuide from "@/components/ScreeningGuide";
import type { ProjectPrivacy } from "@/lib/projects";
import { PRIVACY_NOTICE } from "@/lib/site";

// collects가 이 값 하나뿐이면 "수집하지 않는 앱"으로 보고 다르게 표시한다
const NONE = "없음";

// 표에 쓰는 행 정의 — 교육부 「학습지원 소프트웨어 선정 기준」의 필수기준 항목 순서
const ROWS = [
  { key: "storage", label: "저장 위치" },
  { key: "storageNote", label: "저장 방식" },
  { key: "retention", label: "보관·파기" },
  { key: "rights", label: "열람·정정·삭제" },
  { key: "thirdParty", label: "제3자 제공·위탁" },
  { key: "under14", label: "만 14세 미만" },
] as const;

export default function PrivacyTable({
  privacy,
}: {
  privacy?: ProjectPrivacy;
}) {
  const rows = ROWS.filter(({ key }) => privacy?.[key]);
  const collects = privacy?.collects;
  // 학교가 가장 먼저 보는 질문은 "무엇을 수집하는가"이므로 표 위로 끌어올린다
  const collectsNothing =
    collects?.length === 1 && collects[0].trim() === NONE;

  return (
    <section className="mt-16 max-w-3xl sm:mt-24">
      <SectionTitle label="privacy">이 앱이 다루는 개인정보</SectionTitle>

      <p className="text-ink-soft leading-relaxed">{PRIVACY_NOTICE}</p>

      {collects && (
        <div className="border-line bg-surface mt-8 rounded-2xl border px-5 py-5 sm:px-6">
          {collectsNothing ? (
            <p className="text-ink text-lg font-bold tracking-tight sm:text-xl">
              이 앱은 학생 개인정보를 수집하지 않습니다
            </p>
          ) : (
            <>
              <p className="text-ink-soft text-xs font-semibold tracking-wide">
                이 앱이 수집하는 개인정보
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {collects.map((item) => (
                  <li
                    key={item}
                    className="bg-rose-soft text-rose-deep rounded-full px-3 py-1 text-sm font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      {privacy && rows.length > 0 && (
        <dl className="border-line divide-line mt-6 divide-y border-y">
          {rows.map(({ key, label }) => (
            <div
              key={key}
              className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4"
            >
              <dt className="text-ink text-sm font-semibold">{label}</dt>
              <dd className="text-ink-soft text-sm leading-relaxed">
                {privacy?.[key]}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {privacy?.policyUrl && (
        <a
          href={privacy.policyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border-line hover:border-rose hover:text-rose-deep mt-6 inline-block rounded-full border px-5 py-2.5 text-sm font-medium transition-colors"
        >
          개인정보 처리방침 전문
        </a>
      )}

      <ScreeningGuide />
    </section>
  );
}
