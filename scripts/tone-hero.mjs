// 히어로 이미지 파스텔 톤 조정 (일회성/재실행 가능)
// 입력: assets/hero-prince-src.png (원본)
// 출력: public/hero-prince.jpg (사이트 크림 톤에 맞춘 파스텔 + 웹 최적화)
// 톤을 다시 조절하려면 아래 saturation/brightness/veil alpha를 바꿔 재실행.
import fs from "node:fs";
import sharp from "sharp";

const SRC = "assets/hero-prince-src.png";
const OUT = "public/hero-prince.jpg";
const WIDTH = 1600;

const meta = await sharp(SRC).metadata();
const height = Math.round((WIDTH / meta.width) * meta.height);

// 크림 베일 — 사이트 배경(#faf3ea) 방향으로 파스텔 워시
const veil = {
  create: {
    width: WIDTH,
    height,
    channels: 4,
    background: { r: 250, g: 243, b: 234, alpha: 0.2 },
  },
};

await sharp(SRC)
  .resize(WIDTH)
  .modulate({ saturation: 0.7, brightness: 1.06 }) // 채도 낮추고 살짝 밝게
  .composite([{ input: veil, blend: "over" }])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(OUT);

console.log(
  `${OUT} — ${WIDTH}x${height}, ${Math.round(fs.statSync(OUT).size / 1024)}KB`
);
