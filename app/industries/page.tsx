import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { industries } from "@/data/industries";
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <div className="editorial-hero">
              <AppImage
                src={siteImages.industriesHero}
                alt="Ingredient and lab atmosphere"
                style={{ objectPosition: "center 42%" }}
              />
              <div className="editorial-overlay" />
              <div className="editorial-content">
                <div className="eyebrow" style={{ color: "#f59e0b" }}>
                  Industries
                </div>
                <h1 className="section-title" style={{ color: "white" }}>
                  Flavor systems tailored to real applications.
                </h1>
                <p
                  className="section-subtext"
                  style={{
                    color: "rgba(255,255,255,.82)",
                    marginTop: 12,
                    maxWidth: 760,
                  }}
                >
                  Different products ask different things from a flavor. Heat,
                  pH, sweetness, bitterness, masking, solubility, dosage form,
                  and finished-product experience all matter.
                </p>
              </div>
            </div>

            <div className="industry-clean-grid" style={{ marginTop: 32 }}>
              {industries.map((item) => (
                <article key={item.key} className="industry-clean-card">
                  <div className="industry-clean-image-wrap">
                    <AppImage
                      src={item.heroImage}
                      alt={item.name}
                      className="industry-clean-image"
                    />
                  </div>

                  <div className="industry-clean-body">
                    <h3>{item.name}</h3>
                    <p>{item.summary}</p>

                    <div className="industry-clean-tags">
                      {item.applications.slice(0, 5).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
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
