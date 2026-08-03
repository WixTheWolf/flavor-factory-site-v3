import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/CTA";
import { CaseStudyAccordion } from "@/components/CaseStudyAccordion";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Flavor Project Examples",
  description:
    "Representative examples of common flavor-development work across bakery, nutraceutical, oral care, beverage, popcorn, matching, and reformulation projects.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Flavor Project Examples | The Flavor Factory",
    url: "/case-studies",
    description:
      "Representative examples showing common finished-product challenges and how The Flavor Factory approaches them.",
    images: [{ url: "/og?title=Flavor+Project+Examples", width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.flavorfactory.net" },
    { "@type": "ListItem", position: 2, name: "Project Examples", item: "https://www.flavorfactory.net/case-studies" },
  ],
};

export default function CaseStudiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <div className="clean-page-intro project-examples-intro">
              <div className="new-eyebrow">Project Examples</div>
              <h1>Common flavor problems and the work behind solving them.</h1>
              <p>
                These examples show representative project types and application challenges. They explain the approach without presenting unnamed examples as customer results.
              </p>
            </div>
            <CaseStudyAccordion studies={caseStudies} />
          </div>
        </section>
        <CTA
          eyebrow="Request a Sample"
          title="Working through a similar problem?"
          copy="Tell us what you are making, what is not working, and where to send the samples."
          href="/request-samples"
          label="Request a Sample"
        />
      </main>
      <Footer />
    </>
  );
}
