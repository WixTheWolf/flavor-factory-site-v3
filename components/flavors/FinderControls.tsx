import type { ReactNode } from "react";
import type { FlavorFilters, IndustryKey } from "@/lib/types";

type Props = {
  filters: FlavorFilters;
  families: string[];
  industries: IndustryKey[];
  applications: string[];
  onChange: (next: FlavorFilters) => void;
};

const selectClass =
  "w-full appearance-none rounded-2xl border border-[#12382B]/10 bg-white/72 px-4 py-3 text-sm font-medium text-[#12382B] outline-none transition focus:border-[#C6843A]";

function industryLabel(value: IndustryKey) {
  return value
    .replace("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function SelectField({
  label,
  value,
  children,
  onChange,
}: {
  label: string;
  value: string;
  children: ReactNode;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C6843A]">{label}</span>
      <span className="relative">
        <select className={selectClass} value={value} onChange={(event) => onChange(event.target.value)}>
          {children}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-b border-r border-[#12382B]/55" />
      </span>
    </label>
  );
}

export function FinderControls({ filters, families, industries, applications, onChange }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      <SelectField label="Family" value={filters.family} onChange={(family) => onChange({ ...filters, family })}>
        <option>All</option>
        {families.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </SelectField>

      <SelectField label="Format" value={filters.format} onChange={(format) => onChange({ ...filters, format: format as FlavorFilters["format"] })}>
        <option>All</option>
        <option>Liquid</option>
        <option>Powder</option>
      </SelectField>

      <SelectField label="Industry" value={filters.industry} onChange={(industry) => onChange({ ...filters, industry: industry as FlavorFilters["industry"] })}>
        <option value="All">All</option>
        {industries.map((item) => (
          <option key={item} value={item}>
            {industryLabel(item)}
          </option>
        ))}
      </SelectField>

      <SelectField label="Application" value={filters.useCase} onChange={(useCase) => onChange({ ...filters, useCase })}>
        <option value="All">All</option>
        {applications.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </SelectField>

      <SelectField
        label="Declaration"
        value={filters.declarationType}
        onChange={(declarationType) => onChange({ ...filters, declarationType: declarationType as FlavorFilters["declarationType"] })}
      >
        <option>All</option>
        <option>Natural</option>
        <option>Natural &amp; Artificial</option>
        <option>Artificial</option>
        <option>Mixed</option>
      </SelectField>
    </div>
  );
}
