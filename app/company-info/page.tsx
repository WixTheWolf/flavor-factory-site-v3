import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteCopy } from "@/data/site-copy";

export default function CompanyInfoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container showcase">
            <div className="eyebrow">Company Info</div>
            <h1 className="section-title">Operational depth built for speed and consistency.</h1>
            <div className="showcase-pills" style={{ marginTop: 14 }}>
              {siteCopy.companyInfoBullets.map((item) => <span key={item} className="soft-pill">{item}</span>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
