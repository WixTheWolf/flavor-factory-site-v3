import { track as vercelTrack } from "@vercel/analytics";

type AnalyticsData = Record<string, string | number | boolean | undefined>;

/** Safe analytics wrapper. Does nothing if the provider is unavailable. */
export function trackEvent(event: string, data?: AnalyticsData) {
  try {
    vercelTrack(event, data ?? {});
  } catch {
    // Analytics unavailable
  }
}
