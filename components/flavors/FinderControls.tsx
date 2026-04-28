import { SelectBox } from "@/components/ui/SelectBox";
import type { FlavorFilters, IndustryKey } from "@/lib/types";

type Props = {
  filters: FlavorFilters;
  families: string[];
  industries: IndustryKey[];
  onChange: (next: FlavorFilters) => void;
};

export function FinderControls({ filters, families, industries, onChange }: Props) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 12 }}>
      <SelectBox value={filters.family} onChange={(e) => onChange({ ...filters, family: e.target.value })}>
        <option>All</option>
        {families.map((item) => <option key={item}>{item}</option>)}
      </SelectBox>

      <SelectBox value={filters.format} onChange={(e) => onChange({ ...filters, format: e.target.value as FlavorFilters["format"] })}>
        <option>All</option>
        <option>Liquid</option>
        <option>Powder</option>
      </SelectBox>

      <SelectBox value={filters.industry} onChange={(e) => onChange({ ...filters, industry: e.target.value as FlavorFilters["industry"] })}>
        <option value="All">All</option>
        {industries.map((item) => <option key={item} value={item}>{item}</option>)}
      </SelectBox>
    </div>
  );
}
