import type { Flavor } from "@/lib/types";
import { Button } from "@/components/Button";

function industryLabel(value: string) {
  return value
    .replace("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function uniqueLabels(items: string[]) {
  const seen = new Set<string>();

  return items.filter((item) => {
    const key = item.toLowerCase().replace(/[^a-z0-9]+/g, "");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function FlavorCard({ flavor }: { flavor: Flavor }) {
  const fit = uniqueLabels([...flavor.applications, ...flavor.industries.map(industryLabel)]).slice(0, 4);
  const metadata = Array.from(new Set([flavor.format, flavor.declarationType, ...flavor.productTypes])).slice(0, 4);

  return (
    <article className="group flex min-h-[390px] flex-col rounded-[1.8rem] border border-[#12382B]/10 bg-white/72 p-6 shadow-[0_20px_60px_rgba(30,30,26,0.055)] transition duration-300 hover:-translate-y-1 hover:bg-white">
      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C6843A]">{flavor.family}</p>
          <h3 className="display-title mt-3 text-3xl">{flavor.name}</h3>
        </div>
        <span className="shrink-0 rounded-full border border-[#12382B]/10 bg-[#F4EFE5] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#12382B]">
          {flavor.variantCount} option{flavor.variantCount === 1 ? "" : "s"}
        </span>
      </div>

      <p className="text-sm leading-7 text-[#645f55]">{flavor.notes}</p>

      <div className="mt-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#12382B]/55">Best fit</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {fit.map((item) => (
            <span key={item} className="rounded-full border border-[#12382B]/10 bg-[#F4EFE5] px-3 py-1 text-xs font-medium text-[#12382B]">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#12382B]/55">Format / declaration</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {metadata.map((item) => (
            <span key={item} className="rounded-full bg-[#12382B]/6 px-3 py-1 text-xs font-medium text-[#645f55]">
              {item}
            </span>
          ))}
        </div>
      </div>

      <details className="mt-6 rounded-2xl border border-[#12382B]/10 bg-[#F4EFE5]/65 p-4 text-sm text-[#645f55]">
        <summary className="cursor-pointer font-semibold text-[#12382B]">View technical names</summary>
        <ul className="mt-3 grid gap-2 text-xs leading-5">
          {flavor.rawNames.slice(0, 5).map((raw) => (
            <li key={raw}>{raw}</li>
          ))}
          {flavor.rawNames.length > 5 && <li>+{flavor.rawNames.length - 5} more variants</li>}
        </ul>
      </details>

      <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
        <Button href="/contact#project-form" className="w-full sm:w-auto">
          Request Sample
        </Button>
        <Button href={`mailto:samples@flavorfactory.net?subject=${encodeURIComponent(`Sample request: ${flavor.name}`)}`} variant="secondary" className="w-full sm:w-auto">
          Email Samples
        </Button>
      </div>
    </article>
  );
}
