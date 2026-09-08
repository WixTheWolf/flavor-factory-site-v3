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
import { RevealGroup, RevealItem, Reveal } from "@/components/Reveal";
import { BuiltInNorco } from "@/components/BuiltInNorco";

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

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Custom Flavor Development and Manufacturing Services - The Flavor Factory",
  description: "Custom liquid and powder flavor development and manufacturing services from The Flavor Factory in Norco, California.",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Custom Liquid Flavors", url: "https://www.flavorfactory.net/custom-liquid-flavors" },
    { "@type": "ListItem", position: 2, name: "Custom Powder Flavors", url: "https://www.flavorfactory.net/custom-powder-flavors" },
    { "@type": "ListItem", position: 3, name: "Flavor Matching and Reformulation", url: "https://www.flavorfactory.net/flavor-matching" },
    { "@type": "ListItem", position: 4, name: "Masking and Modulation", url: "https://www.flavorfactory.net/masking-and-modulation" },
    { "@type": "ListItem", position: 5, name: "Organic-Compliant Flavors", url: "https://www.flavorfactory.net/organic-compliant-flavors" },
    { "@type": "ListItem", position: 6, name: "Nutraceutical Flavors", url: "https://www.flavorfactory.net/nutraceutical-flavors" },
    { "@type": "ListItem", position: 7, name: "Beverage Flavors", url: "https://www.flavorfactory.net/beverage-flavors" },
    { "@type": "ListItem", position: 8, name: "Bakery Flavors", url: "https://www.flavorfactory.net/bakery-flavors" },
    { "@type": "ListItem", position: 9, name: "Oral Care Flavors", url: "https://www.flavorfactory.net/oral-care-flavors" },
    { "@type": "ListItem", position: 10, name: "Pharmaceutical Flavors", url: "https://www.flavorfactory.net/pharmaceutical-flavors" },
    { "@type": "ListItem", position: 11, name: "Popcorn Seasoning Flavors", url: "https://www.flavorfactory.net/popcorn-seasoning-flavors" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.flavorfactory.net" },
    { "@type": "ListItem", position: 2, name: "Capabilities", item: "https://www.flavorfactory.net/capabilities" },
  ],
};

export default function CapabilitiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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

            <Reveal><BuiltInNorco /></Reveal>

            <section className="capability-timeline-section">
              <div className="section-head">
                <div>
                  <div className="new-eyebrow">Development Loop</div>
                  <h2 className="section-title">From first sample to repeatable production.</h2>
                </div>
                <p className="section-subtext">
                  Each stage gives the customer a clearer decision point: what we need, what we build, and what comes back next.
                </p>
              </div>
              <RevealGroup className="capability-timeline" stagger={0.09}>
                {developmentStages.map((stage, index) => (
                  <RevealItem key={stage.title}>
                    <article>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <h3>{stage.title}</h3>
                      <p>{stage.copy}</p>
                      <strong>{stage.output}</strong>
                    </article>
                  </RevealItem>
                ))}
              </RevealGroup>
            </section>

            <Reveal>
              <section className="technical-section">
                <div>
                  <div className="new-eyebrow">Capabilities</div>
                  <h2>What this looks like in practice.</h2>
                  <p>
                    Six capabilities that move every project from brief to a flavor ready for production.
                  </p>
                </div>
                <RevealGroup className="technical-grid" stagger={0.07}>
                  {technicalWork.map((item) => (
                    <RevealItem key={item}>
                      <article>{item}</article>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </section>
            </Reveal>
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
