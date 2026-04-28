import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container showcase">
            <div className="eyebrow">About Us</div>
            <h1 className="section-title">A family-owned custom flavor manufacturer.</h1>
            <p className="section-subtext" style={{ marginTop: 14 }}>
              The Flavor Factory develops high quality liquid and powder flavor solutions for customers who need fast, practical support from sample to production.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
