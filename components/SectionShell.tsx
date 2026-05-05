import type { ReactNode } from "react";

export function SectionShell({
  eyebrow,
  title,
  intro,
  children,
  dark = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  const tone = dark ? "bg-[#102218] text-white" : "bg-[#f7f4ee] text-[#14251c]";

  return (
    <section className={`${tone} px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32 ${className}`.trim()}>
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-12 max-w-3xl md:mb-16">
          {eyebrow ? <p className={dark ? "eyebrow text-[#d2a45d]" : "eyebrow"}>{eyebrow}</p> : null}
          <h2 className={dark ? "mt-5 font-serif text-4xl font-normal tracking-[-0.035em] text-white md:text-6xl" : "display-title mt-5 text-4xl md:text-6xl"}>
            {title}
          </h2>
          {intro ? <p className={dark ? "mt-6 max-w-2xl text-lg leading-8 text-white/64" : "body-copy mt-6 max-w-2xl"}>{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
