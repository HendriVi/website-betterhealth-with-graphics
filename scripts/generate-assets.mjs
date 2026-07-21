import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
await mkdir(path.join(root, "public", "social"), { recursive: true });
await mkdir(path.join(root, "public", "icons"), { recursive: true });

const socialSvg = Buffer.from(`
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#14201E"/>
  <g opacity="0.12" stroke="#E9E5D8">
    <path d="M0 90H1200M0 180H1200M0 270H1200M0 360H1200M0 450H1200M0 540H1200"/>
    <path d="M90 0V630M180 0V630M270 0V630M360 0V630M450 0V630M540 0V630M630 0V630M720 0V630M810 0V630M900 0V630M990 0V630M1080 0V630"/>
  </g>
  <rect x="76" y="72" width="6" height="486" fill="#BE6E38"/>
  <text x="126" y="174" fill="#E9E5D8" font-family="Georgia, serif" font-size="76">BetterHealth</text>
  <text x="126" y="245" fill="#D6844A" font-family="Georgia, serif" font-style="italic" font-size="44">The Predictive Energy Budget</text>
  <text x="126" y="356" fill="#B9C0B8" font-family="Arial, sans-serif" font-size="29">Physician-led brain &amp; metabolic medicine</text>
  <text x="126" y="405" fill="#B9C0B8" font-family="Arial, sans-serif" font-size="29">Measured biology · Zürich</text>
  <path d="M744 455C810 288 871 291 921 351C967 405 1019 313 1080 178" stroke="#D6844A" stroke-width="8" stroke-linecap="round"/>
  <path d="M744 386C807 242 876 232 924 304C974 378 1021 267 1080 229" stroke="#E9E5D8" stroke-width="6" stroke-linecap="round" opacity="0.8"/>
</svg>`);

await sharp(socialSvg)
  .resize(1200, 630, { fit: "cover" })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(path.join(root, "public", "social", "og-betterhealth.png"));

const iconSvg = Buffer.from(`
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="72" fill="#14201E"/>
  <rect x="64" y="64" width="8" height="384" fill="#BE6E38"/>
  <text x="112" y="322" fill="#E9E5D8" font-family="Georgia, serif" font-size="240">B</text>
</svg>`);

for (const size of [192, 512]) {
  await sharp(iconSvg)
    .resize(size, size)
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(path.join(root, "public", "icons", `icon-${size}.png`));
}
