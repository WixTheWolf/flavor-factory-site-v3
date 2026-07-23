"use client";

import Image from "next/image";
import Link from "next/link";
import { navigation, siteCopy } from "@/data/site-copy";
import { k9sBadge, k9sLinks } from "@/data/k9s-for-warriors";
import { industries } from "@/data/industries";
import { Logo } from "@/components/ui/Logo";
import { trackEvent } from "@/lib/analytics";

const serviceLinks = [
  { label: "Custom Liquid Flavors", href: "/custom-liquid-flavors" },
  { label: "Custom Powder Flavors", href: "/custom-powder-flavors" },
  { label: "Flavor Matching", href: "/flavor-matching" },
  { label: "Masking and Modulation", href: "/masking-and-modulation" },
  { label: "Organic-Compliant Flavors", href: "/organic-compliant-flavors" },
  { label: "Oral Care Flavors", href: "/oral-care-flavors" },
  { label: "Nutraceutical Flavors", href: "/nutraceutical-flavors" },
  { label: "Beverage Flavors", href: "/beverage-flavors" },
  { label: "Bakery Flavors", href: "/bakery-flavors" },
  { label: "Pharmaceutical Flavors", href: "/pharmaceutical-flavors" },
  { label: "Popcorn Seasoning Flavors", href: "/popcorn-seasoning-flavors" },
] as const;

export function Footer() {
  const footerLinks = navigation.filter((item) => item.href !== "/request-samples");

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo className="logo-svg" />
          <p className="footer-copy">Family-owned. Norco, CA. Custom liquid and powder flavors, from first sample to full production.</p>
          <a
            className="footer-k9s"
            href={k9sLinks.site}
            target="_blank"
            rel="noopener"
            onClick={() => trackEvent("k9s_click", { location: "footer" })}
          >
            <Image src={k9sBadge.src} alt={k9sBadge.alt} width={k9sBadge.width} height={k9sBadge.height} sizes="150px" />
            <span>Proud supporter of K9s For Warriors</span>
          </a>
        </div>

        <div>
          <div className="eyebrow">Explore</div>
          <div className="footer-links">
            {footerLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
        </div>

        <div>
          <div className="eyebrow">Industries</div>
          <div className="footer-links footer-industries">
            {industries.map((item) => <Link href={`/industries/${item.key}`} key={item.key}>{item.name}</Link>)}
          </div>
        </div>

        <div>
          <div className="eyebrow">Contact</div>
          <div className="contact-lines">
            <div className="footer-contact-brand">The Flavor Factory</div>
            <div>
              <a href="https://maps.google.com/?q=2058%20Second%20Street%2C%20Norco%2C%20CA%2092860">
                2058 Second Street, Norco, CA 92860
              </a>
            </div>
            <div>
              <a href="tel:+19512739877" onClick={() => trackEvent("phone_click", { location: "footer" })}>
                (951) 273-9877
              </a>
            </div>
            <div>
              <a
                href="mailto:samples@flavorfactory.net"
                onClick={() => trackEvent("email_click", { location: "footer" })}
              >
                samples@flavorfactory.net
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="eyebrow">Quality</div>
          <p className="footer-quality-line">{siteCopy.qualityLine}</p>
          <Link
            href="/request-samples"
            className="footer-cta"
            onClick={() => trackEvent("request_sample_click", { location: "footer" })}
          >
            Request a Custom Sample
          </Link>
        </div>
      </div>
      <div className="container footer-service-links" aria-label="Flavor services">
        {serviceLinks.map((item) => <Link href={item.href} key={item.label}>{item.label}</Link>)}
      </div>
      <div className="footer-social-row">
        <a href="https://maps.google.com/?q=The+Flavor+Factory+2058+Second+Street+Norco+CA+92860" target="_blank" rel="noopener" className="footer-social-link">Google Maps</a>
        <a href="https://www.facebook.com/DanTheFlavorFactory" target="_blank" rel="noopener" className="footer-social-link">Facebook</a>
        <a href="https://www.linkedin.com/company/the-flavor-factory/" target="_blank" rel="noopener" className="footer-social-link">LinkedIn</a>
        <a href="https://g.page/r/CcU-wmxp3I0XEBM/review" target="_blank" rel="noopener" className="footer-review-link">Leave a Google Review ↗</a>
      </div>
      <div className="copyright">© 2026 The Flavor Factory</div>
    </footer>
  );
}
