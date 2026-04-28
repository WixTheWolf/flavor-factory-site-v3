import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "./site-data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo serif">
            <div className="small">The</div>
            <div className="large">FlavorFactory</div>
          </div>
          <p className="footer-copy">
            Family-owned custom manufacturer of high quality liquid and powder flavor solutions.
          </p>
        </div>

        <div>
          <div className="eyebrow">Explore</div>
          <div className="footer-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </div>
        </div>

        <div>
          <div className="eyebrow">Contact</div>
          <div className="contact-lines">
            <div><MapPin size={16} style={{ marginTop: 2, flexShrink: 0 }} /> <span>2058 Second Street, Norco, CA 92860</span></div>
            <div><Phone size={16} style={{ flexShrink: 0 }} /> <span>(951) 273-9877</span></div>
            <div><Mail size={16} style={{ flexShrink: 0 }} /> <span>samples@flavorfactory.net</span></div>
          </div>
        </div>

        <div>
          <div className="eyebrow">Need samples?</div>
          <p className="footer-copy" style={{ maxWidth: 320 }}>
            Tell us your application and target profile. We can send library samples or build a custom match.
          </p>
          <a href="/contact" className="dark-btn">Request Samples</a>
        </div>
      </div>
      <div className="copyright">© 2026 The Flavor Factory. All rights reserved.</div>
    </footer>
  );
}
