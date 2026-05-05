import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { VisualBlock } from "@/components/VisualBlock";

export default function AboutPage() {
  return (
    <main className="bg-[#f7f4ee] text-[#14251c]">
      <PageHero
        eyebrow="About"
        title="A practical flavor partner for products that need to work."
        body="The Flavor Factory builds custom flavor systems with a grounded, hands-on approach. We listen first, develop with purpose, and carry the work through production."
      />

      <SectionShell eyebrow="Our Approach" title="Good flavor work starts before the first sample." intro="The real work is understanding the product, the customer, the constraints, and the path to repeatable production.">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <VisualBlock label="Use a real facility or lab-detail image here. Clean, quiet, no people required." />
          <div className="grid gap-5">
            {[
              ["Listening First", "Good flavor work starts with the customer's product, market, target profile, and constraints."],
              ["Clear Follow-Through", "Samples, revisions, and questions stay organized, so customers know what is happening next."],
              ["Hands-On Work", "The same practical mindset carries from the first conversation into approved orders and repeat work."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-[1.75rem] border border-[#14251c]/10 bg-white/70 p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.035em]">{title}</h3>
                <p className="mt-4 text-base leading-7 text-[#4f5d54]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell dark eyebrow="The Standard" title="No theater. No black box. Just disciplined flavor work." intro="Customers need more than creative ideas. They need organized samples, clear revisions, production-ready formulas, and a partner that knows how to keep the thread intact.">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "Practical formulation",
            "Controlled revision paths",
            "Production-aware decisions",
            "Clear sample communication",
            "Real application thinking",
            "Repeatable batch execution",
          ].map((item) => (
            <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-6">
              <p className="font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <CTA />
    </main>
  );
}
