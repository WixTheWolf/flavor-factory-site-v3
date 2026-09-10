import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Logo } from "@/components/ui/Logo";
import { CustomerFeedbackForm } from "@/components/customer-feedback-form";
import styles from "./feedback-page.module.css";

export const metadata: Metadata = {
  title: "Customer Feedback",
  description: "Share feedback with The Flavor Factory team.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function FeedbackPage({
  searchParams,
}: {
  searchParams?: { source?: string };
}) {
  const source = String(searchParams?.source || "direct").slice(0, 50);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.brandLogoWrap}>
                <Logo
                  title="The Flavor Factory"
                  className={styles.brandLogo}
                />
              </div>
              <div className={styles.eyebrow}>Customer Feedback</div>
              <h1>Help us make The Flavor Factory better.</h1>
              <p className={styles.intro}>
                We want working with us to be as easy, reliable, and valuable as possible. This survey should take about 2–3 minutes.
              </p>
              <p className={styles.candid}>
                Please be candid. We want to know what we are doing well — and where we need to improve.
              </p>
              <div className={styles.privacyNote}>
                <strong>Your feedback may be completely anonymous.</strong>
                <span>Name, company, and email are optional at the end.</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.formSection}>
          <div className={`container ${styles.formContainer}`}>
            <CustomerFeedbackForm source={source} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
