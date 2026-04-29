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
            <div className="eyebrow">Flavor Finder</div>
            <h1 className="section-title">Browse curated flavor families. Then ask for exactly what you want.</h1>
            <p className="section-subtext" style={{ marginTop: 14, maxWidth: 900 }}>
              Our catalog is intentionally consolidated for faster discovery. If you do not see a flavor, ask us — we can likely create it.
            </p>
            <FlavorFinder />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
