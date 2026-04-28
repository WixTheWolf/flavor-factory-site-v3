import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container sample-panel">
            <div className="sample-grid">
              <div className="sample-left">
                <div className="eyebrow">About Us</div>
                <h1 className="section-title">A premium flavor partner with practical manufacturing depth.</h1>
                <p className="section-subtext" style={{ marginTop: 14 }}>
                  The Flavor Factory is a family-owned custom manufacturer focused on high quality liquid and powder flavor solutions. We support teams that need speed, consistency, and service they can count on.
                </p>
                <p className="section-subtext" style={{ marginTop: 12 }}>
                  Our approach is straightforward: understand your product target, recommend profiles that fit your process, and move quickly from first submission to production-ready flavor.
                </p>
                <div className="showcase-pills" style={{ marginTop: 16 }}>
                  {[
                    "40+ years of combined experience",
                    "Customer-first development support",
                    "Low minimum order quantities",
                    "Liquid and powder capabilities",
                  ].map((item) => <span key={item} className="soft-pill">{item}</span>)}
                </div>
              </div>
              <div className="sample-right">
                <img src="/images/flavor-factory/application-bakery.jpg" alt="Flavor lab team and ingredients" />
                <div className="sample-overlay" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
