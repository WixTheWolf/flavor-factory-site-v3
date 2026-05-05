import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#08120d] px-6 py-16 text-white md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em]">The Flavor Factory</p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">
            Custom liquid and powder flavor systems built with practical formulation, controlled iteration, and production discipline.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d2a45d]">Pages</p>
          <div className="mt-5 grid gap-3 text-sm text-white/68">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d2a45d]">Contact</p>
          <div className="mt-5 grid gap-3 text-sm text-white/68">
            <p>Norco, California</p>
            <a href="mailto:info@flavorfactory.net" className="transition hover:text-white">
              info@flavorfactory.net
            </a>
            <p>Built for real products.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
