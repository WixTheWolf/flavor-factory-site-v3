import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";

const certificationNotes = [
  {
    name: "SQF",
    note: "Supports customer quality reviews with recognized food safety program documentation where applicable.",
  },
  {
    name: "GMP",
    note: "Manufacturing practices are organized around consistent handling, production, and recordkeeping.",
  },
  {
    name: "Kosher",
    note: "Kosher documentation can be reviewed for qualifying flavor projects and customer requirements.",
  },
  {
    name: "Halal",
    note: "Halal status and documentation can be confirmed for applicable flavors and applications.",
  },
  {
    name: "FDA Registered Facility",
    note: "Facility registration supports food manufacturing documentation without replacing product-specific review.",
  },
] as const;

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
              Quality and documentation customers can build on.
            </h1>
            <p className="section-subtext" style={{ marginTop: 14, color: "rgba(255,255,255,.8)", maxWidth: 840 }}>
              Flavor work needs more than a good profile. It needs repeatable manufacturing, clear documentation, and practical support when a formula moves from sample bench to commercial production.
            </p>
            <div className="quality-grid quality-card-grid" style={{ marginTop: 20 }}>
              {certificationNotes.map((item) => (
                <article className="quality-badge quality-note-card" key={item.name}>
                  <h2>{item.name}</h2>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>
            <div className="quality-explain-grid">
              <article>
                <h3>Plain-English support</h3>
                <p>
                  Tell us the certification, label, allergen, or customer documentation needs tied to your project. We will confirm what applies to the flavor and the intended application.
                </p>
              </article>
              <article>
                <h3>Built for repeat orders</h3>
                <p>
                  Our quality programs support consistent liquid and powder flavor manufacturing, from approved samples through production lots.
                </p>
              </article>
              <article>
                <h3>Factual claims</h3>
                <p>
                  Certification and facility information is handled directly and kept specific to the product, customer requirement, and available documentation.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
