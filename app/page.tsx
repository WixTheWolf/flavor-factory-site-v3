import type { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Custom Liquid & Powder Flavors",
  description:
    "Family-owned custom flavor manufacturer in Norco, CA. Liquid and powder development, matching, masking, and production support.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Custom Liquid & Powder Flavors | The Flavor Factory",
    description:
      "Family-owned custom flavor manufacturer in Norco, CA. Liquid and powder development, matching, masking, and production support.",
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
      "Family-owned custom flavor manufacturer in Norco, CA. Liquid and powder flavors built for real products.",
    images: ["/og?title=Custom+Liquid+%26+Powder+Flavors"],
  },
};

const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.flavorfactory.net/#webpage",
  url: "https://www.flavorfactory.net",
  name: "The Flavor Factory - Custom Liquid & Powder Flavor Manufacturer, Norco CA",
  description: "Family-owned custom flavor manufacturer in Norco, CA.",
  isPartOf: { "@id": "https://www.flavorfactory.net/#website" },
  about: { "@id": "https://www.flavorfactory.net/#organization" },
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
            <div className="home-shell home-accountability-inner">
              <div>
                <div className="new-eyebrow">Family-Owned in Norco</div>
                <h2>A small team stays close to every project.</h2>
                <ul className="home-accountability-proofs">
                  <li>Development and production under one roof</li>
                  <li>Direct communication with the team</li>
                  <li>A practical path from sample to production</li>
                </ul>
              </div>
              <div>
                <p>
                  Development, production, quality, and customer communication happen in one facility. That keeps decisions clear and handoffs practical.
                </p>
                <Link className="cta-btn" href="/about">Meet the Team</Link>
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
