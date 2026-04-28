import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { industries, proofItems, whyCards } from "@/components/site-data";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container" style={{ padding: "56px 0 40px" }}>
            <SectionEyebrow>Family-Owned Flavor Manufacturer • Southern California</SectionEyebrow>
            <h1 className="hero-title" style={{ maxWidth: 960, marginTop: 20 }}>
              High Quality Liquid & Powder Flavor Solutions
            </h1>
            <p className="hero-text" style={{ maxWidth: 900 }}>
              The Flavor Factory is a family-owned custom manufacturer serving food, beverage, bakery, confectionery,
              nutraceutical, oral care, pharmaceutical, popcorn, syrup, and more.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="cta-btn">Request Samples</Link>
              <Link href="/industries" className="light-btn">View Industries</Link>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 20 }}>
          <div className="container banner-grid" style={{ gridTemplateColumns: "repeat(4, minmax(0,1fr))" }}>
            {proofItems.map((item) => (
              <div key={item} className="banner-card">
                <h3 style={{ fontSize: "1.05rem" }}>{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="section" style={{ paddingTop: 30 }}>
          <div className="container showcase">
            <SectionEyebrow>Custom Flavor Manufacturing</SectionEyebrow>
            <SectionHeading>Built around practical product support.</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16, maxWidth: 900 }}>
              We provide flavor samples from our extensive library, create new flavors customized for your product,
              and match existing flavors with a focus on quality, consistency, and cost savings.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container">
            <div className="section-head">
              <div>
                <SectionEyebrow>Industries We Serve</SectionEyebrow>
                <SectionHeading>Experienced across major product categories.</SectionHeading>
              </div>
            </div>
            <div className="strength-grid" style={{ gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}>
              {industries.map((industry) => (
                <Link key={industry.slug} href="/industries" className="strength-card" style={{ transition: "transform .2s ease" }}>
                  <h3 style={{ fontSize: "1.2rem" }}>{industry.name}</h3>
                  <p>{industry.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container">
            <div className="section-head">
              <div>
                <SectionEyebrow>Why The Flavor Factory</SectionEyebrow>
                <SectionHeading>Reliable service from sample through production.</SectionHeading>
              </div>
            </div>
            <div className="strength-grid" style={{ gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}>
              {whyCards.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="strength-card">
                    <div className="strength-icon"><Icon size={20} /></div>
                    <h3 style={{ fontSize: "1.2rem" }}>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container showcase">
            <SectionEyebrow>Our Flavor Capabilities</SectionEyebrow>
            <SectionHeading>Extracts, concentrates, emulsions, oils, powders, and more.</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16, maxWidth: 820 }}>
              We offer flavors in many forms, including extracts, concentrates, emulsions, oils, powders, and more.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8, paddingBottom: 80 }}>
          <div className="container sample-panel">
            <div className="sample-grid">
              <div className="sample-left">
                <SectionEyebrow>Request Samples</SectionEyebrow>
                <SectionHeading>Tell us what you’re working on and we’ll help guide the next step.</SectionHeading>
                <p className="section-subtext" style={{ marginTop: 14 }}>
                  We provide flavor samples from our extensive library and custom development for proprietary and exclusive products.
                </p>
                <Link href="/contact" className="cta-btn" style={{ marginTop: 24 }}>Request Samples</Link>
              </div>
              <div className="sample-right">
                <img src="/images/flavor-factory/cta-background.jpg" alt="Flavor ingredients" />
                <div className="sample-overlay" />
                <div className="bottom-copy">
                  <h3>Family-owned service, fast lead times, dependable quality.</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
