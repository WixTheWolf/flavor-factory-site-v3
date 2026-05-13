import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { Industries } from "@/components/Industries";
import { CTA } from "@/components/CTA";
import { AppImage } from "@/components/ui/AppImage";
import { OrganizationSchema } from "@/components/OrganizationSchema";
import { Reveal } from "@/components/Reveal";
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

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <Header />
      <main className="new-home">
        <Hero />
        <Reveal><ProofStrip /></Reveal>
        <Reveal>
          <section className="new-isolation">
            <div className="home-shell new-isolation-centered">
              <p className="pull-quote">Most flavor houses develop to impress. We develop to perform.</p>
            </div>
          </section>
        </Reveal>
        <Industries />
        <Reveal>
          <section className="new-cert-row-section">
            <div className="home-shell">
              <p className="new-cert-intro">Your label sets the rules. We work within them.</p>
              <div className="new-cert-image" aria-label="Certifications and facility programs">
                <AppImage
                  src="/images/flavor-factory/certifications_transparent.png"
                  alt="SQF, GMP, Kosher, Halal, Organic, and FDA Registered Facility badges"
                  fill={false}
                  width={2172}
                  height={724}
                  sizes="(max-width: 900px) calc(100vw - 32px), 900px"
                />
              </div>
              <Link className="new-inline-cta" href="/certifications">See certifications →</Link>
            </div>
          </section>
        </Reveal>
        <Reveal><CTA /></Reveal>
      </main>
      <Footer />
    </>
  );
}
