import type { Metadata } from "next";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/CTA";
import { commercialPolicy } from "@/data/commercial-policy";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about samples, minimums, custom development, certifications, documents, and production orders.",
  alternates: { canonical: "/faq" },
  openGraph: {
    url: "/faq",
    title: "Frequently Asked Questions | The Flavor Factory",
    description: "Answers about samples, minimums, development, certifications, documents, and orders.",
    images: [{ url: "/og?title=Frequently+Asked+Questions", width: 1200, height: 630, alt: "FAQ - The Flavor Factory" }],
  },
  twitter: {
    title: "Frequently Asked Questions | The Flavor Factory",
    description: "Answers about samples, minimums, development, certifications, documents, and orders.",
    images: ["/og?title=Frequently+Asked+Questions"],
  },
};

const faqs = [
  {
    category: "Samples",
    items: [
      {
        q: "How long does it take to get first samples?",
        a: "First samples are typically prepared in 3-5 business days after the brief is confirmed.",
      },
      {
        q: "What information do you need?",
        a: "Name, email, and shipping address are required. Product and flavor details are helpful but optional.",
      },
      {
        q: "Do you charge for samples?",
        a: commercialPolicy.samplePolicy,
      },
      {
        q: "How many revision rounds are typical?",
        a: "Most projects need a few focused rounds. A clear target and known product base usually reduce revisions.",
      },
    ],
  },
  {
    category: "Orders",
    items: [
      {
        q: "What is your minimum order quantity?",
        a: commercialPolicy.moqSummary,
      },
      {
        q: "Can you support a small first production run?",
        a: "Yes. The right minimum depends on the formula and format and is confirmed with the quote.",
      },
      {
        q: "What are typical production lead times?",
        a: commercialPolicy.productionLeadTime,
      },
      {
        q: "What payment terms do you offer?",
        a: commercialPolicy.paymentTerms,
      },
    ],
  },
  {
    category: "Development",
    items: [
      {
        q: "Can you develop a custom flavor?",
        a: "Yes. We develop around the application, base, process, label goals, and target profile.",
      },
      {
        q: "Can you match another supplier's flavor?",
        a: "Yes. Send the reference flavor or finished product and the current project requirements.",
      },
      {
        q: "Can you help with bitterness or difficult actives?",
        a: "Yes. Masking and modulation are standard parts of our work.",
      },
      {
        q: "Who owns a custom formula?",
        a: "Formula ownership is addressed in the commercial agreement for the project.",
      },
    ],
  },
  {
    category: "Quality & Certifications",
    items: [
      {
        q: "Are your flavors Kosher?",
        a: "Many formulas qualify. Status is confirmed for the specific project.",
      },
      {
        q: "Are Halal options available?",
        a: "Yes, for qualifying formulas. Share the requirement at the start.",
      },
      {
        q: "Can you supply organic-compliant flavors?",
        a: "Yes, where the application and ingredient requirements allow it.",
      },
      {
        q: "Is your facility FDA registered?",
        a: "Yes. Registration documentation is available for supplier qualification.",
      },
      {
        q: "Do you provide COAs, specifications, and allergen statements?",
        a: "Yes. Production documents are available for approved flavors as applicable.",
      },
    ],
  },
  {
    category: "Shipping & Support",
    items: [
      {
        q: "Where do you ship?",
        a: "We ship throughout the United States from Norco, California. Contact us about international requirements.",
      },
      {
        q: "Do you complete supplier questionnaires?",
        a: "Yes. Email the questionnaire and project or flavor reference to samples@flavorfactory.net.",
      },
      {
        q: "Do you keep retain samples?",
        a: "Yes. Production batch retain samples are maintained for lot reference and traceability.",
      },
    ],
  },
];

const BASE = "https://www.flavorfactory.net";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${BASE}/faq` },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container">
            <div className="clean-page-intro">
              <div className="new-eyebrow">FAQ</div>
              <h1>Common questions.</h1>
              <p>Need something else? Email <a href="mailto:samples@flavorfactory.net">samples@flavorfactory.net</a>.</p>
            </div>

            <RevealGroup className="faq-page-body" stagger={0.08}>
              {faqs.map((section) => (
                <RevealItem key={section.category}>
                  <section className="faq-category-section">
                    <h2 className="faq-category-title">{section.category}</h2>
                    <div className="industry-faq-list">
                      {section.items.map((item) => (
                        <details className="faq-item" key={item.q}>
                          <summary>{item.q}</summary>
                          <p>{item.a}</p>
                        </details>
                      ))}
                    </div>
                  </section>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
        <CTA
          eyebrow="Contact"
          title="Still have a question?"
          copy="Email samples@flavorfactory.net or call (951) 273-9877."
          href="/contact"
          label="Contact Us"
        />
      </main>
      <Footer />
    </>
  );
}
