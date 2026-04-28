"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function StickySearchBar({ value, onChange }: Props) {
  return (
    <div className="finder-toolbar">
      <input
        className="input"
        placeholder="Search flavor name, profile, or keyword"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
