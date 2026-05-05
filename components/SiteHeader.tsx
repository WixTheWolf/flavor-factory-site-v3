import Link from "next/link";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#14251c]/10 bg-[#f7f4ee]/90 px-6 py-4 backdrop-blur-xl md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.22em] text-[#14251c]">
          The Flavor Factory
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-[#405045] transition hover:text-[#14251c]">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="hidden rounded-full bg-[#14251c] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#21372a] sm:inline-flex">
          Start a Project
        </Link>
      </div>
    </header>
  );
}
