import { SCREENING } from "@/lib/site";

/**
 * 학운위 심의 대상 판단 순서도 — 교육부 가이드 문구를 그대로 싣는다.
 * 모든 프로젝트 상세에 동일하게 표시되므로 접어둔 상태로 두고, 문구는 site.json에서 관리.
 * 특정 앱이 심의 대상인지는 여기서 판단하지 않는다(학교가 판단할 사항).
 */
export default function ScreeningGuide() {
  return (
    <details className="border-line bg-surface mt-8 rounded-2xl border">
      <summary className="text-ink cursor-pointer px-5 py-4 text-sm font-semibold">
        {SCREENING.title}
      </summary>

      <div className="border-line border-t px-5 py-5">
        <ol className="space-y-3">
          {SCREENING.steps.map((step) => (
            <li key={step} className="text-ink text-sm leading-relaxed">
              {step}
            </li>
          ))}
        </ol>

        <ul className="border-line mt-6 space-y-2 border-t pt-5">
          {SCREENING.outcomes.map((outcome) => (
            <li key={outcome} className="text-ink-soft text-sm leading-relaxed">
              {outcome}
            </li>
          ))}
        </ul>

        <p className="text-ink-soft mt-6 text-xs leading-relaxed">
          {SCREENING.source}
        </p>
      </div>
    </details>
  );
}
