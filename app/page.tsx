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
import { BuiltInNorco } from "@/components/BuiltInNorco";
import { QualitySupport } from "@/components/QualitySupport";
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
  "@id": "https://flavorfactory.net/#webpage",
  url: "https://flavorfactory.net",
  name: "The Flavor Factory - Custom Liquid & Powder Flavor Manufacturer, Norco CA",
  description: "Family-owned custom flavor manufacturer in Norco, CA. Liquid and powder flavors built for your base, process, and label. Low minimums. First samples in 3-5 business days.",
  isPartOf: { "@id": "https://flavorfactory.net/#website" },
  about: { "@id": "https://flavorfactory.net/#organization" },
  significantLink: [
    "https://flavorfactory.net/flavors",
    "https://flavorfactory.net/request-samples",
    "https://flavorfactory.net/capabilities",
    "https://flavorfactory.net/industries",
    "https://flavorfactory.net/about",
    "https://flavorfactory.net/process",
    "https://flavorfactory.net/contact",
    "https://flavorfactory.net/faq",
    "https://flavorfactory.net/resources",
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://flavorfactory.net" }],
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
        <Reveal>
          <section className="new-isolation">
            <div className="home-shell new-isolation-centered">
              <p className="pull-quote">Most flavor houses develop for the tasting strip. We develop for the finished product.</p>
            </div>
          </section>
        </Reveal>
        <Industries />
        <Reveal>
          <section className="new-section home-accountability-section">
            <div className="home-shell home-accountability-inner">
              <div>
                <div className="new-eyebrow">One Team, One Facility</div>
                <h2>Small-team accountability. Real manufacturing capability.</h2>
                <ul className="home-accountability-proofs">
                  <li>In-house development and production</li>
                  <li>Direct communication with the team</li>
                  <li>Cleaner handoff from sample to scale</li>
                </ul>
              </div>
              <div>
                <p>
                  Development, production, quality, and customer communication happen under one roof in Norco, CA. The people who understand the sample also understand how it gets made.
                </p>
                <p>Send us the application, base, target profile, and label goals. We will help you find the right starting point.</p>
                <Link className="cta-btn" href="/request-samples">Request a Custom Sample</Link>
              </div>
            </div>
          </section>
        </Reveal>
        <Reveal>
          <section className="new-section home-facility-section">
            <div className="home-shell">
              <BuiltInNorco />
            </div>
          </section>
        </Reveal>
        <Reveal>
          <section className="new-who-section">
            <div className="home-shell">
              <p className="new-who-headline">Built for teams who need flavors that work in the real product.</p>
              <ul className="new-who-list">
                <li>Food and beverage brands developing new products</li>
                <li>Co-packers and manufacturers needing reliable flavor supply</li>
                <li>R&amp;D teams matching or improving an existing profile</li>
                <li>Startups moving from prototype to first production run</li>
                <li>Established brands needing faster sample turnaround</li>
              </ul>
            </div>
          </section>
        </Reveal>
        <Reveal><QualitySupport /></Reveal>
        <Reveal><CTA /></Reveal>
      </main>
      <Footer />
    </>
  );
}
