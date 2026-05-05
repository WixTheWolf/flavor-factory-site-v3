import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { industries } from "@/data/industries";
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";
import { PageHero } from "@/components/PageHero";

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <PageHero
              eyebrow="Industries"
              title="Flavor support for the way your product is made."
              copy="Every application asks something different from a flavor. Browse common product categories, then request samples with your format, process, label goals, and target profile in mind."
              image={siteImages.industriesHero}
              imageAlt="Ingredient and lab atmosphere"
              primaryHref="/request-samples"
              primaryLabel="Request Samples"
              secondaryHref="/flavors"
              secondaryLabel="Explore Flavors"
              imagePosition="center 42%"
            />

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
