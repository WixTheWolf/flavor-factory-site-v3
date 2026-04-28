import fs from "node:fs";
import path from "node:path";

export type FlavorFormat = "Liquid" | "Powder";

export type FlavorRecord = {
  id: string;
  name: string;
  family: string;
  format: FlavorFormat;
  industries: string[];
  applications: string[];
  keywords: string[];
  notes: string;
};

type RawRow = Record<string, unknown>;

const workbookCandidates = [
  "FlavorLibrary.xlsx",
  "flavor-library.xlsx",
  "PCF-Flavor-Library.xlsx",
  "PCF.xlsx",
].map((file) => path.join(process.cwd(), "data", file));

function normalizeList(value: unknown) {
  if (!value) return [];
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  return String(value)
    .split(/[|,;/]/g)
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeFormat(value: unknown): FlavorFormat {
  const raw = String(value || "").toLowerCase();
  if (raw.includes("powder") || raw === "p") return "Powder";
  return "Liquid";
}

function toRecord(row: RawRow, index: number): FlavorRecord {
  // Column mapping assumption:
  // Flavor Name -> name, Format/Form -> format,
  // Family/Category -> family, Industry -> industries,
  // Application -> applications, Keywords/Profile -> keywords, Notes -> notes.
  // Parser intentionally accepts multiple header aliases because legacy PCF exports are inconsistent.
  const name = String(row["Flavor Name"] || row["Name"] || row["Flavor"] || `Flavor ${index + 1}`).trim();
  const family = String(row["Family"] || row["Category"] || row["Flavor Family"] || "Custom").trim();
  const format = normalizeFormat(row["Format"] || row["Form"] || row["Type"]);
  const industries = normalizeList(row["Industry"] || row["Industries"] || row["Industry Relevance"]);
  const applications = normalizeList(row["Application"] || row["Applications"] || row["Use"]);
  const keywords = normalizeList(row["Keywords"] || row["Taste Profile"] || row["Profile"]);
  const notes = String(row["Notes"] || row["Description"] || row["Profile Notes"] || "Custom flavor profile available on request.").trim();

  return {
    id: `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${index}`,
    name,
    family,
    format,
    industries,
    applications,
    keywords,
    notes,
  };
}

function loadWorkbookRows(): RawRow[] {
  const workbookPath = workbookCandidates.find((candidate) => fs.existsSync(candidate));
  if (!workbookPath) return [];

  // Lazy require to avoid bundling xlsx client-side.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const XLSX = require("xlsx");
  const wb = XLSX.readFile(workbookPath);
  const prioritizedSheet = wb.SheetNames.find((name: string) => /flavor|library|pcf/i.test(name)) || wb.SheetNames[0];
  if (!prioritizedSheet) return [];
  return XLSX.utils.sheet_to_json(wb.Sheets[prioritizedSheet], { defval: "" });
}

function loadSeedRows(): RawRow[] {
  const seedPath = path.join(process.cwd(), "data", "flavor-library.seed.json");
  return JSON.parse(fs.readFileSync(seedPath, "utf8"));
}

export function getFlavorLibrary() {
  const rows = loadWorkbookRows();
  const source = rows.length ? "workbook" : "seed";
  const records = (rows.length ? rows : loadSeedRows()).map(toRecord);

  return {
    source,
    records,
  };
}
