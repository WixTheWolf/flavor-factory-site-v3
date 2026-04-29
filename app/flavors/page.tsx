import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FlavorFinder } from "@/components/flavors/FlavorFinder";
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";

export default function FlavorsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <div className="editorial-hero" style={{ marginBottom: 22 }}>
              <AppImage src={siteImages.flavorsHero} alt="Premium citrus and liquid flavor composition" style={{ objectPosition: "center 35%" }} />
              <div className="editorial-overlay" />
            </div>
            <div className="eyebrow">Our Flavors</div>
            <h1 className="section-title">A broader flavor library, cleaned up.</h1>
            <p className="section-subtext" style={{ marginTop: 14, maxWidth: 900 }}>
              Explore flavor families, representative profiles, and application-friendly directions. If you have something specific in mind, search for it.
            </p>
            <p className="section-subtext" style={{ marginTop: 8, maxWidth: 900 }}>
              Not seeing it? That does not mean we don’t make it. Our searchable library is a starting point—not the limit.
            </p>
            <FlavorFinder />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
