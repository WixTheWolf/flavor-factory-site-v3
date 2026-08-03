import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/CTA";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { AppImage } from "@/components/ui/AppImage";
import { siteImages } from "@/data/site-images";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "How Flavor Development Works",
  description:
    "A clear four-step process from project brief to production-ready flavor.",
  alternates: { canonical: "/process" },
  openGraph: {
    url: "/process",
    title: "How Flavor Development Works | The Flavor Factory",
    description: "A clear four-step process from project brief to production-ready flavor.",
    images: [
      {
        url: "/og?title=How+Flavor+Development+Works",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory flavor development process",
      },
    ],
  },
  twitter: {
    title: "How Flavor Development Works | The Flavor Factory",
    description: "Four steps from brief to production.",
    images: ["/og?title=How+Flavor+Development+Works"],
  },
};

const steps = [
  {
    title: "Share the product details.",
    detail: "Tell us the application, target profile, process, label goals, and timeline.",
  },
  {
    title: "We build the first samples.",
    detail: "The first directions are developed around the real product system.",
  },
  {
    title: "You guide the revisions.",
    detail: "Clear feedback turns into focused adjustments until the flavor is approved.",
  },
  {
    title: "We prepare for production.",
    detail: "The approved flavor moves into specifications, manufacturing, and repeat orders.",
  },
] as const;

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Custom Flavor Development Works at The Flavor Factory",
  description: "The custom flavor development process from brief to production-ready flavor.",
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
              title="A clear path from brief to production."
              copy="Share what you know. We will ask for anything else that matters."
              image={siteImages.processHero}
              imageAlt="Stainless steel production vessel with amber flavor liquid"
              primaryHref="/request-samples"
              primaryLabel="Request a Sample"
              secondaryHref="/contact"
              secondaryLabel="Talk to the Team"
              imagePosition="55% center"
            />

            <section className="process-customer-section">
              <div className="section-head">
                <div>
                  <div className="new-eyebrow">How It Works</div>
                  <h2 className="section-title">Four steps.</h2>
                </div>
              </div>
              <RevealGroup className="process-customer-grid process-customer-grid-four" stagger={0.1}>
                {steps.map((step, index) => (
                  <RevealItem key={step.title}>
                    <article>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <h3>{step.title}</h3>
                      <p>{step.detail}</p>
                    </article>
                  </RevealItem>
                ))}
              </RevealGroup>

              <Reveal delay={0.15}>
                <article className="process-production-handoff process-retain-simple">
                  <div className="process-production-handoff-copy">
                    <div className="new-eyebrow">Production Records</div>
                    <h3>Retain samples support repeat-order consistency.</h3>
                    <p>
                      Production batch retain samples are maintained for lot reference and traceability. <Link href="/resources">View supplier resources</Link>.
                    </p>
                  </div>
                  <figure className="process-retain-figure">
                    <div className="process-retain-image">
                      <AppImage
                        src={siteImages.processRetainWall}
                        alt="Labeled production retain samples stored at The Flavor Factory"
                        sizes="(max-width: 900px) calc(100vw - 40px), 480px"
                        style={{ objectPosition: "center 40%" }}
                      />
                    </div>
                  </figure>
                </article>
              </Reveal>
            </section>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
