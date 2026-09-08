"use client";

import { useCallback, useEffect, useState } from "react";
import { track } from "@vercel/analytics";

const STORAGE_KEY = "tff-shortlist";
const CHANGE_EVENT = "tff-shortlist-change";

export type ShortlistItem = {
  id: string;
  name: string;
  family: string;
  format: string;
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
    window.dispatchEvent(new Event(CHANGE_EVENT));
  } catch {
    // ignore storage errors
  }
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

  const add = useCallback((item: ShortlistItem) => {
    setItems((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      const next = [...prev, item];
      writeStorage(next);
      track("Add to shortlist", { id: item.id, name: item.name, family: item.family });
      return next;
    });
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => {
      const removed = prev.find((i) => i.id === id);
      const next = prev.filter((i) => i.id !== id);
      writeStorage(next);
      if (removed) {
        track("Remove from shortlist", { id: removed.id, name: removed.name, family: removed.family });
      }
      return next;
    });
  }, []);

  const clear = useCallback(() => {
    setItems([]);
    writeStorage([]);
  }, []);

  const has = useCallback((id: string) => items.some((i) => i.id === id), [items]);

  return { items, add, remove, clear, has, count: items.length, mounted };
}
