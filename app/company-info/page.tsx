import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { Header } from "@/components/layout/Header";
import { commercialPolicy } from "@/data/commercial-policy";

export const metadata: Metadata = {
  title: "Liquid & Powder Flavor Manufacturer",
  description:
    "Production-ready from the first sample. Liquid and powder manufacturing, low minimums, and organized sample-to-production handoff from Norco, CA.",
  alternates: { canonical: "/company-info" },
  openGraph: {
    url: "/company-info",
    title: "Liquid & Powder Flavor Manufacturer | The Flavor Factory",
    description:
      "Production-ready from the first sample. Liquid and powder manufacturing, low minimums, and organized sample-to-production handoff from Norco, CA.",
    images: [
      {
        url: "/og?title=Liquid+%26+Powder+Flavor+Manufacturer",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory - liquid and powder flavor manufacturing",
      },
    ],
  },
  twitter: {
    title: "Liquid & Powder Flavor Manufacturer | The Flavor Factory",
    description:
      "Production-ready from the first sample. Low minimums, organized handoff from sample to repeat production.",
    images: ["/og?title=Liquid+%26+Powder+Flavor+Manufacturer"],
  },
};
import { Footer } from "@/components/layout/Footer";
import { siteImages } from "@/data/site-images";
import { flavorFactoryImages } from "@/data/flavor-factory-images";
import { AppImage } from "@/components/ui/AppImage";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/PageHero";

const capabilities = [
  {
    title: "Development routes",
    copy: "Library starting points, new custom profiles, matches, and reformulations depending on what the project needs.",
  },
  {
    title: "Manufacturing formats",
    copy: "Liquid and powder flavors built around use level, carrier, handling, declaration, and finished-product format.",
  },
  {
    title: "Order practicalities",
    copy: "Low minimum order policy, responsive sample support, and practical order conversations that help teams plan.",
  },
  {
    title: "Application range",
    copy: "Support across bakery, beverage, confectionery, dairy, nutraceutical, oral care, pharmaceutical, and popcorn.",
  },
] as const;

const processSteps = [
  { title: "Project details", copy: "Capture the application, flavor target, format, declaration, benchmark, and timing." },
  { title: "Route selection", copy: "Decide whether the best path is a stock direction, custom development, matching, or reformulation." },
  { title: "Sample review", copy: "Evaluate taste, strength, use level, masking, processing fit, and customer feedback." },
  { title: "Production order", copy: "Prepare the approved flavor for ordering, documentation, and repeat manufacturing." },
] as const;

const companyFacts = [
  "Family-owned flavor manufacturer",
  "Southern California based",
  "Custom liquid and powder capabilities",
  "Low minimum order policy",
] as const;


const BC_COMPANY_INFO = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.flavorfactory.net"},{"@type":"ListItem","position":2,"name":"Company Info","item":"https://www.flavorfactory.net/company-info"}]};
export default function CompanyInfoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BC_COMPANY_INFO) }} />
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <PageHero
              eyebrow="Company Info"
              title="Ready for production on the first sample."
              copy="Most flavor suppliers separate the sample phase from production. We don't. Every sample is built with your manufacturing specs, so when you approve it, scaling is confirmation, not a new problem."
              image={siteImages.companyInfoHero}
              imageAlt="Clean laboratory bench with amber flavor liquids in glass beakers and bottles"
              imagePosition="center 55%"
              primaryHref="/request-samples"
              primaryLabel="Request a Custom Sample"
              secondaryHref="/flavors"
              secondaryLabel="Explore Flavors"
            />

            <section className="company-fact-strip">
              {companyFacts.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </section>

            <Reveal>
              <section className="company-layout-grid">
                <div className="company-lead-panel">
                  <div className="eyebrow">Capabilities</div>
                  <h2>Good samples are only useful if they can repeat.</h2>
                  <p>
                    That means understanding the use level, carrier, processing conditions, and label requirements before the first sample ships, not after you&apos;ve already approved something that won&apos;t scale. The brief shapes the formula. The formula shapes the production path.
                  </p>
                </div>
                <RevealGroup className="company-capability-grid" stagger={0.08}>
                  {capabilities.map((item) => (
                    <RevealItem key={item.title}>
                      <article>
                        <h3>{item.title}</h3>
                        <p>{item.copy}</p>
                      </article>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </section>
            </Reveal>

            <section className="company-process-panel">
              <Reveal>
                <div className="section-head">
                  <div>
                    <div className="new-eyebrow">Project Flow</div>
                    <h2 className="section-title">How a request becomes ready for production.</h2>
                  </div>
                  <p>
                    Most sample delays come from misaligned expectations at the start. The goal is to remove guesswork before time is spent on the wrong path.
                  </p>
                </div>
              </Reveal>
              <RevealGroup className="company-process-grid" stagger={0.1}>
                {processSteps.map((step, index) => (
                  <RevealItem key={step.title}>
                    <article>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <h3>{step.title}</h3>
                      <p>{step.copy}</p>
                    </article>
                  </RevealItem>
                ))}
              </RevealGroup>
            </section>

            <section className="company-service-panel">
              <div>
                <div className="eyebrow">Service Standards</div>
                <h2>Low MOQ. Responsive project support. Clear next steps.</h2>
                <p>{commercialPolicy.moqSummary}</p>
                <p>First samples: {commercialPolicy.sampleTurnaround}. Production: {commercialPolicy.productionLeadTime}</p>
              </div>
              <div className="company-service-actions">
                <Button href="/resources">Supplier Resources</Button>
                <Button href="/contact" variant="secondary">Talk to Our Team</Button>
              </div>
            </section>

            <section className="company-visual-panel">
              <div className="company-visual-image">
                <AppImage
                  src={flavorFactoryImages.companyOperationsHero}
                  alt="Flavor samples in a clean production environment"
                  sizes="(max-width: 900px) calc(100vw - 48px), 50vw"
                  style={{ objectPosition: "center 52%" }}
                />
              </div>
              <div>
                <div className="eyebrow">Production Context</div>
                <h2>Details we want to know early.</h2>
                <p>
                  Format, use level, label requirements, processing conditions, packaging, order size, and timeline all affect the best flavor route. Sharing those details up front helps us recommend a cleaner next step.
                </p>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
