import Link from "next/link";
import { navigation, siteCopy } from "@/data/site-copy";

export function Footer() {
  const footerLinks = navigation.filter((item) => item.href !== "/request-samples");

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo serif">
            <div className="small">The</div>
            <div className="large">FlavorFactory</div>
          </div>
          <p className="footer-copy">Premium liquid and powder flavor solutions built for speed, quality, and scale.</p>
        </div>

        <div>
          <div className="eyebrow">Explore</div>
          <div className="footer-links">
            {footerLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
        </div>

        <div>
          <div className="eyebrow">Contact</div>
          <div className="contact-lines">
            <div>
              <a href="https://maps.google.com/?q=2058%20Second%20Street%2C%20Norco%2C%20CA%2092860">
                2058 Second Street, Norco, CA 92860
              </a>
            </div>
            <div><a href="tel:+19512739877">(951) 273-9877</a></div>
            <div><a href="mailto:samples@flavorfactory.net">samples@flavorfactory.net</a></div>
          </div>
        </div>

        <div>
          <div className="eyebrow">Quality</div>
          <div className="footer-badge-row" aria-label="Certifications and facility programs">
            {siteCopy.certifications.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <Link href="/request-samples" className="footer-cta">
            Start a sample request
          </Link>
        </div>
      </div>
      <div className="copyright">Copyright 2026 The Flavor Factory</div>
    </footer>
  );
}
