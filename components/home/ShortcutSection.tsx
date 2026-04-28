import { siteCopy } from "@/data/site-copy";

export function ShortcutSection() {
  return (
    <section className="section" style={{ paddingTop: 22 }}>
      <div className="container">
        <div className="showcase-pills">
          {siteCopy.shortcuts.map((item) => <span className="soft-pill" key={item}>{item}</span>)}
        </div>
      </div>
    </section>
  );
}
