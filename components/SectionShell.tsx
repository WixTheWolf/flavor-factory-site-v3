export function SectionShell({
  eyebrow,
  title,
  intro,
  children,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  const sectionClass = [
    dark ? "bg-[#102218] text-white" : "bg-[#f7f4ee] text-[#14251c]",
    "px-6 py-24 md:px-10 lg:px-16",
  ].join(" ");

  return (
    <section className={sectionClass}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          {eyebrow ? (
            <p className={dark ? "mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d2a45d]" : "mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#9b6b2f]"}>
              {eyebrow}
            </p>
          ) : null}
          <h2 className={dark ? "text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl" : "text-4xl font-semibold tracking-[-0.04em] text-[#14251c] md:text-5xl"}>
            {title}
          </h2>
          {intro ? (
            <p className={dark ? "mt-5 text-lg leading-8 text-white/65 md:text-xl" : "mt-5 text-lg leading-8 text-[#4f5d54] md:text-xl"}>
              {intro}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
