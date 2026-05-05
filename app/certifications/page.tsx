import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";
import { Button } from "@/components/ui/Button";

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
        <section className="section clean-page">
          <div className="container">
            <section className="clean-cert-hero">
              <div className="clean-cert-copy">
                <div className="new-eyebrow">Certifications</div>
                <h1>Quality and documentation customers can build on.</h1>
                <p>
                  Flavor work needs more than a good profile. It needs repeatable manufacturing, clear documentation, and practical support when a formula moves from sample bench to commercial production.
                </p>
                <div className="new-actions">
                  <Button href="/request-samples">Request Samples</Button>
                  <Button href="/contact" variant="secondary">
                    Talk With Us
                  </Button>
                </div>
              </div>
              <div className="clean-cert-badges">
                <AppImage
                  src={siteImages.certificationsHero}
                  alt="Flavor Factory certification badges"
                  fill={false}
                  width={1536}
                  height={214}
                  priority
                  sizes="(max-width: 980px) calc(100vw - 40px), 48vw"
                />
              </div>
            </section>

            <section className="quality clean-quality-panel">
              <div className="section-head">
                <div>
                  <div className="new-eyebrow">Programs</div>
                  <h2 className="section-title">Certification support, stated plainly.</h2>
                </div>
                <p className="section-subtext">
                  We keep certification and facility conversations specific to the flavor, application, and documentation available for the project.
                </p>
              </div>
              <div className="quality-grid quality-card-grid">
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
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
