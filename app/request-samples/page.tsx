import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SampleRequestForm } from "@/components/sample-request-form";
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";

export default function RequestSamplesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section clean-page request-page">
          <div className="container sample-panel">
            <div className="sample-grid">
              <div className="sample-left">
                <div className="eyebrow">Request Samples</div>
                <h1 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
                  Tell us what you are making.
                </h1>
                <p className="section-subtext" style={{ marginTop: 12 }}>
                  Share the product application, flavor direction, preferred format, declaration goal, timeline, and any benchmark you want us to match. Your request goes directly to samples@flavorfactory.net.
                </p>
                <div className="sample-guidance" aria-label="Helpful details to include">
                  <div>
                    <span>Application</span>
                    Beverage, gummy, bakery filling, oral care, seasoning, syrup, or another finished product.
                  </div>
                  <div>
                    <span>Flavor direction</span>
                    Target profile, benchmark, sweetness level, masking need, cooling effect, or flavor family.
                  </div>
                  <div>
                    <span>Format and label</span>
                    Liquid or powder, plus natural, natural and artificial, artificial, kosher, halal, or other needs.
                  </div>
                  <div>
                    <span>Production context</span>
                    Use level if known, process conditions, timeline, and any cost or ingredient constraints.
                  </div>
                </div>
                <SampleRequestForm />
              </div>
              <div className="sample-right">
                <AppImage
                  src={siteImages.requestSamplesHero}
                  alt="Amber liquid flavor being poured — precision craft"
                  priority
                  sizes="(max-width: 1200px) calc(100vw - 48px), 50vw"
                  style={{ objectPosition: "center 40%" }}
                />
                <div className="sample-overlay" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
