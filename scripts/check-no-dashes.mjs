import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const blocked = new Set([".git", ".next", "node_modules"]);
const extensions = new Set([
  ".css",
  ".js",
  ".json",
  ".md",
  ".mjs",
  ".svg",
  ".ts",
  ".tsx",
]);
const forbidden = /[\u2013\u2014]/g;
const findings = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (blocked.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (!extensions.has(path.extname(entry.name).toLowerCase())) continue;

    const relativePath = path.relative(root, fullPath);
    const lines = fs.readFileSync(fullPath, "utf8").split(/\r?\n/);

    lines.forEach((line, index) => {
      if (forbidden.test(line)) {
        findings.push(`${relativePath}:${index + 1}`);
      }
      forbidden.lastIndex = 0;
    });
  }
}

walk(root);

if (findings.length > 0) {
  console.error("Forbidden en dash or em dash characters found:");
  findings.forEach((finding) => console.error(`- ${finding}`));
  process.exit(1);
}

console.log("No en dash or em dash characters found.");
