import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { industries } from "@/data/industries";

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <div className="eyebrow">Industries</div>
            <h1 className="section-title">Flavor support across key markets.</h1>
            <div className="path-grid" style={{ marginTop: 24 }}>
              {industries.map((item) => (
                <article key={item.key} className="path-card">
                  <img src={item.heroImage} alt={item.name} />
                  <div className="path-overlay" />
                  <div className="path-content">
                    <h3>{item.name}</h3>
                    <p>{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
