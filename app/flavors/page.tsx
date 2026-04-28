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
            <h1 className="section-title">Find the exact flavor direction faster.</h1>
            <p className="section-subtext" style={{ marginTop: 14 }}>
              Structured for future Excel/PCF ingestion with reusable filtering and recommendation utilities.
            </p>
            <FlavorFinder />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
