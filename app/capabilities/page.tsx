import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { siteImages } from "@/data/site-images";
import { RevealGroup, RevealItem, Reveal } from "@/components/Reveal";
import { BuiltInNorco } from "@/components/BuiltInNorco";

export const metadata: Metadata = {
  title: "Flavor Development Capabilities",
  description:
    "Custom development, matching, reformulation, masking, and liquid and powder production from The Flavor Factory in Norco, California.",
  alternates: { canonical: "/capabilities" },
  openGraph: {
    url: "/capabilities",
    title: "Flavor Development Capabilities | The Flavor Factory",
    description:
      "Custom development, matching, reformulation, masking, and liquid and powder production from Norco, California.",
    images: [
      {
        url: "/og?title=Flavor+Development+Capabilities",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory flavor development capabilities",
      },
    ],
  },
};

const developmentStages = [
  {
    title: "Understand the Product",
    output: "Application, base, process, label, and timeline",
    copy: "We begin with the finished product and the real constraints around it. That gives the first sample a clear job to do.",
  },
  {
    title: "Build the First Direction",
    output: "Liquid or powder sample set",
    copy: "We choose the strongest starting route for the brief, whether that is a library profile, matching, masking, reformulation, or new custom development.",
  },
  {
    title: "Refine What Matters",
    output: "Clear revision notes and the next sample round",
    copy: "Each revision addresses the changes that matter: impact, sweetness, acidity, masking, finish, stability, or cost.",
  },
  {
    title: "Move Into Production",
    output: "Repeatable manufacturing specifications",
    copy: "Approved work moves into production at the same Norco facility, keeping the handoff practical and the finished flavor consistent.",
  },
] as const;

const technicalWork = [
  "Natural, artificial, and custom flavor systems",
  "Masking and modulation",
  "Heat-stable and process-ready formulations",
  "Sweetener, acid, protein, fat, and active compatibility",
  "Small-batch development through commercial production",
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
    { "@type": "ListItem", position: 2, name: "What We Do", item: "https://www.flavorfactory.net/capabilities" },
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
              eyebrow="What We Do"
              title="Flavor development built around the finished product."
              copy="We develop, match, refine, and manufacture liquid and powder flavors around the base, process, label, and production path."
              image={siteImages.capabilitiesHero}
              imageAlt="Single amber drop falling from a pipette into a glass beaker"
              imagePosition="center 38%"
              primaryHref="/request-samples"
              primaryLabel="Request a Sample"
            />

            <Reveal><BuiltInNorco /></Reveal>

            <section className="capability-timeline-section">
              <div className="section-head">
                <div>
                  <div className="new-eyebrow">Development Path</div>
                  <h2 className="section-title">A clear path from brief to production.</h2>
                </div>
                <p className="section-subtext">Four practical stages, with the same team staying close to the work.</p>
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
                  <h2>What we handle in-house.</h2>
                  <p>Practical support from first formulation through repeat production.</p>
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
        <CTA />
      </main>
      <Footer />
    </>
  );
}
