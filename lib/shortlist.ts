"use client";

import { useCallback, useEffect, useState } from "react";
import { track } from "@vercel/analytics";

const STORAGE_KEY = "tff-shortlist";
const CHANGE_EVENT = "tff-shortlist-change";
/** Fired with the added item's name so the sample tray can confirm it. */
export const ADDED_EVENT = "tff-shortlist-added";
/** A first sample round stays focused; the brief form can carry more. */
export const TRAY_LIMIT = 12;

export type ShortlistItem = {
  id: string;
  name: string;
  family: string;
  format: string;
  /** Swatch color and page link, when the item came from the library. */
  color?: string;
  href?: string;
};

function readStorage(): ShortlistItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ShortlistItem[]) : [];
  } catch {
    return [];
  }
}

function writeStorage(items: ShortlistItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore storage errors: the tray still works for this page view
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function useShortlist() {
  const [items, setItems] = useState<ShortlistItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    function syncItems() {
      setItems(readStorage());
    }

    syncItems();
    setMounted(true);
    window.addEventListener("storage", syncItems);
    window.addEventListener(CHANGE_EVENT, syncItems);

    return () => {
      window.removeEventListener("storage", syncItems);
      window.removeEventListener(CHANGE_EVENT, syncItems);
    };
  }, []);

  /** Adds an item; returns false when the tray is already full. */
  const add = useCallback((item: ShortlistItem) => {
    const current = readStorage();
    if (current.some((i) => i.id === item.id)) return true;
    if (current.length >= TRAY_LIMIT) {
      window.dispatchEvent(new CustomEvent(ADDED_EVENT, { detail: { name: item.name, full: true } }));
      return false;
    }
    const next = [...current, item];
    setItems(next);
    writeStorage(next);
    window.dispatchEvent(new CustomEvent(ADDED_EVENT, { detail: { name: item.name } }));
    track("Add to shortlist", { id: item.id, name: item.name, family: item.family });
    return true;
  }, []);

  const remove = useCallback((id: string) => {
    const current = readStorage();
    const removed = current.find((i) => i.id === id);
    const next = current.filter((i) => i.id !== id);
    setItems(next);
    writeStorage(next);
    if (removed) {
      track("Remove from shortlist", { id: removed.id, name: removed.name, family: removed.family });
    }
  }, []);

  const clear = useCallback(() => {
    setItems([]);
    writeStorage([]);
  }, []);

  const has = useCallback((id: string) => items.some((i) => i.id === id), [items]);

  return { items, add, remove, clear, has, count: items.length, mounted };
}
