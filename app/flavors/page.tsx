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
            <h1 className="section-title">Find the right flavor profile for your product, faster.</h1>
            <p className="section-subtext" style={{ marginTop: 14, maxWidth: 900 }}>
              Search by flavor name, then narrow by family, format, and industry. This modular finder is structured to swap from demo records to Excel/PCF ingestion with minimal UI rewrite.
            </p>
            <FlavorFinder />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
