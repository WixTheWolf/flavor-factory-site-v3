import { SelectBox } from "@/components/ui/SelectBox";
import type { FlavorFilters, IndustryKey } from "@/lib/types";

type Props = {
  filters: FlavorFilters;
  families: string[];
  industries: IndustryKey[];
  applications: string[];
  onChange: (next: FlavorFilters) => void;
};

function industryLabel(value: IndustryKey) {
  return value.replace("-", " ");
}

export function FinderControls({ filters, families, industries, applications, onChange }: Props) {
  return (
    <div className="flavor-filter-grid">
      <label>
        <div className="eyebrow" style={{ marginBottom: 8 }}>
          Family / Collection
        </div>
        <SelectBox value={filters.family} onChange={(e) => onChange({ ...filters, family: e.target.value })}>
          <option>All</option>
          {families.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </SelectBox>
      </label>

      <label>
        <div className="eyebrow" style={{ marginBottom: 8 }}>
          Format
        </div>
        <SelectBox value={filters.format} onChange={(e) => onChange({ ...filters, format: e.target.value as FlavorFilters["format"] })}>
          <option>All</option>
          <option>Liquid</option>
          <option>Powder</option>
        </SelectBox>
      </label>

      <label>
        <div className="eyebrow" style={{ marginBottom: 8 }}>
          Industry
        </div>
        <SelectBox value={filters.industry} onChange={(e) => onChange({ ...filters, industry: e.target.value as FlavorFilters["industry"] })}>
          <option value="All">All</option>
          {industries.map((item) => (
            <option key={item} value={item}>
              {industryLabel(item)}
            </option>
          ))}
        </SelectBox>
      </label>

      <label>
        <div className="eyebrow" style={{ marginBottom: 8 }}>
          Application
        </div>
        <SelectBox value={filters.useCase} onChange={(e) => onChange({ ...filters, useCase: e.target.value })}>
          <option value="All">All</option>
          {applications.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </SelectBox>
      </label>

      <label>
        <div className="eyebrow" style={{ marginBottom: 8 }}>
          Declaration
        </div>
        <SelectBox value={filters.declarationType} onChange={(e) => onChange({ ...filters, declarationType: e.target.value as FlavorFilters["declarationType"] })}>
          <option>All</option>
          <option>Natural</option>
          <option>Natural &amp; Artificial</option>
          <option>Artificial</option>
          <option>Mixed</option>
        </SelectBox>
      </label>
    </div>
  );
}
