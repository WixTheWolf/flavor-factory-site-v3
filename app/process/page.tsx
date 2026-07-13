import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "How Flavor Development Works",
  description:
    "Four steps from brief to a flavor ready for production. Share your application and constraints. First samples typically in 3-5 business days.",
  alternates: { canonical: "/process" },
  openGraph: {
    url: "/process",
    title: "How Flavor Development Works | The Flavor Factory",
    description:
      "Four steps from brief to a flavor ready for production. Share your application and constraints. First samples typically in 3-5 business days.",
    images: [
      {
        url: "/og?title=How+Flavor+Development+Works",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory - flavor development process",
      },
    ],
  },
  twitter: {
    title: "How Flavor Development Works | The Flavor Factory",
    description:
      "Four steps from brief to a flavor ready for production. First samples typically in 3-5 business days.",
    images: ["/og?title=How+Flavor+Development+Works"],
  },
};
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/CTA";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { AppImage } from "@/components/ui/AppImage";
import { siteImages } from "@/data/site-images";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const steps = [
  {
    title: "Tell us about the product.",
    detail:
      "Application format, target flavor profile, label requirements, timeline, and the constraints that will actually affect the formula. The more specific, the closer the first samples will be.",
    give: "A 10-minute conversation or a quick email.",
    get: "A development direction and a timeline.",
  },
  {
    title: "We build the first samples.",
    detail:
      "Initial flavor directions are built with your real product system in mind: base, processing, sweetener, and actives all considered. Liquid or powder depends on the application.",
    give: "A confirmed brief.",
    get: "First sample directions, typically in 3-5 business days.",
  },
  {
    title: "You review and direct the revisions.",
    detail:
      "Feedback turns into focused adjustments, not scattered guessing. Each round has a clear target, and we document what changed so every revision moves forward.",
    give: "Clear feedback on taste, strength, finish, and fit.",
    get: "A tighter next version with the decision thread intact.",
  },
  {
    title: "We prepare for production.",
    detail:
      "Approved work moves into manufacturing specs with documentation that keeps the flavor consistent from bench to batch. Repeat orders have a clean path from day one.",
    give: "Approval, order timing, and production needs.",
    get: "A flavor path built for production.",
  },
] as const;

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Custom Flavor Development Works at The Flavor Factory",
  description: "The custom flavor development process from brief to production-ready flavor, including sample turnaround and revision workflow.",
  totalTime: "P7D",
  estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "Contact for pricing" },
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
    { "@type": "ListItem", position: 2, name: "Process", item: "https://www.flavorfactory.net/process" },
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
              eyebrow="Process"
              title="Specifics shape faster samples."
              copy="The more detail you share, the fewer iterations you need. Here's the conversation that gets you to approval quickly."
              image={siteImages.processHero}
              imageAlt="Stainless steel production vessel with amber flavor liquid visible through the porthole"
              primaryHref="/request-samples"
              primaryLabel="Request a Custom Sample"
              secondaryHref="/contact"
              secondaryLabel="Talk to Our Team"
              imagePosition="55% center"
            />

            <section className="process-customer-section">
              <div className="section-head">
                <div>
                  <div className="new-eyebrow">How It Works</div>
                  <h2 className="section-title">Four steps. You are in control of all of them.</h2>
                </div>
                <p className="section-subtext">
                  Clear stages help you compare versions, direct revisions, and move the approved flavor into production without losing what made it work.
                </p>
              </div>
              <RevealGroup className="process-customer-grid" stagger={0.1}>
                {steps.slice(0, 3).map((step, index) => (
                  <RevealItem key={step.title}>
                    <article>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <h3>{step.title}</h3>
                      <p>{step.detail}</p>
                      <div>
                        <strong>What you give us:</strong> {step.give}
                      </div>
                      <div>
                        <strong>What you get back:</strong> {step.get}
                      </div>
                    </article>
                  </RevealItem>
                ))}
              </RevealGroup>

              <Reveal delay={0.15}>
                <article className="process-production-handoff">
                  <div className="process-production-handoff-copy">
                    <span>04</span>
                    <h3>{steps[3].title}</h3>
                    <p>{steps[3].detail}</p>
                    <div>
                      <strong>What you give us:</strong> {steps[3].give}
                    </div>
                    <div>
                      <strong>What you get back:</strong> {steps[3].get}
                    </div>
                    <p className="process-retain-note">
                      Production batch retain samples are maintained for lot reference, traceability, and repeat-order consistency.{" "}
                      <Link href="/resources">See supplier resources</Link>.
                    </p>
                  </div>
                  <figure className="process-retain-figure">
                    <div className="process-retain-image">
                      <AppImage
                        src={siteImages.processRetainWall}
                        alt="Labeled production retain samples stored on shelving at The Flavor Factory in Norco, CA"
                        sizes="(max-width: 900px) calc(100vw - 40px), 480px"
                        style={{ objectPosition: "center 40%" }}
                      />
                    </div>
                    <figcaption>Retain samples from production batches, maintained as part of our quality program.</figcaption>
                  </figure>
                </article>
              </Reveal>
            </section>
          </div>
        </section>
        <CTA
          eyebrow="Brief"
          title="Start with the product details."
          copy="Application, target profile, and timeline. That is enough to get the first samples moving."
          label="Request a Custom Sample"
        />
      </main>
      <Footer />
    </>
  );
}
