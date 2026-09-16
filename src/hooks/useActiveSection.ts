import { useEffect, useState } from "react";

/**
 * Tracks which section currently crosses the middle band of the viewport.
 * Works for sections of any height, unlike a percentage-visible threshold.
 * `ids` should be referentially stable (e.g. a module-level constant).
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
