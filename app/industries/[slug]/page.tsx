import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { industries } from "@/components/site-data";

export function generateStaticParams() {
  return industries.map((item) => ({ slug: item.slug }));
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry = industries.find((item) => item.slug === params.slug);
  if (!industry) return notFound();

  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 40 }}>
          <div className="container">
            <img src={industry.heroImage} alt={industry.name} style={{ width: "100%", borderRadius: 26, maxHeight: 440, objectFit: "cover" }} />
            <div style={{ marginTop: 24, maxWidth: 980 }}>
              <div className="eyebrow">{industry.name}</div>
              <h1 className="section-title">Flavor support for {industry.name} programs.</h1>
              <p className="section-subtext" style={{ marginTop: 14 }}>{industry.tagline}</p>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container strength-grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
            {industry.strengths.map((item) => <article key={item} className="strength-card"><h3>{item}</h3></article>)}
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8, paddingBottom: 88 }}>
          <div className="container showcase">
            <div className="eyebrow">Common applications</div>
            <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}>Where we typically apply this flavor work.</h2>
            <div className="showcase-pills" style={{ marginTop: 18 }}>
              {industry.applications.map((item) => <span key={item} className="soft-pill">{item}</span>)}
            </div>
            <Link href="/request-samples" className="cta-btn" style={{ marginTop: 24 }}>Request Samples</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
