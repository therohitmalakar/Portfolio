type AnalyticsPayload = Record<string, unknown>;

export function trackEvent(name: string, payload: AnalyticsPayload = {}) {
  if (process.env.NEXT_PUBLIC_ENABLE_LOGS === "false") return;
  // Hook for future analytics provider integration.
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.info(`[analytics] ${name}`, payload);
  }
}

