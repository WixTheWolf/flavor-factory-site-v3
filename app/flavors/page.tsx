import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FlavorFinder } from "@/components/flavors/FlavorFinder";

export default function FlavorsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <div className="eyebrow">Flavor Finder</div>
            <h1 className="section-title">Discover profiles by flavor family, format, and application context.</h1>
            <p className="section-subtext" style={{ marginTop: 14, maxWidth: 900 }}>
              Use search and filters to shortlist likely options quickly, then request samples for the profiles that best fit your product goals. This finder is intentionally structured to support future integration with production flavor data.
            </p>
            <FlavorFinder />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
