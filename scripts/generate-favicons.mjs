import { chromium } from "playwright";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const fontUrl = pathToFileURL(
  path.join(root, "node_modules", "@fontsource", "playfair-display", "files", "playfair-display-latin-400-normal.woff2")
).href;

const icons = [
  { size: 16, path: "public/favicon-16x16.png", ink: "#1A1614", paper: "#ECE8E1" },
  { size: 32, path: "public/favicon-32x32.png", ink: "#1A1614", paper: "#ECE8E1" },
  { size: 48, path: "public/favicon-48x48.png", ink: "#1A1614", paper: "#ECE8E1" },
  { size: 64, path: "public/favicon-64x64.png", ink: "#1A1614", paper: "#ECE8E1" },
  { size: 180, path: "public/apple-touch-icon.png", ink: "#1A1614", paper: "#ECE8E1" },
  { size: 512, path: "public/icon-512-maskable.png", ink: "#ECE8E1", paper: "#1A1614", square: true },
];

function html({ size, ink, paper, square }) {
  const radius = square ? 0 : Math.round(size * 0.19);
  const fontSize = Math.round(size * 0.5);

  return `<!doctype html>
    <html>
      <head>
        <style>
          @font-face {
            font-family: "Playfair Display";
            src: url("${fontUrl}") format("woff2");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          html, body {
            width: ${size}px;
            height: ${size}px;
            margin: 0;
            overflow: hidden;
            background: transparent;
          }
          .icon {
            width: ${size}px;
            height: ${size}px;
            border-radius: ${radius}px;
            background: ${paper};
            color: ${ink};
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: "Playfair Display", Georgia, serif;
            font-size: ${fontSize}px;
            font-weight: 400;
            line-height: 1;
            letter-spacing: ${Math.max(0.5, size * 0.008)}px;
            padding-bottom: ${Math.round(size * 0.04)}px;
          }
        </style>
      </head>
      <body><div class="icon">FF</div></body>
    </html>`;
}

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  for (const icon of icons) {
    await page.setViewportSize({ width: icon.size, height: icon.size });
    await page.setContent(html(icon));
    await page.screenshot({
      path: path.join(root, icon.path),
      clip: { x: 0, y: 0, width: icon.size, height: icon.size },
      omitBackground: true,
    });
  }
} finally {
  await browser.close();
}
