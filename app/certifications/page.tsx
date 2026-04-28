import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteCopy } from "@/data/site-copy";

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container quality">
            <div className="eyebrow" style={{ color: "#f59e0b" }}>Certifications</div>
            <h1 className="section-title" style={{ color: "white" }}>Quality systems that support customer trust.</h1>
            <div className="quality-grid" style={{ marginTop: 20 }}>
              {siteCopy.certifications.map((item) => <div className="quality-badge" key={item}>{item}</div>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
