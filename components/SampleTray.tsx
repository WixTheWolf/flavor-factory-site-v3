"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { ADDED_EVENT, TRAY_LIMIT, useShortlist } from "@/lib/shortlist";
import { trackEvent } from "@/lib/analytics";
import s from "./SampleTray.module.css";

type Toast = { text: string; key: number } | null;

/**
 * The sample tray: flavors picked anywhere on the site, kept across pages, sent with one quick request.
 * A pill shows the count; it opens a panel to review, remove or send them.
 */
export function SampleTray() {
  const { items, remove, clear, count, mounted } = useShortlist();
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<Toast>(null);
  const [tucked, setTucked] = useState(false);
  const pathname = usePathname();
  const pillRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const onRequestPage = pathname.startsWith("/request-samples");

  // Confirm each add next to the pill.
  useEffect(() => {
    let timer = 0;
    function onAdded(event: Event) {
      const detail = (event as CustomEvent<{ name: string; full?: boolean }>).detail;
      setToast({
        text: detail.full ? `Your tray holds ${TRAY_LIMIT} flavors. Send this round, or remove one first.` : `${detail.name} added to your sample tray`,
        key: Date.now(),
      });
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setToast(null), detail.full ? 4200 : 2600);
    }
    window.addEventListener(ADDED_EVENT, onAdded);
    return () => {
      window.removeEventListener(ADDED_EVENT, onAdded);
      window.clearTimeout(timer);
    };
  }, []);

  // On the homepage the quick request form already lists the tray; step aside while it is on screen.
  useEffect(() => {
    const section = pathname === "/" ? document.getElementById("request") : null;
    if (!section) {
      setTucked(false);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setTucked(entry.isIntersecting), { threshold: 0.12 });
    observer.observe(section);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => setOpen(false), [pathname]);

  // Panel behaves as a dialog: Escape closes, focus moves in and returns to the pill.
  useEffect(() => {
    if (!open) return;
    const pill = pillRef.current;
    panelRef.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.classList.add("tray-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("tray-open");
      pill?.focus({ preventScroll: true });
    };
  }, [open]);

  useEffect(() => {
    if (open && count === 0) setOpen(false);
  }, [open, count]);

  if (!mounted || onRequestPage) return null;

  return (
    <>
      <div className={`${s.dock}${tucked && !open ? ` ${s.tucked}` : ""}`}>
        <p className={`${s.toast}${toast ? ` ${s.toastOn}` : ""}`} role="status" aria-live="polite">
          {toast?.text}
        </p>
        {count > 0 && (
          <button
            ref={pillRef}
            type="button"
            className={s.pill}
            aria-haspopup="dialog"
            aria-expanded={open}
            onClick={() => {
              setOpen(true);
              trackEvent("sample_tray_open", { count });
            }}
          >
            <span className={s.dots} aria-hidden="true">
              {items.slice(-3).map((item) => (
                <i key={item.id} style={{ background: item.color ?? "var(--gold-light)" }} />
              ))}
            </span>
            <span>Sample tray</span>
            <span className={s.count}>{count}</span>
          </button>
        )}
      </div>

      {open && (
        <div className={s.layer}>
          <button type="button" className={s.backdrop} aria-label="Close sample tray" tabIndex={-1} onClick={() => setOpen(false)} />
          <div className={s.panel} role="dialog" aria-modal="true" aria-labelledby="sample-tray-title" ref={panelRef}>
            <div className={s.head}>
              <div>
                <p className={s.kicker}>Your sample tray</p>
                <h2 id="sample-tray-title">
                  {count} {count === 1 ? "flavor" : "flavors"} to try
                </h2>
              </div>
              <button type="button" className={s.close} onClick={() => setOpen(false)} aria-label="Close sample tray" data-autofocus>
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <ul className={s.list}>
              {items.map((item) => (
                <li key={item.id}>
                  <span className={s.swatch} style={{ background: item.color ?? "var(--gold-pale)" }} aria-hidden="true" />
                  <span className={s.itemText}>
                    {item.href ? (
                      <Link href={item.href} onClick={() => setOpen(false)}>
                        {item.name}
                      </Link>
                    ) : (
                      <strong>{item.name}</strong>
                    )}
                    <small>
                      {item.family}
                      {item.format ? ` · ${item.format}` : ""}
                    </small>
                  </span>
                  <button type="button" className={s.remove} onClick={() => remove(item.id)} aria-label={`Remove ${item.name}`}>
                    <X size={16} aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>

            <div className={s.foot}>
              <p>Send them in one quick request. We confirm your base, format and label by reply, and first samples typically ship in 3-5 business days once your brief is confirmed.</p>
              <Link
                href="/request-samples"
                className={`btn-gold btn-lg ${s.send}`}
                onClick={() => trackEvent("request_sample_click", { location: "sample tray", count })}
              >
                Request {count === 1 ? "this sample" : `these ${count} samples`}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <div className={s.footLinks}>
                <button type="button" onClick={() => setOpen(false)}>
                  Keep browsing
                </button>
                <button type="button" onClick={clear}>
                  Empty the tray
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
