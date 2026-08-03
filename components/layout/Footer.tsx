"use client";

import Image from "next/image";
import Link from "next/link";
import { k9sBadge, k9sLinks } from "@/data/k9s-for-warriors";
import { Logo } from "@/components/ui/Logo";
import { trackEvent } from "@/lib/analytics";

const exploreLinks = [
  { label: "Flavors", href: "/flavors" },
  { label: "Industries", href: "/industries" },
  { label: "What We Do", href: "/capabilities" },
  { label: "Quality", href: "/certifications" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Resources", href: "/resources" },
] as const;

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid footer-grid-simple">
        <div className="footer-brand-block">
          <Logo className="logo-svg" />
          <p className="footer-copy">
            Family-owned in Norco, California. Custom liquid and powder flavors from sample through production.
          </p>
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
          <div className="footer-links footer-links-two-column">
            {exploreLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
        </div>

        <div className="footer-contact-block">
          <div className="eyebrow">Contact</div>
          <div className="contact-lines">
            <a href="https://maps.google.com/?q=2058%20Second%20Street%2C%20Norco%2C%20CA%2092860">
              2058 Second Street<br />Norco, CA 92860
            </a>
            <a href="tel:+19512739877" onClick={() => trackEvent("phone_click", { location: "footer" })}>
              (951) 273-9877
            </a>
            <a href="mailto:samples@flavorfactory.net" onClick={() => trackEvent("email_click", { location: "footer" })}>
              samples@flavorfactory.net
            </a>
          </div>
          <Link
            href="/request-samples"
            className="footer-cta"
            onClick={() => trackEvent("request_sample_click", { location: "footer" })}
          >
            Request a Sample
          </Link>
        </div>
      </div>

      <div className="container footer-bottom-row">
        <div className="footer-social-row">
          <a href="https://maps.google.com/?q=The+Flavor+Factory+2058+Second+Street+Norco+CA+92860" target="_blank" rel="noopener">Google Maps</a>
          <a href="https://www.facebook.com/DanTheFlavorFactory" target="_blank" rel="noopener">Facebook</a>
          <a href="https://www.linkedin.com/company/the-flavor-factory/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://g.page/r/CcU-wmxp3I0XEBM/review" target="_blank" rel="noopener">Google Review ↗</a>
        </div>
        <div className="copyright">© 2026 The Flavor Factory</div>
      </div>
    </footer>
  );
}
