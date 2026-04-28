import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48, paddingBottom: 88 }}>
          <div className="container showcase">
            <div className="eyebrow">Contact</div>
            <h1 className="section-title">Talk with our flavor team.</h1>
            <p className="section-subtext" style={{ marginTop: 14 }}>
              For samples, product support, or documentation requests, contact us directly or submit a sample request.
            </p>
            <div className="showcase-pills" style={{ marginTop: 18 }}>
              <span className="soft-pill">samples@flavorfactory.net</span>
              <span className="soft-pill">(951) 273-9877</span>
              <span className="soft-pill">2058 Second Street, Norco, CA 92860</span>
            </div>
            <Link href="/request-samples" className="cta-btn" style={{ marginTop: 24 }}>Go to request samples</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
