import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { AppImage } from "@/components/ui/AppImage";
import { siteImages } from "@/data/site-images";
import { commercialPolicy } from "@/data/commercial-policy";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "How Flavor Development Works",
  description:
    "A clear path from sample request to production. First samples are typically prepared in 3-5 business days from a confirmed brief.",
  alternates: { canonical: "/process" },
  openGraph: {
    url: "/process",
    title: "How Flavor Development Works | The Flavor Factory",
    description:
      "A clear path from sample request to production. First samples are typically prepared in 3-5 business days from a confirmed brief.",
    images: [
      {
        url: "/og?title=How+Flavor+Development+Works",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory flavor development process",
      },
    ],
  },
};

const steps = [
  {
    title: "Tell us what you are making.",
    detail:
      "Start with the product, flavor direction, and shipping address. Share the base, process, label needs, benchmark, or timing when those details are available.",
    result: "A clear starting direction and follow-up questions only where needed.",
  },
  {
    title: "We prepare the first samples.",
    detail:
      "The team reviews the application and chooses the strongest library, matching, masking, reformulation, or custom-development path.",
    result: `First sample directions, typically ${commercialPolicy.sampleTurnaround}.`,
  },
  {
    title: "You taste and guide the next round.",
    detail:
      "Tell us what is too strong, too weak, too sweet, too sharp, too bitter, or simply off target. Each revision should answer a specific question.",
    result: "A focused revision path with the decision history kept intact.",
  },
  {
    title: "The approved flavor moves into production.",
    detail:
      "The final direction is reviewed for formula, documentation, order requirements, and manufacturing before the first production batch is scheduled.",
    result: "A repeatable production path tied to the approved sample.",
  },
] as const;

const afterApproval = [
  {
    title: "Minimum and format",
    copy: commercialPolicy.moqSummary,
  },
  {
    title: "Documentation",
    copy: "Specifications, ingredient information, allergen documentation, and certification support are handled according to the approved formula and project requirements.",
  },
  {
    title: "Production scheduling",
    copy: commercialPolicy.productionLeadTime,
  },
  {
    title: "Release and reorder",
    copy: "Finished batches follow the facility quality process before release. Production retain samples support traceability and repeat-order consistency.",
  },
] as const;

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Custom Flavor Development Works at The Flavor Factory",
  description: "The custom flavor development process from sample request through production.",
  step: steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.detail,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.flavorfactory.net" },
    { "@type": "ListItem", position: 2, name: "How It Works", item: "https://www.flavorfactory.net/process" },
  ],
};

export default function ProcessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <PageHero
              eyebrow="How It Works"
              title="A clear path from sample request to production."
              copy="Start with the basics. Our team will ask for the technical details that matter and keep the project moving without making the first step complicated."
              image={siteImages.processHero}
              imageAlt="Stainless steel production vessel with amber flavor liquid visible through the porthole"
              primaryHref="/request-samples"
              primaryLabel="Request a Sample"
              secondaryHref="/contact"
              secondaryLabel="Talk to Our Team"
              imagePosition="55% center"
            />

            <section className="process-customer-section">
              <div className="section-head">
                <div>
                  <div className="new-eyebrow">From Brief to Approval</div>
                  <h2 className="section-title">Four steps, with a real person involved at every stage.</h2>
                </div>
                <p className="section-subtext">
                  The goal is not to collect every possible detail before starting. It is to get the right details at the right time.
                </p>
              </div>
              <RevealGroup className="process-customer-grid process-four-grid" stagger={0.08}>
                {steps.map((step, index) => (
                  <RevealItem key={step.title}>
                    <article>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <h3>{step.title}</h3>
                      <p>{step.detail}</p>
                      <div className="process-result">
                        <strong>What happens next:</strong> {step.result}
                      </div>
                    </article>
                  </RevealItem>
                ))}
              </RevealGroup>
            </section>

            <Reveal>
              <section className="after-approval-section">
                <div className="after-approval-copy">
                  <div className="new-eyebrow">After Approval</div>
                  <h2>What happens before the first production order ships.</h2>
                  <p>
                    Approval is the handoff point, not the end of the project. Formula, documentation, order details, and scheduling are confirmed before production begins.
                  </p>
                  <Link className="new-inline-cta" href="/resources">See supplier resources</Link>
                </div>
                <RevealGroup className="after-approval-grid" stagger={0.07}>
                  {afterApproval.map((item, index) => (
                    <RevealItem key={item.title}>
                      <article>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <h3>{item.title}</h3>
                        <p>{item.copy}</p>
                      </article>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </section>
            </Reveal>

            <Reveal>
              <section className="process-production-handoff process-retain-only">
                <div className="process-production-handoff-copy">
                  <div className="new-eyebrow">Batch Reference</div>
                  <h2>Production retain samples support repeatability.</h2>
                  <p>
                    Production batch retain samples are maintained for lot reference, traceability, and repeat-order consistency.
                  </p>
                </div>
                <figure className="process-retain-figure">
                  <div className="process-retain-image">
                    <AppImage
                      src={siteImages.processRetainWall}
                      alt="Labeled production retain samples stored on shelving at The Flavor Factory in Norco, California"
                      sizes="(max-width: 900px) calc(100vw - 40px), 480px"
                      style={{ objectPosition: "center 40%" }}
                    />
                  </div>
                  <figcaption>Production retain samples maintained as part of the quality program.</figcaption>
                </figure>
              </section>
            </Reveal>
          </div>
        </section>
        <CTA
          eyebrow="Request a Sample"
          title="Tell us where to start."
          copy="Only your name, email, and shipping address are required. Add the project details you already know."
          label="Request a Sample"
        />
      </main>
      <Footer />
    </>
  );
}
