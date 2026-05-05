export function VisualBlock({ label }: { label?: string }) {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#17281f] shadow-xl shadow-[#14251c]/15">
      <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)),radial-gradient(circle_at_68%_30%,rgba(190,132,56,0.56),transparent_28%),radial-gradient(circle_at_35%_72%,rgba(232,204,154,0.22),transparent_34%),#102218]" />
      <div className="absolute inset-8 rounded-[1.5rem] border border-white/10 bg-white/[0.025]" />
      {label ? (
        <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
          <p className="text-sm font-medium leading-6 text-white/78">{label}</p>
        </div>
      ) : null}
    </div>
  );
}
