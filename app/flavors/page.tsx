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
            <h1 className="section-title">Discover profiles by flavor family, format, and application context.</h1>
            <p className="section-subtext" style={{ marginTop: 14, maxWidth: 900 }}>
              Explore normalized product data from The Flavor Factory catalog, then request samples for the profiles that best fit your product goals.
            </p>
            <FlavorFinder />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
