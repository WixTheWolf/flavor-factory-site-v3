import Image from "next/image";
import { k9sBadge, k9sLinks } from "@/data/k9s-for-warriors";
import { K9sPhotoCarousel } from "@/components/K9sPhotoCarousel";

const DESCRIPTION =
  "K9s For Warriors is dedicated to ending Veteran suicide by providing highly trained Service Dogs to military Veterans suffering from PTSD, traumatic brain injury, and/or military sexual trauma. With the majority of their dogs being rescues, this life-saving program creates an unbreakable bond between Warrior and K9 - one that fosters mutual healing, recovery, and a renewed sense of purpose.";

type Props = {
  /** "compact" drops the photo carousel for pages that already carry one. */
  variant?: "full" | "compact";
};

export function K9sForWarriors({ variant = "full" }: Props) {
  return (
    <section className={variant === "compact" ? "k9s-section is-compact" : "k9s-section"} aria-labelledby="k9s-heading">
      <div className="home-shell">
        <div className="k9s-intro">
          <a
            className="k9s-badge"
            href={k9sLinks.site}
            target="_blank"
            rel="noopener"
            aria-label="K9s For Warriors (opens in a new tab)"
          >
            <Image
              src={k9sBadge.src}
              alt={k9sBadge.alt}
              width={k9sBadge.width}
              height={k9sBadge.height}
              sizes="(max-width: 900px) 220px, 280px"
            />
          </a>
          <div className="k9s-copy">
            <div className="new-eyebrow">Giving Back</div>
            <h2 id="k9s-heading">Proud supporter of K9s For Warriors.</h2>
            <p>{DESCRIPTION}</p>
            <p>
              The Flavor Factory is a donor to K9s For Warriors, and we plan to keep supporting their work. If their
              mission speaks to you the way it does to us, every donation helps place another Service Dog with a Veteran
              who needs one.
            </p>
            <div className="k9s-actions">
              <a className="cta-btn" href={k9sLinks.donate} target="_blank" rel="noopener">
                Donate to K9s For Warriors
              </a>
              <a className="k9s-secondary-link" href={k9sLinks.site} target="_blank" rel="noopener">
                Learn about their mission ↗
              </a>
            </div>
          </div>
        </div>
        {variant === "full" ? <K9sPhotoCarousel /> : null}
      </div>
    </section>
  );
}
