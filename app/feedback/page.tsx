import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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

export default function FeedbackPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
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
            <iframe
              id="jotform-customer-feedback"
              title="The Flavor Factory Customer Feedback Survey"
              src="https://form.jotform.com/262526012389053"
              style={{
                width: "100%",
                minHeight: "2700px",
                border: 0,
                borderRadius: "18px",
                background: "transparent",
              }}
              scrolling="yes"
              allow="geolocation; microphone; camera; fullscreen"
            />
            <p style={{ textAlign: "center", marginTop: "14px", color: "#5d675f", fontSize: "0.9rem" }}>
              If the survey does not load, you can {" "}
              <a
                href="https://form.jotform.com/262526012389053"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2f6c48", fontWeight: 700, textDecoration: "underline" }}
              >
                open it directly here
              </a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
