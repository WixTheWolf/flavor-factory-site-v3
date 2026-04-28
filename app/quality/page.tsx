import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { qualityBadges } from "@/components/site-data";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

export default function QualityPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container quality">
            <SectionEyebrow>Certifications / Quality</SectionEyebrow>
            <h2 className="section-title" style={{ color: "white", marginTop: 16 }}>Quality and documentation support for customer requirements.</h2>
            <p className="section-subtext" style={{ color: "rgba(255,255,255,.8)", marginTop: 16, maxWidth: 820 }}>
              We focus on consistent manufacturing practices and responsive customer support. For current documentation and qualification details,
              contact our team directly.
            </p>
            <div className="quality-grid" style={{ marginTop: 24 }}>
              {qualityBadges.map((badge) => (
                <div key={badge} className="quality-badge">{badge}</div>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>
              <Link href="/contact" className="light-btn">Ask About Certifications</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
