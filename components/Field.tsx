export function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-[#14251c]">{label}</span>
      <input
        placeholder={placeholder}
        className="rounded-2xl border border-[#14251c]/10 bg-[#f7f4ee] px-4 py-3 text-base outline-none transition placeholder:text-[#4f5d54]/45 focus:border-[#b98745]"
      />
    </label>
  );
}
