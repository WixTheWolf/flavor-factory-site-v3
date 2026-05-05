import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { ImagePanel } from "@/components/ImagePanel";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";

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
] as const;

export default function CapabilitiesPage() {
  return (
    <main className="bg-[#f7f4ee] text-[#14251c]">
      <PageHero
        eyebrow="Capabilities"
        title="Custom flavor systems built for real production."
        body="Flavor has to survive the product, the process, the shelf, and the customer's expectations. That is the job."
        image="/images/flavor/capabilities-tank-hero-wide.webp"
        imageAlt="Stainless production equipment in a clean flavor facility"
      />

      <SectionShell
        eyebrow="Core Capabilities"
        title="Development, performance, and scale under one roof."
        intro="The work is not just creating flavor. It is controlling how flavor behaves inside a real product system."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {groups.map((group) => (
            <Card key={group.title} className="p-8">
              <h3 className="text-2xl font-semibold tracking-[-0.035em]">{group.title}</h3>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-[#566257]">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b98745]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        dark
        eyebrow="Built To Hold Up"
        title="A flavor is only premium if it performs outside the sample cup."
        intro="We think through acids, proteins, fats, sweeteners, heat, processing conditions, and how the profile changes after first impression."
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <ImagePanel src="/images/flavor/production-lab-filling.webp" alt="Flavor production filling equipment in a controlled lab" className="min-h-[540px] shadow-none" />
          <div className="grid gap-5">
            {[
              ["Application-first thinking", "Flavor decisions are tied to the product format and the conditions it will face."],
              ["Clean iteration", "Each sample version should answer a question and move the project forward."],
              ["Production-ready handoff", "Approved work needs to translate cleanly into repeatable batch execution."],
            ].map(([title, body]) => (
              <Card dark key={title}>
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white">{title}</h3>
                <p className="mt-4 text-base leading-7 text-white/62">{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionShell>

      <CTA />
    </main>
  );
}
