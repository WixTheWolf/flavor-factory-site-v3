import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { certificationItems } from "@/components/site-data";

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container quality">
            <div className="eyebrow" style={{ color: "#f59e0b" }}>Certifications</div>
            <h1 className="section-title" style={{ color: "white" }}>Quality systems that help customers buy with confidence.</h1>
            <p className="section-subtext" style={{ color: "rgba(255,255,255,.8)", marginTop: 14, maxWidth: 920 }}>
              We maintain documentation and quality controls to support customer requirements. Contact us for current certification status and program-specific documents.
            </p>
            <div className="quality-grid" style={{ marginTop: 24 }}>
              {certificationItems.map((item) => <div key={item} className="quality-badge">{item}</div>)}
            </div>
            <Link href="/contact" className="light-btn" style={{ marginTop: 20 }}>Request documentation</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
