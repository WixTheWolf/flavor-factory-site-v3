import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { pathways } from "@/components/site-data";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container simple-panel">
            <SectionEyebrow>Markets</SectionEyebrow>
            <SectionHeading>Industries we support</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 14 }}>
              The Flavor Factory serves food &amp; beverage, confectionery, nutraceutical, oral care, bakery, popcorn,
              dairy, syrup, pharmaceutical, and more.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0, paddingBottom: 80 }}>
          <div className="container path-grid simple-grid">
            {pathways.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.title} href={item.href} className="simple-card">
                  <div className="simple-top"><Icon size={16} /> {item.tag}</div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </a>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
