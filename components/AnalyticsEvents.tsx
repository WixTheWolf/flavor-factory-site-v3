"use client";

import { trackEvent } from "@/lib/analytics";
import { useEffect, useRef, type ReactNode } from "react";

export function IndustryViewed({ industry }: { industry: string }) {
  useEffect(() => {
    trackEvent("industry_page_view", { industry });
  }, [industry]);

  return null;
}

export function ArticleReadTracker({ slug }: { slug: string }) {
  const sent = useRef(false);

  useEffect(() => {
    function onScroll() {
      if (sent.current) return;

      const scrollBottom = window.scrollY + window.innerHeight;
      const threshold = document.documentElement.scrollHeight - 160;

      if (scrollBottom >= threshold) {
        sent.current = true;
        trackEvent("insights_article_read", { slug });
        window.removeEventListener("scroll", onScroll);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  return null;
}

export function TimeOnPageTracker({ eventName, page }: { eventName: string; page: string }) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      trackEvent(eventName, { page });
    }, 60000);

    return () => window.clearTimeout(timer);
  }, [eventName, page]);

  return null;
}

export function TrackedLink({
  href,
  event,
  eventData,
  className,
  children,
}: {
  href: string;
  event: string;
  eventData?: Record<string, string>;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackEvent(event, eventData ?? {})}
    >
      {children}
    </a>
  );
}
