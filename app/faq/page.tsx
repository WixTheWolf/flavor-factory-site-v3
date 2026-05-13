import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers on minimums, sample timelines, custom development, IP ownership, certifications, COAs, allergen statements, and how flavor development works at The Flavor Factory.",
  alternates: { canonical: "/faq" },
  openGraph: {
    url: "/faq",
    title: "Frequently Asked Questions | The Flavor Factory",
    description:
      "Answers on minimums, sample timelines, custom development, IP ownership, certifications, COAs, allergen statements, and how flavor development works.",
    images: [{ url: "/og?title=Frequently+Asked+Questions", width: 1200, height: 630, alt: "FAQ - The Flavor Factory" }],
  },
  twitter: {
    title: "Frequently Asked Questions | The Flavor Factory",
    description: "Answers on minimums, samples, custom development, IP ownership, certifications, COAs, and more.",
    images: ["/og?title=Frequently+Asked+Questions"],
  },
};

const faqs = [
  {
    category: "Samples and Lead Times",
    items: [
      {
        q: "How long does it take to get first samples?",
        a: "First-round samples typically ship within 3-5 business days of receiving a confirmed brief. The more specific the brief, the closer the first samples will be to the target. A vague request adds rounds; a well-defined brief reduces them.",
      },
      {
        q: "What is your sample policy?",
        a: "We provide samples as part of active development projects. Share your application, target flavor profile, format, declaration requirements, and any relevant constraints. Samples are built around your real product system, not generic library pulls.",
      },
      {
        q: "Do you charge for samples?",
        a: "Contact us to discuss your specific project. Sample costs depend on the scope and complexity of the development work involved.",
      },
      {
        q: "How many rounds of revisions are typical?",
        a: "It depends on how clearly the brief is defined. Projects with a specific target, known base, and defined label goals tend to reach an approvable sample in 2-4 rounds. Open-ended briefs take longer. Each revision is documented so every round moves forward.",
      },
    ],
  },
  {
    category: "Minimums and Orders",
    items: [
      {
        q: "What is your minimum order quantity?",
        a: "We operate a low minimum order policy designed to support both startup-scale production and large commercial runs. Contact us to discuss your specific order size and production needs.",
      },
      {
        q: "Can I order small quantities for initial production runs?",
        a: "Yes. Low minimums are part of our standard offering. We support brands moving from sample approval into first production and scaling from there.",
      },
      {
        q: "What are your typical lead times for production orders?",
        a: "Production lead times depend on order size, formula complexity, and scheduling. Contact us with your order details and required delivery date and we will confirm a realistic timeline.",
      },
    ],
  },
  {
    category: "Custom Development",
    items: [
      {
        q: "How does custom flavor development pricing work?",
        a: "Development is typically priced into the ongoing manufacturing relationship rather than charged as a separate project fee. Contact us to discuss your project scope and how development fits into the commercial arrangement.",
      },
      {
        q: "Can you match an existing flavor from another supplier?",
        a: "Yes. Flavor matching is a standard part of our work. We need the reference product or a detailed sensory description of the target, along with your finished product matrix, to build an accurate match. The match is always validated in the finished product format, not in water or isolation.",
      },
      {
        q: "Who owns the intellectual property on a custom-developed flavor?",
        a: "IP ownership on custom formulations is addressed in the commercial agreement for each project. Contact us to discuss how IP is handled for your specific development work.",
      },
      {
        q: "Do you develop flavors for pharmaceutical or oral care applications?",
        a: "Yes. Pharmaceutical palatability and oral care are both standard application areas for us. These applications have specific technical requirements around API masking, excipient compatibility, and regulatory documentation that we address from the start of the development brief.",
      },
    ],
  },
  {
    category: "Certifications and Compliance",
    items: [
      {
        q: "Are your flavors Kosher certified?",
        a: "Many of our flavors carry Kosher certification. Certification status varies by formula. If your product requires Kosher documentation, tell us at the start of the project so ingredient sourcing is confirmed from sample one.",
      },
      {
        q: "Are your flavors Halal certified?",
        a: "Halal status varies by formula. Share the requirement up front and we will confirm which directions qualify, or develop a formula that does.",
      },
      {
        q: "Can you supply organic-compliant flavors?",
        a: "Yes. Organic-compliant flavors using approved organic ingredients are available for qualifying applications. If your label requires an organic claim, bring that into the brief so the formula is built to support it from the start.",
      },
      {
        q: "What is the scope of your FDA registration?",
        a: "Our facility is registered with the FDA as a food manufacturing operation. Registration documentation is available for supplier qualification files. Facility registration does not replace product-specific regulatory review for your finished product.",
      },
    ],
  },
  {
    category: "Documentation and Regulatory",
    items: [
      {
        q: "Do you provide Certificates of Analysis?",
        a: "Yes. Certificates of Analysis are provided with production orders as part of our standard documentation package.",
      },
      {
        q: "Can you provide flavor specification sheets?",
        a: "Yes. Flavor specifications covering physical properties, regulatory status, and relevant technical parameters are available for approved production flavors.",
      },
      {
        q: "Do you provide allergen statements?",
        a: "Yes. Allergen declarations are part of the standard documentation for any production flavor. Allergen status is determined by the ingredients in the specific formula.",
      },
      {
        q: "Do you retain samples from production batches?",
        a: "Yes. We maintain retain samples from production batches as part of our quality program. Contact us if you need to reference a specific production lot.",
      },
      {
        q: "Can you support regulatory filings or supplier questionnaires?",
        a: "Yes. We can complete standard supplier qualification questionnaires and provide the documentation typically required for food manufacturing regulatory submissions. Contact us with your specific documentation requirements.",
      },
    ],
  },
  {
    category: "Logistics and Practicalities",
    items: [
      {
        q: "Where do you ship?",
        a: "We ship domestically across the United States from our Norco, California facility. Contact us to discuss international shipping requirements.",
      },
      {
        q: "What payment terms do you offer?",
        a: "Payment terms are established as part of the commercial relationship. Contact us to discuss terms for your account.",
      },
    ],
  },
];

const BASE = "https://flavor-factory-site-v3.vercel.app";

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
              <h1>Common questions, answered plainly.</h1>
              <p>
                Minimums, timelines, custom development, certifications, documentation, and how the process works.
                If your question is not here, email <a href="mailto:samples@flavorfactory.net">samples@flavorfactory.net</a>.
              </p>
            </div>

            <div className="faq-page-body">
              {faqs.map((section) => (
                <section className="faq-category-section" key={section.category}>
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
              ))}
            </div>
          </div>
        </section>
        <CTA
          eyebrow="Still have questions?"
          title="Talk with us directly."
          copy="Email samples@flavorfactory.net or call (951) 273-9877. We respond to every inquiry."
          href="/contact"
          label="Contact Us"
        />
      </main>
      <Footer />
    </>
  );
}
