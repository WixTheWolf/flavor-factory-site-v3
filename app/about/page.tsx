import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { ImagePanel } from "@/components/ImagePanel";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";

const principles = [
  ["Listen first", "Good flavor work starts with the product, market, target profile, and constraints."],
  ["Develop with purpose", "Every sample should answer a question and move the formula forward."],
  ["Carry it through", "The same practical mindset continues into production, documentation, and repeat orders."],
] as const;

export default function AboutPage() {
  return (
    <main className="bg-[#f7f4ee] text-[#14251c]">
      <PageHero
        eyebrow="About"
        title="A practical flavor partner with a premium standard."
        body="The Flavor Factory builds custom flavor systems with a grounded, hands-on approach. Clean development. Clear communication. Production-aware decisions."
        image="/images/flavor/about-lab-bottles-wide.webp"
        imageAlt="Organized flavor bottles in a modern formulation lab"
      />

      <SectionShell
        eyebrow="Point of View"
        title="Good flavor work starts before the first sample."
        intro="The real work is understanding the product, the customer, the constraints, and the path to repeatable production."
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <ImagePanel src="/images/flavor/detail-lab-glass.webp" alt="Glassware and amber flavor liquid in controlled light" className="min-h-[560px]" tone="amber" />
          <div className="grid gap-5">
            {principles.map(([title, body]) => (
              <Card key={title}>
                <h3 className="text-2xl font-semibold tracking-[-0.035em]">{title}</h3>
                <p className="mt-4 text-base leading-7 text-[#566257]">{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        dark
        eyebrow="The Standard"
        title="No theater. No black box. Just disciplined flavor work."
        intro="Customers need organized samples, clear revisions, production-ready formulas, and a partner that keeps the thread intact."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "Practical formulation",
            "Controlled revision paths",
            "Production-aware decisions",
            "Clear sample communication",
            "Real application thinking",
            "Repeatable batch execution",
          ].map((item) => (
            <Card dark key={item} className="p-6">
              <p className="font-semibold text-white">{item}</p>
            </Card>
          ))}
        </div>
      </SectionShell>

      <CTA />
    </main>
  );
}
