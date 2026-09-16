import React, { useCallback, useEffect, useRef } from "react";
import Script from "next/script";

interface TurnstileApi {
  render: (
    el: HTMLElement,
    options: {
      sitekey: string;
      theme?: "light" | "dark" | "auto";
      callback: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
    },
  ) => string;
  reset: (widgetId?: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

interface TurnstileProps {
  siteKey: string;
  /** Receives a fresh token, or "" when it expires or errors. Must be stable. */
  onToken: (token: string) => void;
  /** Increment to request a new token (tokens are single-use). */
  resetSignal: number;
}

/** Cloudflare Turnstile captcha widget, loaded lazily in explicit-render mode. */
export function Turnstile({ siteKey, onToken, resetSignal }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  const render = useCallback(() => {
    if (!window.turnstile || !containerRef.current || widgetId.current) return;
    widgetId.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme: "dark",
      callback: onToken,
      "expired-callback": () => onToken(""),
      "error-callback": () => onToken(""),
    });
  }, [siteKey, onToken]);

  // Covers remounts where the script is already loaded.
  useEffect(render, [render]);

  useEffect(() => {
    if (resetSignal > 0 && window.turnstile && widgetId.current) {
      window.turnstile.reset(widgetId.current);
    }
  }, [resetSignal]);

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="lazyOnload"
        onReady={render}
      />
      <div ref={containerRef} className="min-h-[65px]" />
    </>
  );
}
