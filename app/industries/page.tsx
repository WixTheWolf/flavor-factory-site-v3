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
            <div className="editorial-hero editorial-hero-compact">
              <AppImage
                src={siteImages.industriesHero}
                alt="Ingredient and lab atmosphere"
                priority
                sizes="min(1600px, calc(100vw - 48px))"
                style={{ objectPosition: "center 42%" }}
              />
              <div className="editorial-overlay" />
              <div className="editorial-content">
                <div className="eyebrow" style={{ color: "#f59e0b" }}>
                  Industries
                </div>
                <h1 className="section-title" style={{ color: "white" }}>
                  Flavor manufacturing by application.
                </h1>
                <p
                  className="section-subtext"
                  style={{
                    color: "rgba(255,255,255,.82)",
                    marginTop: 12,
                    maxWidth: 760,
                  }}
                >
                  Browse common categories, then request samples with the format, processing conditions, label goals, and flavor target in mind.
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
                      sizes="(max-width: 720px) calc(100vw - 32px), (max-width: 1024px) calc((100vw - 56px) / 2), 504px"
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
