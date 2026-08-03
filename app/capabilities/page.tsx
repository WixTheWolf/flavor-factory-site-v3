import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { siteImages } from "@/data/site-images";
import { RevealGroup, RevealItem, Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Flavor Development Capabilities",
  description:
    "Custom flavor development, matching, masking, reformulation, and liquid or powder production from Norco, California.",
  alternates: { canonical: "/capabilities" },
  openGraph: {
    url: "/capabilities",
    title: "Flavor Development Capabilities | The Flavor Factory",
    description:
      "Custom development, matching, masking, reformulation, and liquid or powder production from Norco, California.",
    images: [
      {
        url: "/og?title=Flavor+Development+Capabilities",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory flavor development capabilities",
      },
    ],
  },
  twitter: {
    title: "Flavor Development Capabilities | The Flavor Factory",
    description: "Custom flavor development and production from Norco, California.",
    images: ["/og?title=Flavor+Development+Capabilities"],
  },
};

const capabilities = [
  {
    title: "Custom Development",
    copy: "New flavor directions built around the application, base, process, and target profile.",
  },
  {
    title: "Matching & Reformulation",
    copy: "Replacement or improvement work shaped by the finished-product experience.",
  },
  {
    title: "Masking & Modulation",
    copy: "Support for bitterness, actives, minerals, proteins, sweeteners, acidity, and finish.",
  },
  {
    title: "Liquid & Powder Production",
    copy: "Commercial manufacturing from the same Norco facility where development happens.",
  },
] as const;

const developmentStages = [
  {
    title: "Brief",
    copy: "We confirm the application, target profile, process, label goals, and timeline.",
  },
  {
    title: "Samples",
    copy: "The first directions are built around the product system, not a generic library pull.",
  },
  {
    title: "Revisions",
    copy: "Each round focuses on the changes needed to reach approval.",
  },
  {
    title: "Production",
    copy: "The approved flavor moves into specifications, manufacturing, and repeat orders.",
  },
] as const;

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <PageHero
              eyebrow="What We Do"
              title="Flavor development built around the product."
              copy="Custom development, matching, masking, reformulation, and production in liquid or powder formats."
              image={siteImages.capabilitiesHero}
              imageAlt="Amber drop falling from a pipette into a glass beaker"
              imagePosition="center 38%"
              primaryHref="/request-samples"
              primaryLabel="Request a Sample"
              secondaryHref="/industries"
              secondaryLabel="View Industries"
            />

            <Reveal>
              <section className="technical-section capability-core-section">
                <div>
                  <div className="new-eyebrow">Capabilities</div>
                  <h2>Four ways we help.</h2>
                </div>
                <RevealGroup className="technical-grid capability-core-grid" stagger={0.07}>
                  {capabilities.map((item) => (
                    <RevealItem key={item.title}>
                      <article className="capability-core-card">
                        <h3>{item.title}</h3>
                        <p>{item.copy}</p>
                      </article>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </section>
            </Reveal>

            <section className="capability-timeline-section">
              <div className="section-head">
                <div>
                  <div className="new-eyebrow">Process</div>
                  <h2 className="section-title">A clear path from brief to production.</h2>
                </div>
              </div>
              <RevealGroup className="capability-timeline capability-timeline-four" stagger={0.09}>
                {developmentStages.map((stage, index) => (
                  <RevealItem key={stage.title}>
                    <article>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <h3>{stage.title}</h3>
                      <p>{stage.copy}</p>
                    </article>
                  </RevealItem>
                ))}
              </RevealGroup>
            </section>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
