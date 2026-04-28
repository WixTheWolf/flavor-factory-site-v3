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
            <div className="editorial-hero">
              <img src="/images/flavor-factory/industry-beverage-hero.jpg" alt="Ingredient and lab atmosphere" />
              <div className="editorial-overlay" />
              <div className="editorial-content">
                <div className="eyebrow" style={{ color: "#f59e0b" }}>Industries</div>
                <h1 className="section-title" style={{ color: "white" }}>Flavor systems across key commercial categories.</h1>
                <p className="section-subtext" style={{ color: "rgba(255,255,255,.82)", marginTop: 12, maxWidth: 760 }}>
                  We develop liquid and powder flavor solutions with the process realities of each market in mind—from bakery and confectionery to nutraceutical, oral care, and pharmaceutical programs.
                </p>
              </div>
            </div>

            <div className="path-grid" style={{ marginTop: 24 }}>
              {industries.map((item) => (
                <article key={item.key} className="path-card">
                  <img src={item.heroImage} alt={item.name} />
                  <div className="path-overlay" />
                  <div className="path-content">
                    <div className="path-tag">{item.applications.slice(0, 2).join(" • ")}</div>
                    <h3>{item.name}</h3>
                    <p>{item.summary}</p>
                    <div className="mini-link">{item.applications.slice(0, 3).join(" • ")}</div>
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
