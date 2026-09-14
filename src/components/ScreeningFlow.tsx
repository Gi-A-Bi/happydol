/**
 * 학운위 심의 대상 판단 순서도 — 구조를 한눈에 보여주는 도식.
 *
 * 교육부 가이드 문구를 그대로 싣는 것이 방침이므로, 이 도식은 문구를 대체하지 않는다.
 * Q1~Q3의 전체 문장과 결과 설명은 ScreeningGuide가 그대로 표시하고,
 * 여기서는 "Q1에서 갈라진 뒤 Q2·Q3 조합으로 결정된다"는 구조만 그린다.
 *
 * Q1 아니요  → 심의 불필요
 * Q1 예      → Q2 × Q3 조합으로 결정 (2×2)
 */

// 도식 좌표 — viewBox 기준 고정값이므로 Tailwind 간격 토큰 대상이 아니다.
const COL = [300, 462] as const; // Q3 예 / 아니요 열 시작 x
const ROW = [150, 222] as const; // Q2 예 / 아니요 행 시작 y
const CW = 158; // 셀 너비
const CH = 68; // 셀 높이

const CELLS = [
  { x: COL[0], y: ROW[0], head: "심의 필요", body: "필수 + 선택기준" },
  { x: COL[1], y: ROW[0], head: "심의 필요", body: "필수기준" },
  { x: COL[0], y: ROW[1], head: "심의 필요", body: "선택기준" },
  { x: COL[1], y: ROW[1], head: "심의 불필요", body: null },
];

export default function ScreeningFlow() {
  return (
    <figure className="mt-5 mb-0">
      {/* 좁은 화면에서는 도식을 가로 스크롤 — 글자가 작아지는 것보다 낫다 */}
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 640 306"
          className="min-w-lg w-full"
          role="img"
          aria-labelledby="screening-flow-title screening-flow-desc"
        >
          <title id="screening-flow-title">
            학교운영위원회 심의 대상 판단 순서도
          </title>
          <desc id="screening-flow-desc">
            Q1(학교 교육과정 운영을 위해 사용하는지)이 아니요이면 심의가
            필요하지 않습니다. 예이면 Q2(학생 개인정보를 처리하는지)와 Q3(교과
            성취기준 관련 학습콘텐츠를 포함하는지)의 조합으로 결정됩니다. Q2 예
            그리고 Q3 예이면 필수기준과 선택기준을 모두 활용해 심의합니다. Q2
            예, Q3 아니요이면 필수기준으로 심의합니다. Q2 아니요, Q3 예이면
            선택기준으로 심의합니다. 둘 다 아니요이면 심의가 필요하지 않습니다.
          </desc>

          {/* Q1 */}
          <rect
            x="236"
            y="12"
            width="168"
            height="44"
            rx="10"
            className="fill-surface stroke-line"
            strokeWidth="1.5"
          />
          <text
            x="320"
            y="39"
            textAnchor="middle"
            fontSize="15"
            fontWeight="600"
            className="fill-ink"
          >
            Q1. 교육과정 운영용인가?
          </text>

          {/* Q1 아니요 → 심의 불필요 */}
          <path
            d="M236 34 H176"
            className="stroke-line"
            strokeWidth="1.5"
            fill="none"
          />
          <text x="206" y="27" textAnchor="middle" fontSize="12" className="fill-ink-soft">
            아니요
          </text>
          <rect
            x="16"
            y="12"
            width="160"
            height="44"
            rx="10"
            className="fill-cream-deep stroke-line"
            strokeWidth="1.5"
          />
          <text
            x="96"
            y="39"
            textAnchor="middle"
            fontSize="14"
            fontWeight="600"
            className="fill-ink"
          >
            심의 불필요
          </text>

          {/* Q1 예 → 아래 표로 */}
          <path
            d="M320 56 V92"
            className="stroke-line"
            strokeWidth="1.5"
            fill="none"
          />
          <text x="336" y="78" fontSize="12" className="fill-ink-soft">
            예
          </text>

          {/* 열 머리 — Q3 */}
          <text x="379" y="118" textAnchor="middle" fontSize="13" fontWeight="600" className="fill-ink">
            Q3. 예
          </text>
          <text x="541" y="118" textAnchor="middle" fontSize="13" fontWeight="600" className="fill-ink">
            Q3. 아니요
          </text>
          <text x="460" y="100" textAnchor="middle" fontSize="11" className="fill-ink-soft">
            교과 학습콘텐츠 포함 여부
          </text>

          {/* 행 머리 — Q2 */}
          <text x="278" y={ROW[0] + 40} textAnchor="end" fontSize="13" fontWeight="600" className="fill-ink">
            Q2. 예
          </text>
          <text x="278" y={ROW[1] + 40} textAnchor="end" fontSize="13" fontWeight="600" className="fill-ink">
            Q2. 아니요
          </text>
          <text
            x="-186"
            y="128"
            transform="rotate(-90)"
            textAnchor="middle"
            fontSize="11"
            className="fill-ink-soft"
          >
            학생 개인정보 처리 여부
          </text>

          {/* 2×2 결과 */}
          {CELLS.map(({ x, y, head, body }) => (
            <g key={`${x}-${y}`}>
              <rect
                x={x}
                y={y}
                width={CW}
                height={CH}
                rx="10"
                className={
                  body
                    ? "fill-rose-soft stroke-line"
                    : "fill-cream-deep stroke-line"
                }
                strokeWidth="1.5"
              />
              <text
                x={x + CW / 2}
                y={body ? y + 28 : y + 40}
                textAnchor="middle"
                fontSize="14"
                fontWeight="600"
                className={body ? "fill-rose-deep" : "fill-ink"}
              >
                {head}
              </text>
              {body && (
                <text
                  x={x + CW / 2}
                  y={y + 49}
                  textAnchor="middle"
                  fontSize="12"
                  className="fill-rose-deep"
                >
                  {body}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>

      <figcaption className="text-ink-soft mt-3 text-xs leading-relaxed">
        구조를 한눈에 보기 위한 도식입니다. 각 질문의 정확한 문장과 결과 설명은
        아래 교육부 원문을 확인해 주세요.
      </figcaption>
    </figure>
  );
}
