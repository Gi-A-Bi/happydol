/**
 * 학운위 심의 대상 판단 순서도 — 구조를 한눈에 보여주는 도식.
 *
 * 교육부 가이드 문구를 그대로 싣는 것이 방침이므로, 이 도식은 문구를 대체하지 않는다.
 * Q1~Q3의 전체 문장과 결과 설명은 ScreeningGuide가 그대로 표시하고,
 * 여기서는 판단이 갈라지는 흐름만 그린다.
 *
 * 흐름 (교육부 가이드의 판단 절차와 동일)
 *   Q1 아니요                    → 심의 불필요
 *   Q1 예 → Q2 아니요 → Q3까지 판단 → Q3 예    → 심의 필요 (선택기준)
 *                                  → Q3 아니요 → 심의 불필요
 *   Q1 예 → Q2 예             → Q3 예    → 심의 필요 (필수 + 선택기준)
 *                                  → Q3 아니요 → 심의 필요 (필수기준)
 *
 * 도식은 쌤툴즈 디자인 토큰으로 직접 그렸다(원본 이미지를 옮겨 싣지 않는다).
 */

// viewBox 기준 고정 좌표 — Tailwind 간격 토큰 대상이 아니다.
const OUT = [
  { x: 40, head: "심의 필요", body: "필수 + 선택기준" },
  { x: 208, head: "심의 필요", body: "필수기준" },
  { x: 384, head: "심의 필요", body: "선택기준" },
  { x: 552, head: "심의 불필요", body: null },
];
const OW = 144; // 결과 상자 너비
const OY = 322; // 결과 상자 y

export default function ScreeningFlow() {
  return (
    <figure className="mt-5 mb-0">
      {/* 좁은 화면에서는 가로 스크롤 — 글자가 작아지는 것보다 낫다 */}
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 720 400"
          className="min-w-2xl w-full"
          role="img"
          aria-labelledby="screening-flow-title screening-flow-desc"
        >
          <title id="screening-flow-title">
            학교운영위원회 심의 대상 판단 순서도
          </title>
          <desc id="screening-flow-desc">
            Q1은 학교 교육과정 운영을 위해 사용하는지 묻습니다. 아니요이면 심의가
            필요하지 않습니다. 방과후학교나 교사 업무용으로만 쓰는 경우가
            여기에 해당합니다. 예이면 Q2로 갑니다. Q2는 학생의 개인정보를
            수집·이용·처리하는지 묻습니다. 아니요이면 Q3까지 판단이 필요합니다.
            Q3은 교과 성취기준과 관련된 학습콘텐츠를 포함하며 학교 교육과정 운영
            지원을 목적으로 개발·보급된 것인지 묻습니다. Q2가 예이고 Q3도 예이면
            필수기준과 선택기준을 모두 활용해 심의합니다. Q2가 예이고 Q3이
            아니요이면 필수기준으로 심의합니다. Q2가 아니요이고 Q3이 예이면
            선택기준으로 심의합니다. 둘 다 아니요이면 심의가 필요하지 않습니다.
          </desc>

          {/* ── Q1 ── */}
          <rect x="40" y="16" width="360" height="46" rx="10"
            className="fill-surface stroke-line" strokeWidth="1.5" />
          <text x="220" y="45" textAnchor="middle" fontSize="15" fontWeight="600" className="fill-ink">
            Q1. 학교 교육과정 운영을 위해 사용합니까?
          </text>

          {/* Q1 아니요 → 심의 불필요 */}
          <path d="M400 39 H548" className="stroke-line" strokeWidth="1.5" fill="none" />
          <text x="474" y="32" textAnchor="middle" fontSize="12" className="fill-ink-soft">아니요</text>
          <text x="474" y="58" textAnchor="middle" fontSize="10.5" className="fill-ink-soft">
            방과후학교·교사 업무용
          </text>
          <rect x="548" y="16" width="132" height="46" rx="10"
            className="fill-cream-deep stroke-line" strokeWidth="1.5" />
          <text x="614" y="45" textAnchor="middle" fontSize="14" fontWeight="600" className="fill-ink">
            심의 불필요
          </text>

          {/* Q1 예 ↓ */}
          <path d="M220 62 V120" className="stroke-line" strokeWidth="1.5" fill="none" />
          <text x="234" y="95" fontSize="12" className="fill-ink-soft">예</text>

          {/* ── Q2 ── */}
          <rect x="40" y="120" width="360" height="56" rx="10"
            className="fill-surface stroke-line" strokeWidth="1.5" />
          <text x="220" y="144" textAnchor="middle" fontSize="15" fontWeight="600" className="fill-ink">
            Q2. 학생의 개인정보를 수집·이용·처리합니까?
          </text>
          <text x="220" y="163" textAnchor="middle" fontSize="10.5" className="fill-ink-soft">
            로그인, 성명·닉네임·학번·연락처·영상·학습이력 등
          </text>

          {/* Q2 아니요 → Q3까지 판단 필요 */}
          <path d="M400 148 H548" className="stroke-line" strokeWidth="1.5" fill="none" />
          <text x="474" y="141" textAnchor="middle" fontSize="12" className="fill-ink-soft">아니요</text>
          <rect x="548" y="126" width="132" height="44" rx="10"
            className="fill-surface stroke-line" strokeWidth="1.5" />
          <text x="614" y="153" textAnchor="middle" fontSize="13" fontWeight="600" className="fill-ink">
            Q3까지 판단 필요
          </text>

          {/* 두 경로 모두 Q3로 내려간다 */}
          <path d="M220 176 V230" className="stroke-line" strokeWidth="1.5" fill="none" />
          <text x="234" y="207" fontSize="12" className="fill-ink-soft">예</text>
          <path d="M614 170 V230" className="stroke-line" strokeWidth="1.5" fill="none" />

          {/* ── Q3 ── */}
          <rect x="40" y="230" width="640" height="56" rx="10"
            className="fill-surface stroke-line" strokeWidth="1.5" />
          <text x="360" y="254" textAnchor="middle" fontSize="15" fontWeight="600" className="fill-ink">
            Q3. 교과 성취기준과 관련된 학습콘텐츠를 포함하며,
          </text>
          <text x="360" y="273" textAnchor="middle" fontSize="15" fontWeight="600" className="fill-ink">
            학교 교육과정 운영 지원을 목적으로 개발·보급된 것입니까?
          </text>

          {/* Q3 → 결과: 왼쪽 묶음은 Q2 예 경로, 오른쪽 묶음은 Q2 아니요 경로 */}
          {[
            { cx: 220, left: 112, right: 280, label: "Q2에서 「예」로 온 경우" },
            { cx: 500, left: 456, right: 624, label: "Q2에서 「아니요」로 온 경우" },
          ].map(({ cx, left, right, label }) => (
            <g key={cx}>
              <path
                d={`M${cx} 286 V300 M${left} 300 H${right} M${left} 300 V${OY} M${right} 300 V${OY}`}
                className="stroke-line" strokeWidth="1.5" fill="none"
              />
              <text x={cx} y="314" textAnchor="middle" fontSize="10.5" className="fill-ink-soft">
                {label}
              </text>
              <text x={left} y="297" textAnchor="middle" fontSize="11" className="fill-ink-soft">예</text>
              <text x={right} y="297" textAnchor="middle" fontSize="11" className="fill-ink-soft">아니요</text>
            </g>
          ))}

          {OUT.map(({ x, head, body }) => (
            <g key={x}>
              <rect x={x} y={OY} width={OW} height={56} rx="10"
                className={body ? "fill-rose-soft stroke-line" : "fill-cream-deep stroke-line"}
                strokeWidth="1.5" />
              <text x={x + OW / 2} y={body ? OY + 24 : OY + 33} textAnchor="middle"
                fontSize="14" fontWeight="600"
                className={body ? "fill-rose-deep" : "fill-ink"}>
                {head}
              </text>
              {body && (
                <text x={x + OW / 2} y={OY + 43} textAnchor="middle" fontSize="11.5"
                  className="fill-rose-deep">
                  {body}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>

      <figcaption className="text-ink-soft mt-3 text-xs leading-relaxed">
        판단 흐름을 한눈에 보기 위해 새로 그린 도식입니다. 각 질문의 정확한
        문장과 결과 설명은 아래 교육부 원문을 확인해 주세요.
      </figcaption>
    </figure>
  );
}
