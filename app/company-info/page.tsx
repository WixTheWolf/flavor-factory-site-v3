import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function CompanyInfoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container showcase">
            <div className="eyebrow">Company Info</div>
            <h1 className="section-title">Operational depth with premium product support.</h1>
            <p className="section-subtext" style={{ marginTop: 14 }}>
              We manufacture custom flavors for bakery, confectionery, dairy, nutraceutical, oral care, pharmaceutical, popcorn, syrup, and adjacent categories. Liquid and powder formats are available.
            </p>
            <div className="showcase-pills" style={{ marginTop: 18 }}>
              {[
                "Family-owned business",
                "40+ years of combined experience",
                "Low minimum order quantities",
                "Typical lead times: 3–5 business days",
                "Custom, proprietary, and exclusive development",
              ].map((item) => <span key={item} className="soft-pill">{item}</span>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
