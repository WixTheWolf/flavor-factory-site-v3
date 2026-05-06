import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { Industries } from "@/components/Industries";
import { CTA } from "@/components/CTA";
import { siteCopy } from "@/data/site-copy";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="new-home">
        <Hero />
        <ProofStrip />
        <section className="new-isolation">
          <div className="home-shell">
            <p>The flavor has to taste right inside the product. Not just in the sample cup.</p>
          </div>
        </section>
        <Industries />
        <section className="new-cert-row-section">
          <div className="home-shell">
            <div className="new-cert-row" aria-label="Certifications and facility programs">
              {siteCopy.certifications.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <Link className="new-inline-cta" href="/certifications">View certifications</Link>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
