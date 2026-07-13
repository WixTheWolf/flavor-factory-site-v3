import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Request Flavor Samples",
  description:
    "Tell us your application, target profile, format, and label goals. First samples typically shipped in 3-5 business days from Norco, CA.",
  alternates: { canonical: "/request-samples" },
  openGraph: {
    url: "/request-samples",
    title: "Request Flavor Samples | The Flavor Factory",
    description:
      "Tell us your application, target profile, format, and label goals. First samples typically shipped in 3-5 business days from Norco, CA.",
    images: [
      {
        url: "/og?title=Request+Flavor+Samples&description=3-5+business+day+turnaround+from+Norco%2C+CA",
        width: 1200,
        height: 630,
        alt: "Request flavor samples from The Flavor Factory",
      },
    ],
  },
  twitter: {
    title: "Request Flavor Samples | The Flavor Factory",
    description:
      "Tell us your application, format, and label goals. First samples in 3-5 business days.",
    images: ["/og?title=Request+Flavor+Samples&description=3-5+business+day+turnaround+from+Norco%2C+CA"],
  },
};
import { Footer } from "@/components/layout/Footer";
import { SampleRequestForm } from "@/components/sample-request-form";
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";
import { BuiltInNorco } from "@/components/BuiltInNorco";
import { normalizeIndustryKey } from "@/lib/industry-utils";


const BC_REQUEST_SAMPLES = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://flavorfactory.net"},{"@type":"ListItem","position":2,"name":"Request Samples","item":"https://flavorfactory.net/request-samples"}]};
export default function RequestSamplesPage({
  searchParams,
}: {
  searchParams?: { industry?: string };
}) {
  const industry = normalizeIndustryKey(searchParams?.industry ?? "") || searchParams?.industry || "";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BC_REQUEST_SAMPLES) }} />
      <Header />
      <main>
        <section className="section clean-page request-page">
          <div className="container sample-panel">
            <div className="sample-grid">
              <div className="sample-left">
                <div className="eyebrow">Request a Custom Sample</div>
                <h1 className="section-title request-page-title">
                  Tell us what you are making.
                </h1>
                <p className="section-subtext request-page-intro">
                  Share the application, target profile, format, timeline, and constraints. A clear brief helps us build a better first sample.
                </p>
                <p className="sample-brief-note">Prefer to talk through it? Email <a href="mailto:samples@flavorfactory.net">samples@flavorfactory.net</a> or call <a href="tel:+19512739877">(951) 273-9877</a>.</p>
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
                <SampleRequestForm initialIndustry={industry} />
              </div>
              <div className="sample-right">
                <AppImage
                  src={siteImages.requestSamplesHero}
                  alt="Amber liquid flavor being poured with precision in a lab setting"
                  priority
                  sizes="(max-width: 1200px) calc(100vw - 48px), 50vw"
                  style={{ objectPosition: "center 40%" }}
                />
                <div className="sample-overlay" />
              </div>
            </div>
          </div>
          <div className="container request-next-section">
            <div>
              <div className="new-eyebrow">What Happens Next</div>
              <h2>Clear steps from brief to first sample.</h2>
            </div>
            <ol>
              <li>We review your application and constraints.</li>
              <li>We confirm the best starting direction.</li>
              <li>First sample directions are typically prepared in 3-5 business days.</li>
              <li>You review, give feedback, and we iterate toward production.</li>
            </ol>
          </div>
          <div className="container request-proof-section">
            <BuiltInNorco compact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
