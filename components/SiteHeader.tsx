import Link from "next/link";
import { Button } from "@/components/Button";

const navItems = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#14251c]/10 bg-[#f7f4ee]/88 px-6 py-4 backdrop-blur-2xl md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-8">
        <Link href="/" className="text-xs font-bold uppercase tracking-[0.28em] text-[#102218]">
          The Flavor Factory
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#405045] transition duration-300 hover:text-[#102218]">
              {item.label}
            </Link>
          ))}
        </nav>

        <Button href="/contact" className="hidden px-5 py-3 sm:inline-flex">
          Start a Project
        </Button>
      </div>
      <nav className="mx-auto mt-4 flex max-w-[1320px] gap-5 overflow-x-auto pb-1 text-sm text-[#405045] lg:hidden" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 transition duration-300 hover:text-[#102218]">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
