import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SampleRequestForm } from "@/components/sample-request-form";
import { siteImages } from "@/data/site-images";
import { AppImage } from "@/components/ui/AppImage";
import { normalizeIndustryKey } from "@/lib/industry-utils";

export const metadata: Metadata = {
  title: "Request Flavor Samples",
  description:
    "Request custom flavor samples from The Flavor Factory. Only your name, email, and shipping address are required to get started.",
  alternates: { canonical: "/request-samples" },
  openGraph: {
    url: "/request-samples",
    title: "Request Flavor Samples | The Flavor Factory",
    description:
      "Request custom flavor samples. Only your name, email, and shipping address are required to get started.",
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
      "Request custom flavor samples. Only your name, email, and shipping address are required to get started.",
    images: ["/og?title=Request+Flavor+Samples&description=3-5+business+day+turnaround+from+Norco%2C+CA"],
  },
};

const BC_REQUEST_SAMPLES = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.flavorfactory.net"},{"@type":"ListItem","position":2,"name":"Request Samples","item":"https://www.flavorfactory.net/request-samples"}]};

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
                <div className="eyebrow">Request Samples</div>
                <h1 className="section-title request-page-title">Tell us where to send them.</h1>
                <p className="section-subtext request-page-intro">
                  Start with your name, email, and shipping address. Add whatever project details you know, and a real person from our team will follow up if we need anything else.
                </p>
                <p className="sample-brief-note">Prefer to talk first? Email <a href="mailto:samples@flavorfactory.net">samples@flavorfactory.net</a> or call <a href="tel:+19512739877">(951) 273-9877</a>.</p>
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
              <h2>A simple path from request to sample.</h2>
            </div>
            <ol>
              <li>We review the information you shared.</li>
              <li>We follow up if anything important is missing.</li>
              <li>First sample directions are typically prepared in 3-5 business days.</li>
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
