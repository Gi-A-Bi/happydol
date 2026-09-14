import { SectionTitle } from "@/components/mdx";
import type { ProjectPrivacy } from "@/lib/projects";
import { PRIVACY_NOTICE } from "@/lib/site";

// 표에 쓰는 행 정의 — 교육부 「학습지원 소프트웨어 선정 기준」의 필수기준 항목 순서
const ROWS = [
  { key: "storage", label: "저장 위치" },
  { key: "storageNote", label: "저장 방식" },
  { key: "retention", label: "보관·파기" },
  { key: "rights", label: "열람·정정·삭제" },
  { key: "thirdParty", label: "제3자 제공·위탁" },
  { key: "under14", label: "만 14세 미만" },
] as const;

export default function PrivacyTable({ privacy }: { privacy: ProjectPrivacy }) {
  const rows = ROWS.filter(({ key }) => privacy[key]);

  return (
    <section className="mt-16 max-w-3xl sm:mt-24">
      <SectionTitle label="privacy">
        이 앱이 다루는 개인정보
      </SectionTitle>

      <p className="text-ink-soft leading-relaxed">{PRIVACY_NOTICE}</p>

      <dl className="border-line divide-line mt-8 divide-y border-y">
        {privacy.collects && (
          <div className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
            <dt className="text-ink text-sm font-semibold">수집 항목</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {privacy.collects.map((item) => (
                  <li
                    key={item}
                    className="bg-cream-deep text-ink rounded-full px-2.5 py-0.5 text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        )}

        {rows.map(({ key, label }) => (
          <div
            key={key}
            className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4"
          >
            <dt className="text-ink text-sm font-semibold">{label}</dt>
            <dd className="text-ink-soft text-sm leading-relaxed">
              {privacy[key]}
            </dd>
          </div>
        ))}
      </dl>

      {privacy.policyUrl && (
        <a
          href={privacy.policyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border-line hover:border-rose hover:text-rose-deep mt-6 inline-block rounded-full border px-5 py-2.5 text-sm font-medium transition-colors"
        >
          개인정보 처리방침 전문
        </a>
      )}
    </section>
  );
}
