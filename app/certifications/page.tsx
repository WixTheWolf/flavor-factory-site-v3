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
            <div className="editorial-hero editorial-hero-certifications" style={{ marginBottom: 22 }}>
              <AppImage
                src={siteImages.certificationsHero}
                alt="Flavor Factory certification badges"
                fill={false}
                width={1536}
                height={214}
                priority
                sizes="min(1600px, calc(100vw - 48px))"
              />
              <div className="editorial-overlay" />
            </div>
            <div className="eyebrow" style={{ color: "#f59e0b" }}>
              Certifications
            </div>
            <h1 className="section-title" style={{ color: "white" }}>
              Quality programs behind the flavor.
            </h1>
            <p className="section-subtext" style={{ marginTop: 14, color: "rgba(255,255,255,.8)", maxWidth: 840 }}>
              Our programs support consistency, documentation, and customer confidence as flavors move from sample work into production.
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
