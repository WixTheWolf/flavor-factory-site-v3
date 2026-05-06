import Image from "next/image";
import { CTA } from "@/components/CTA";
import { SectionShell } from "@/components/SectionShell";

const certifications = [
  {
    title: "GMP",
    note: "Good Manufacturing Practice procedures support consistent handling, production, and facility discipline.",
  },
  {
    title: "SQF",
    note: "Supports a documented food safety and quality program for manufacturing environments.",
  },
  {
    title: "Halal",
    note: "Halal support is available when formulas and raw materials are compatible with project requirements.",
  },
  {
    title: "Kosher",
    note: "Kosher support is available for projects that require eligible ingredients and documented certification paths.",
  },
  {
    title: "FDA Registered Facility",
    note: "Facility registration supports U.S. food manufacturing requirements. It is not a product approval claim.",
  },
] as const;

const trustPoints = [
  "Document-aware formulation",
  "Ingredient and declaration review",
  "Production-focused quality discipline",
  "Project-by-project confirmation",
] as const;

export default function CertificationsPage() {
  return (
    <main className="bg-[#F4EFE5] text-[#1E1E1A]">
      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="max-w-4xl">
            <p className="eyebrow">Certifications</p>
            <h1 className="display-title mt-5 text-5xl leading-[1] md:text-7xl">
              Food safety and documentation support for real production.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#645f55] md:text-lg">
              Certifications and facility programs matter when a flavor moves from sample approval into manufacturing. We keep the conversation practical: requirements are reviewed against the formula, raw materials, and intended application.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#12382B]/10 bg-white px-6 py-10 md:px-10 md:py-12 lg:px-16">
        <div className="mx-auto flex max-w-[1320px] justify-center">
          <Image
            src="/images/flavor/certifications-transparent.png"
            alt="GMP, SQF, Halal, Kosher, and FDA registered facility certification marks"
            width={1045}
            height={128}
            priority
            sizes="(max-width: 1120px) calc(100vw - 48px), 1045px"
            className="h-auto w-full max-w-[1045px]"
          />
        </div>
      </section>

      <SectionShell
        eyebrow="Programs"
        title="Structured support without overclaiming."
        intro="Each project should be confirmed against the current formula, ingredient list, and customer requirements before making finished-product claims."
        className="pt-14 md:pt-16 lg:pt-20"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {certifications.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.8rem] border border-[#12382B]/10 bg-white/72 p-6 shadow-[0_20px_60px_rgba(30,30,26,0.055)]"
            >
              <p className="font-serif text-4xl tracking-[-0.035em] text-[#12382B]">{item.title}</p>
              <p className="mt-5 text-sm leading-7 text-[#645f55]">{item.note}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <section className="bg-[#12382B] px-6 py-24 text-white md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D9D1C3]">Documentation Mindset</p>
            <h2 className="mt-5 font-serif text-4xl font-normal tracking-[-0.035em] md:text-6xl">
              The right claim depends on the right formula.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/68">
              We review certification needs as part of the development path so label, sourcing, and production requirements are considered before scale-up.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustPoints.map((item) => (
              <div key={item} className="rounded-[1.6rem] border border-white/12 bg-white/[0.055] p-6">
                <p className="text-lg font-semibold tracking-[-0.02em] text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Need Documentation?"
        title="Tell Us What Your Product Requires"
        body="Share the application, target declaration, and certification needs. We will review the best starting point for the project."
      />
    </main>
  );
}
