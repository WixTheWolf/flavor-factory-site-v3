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
            <div className="editorial-hero editorial-hero-compact" style={{ marginBottom: 22 }}>
              <AppImage
                src={siteImages.flavorsHero}
                alt="Citrus and liquid flavor composition"
                priority
                sizes="min(1600px, calc(100vw - 48px))"
                style={{ objectPosition: "center 35%" }}
              />
              <div className="editorial-overlay" />
              <div className="editorial-content">
                <div className="eyebrow" style={{ color: "#f59e0b" }}>Our Flavors</div>
                <h1 className="section-title" style={{ color: "white" }}>Explore common flavor directions.</h1>
                <p className="section-subtext" style={{ marginTop: 14, maxWidth: 900, color: "rgba(255,255,255,.84)" }}>
                  Start with a family, narrow by application, then request samples. The library is a helpful starting point; custom development, matching, and reformulation are part of what we do.
                </p>
              </div>
            </div>
            <FlavorFinder />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
