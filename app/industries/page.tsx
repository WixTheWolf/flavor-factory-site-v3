import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { industries } from "@/components/site-data";

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <div className="eyebrow">Industries We Serve</div>
            <h1 className="section-title">Category expertise from bakery through pharma.</h1>
            <p className="section-subtext" style={{ marginTop: 16 }}>From sensory-led innovation to production-ready execution, we support flavor work across high-volume and specialty categories.</p>
            <div className="path-grid" style={{ marginTop: 30 }}>
              {industries.map((item) => (
                <Link key={item.slug} href={`/industries/${item.slug}`} className="path-card">
                  <img src={item.heroImage} alt={item.name} />
                  <div className="path-overlay" />
                  <div className="path-content">
                    <h3>{item.name}</h3>
                    <p>{item.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
