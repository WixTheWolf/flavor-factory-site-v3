import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { ImagePanel } from "@/components/ImagePanel";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";

const steps = [
  {
    number: "01",
    title: "Define",
    body: "Product type, target flavor, market goal, label needs, processing conditions, budget, and formula constraints.",
    outputs: ["Target profile", "Application details", "Constraints", "Initial direction"],
  },
  {
    number: "02",
    title: "Build",
    body: "Bench samples are developed with intention. Each version should move the product closer to the target.",
    outputs: ["Sample versions", "Adjustment notes", "Profile direction", "Internal review"],
  },
  {
    number: "03",
    title: "Validate",
    body: "The flavor is evaluated inside the real application whenever possible: stability, aftertaste, processing, and finish.",
    outputs: ["Application feedback", "Revision plan", "Performance checks", "Approval path"],
  },
  {
    number: "04",
    title: "Scale",
    body: "Approved flavor work moves into production with clean documentation, organized handoff, and batch discipline.",
    outputs: ["Production handoff", "Batch readiness", "Repeat order path", "Ongoing support"],
  },
] as const;

export default function ProcessPage() {
  return (
    <main className="bg-[#f7f4ee] text-[#14251c]">
      <PageHero
        eyebrow="Process"
        title="A clear path from first conversation to repeat production."
        body="Flavor development gets messy when the thread is lost. Our process keeps direction, samples, revisions, and production aligned."
        image="/images/flavor/process-pipette-tall.webp"
        imageAlt="Pipette working with amber liquid flavor in glassware"
      />

      <SectionShell dark eyebrow="How It Works" title="Four stages. One controlled thread." intro="The process keeps creative work connected to practical execution.">
        <div className="grid gap-5 lg:grid-cols-4">
          {steps.map((step) => (
            <Card dark key={step.title} className="p-7">
              <p className="text-sm font-semibold tracking-[0.2em] text-[#d2a45d]">{step.number}</p>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em] text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">{step.body}</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/38">Outputs</p>
                <ul className="mt-4 space-y-2 text-sm text-white/62">
                  {step.outputs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Why It Matters"
        title="Discipline saves time, money, and sanity."
        intro="A good process prevents scattered revisions, unclear expectations, and samples that cannot survive production."
      >
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <ImagePanel src="/images/flavor/process-glassware-clear.webp" alt="Clear glassware arranged for controlled flavor evaluation" className="min-h-[520px]" tone="light" />
          <div className="grid gap-5">
            {[
              ["Fewer blind revisions", "Every version should have a clear purpose and a clear next step."],
              ["Better product fit", "The flavor is judged against the actual base, not a fantasy sample environment."],
              ["Cleaner scale-up", "Approval means less if production cannot repeat it cleanly."],
            ].map(([title, body]) => (
              <Card key={title}>
                <h3 className="text-2xl font-semibold tracking-[-0.035em]">{title}</h3>
                <p className="mt-4 text-base leading-7 text-[#566257]">{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionShell>

      <CTA />
    </main>
  );
}
