/**
 * Sliding-window, in-memory rate limiter.
 *
 * Serverless instances are short-lived and not shared, so this slows casual
 * abuse rather than acting as a hard guarantee. The captcha is the primary
 * defence; swap in a shared store (e.g. Upstash Redis) if that ever changes.
 */
export function createRateLimiter({
  windowMs,
  max,
  maxKeys = 5000,
}: {
  windowMs: number;
  max: number;
  maxKeys?: number;
}) {
  const hits = new Map<string, number[]>();

  return function isRateLimited(key: string): boolean {
    const now = Date.now();
    const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
    const limited = recent.length >= max;

    if (!limited) recent.push(now);
    hits.set(key, recent);

    // Keep the map from growing without bound on a long-lived instance.
    if (hits.size > maxKeys) {
      for (const [k, times] of hits) {
        if (times.every((t) => now - t >= windowMs)) hits.delete(k);
      }
    }

    return limited;
  };
}
