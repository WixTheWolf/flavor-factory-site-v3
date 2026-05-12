import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Flavor Development Capabilities",
  description:
    "Custom development, matching, and reformulation. Liquid and powder production from Norco, CA. Heat-stable, process-ready, and label-compliant formulations.",
  alternates: { canonical: "/capabilities" },
  openGraph: {
    url: "/capabilities",
    title: "Flavor Development Capabilities | The Flavor Factory",
    description:
      "Custom development, matching, and reformulation. Liquid and powder production from Norco, CA. Heat-stable, process-ready, and label-compliant formulations.",
    images: [
      {
        url: "/og?title=Flavor+Development+Capabilities",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory - flavor development capabilities",
      },
    ],
  },
  twitter: {
    title: "Flavor Development Capabilities | The Flavor Factory",
    description:
      "Custom development, matching, and reformulation. Liquid and powder, heat-stable, process-ready formulations from Norco, CA.",
    images: ["/og?title=Flavor+Development+Capabilities"],
  },
};
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { siteImages } from "@/data/site-images";

const developmentStages = [
  {
    title: "Concept Development",
    output: "Output: project direction + technical brief",
    copy: "We start with the product system, not a flavor list. Application, base, processing conditions, label goals, cost parameters, and timeline shape the first direction.",
  },
  {
    title: "Sample Creation",
    output: "Output: liquid or powder sample set",
    copy: "First-round samples are built with application constraints in mind. Not a generic starting point: a direction built for the product.",
  },
  {
    title: "Flavor Adjustment",
    output: "Output: revision notes + focused next round",
    copy: "Each revision is documented so every round moves toward approval. Sweetness, acidity, top notes, finish, masking, and modulation are all in play.",
  },
  {
    title: "Scale-Up Support",
    output: "Output: manufacturing specs",
    copy: "Approved samples move into production documentation so the flavor stays consistent when you go from bench to batch.",
  },
  {
    title: "Manufacturing",
    output: "Output: repeatable liquid or powder production",
    copy: "Liquid and powder production from Norco, CA. Consistent batch quality, fast repeat orders, and organized sample-to-order handoff.",
  },
  {
    title: "Customer Follow-Through",
    output: "Output: reorder and reformulation support",
    copy: "Reorders, reformulations, questions, and long-term account management stay organized after first approval.",
  },
] as const;

const technicalWork = [
  "Natural, artificial, and custom flavor systems",
  "Masking and modulation",
  "Heat-stable and process-ready formulations",
  "Sweetener, acid, protein, fat, and active compatibility",
  "Small batch development to full production",
  "Organized revisions and production handoff",
] as const;

export default function CapabilitiesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <PageHero
              eyebrow="Capabilities"
              title="Built for the finished product. Not just the sample."
              copy="Every flavor is formulated for your base, your processing, your label. Not for the flavor bench."
              image={siteImages.capabilitiesHero}
              imageAlt="Single amber drop falling from a pipette into a glass beaker"
              imagePosition="center 38%"
              primaryHref="/request-samples"
              primaryLabel="Request Your First Sample"
              secondaryHref="/industries"
              secondaryLabel="Explore Industries"
            />

            <section className="capability-timeline-section">
              <div className="section-head">
                <div>
                  <div className="new-eyebrow">Development Loop</div>
                  <h2 className="section-title">A controlled path from first idea to repeat order.</h2>
                </div>
                <p className="section-subtext">
                  Each stage gives the customer a clearer decision point: what we need, what we build, and what comes back next.
                </p>
              </div>
              <div className="capability-timeline">
                {developmentStages.map((stage, index) => (
                  <article key={stage.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{stage.title}</h3>
                    <p>{stage.copy}</p>
                    <strong>{stage.output}</strong>
                  </article>
                ))}
              </div>
            </section>

            <section className="technical-section">
              <div>
                <div className="new-eyebrow">Capabilities</div>
                <h2>What this looks like in practice.</h2>
                <p>
                  Six capabilities that move every project from brief to production-ready flavor.
                </p>
              </div>
              <div className="technical-grid">
                {technicalWork.map((item) => (
                  <article key={item}>{item}</article>
                ))}
              </div>
            </section>
          </div>
        </section>
        <CTA
          eyebrow="Sample Development"
          title="Ready to start with a sample?"
          copy="Share the application and target profile. We will build the first direction with your product system in mind."
          label="Request Your First Sample"
        />
      </main>
      <Footer />
    </>
  );
}
