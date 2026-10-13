"use client";

import { useEffect } from "react";

/**
 * Soft gold light that follows the mouse across dark sections marked `.glow-zone`
 * (styles in app/redesign.css). Mouse and trackpad only; off for reduced motion.
 */
export function CursorGlow() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let active: HTMLElement | null = null;
    let frame = 0;
    let lastX = 0;
    let lastY = 0;
    let lastTarget: EventTarget | null = null;

    const update = () => {
      frame = 0;
      const zone = lastTarget instanceof Element ? lastTarget.closest<HTMLElement>(".glow-zone") : null;
      if (zone !== active) {
        active?.classList.remove("is-glowing");
        zone?.classList.add("is-glowing");
        active = zone;
      }
      if (zone) {
        const rect = zone.getBoundingClientRect();
        zone.style.setProperty("--gx", `${lastX - rect.left}px`);
        zone.style.setProperty("--gy", `${lastY - rect.top}px`);
      }
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      lastX = event.clientX;
      lastY = event.clientY;
      lastTarget = event.target;
      if (!frame) frame = requestAnimationFrame(update);
    };

    const onLeave = () => {
      active?.classList.remove("is-glowing");
      active = null;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
      onLeave();
    };
  }, []);

  return null;
}
