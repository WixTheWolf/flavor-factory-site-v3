import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { Industries } from "@/components/Industries";
import { CTA } from "@/components/CTA";
import { OrganizationSchema } from "@/components/OrganizationSchema";
import { Reveal } from "@/components/Reveal";
import { FlavorProblems } from "@/components/FlavorProblems";
import { QualitySupport } from "@/components/QualitySupport";
import { K9sForWarriors } from "@/components/K9sForWarriors";
import { AppImage } from "@/components/ui/AppImage";
import { flavorFactoryImages } from "@/data/flavorFactoryImages";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Liquid & Powder Flavors",
  description:
    "Family-owned custom flavor manufacturer in Norco, CA. Liquid and powder flavors built for real products: your base, processing, and label. Samples in 3-5 days.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Custom Liquid & Powder Flavors | The Flavor Factory",
    description:
      "Family-owned custom flavor manufacturer in Norco, CA. Liquid and powder flavors built for real products: your base, processing, and label. Samples in 3-5 days.",
    images: [
      {
        url: "/og?title=Custom+Liquid+%26+Powder+Flavors",
        width: 1200,
        height: 630,
        alt: "The Flavor Factory - Custom Liquid & Powder Flavor Manufacturer",
      },
    ],
  },
  twitter: {
    title: "Custom Liquid & Powder Flavors | The Flavor Factory",
    description:
      "Family-owned custom flavor manufacturer in Norco, CA. Liquid and powder flavors built for real products. Samples in 3-5 days.",
    images: ["/og?title=Custom+Liquid+%26+Powder+Flavors"],
  },
};

const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.flavorfactory.net/#webpage",
  url: "https://www.flavorfactory.net",
  name: "The Flavor Factory - Custom Liquid & Powder Flavor Manufacturer, Norco CA",
  description: "Family-owned custom flavor manufacturer in Norco, CA. Liquid and powder flavors built for your base, process, and label. Low minimums. First samples in 3-5 business days.",
  isPartOf: { "@id": "https://www.flavorfactory.net/#website" },
  about: { "@id": "https://www.flavorfactory.net/#organization" },
  significantLink: [
    "https://www.flavorfactory.net/flavors",
    "https://www.flavorfactory.net/request-samples",
    "https://www.flavorfactory.net/capabilities",
    "https://www.flavorfactory.net/industries",
    "https://www.flavorfactory.net/about",
    "https://www.flavorfactory.net/process",
    "https://www.flavorfactory.net/contact",
    "https://www.flavorfactory.net/faq",
    "https://www.flavorfactory.net/resources",
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.flavorfactory.net" }],
  },
};

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_SCHEMA) }} />
      <Header />
      <main className="new-home">
        <Hero />
        <Reveal><ProofStrip /></Reveal>
        <Reveal><FlavorProblems /></Reveal>
        <Industries />
        <Reveal>
          <section className="new-section home-accountability-section">
            <div className="home-shell home-accountability-card">
              <div className="home-accountability-photo">
                <AppImage
                  src={flavorFactoryImages.inhouseProductionWorkers}
                  alt="The Flavor Factory production team working in the Norco facility"
                  sizes="(max-width: 900px) calc(100vw - 32px), 42vw"
                  style={{ objectPosition: "center 44%" }}
                />
              </div>
              <div className="home-accountability-inner">
                <div>
                  <div className="new-eyebrow">Family-Owned in Norco</div>
                  <h2>You will know who is working on your project.</h2>
                  <ul className="home-accountability-proofs">
                    <li>Development and production under one roof</li>
                    <li>Direct communication with a small, experienced team</li>
                    <li>A practical handoff from sample to production</li>
                  </ul>
                </div>
                <div>
                  <p>
                    We are not the biggest flavor house, and we do not try to act like one. Our size keeps communication direct and accountability personal.
                  </p>
                  <p>
                    The people who help develop your flavor are close to the people who make it. That matters when a formula needs an adjustment, a deadline moves, or production has a question.
                  </p>
                  <Link className="cta-btn" href="/about">Meet the Family</Link>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
        <Reveal><QualitySupport /></Reveal>
        <Reveal><K9sForWarriors /></Reveal>
        <Reveal><CTA /></Reveal>
      </main>
      <Footer />
    </>
  );
}
