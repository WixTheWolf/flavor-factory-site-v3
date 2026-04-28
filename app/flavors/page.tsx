import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FlavorFinder } from "@/components/flavors/flavor-finder";
import { getFlavorLibrary } from "@/lib/flavor-library";

export default function FlavorsPage() {
  const library = getFlavorLibrary();

  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <div className="eyebrow">Flavor Finder</div>
            <h1 className="section-title">Find the right profile by format, family, and industry.</h1>
            <p className="section-subtext" style={{ marginTop: 16, maxWidth: 920 }}>
              Explore liquid and powder flavor solutions with practical filters for industry, application, and profile direction. Data source: {library.source === "workbook" ? "Excel/PCF workbook" : "seed library fallback"}.
            </p>
            <FlavorFinder flavors={library.records} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
