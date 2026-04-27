import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { flavorTiles } from "@/components/site-data";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

export default function FlavorsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <SectionEyebrow>Flavor Library</SectionEyebrow>
            <SectionHeading>Explore flavor profiles built for real applications.</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16, maxWidth: 760 }}>
              From bright citrus to deep caramel, this library is designed to help visitors quickly understand where your flavor capabilities can take them.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container flavor-grid">
            {flavorTiles.map((tile) => (
              <a key={tile.name} href="/#samples" className="flavor-card">
                <img src={tile.image} alt={tile.name} />
                <div className="flavor-overlay" />
                <div className="flavor-family"><div className="flavor-badge">{tile.family}</div></div>
                <div className="flavor-content">
                  <h3>{tile.name}</h3>
                  <div className="mini-link">Request Samples</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8, paddingBottom: 80 }}>
          <div className="container showcase">
            <SectionEyebrow>Why custom wins</SectionEyebrow>
            <SectionHeading>Custom always beats off-the-shelf.</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16, maxWidth: 800 }}>
              We don’t just offer flavors—we help shape them for your product, your processing needs, and your customer experience.
            </p>
            <Link href="/#samples" className="cta-btn" style={{ marginTop: 24 }}>Request Samples</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
