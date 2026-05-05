import { AppImage } from "@/components/ui/AppImage";

const capabilities = [
  "Liquid and powder flavors",
  "Natural, artificial, and custom systems",
  "Masking and modulation",
  "Heat-stable and process-ready formulations",
  "Small batch development to full production",
] as const;

export function Capabilities() {
  return (
    <section className="new-section" id="capabilities">
      <div className="home-shell new-capabilities">
        <div>
          <div className="new-eyebrow">Capabilities</div>
          <h2>Built for the bench, the floor, and the next order.</h2>
        </div>
        <div className="new-capability-image">
          <AppImage
            src="/images/flavor-factory/Liquid Pour.png"
            alt="Controlled liquid and powder formulation detail"
            sizes="(max-width: 980px) calc(100vw - 40px), 44vw"
            style={{ objectPosition: "center center" }}
          />
        </div>
        <div className="new-capability-list">
          {capabilities.map((capability) => (
            <div key={capability}>{capability}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
