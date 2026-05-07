import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { Industries } from "@/components/Industries";
import { CTA } from "@/components/CTA";
import { AppImage } from "@/components/ui/AppImage";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="new-home">
        <Hero />
        <ProofStrip />
        <section className="new-isolation">
          <div className="home-shell new-isolation-centered">
            <p className="pull-quote">Good on the bench is not good enough.</p>
          </div>
        </section>
        <Industries />
        <section className="new-cert-row-section">
          <div className="home-shell">
            <p className="new-cert-intro">Every project starts with your label in mind.</p>
            <div className="new-cert-image" aria-label="Certifications and facility programs">
              <AppImage
                src="/images/flavor-factory/certifications-hero-transparent.png"
                alt="GMP, ISO 22000, Halal, Kosher, and FDA Registered Facility badges"
                fill={false}
                width={1536}
                height={214}
                sizes="(max-width: 900px) calc(100vw - 32px), 900px"
              />
            </div>
            <Link className="new-inline-cta" href="/certifications">See certifications</Link>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
