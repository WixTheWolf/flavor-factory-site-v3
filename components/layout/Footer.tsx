import Link from "next/link";
import { navigation } from "@/data/site-copy";

export function Footer() {
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
            {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
        </div>

        <div>
          <div className="eyebrow">Contact</div>
          <div className="contact-lines">
            <div><span>2058 Second Street, Norco, CA 92860</span></div>
            <div><span>(951) 273-9877</span></div>
            <div><span>samples@flavorfactory.net</span></div>
          </div>
        </div>
      </div>
      <div className="copyright">© 2026 The Flavor Factory</div>
    </footer>
  );
}
