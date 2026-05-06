import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { ImagePanel } from "@/components/ImagePanel";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";

const steps = [
  {
    number: "01",
    title: "Tell Us About the Product",
    body: "We start with the application, target profile, format, timeline, label direction, and any constraints that could shape the flavor.",
    outputs: ["Application details", "Target profile", "Timeline and constraints"],
  },
  {
    number: "02",
    title: "Develop the First Samples",
    body: "Initial samples are built with the real product system in mind, including sweetness, acidity, actives, processing, and finish.",
    outputs: ["First sample set", "Development notes", "Recommended direction"],
  },
  {
    number: "03",
    title: "Review and Adjust",
    body: "Feedback becomes focused revisions. Each version should answer a clear question and move the project closer to approval.",
    outputs: ["Revision path", "Profile adjustments", "Approval support"],
  },
  {
    number: "04",
    title: "Prepare for Production",
    body: "Approved work moves into manufacturing with organized handoff, scale-up thinking, and a clean path for repeat orders.",
    outputs: ["Production handoff", "Batch readiness", "Repeat order path"],
  },
] as const;

export default function ProcessPage() {
  return (
    <main className="bg-[#F4EFE5] text-[#1E1E1A]">
      <PageHero
        eyebrow="Process"
        title="A clear path from idea to approved flavor."
        body="Flavor development works best when the thread stays intact. Our process keeps product direction, samples, revisions, and production preparation connected."
        image="/images/flavor/process-pipette.webp"
        imageAlt="Pipette applying amber liquid during flavor development"
      />

      <SectionShell
        dark
        eyebrow="How It Works"
        title="Four stages. One controlled development path."
        intro="The process is simple by design: understand the product, build the samples, adjust with purpose, then prepare the approved flavor for production."
      >
        <div className="grid gap-5 lg:grid-cols-4">
          {steps.map((step) => (
            <Card key={step.title} dark className="flex min-h-[390px] flex-col">
              <p className="font-serif text-5xl text-[#D9D1C3]">{step.number}</p>
              <h2 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-white">{step.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/66">{step.body}</p>
              <div className="mt-auto pt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D9D1C3]">Outputs</p>
                <ul className="mt-4 grid gap-2 text-sm text-white/62">
                  {step.outputs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </SectionShell>

      <section className="bg-[#F4EFE5] px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow">Why It Matters</p>
            <h2 className="display-title mt-5 text-4xl md:text-6xl">Better process creates better decisions.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#645f55]">
              Clear stages help teams compare samples, align on adjustments, and avoid losing the details that make a flavor work inside the product.
            </p>
          </div>
          <ImagePanel
            src="/images/flavor/process-whisk-liquid.webp"
            alt="Amber flavor liquid being mixed in a controlled formulation setting"
            className="min-h-[430px]"
            tone="amber"
          />
        </div>
      </section>

      <CTA />
    </main>
  );
}
