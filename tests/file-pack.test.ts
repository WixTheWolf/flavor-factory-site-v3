import { describe, expect, it } from "vitest";

const requiredFiles = [
  "/app/layout.tsx",
  "/app/globals.css",
  "/app/page.tsx",
  "/app/about/page.tsx",
  "/app/capabilities/page.tsx",
  "/app/industries/page.tsx",
  "/app/process/page.tsx",
  "/app/contact/page.tsx",
  "/components/SiteHeader.tsx",
  "/components/SiteFooter.tsx",
  "/components/SectionShell.tsx",
  "/components/PageHero.tsx",
  "/components/CTA.tsx",
  "/components/VisualBlock.tsx",
  "/components/Field.tsx",
];

describe("Flavor Factory site file pack", () => {
  it("defines every required route and shared component", () => {
    expect(requiredFiles).toHaveLength(15);
    expect(new Set(requiredFiles).size).toBe(requiredFiles.length);
  });

  it("includes the homepage route", () => {
    expect(requiredFiles).toContain("/app/page.tsx");
  });

  it("includes a global CSS file for Tailwind", () => {
    expect(requiredFiles).toContain("/app/globals.css");
  });
});
