// 썸네일 프레임 템플릿 — 빌드 타임 생성 (npm run build 앞단에서 실행)
//
// 입력: assets/screenshots/<slug>.png  (실제 앱 스크린샷, 없어도 됨)
// 출력: public/thumbnails/<slug>.png   (1200x900, 4:3)
//
// - 스크린샷이 있으면: 웜톤 배경 위에 둥근 모서리로 얹힌 프레임 썸네일 생성
//   (출력이 스크린샷보다 최신이면 스킵 — 재실행 안전)
// - 스크린샷이 없으면: 이니셜 placeholder 생성 (이미 있으면 유지 —
//   CI 컨테이너의 폰트 차이를 피하기 위해 생성물은 커밋해서 쓴다)
// - slug 해시로 웜톤 팔레트에서 배경색 자동 배정. 회색·파랑 계열 금지
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const W = 1200;
const H = 900; // 4:3
const MARGIN = 80; // 스크린샷 주변 웜톤 여백
const RADIUS = 24; // 스크린샷 모서리

const PALETTE = [
  { bg: "#f0e4d3", fg: "#5c4633" }, // 베이지
  { bg: "#f3dddf", fg: "#9a4a55" }, // 로즈
  { bg: "#ead9bf", fg: "#6b5138" }, // 딥 베이지
  { bg: "#e7d7c3", fg: "#5c4633" }, // 라이트 브라운
];

const pick = (slug) => {
  const hash = [...slug].reduce((a, c, i) => a + c.charCodeAt(0) * (i + 1), 0);
  return PALETTE[hash % PALETTE.length];
};

const CONTENT_DIR = path.join("content", "projects");
const SHOT_DIR = path.join("assets", "screenshots");
const OUT_DIR = path.join("public", "thumbnails");

fs.mkdirSync(OUT_DIR, { recursive: true });

const slugs = fs
  .readdirSync(CONTENT_DIR)
  .filter((f) => f.endsWith(".mdx"))
  .map((f) => f.replace(/\.mdx$/, ""));

for (const slug of slugs) {
  const shot = path.join(SHOT_DIR, `${slug}.png`);
  const out = path.join(OUT_DIR, `${slug}.png`);
  const { bg, fg } = pick(slug);

  if (fs.existsSync(shot)) {
    const outOk =
      fs.existsSync(out) &&
      fs.statSync(out).mtimeMs > fs.statSync(shot).mtimeMs;
    if (outOk) {
      console.log(`skip (최신): ${out}`);
      continue;
    }
    // 스크린샷을 프레임 안쪽에 맞추고 모서리를 둥글게
    const inner = await sharp(shot)
      .resize(W - MARGIN * 2, H - MARGIN * 2, { fit: "inside" })
      .ensureAlpha()
      .toBuffer();
    const { width, height } = await sharp(inner).metadata();
    const mask = Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg"><rect width="${width}" height="${height}" rx="${RADIUS}" ry="${RADIUS}"/></svg>`
    );
    const rounded = await sharp(inner)
      .composite([{ input: mask, blend: "dest-in" }])
      .png()
      .toBuffer();
    await sharp({ create: { width: W, height: H, channels: 4, background: bg } })
      .composite([{ input: rounded, gravity: "center" }])
      .png()
      .toFile(out);
    console.log(`framed: ${out}`);
  } else if (!fs.existsSync(out)) {
    const initial = slug[0].toUpperCase();
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="${bg}"/>
  <text x="${W / 2}" y="${H / 2 + 10}" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="300" font-weight="700" fill="${fg}">${initial}</text>
</svg>`;
    await sharp(Buffer.from(svg)).png().toFile(out);
    console.log(`placeholder: ${out}`);
  } else {
    console.log(`skip (placeholder 유지): ${out}`);
  }
}
