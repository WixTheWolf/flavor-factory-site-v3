import { ChevronRight } from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { pathways } from "@/components/site-data";
import { SectionEyebrow, SectionHeading } from "@/components/ui";

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container">
            <SectionEyebrow>Markets</SectionEyebrow>
            <SectionHeading>Customer markets we serve.</SectionHeading>
            <p className="section-subtext" style={{ marginTop: 16, maxWidth: 860 }}>
              Each market has different product goals, timelines, and technical needs. Choose your market to see where our team can support you.
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 8, paddingBottom: 80 }}>
          <div className="container path-grid">
            {pathways.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.title} href={item.href} className="path-card">
                  <img src={item.image} alt={item.title} />
                  <div className="path-overlay" />
                  <div className="path-tag"><Icon size={14} /> {item.tag}</div>
                  <div className="path-content">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                    <div className="mini-link">View details <ChevronRight size={14} /></div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
