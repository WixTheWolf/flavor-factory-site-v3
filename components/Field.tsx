export function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-[#12382B]">{label}</span>
      <input
        placeholder={placeholder}
        className="rounded-2xl border border-[#12382B]/10 bg-[#F4EFE5] px-4 py-3 text-base outline-none transition placeholder:text-[#645f55]/45 focus:border-[#C6843A]"
      />
    </label>
  );
}
