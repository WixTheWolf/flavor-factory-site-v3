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
                alt="Premium citrus and liquid flavor composition"
                priority
                sizes="min(1600px, calc(100vw - 48px))"
                style={{ objectPosition: "center 35%" }}
              />
              <div className="editorial-overlay" />
              <div className="editorial-content">
                <div className="eyebrow" style={{ color: "#f59e0b" }}>Our Flavors</div>
                <h1 className="section-title" style={{ color: "white" }}>Search the flavor library. Build beyond it.</h1>
                <p className="section-subtext" style={{ marginTop: 14, maxWidth: 900, color: "rgba(255,255,255,.84)" }}>
                  Search by profile, family, application, format, declaration, or use case. If the exact profile is not listed, we can develop or match it.
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
