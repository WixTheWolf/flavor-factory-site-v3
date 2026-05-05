import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { VisualBlock } from "@/components/VisualBlock";

const groups = [
  {
    title: "Flavor Systems",
    items: ["Liquid flavors", "Powder flavors", "Natural flavors", "Artificial flavors", "Custom flavor profiles", "Profile matching and refinement"],
  },
  {
    title: "Performance Work",
    items: ["Masking", "Modulation", "Aftertaste control", "Heat stability", "pH-aware formulation", "Sweetener interaction support"],
  },
  {
    title: "Production Support",
    items: ["Small batch development", "Scale-up support", "Repeat order consistency", "Production handoff", "Formula organization", "Sample revision tracking"],
  },
];

export default function CapabilitiesPage() {
  return (
    <main className="bg-[#f7f4ee] text-[#14251c]">
      <PageHero
        eyebrow="Capabilities"
        title="Custom flavor systems built for real production."
        body="Flavor has to survive the product, the process, the shelf, and the customer's expectations. That is the job."
      />

      <SectionShell eyebrow="Core Capabilities" title="Development, performance, and scale under one roof." intro="The work is not just creating flavor. It is controlling how flavor behaves inside a real product system.">
        <div className="grid gap-5 lg:grid-cols-3">
          {groups.map((group) => (
            <article key={group.title} className="rounded-[2rem] border border-[#14251c]/10 bg-white/70 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-[-0.035em]">{group.title}</h3>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-[#4f5d54]">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9b6b2f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell dark eyebrow="Built To Hold Up" title="A flavor is only good if it performs outside the sample cup." intro="We think through acids, proteins, fats, sweeteners, heat, processing conditions, and how the flavor changes after the first impression.">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <VisualBlock label="Use production-detail imagery here: stainless tanks, clean hoses, powder handling, glass samples, or amber liquids." />
          <div className="grid gap-5">
            {[
              ["Application-first thinking", "Flavor decisions are tied to the product format and the conditions it will face."],
              ["Clean iteration", "Each sample version should answer a question and move the project forward."],
              ["Production-ready handoff", "Approved work needs to translate cleanly into repeatable batch execution."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-7">
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white">{title}</h3>
                <p className="mt-4 text-base leading-7 text-white/62">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <CTA />
    </main>
  );
}
