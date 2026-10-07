import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { articles } from "@/data/insights";
import { industries } from "@/data/industries";
import { industryLabel, normalizeIndustryKey } from "@/lib/industry-utils";

export const metadata = {
  title: "Sample Request Received",
  robots: { index: false, follow: false },
};

export default function SampleConfirmationPage({
  searchParams,
}: {
  searchParams?: { industry?: string };
}) {
  const rawIndustry = searchParams?.industry ?? "";
  const industry = normalizeIndustryKey(rawIndustry);
  const industryName = industry ? industries.find((item) => item.key === industry)?.name : industryLabel(rawIndustry);
  const related = articles
    .filter((article) => (industry ? article.relatedIndustries.includes(industry) : true))
    .slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <section className="section clean-page">
          <div className="container confirmation-grid">
            <div className="clean-page-intro">
              <div className="new-eyebrow">Request Received</div>
              <h1>Thanks. Your sample brief is with our team.</h1>
              <p>
                We will verify the company and review the project details before the request moves into development. If R&amp;D needs clarification, we will contact you. Most first samples are prepared in 3-5 business days after the brief is accepted.
              </p>
              <div className="new-actions">
                <Link href="/flavors" className="light-btn">Back to flavors</Link>
                <Link href="/contact" className="cta-btn">Contact the team</Link>
              </div>
            </div>
            <aside className="read-while-wait" aria-label="Read while you wait">
              <div className="new-eyebrow">Read While You Wait</div>
              <h2>{industryName ? `${industryName} resources` : "Helpful resources"}</h2>
              <div className="footer-links">
                {related.map((article) => (
                  <Link href={`/insights/${article.slug}`} key={article.slug}>
                    {article.title}
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
