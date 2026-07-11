// placeholder 썸네일 생성기 — 웜톤 팔레트에서 slug 해시로 색 자동 배정
// 사용법: node scripts/make-thumb.mjs <slug> [이니셜]
// 결과: public/thumbnails/<slug>.svg (실제 썸네일 확보 전까지의 임시 이미지)
import fs from "node:fs";
import path from "node:path";

// 웜톤 전용 — 차가운 회색·파랑 계열 금지
const PALETTE = [
  { bg: "#f0e4d3", fg: "#5c4633" }, // 베이지
  { bg: "#f3dddf", fg: "#9a4a55" }, // 로즈
  { bg: "#ead9bf", fg: "#6b5138" }, // 딥 베이지
  { bg: "#e7d7c3", fg: "#5c4633" }, // 라이트 브라운
];

const slug = process.argv[2];
if (!slug) {
  console.error("사용법: node scripts/make-thumb.mjs <slug> [이니셜]");
  process.exit(1);
}
const initial = (process.argv[3] ?? slug[0]).toUpperCase();
// 위치 가중 합 — slug가 비슷해도 팔레트가 고르게 갈리도록
const hash = [...slug].reduce((a, c, i) => a + c.charCodeAt(0) * (i + 1), 0);
const { bg, fg } = PALETTE[hash % PALETTE.length];

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360">
  <rect width="640" height="360" fill="${bg}"/>
  <text x="320" y="184" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="140" font-weight="700" fill="${fg}">${initial}</text>
</svg>
`;

const out = path.join("public", "thumbnails", `${slug}.svg`);
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, svg);
console.log(`${out} — bg ${bg}, fg ${fg}, initial ${initial}`);
