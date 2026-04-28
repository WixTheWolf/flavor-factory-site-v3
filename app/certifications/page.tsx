import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteCopy } from "@/data/site-copy";
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container quality">
            <div className="editorial-hero" style={{ marginBottom: 22 }}>
              <AppImage src={siteImages.certificationsHero} alt="Quality and compliance lab documentation setup" style={{ objectPosition: "center 42%" }} />
              <div className="editorial-overlay" />
            </div>
            <div className="eyebrow" style={{ color: "#f59e0b" }}>
              Certifications
            </div>
            <h1 className="section-title" style={{ color: "white" }}>
              Compliance and quality systems that help teams move with confidence.
            </h1>
            <p className="section-subtext" style={{ marginTop: 14, color: "rgba(255,255,255,.8)", maxWidth: 840 }}>
              We maintain recognized standards to support customer qualification, quality documentation, and long-term partnership requirements.
            </p>
            <div className="quality-grid" style={{ marginTop: 20 }}>
              {siteCopy.certifications.map((item) => (
                <div className="quality-badge" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
