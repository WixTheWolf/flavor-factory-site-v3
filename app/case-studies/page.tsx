import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/CTA";
import { CaseStudyAccordion } from "@/components/CaseStudyAccordion";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Representative Flavor Challenges",
  description: "Representative flavor development examples for bakery, nutraceutical, oral care, beverage, popcorn, and reformulation projects. Not named customer claims.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Representative Flavor Challenges | The Flavor Factory",
    url: "/case-studies",
    description: "Representative flavor development examples showing common finished-product challenges and how we approach them.",
    images: [{ url: "/og?title=Representative+Flavor+Challenges", width: 1200, height: 630 }],
  },
};


const BC_CASE_STUDIES = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://flavorfactory.net"},{"@type":"ListItem","position":2,"name":"Case Studies","item":"https://flavorfactory.net/case-studies"}]};
export default function CaseStudiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BC_CASE_STUDIES) }} />
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <div className="clean-page-intro">
              <div className="new-eyebrow">Representative Flavor Challenges</div>
              <h1>Common finished-product problems and how we approach them.</h1>
              <p>
                Examples below show common project types and application challenges. They are representative applications, not named customer claims.
              </p>
            </div>
            <CaseStudyAccordion studies={caseStudies} />
          </div>
        </section>
        <CTA
          eyebrow="Have a similar challenge?"
          title="Share the application and what has already failed."
          copy="We will build the next sample around the real product, base, and process."
          href="/request-samples"
          label="Request a Custom Sample"
        />
      </main>
      <Footer />
    </>
  );
}
