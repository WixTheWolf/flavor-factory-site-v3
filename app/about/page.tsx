import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section" style={{ paddingTop: 48 }}>
          <div className="container showcase">
            <div className="eyebrow">About Us</div>
            <h1 className="section-title">A custom flavor partner built on service, speed, and quality.</h1>
            <p className="section-subtext" style={{ marginTop: 16 }}>
              The Flavor Factory is a family-owned Southern California manufacturer of high quality liquid and powder flavor solutions. Our team supports customers from early R&D through repeat production.
            </p>
            <p className="section-subtext" style={{ marginTop: 12 }}>
              We’re known for low minimum orders, responsive communication, and practical flavor development that aligns with your process and timeline.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
