import React, { useState } from "react";
import { buttonStyles } from "@/components/ui/Section";

/**
 * mailto: links are unreliable (on many Windows setups they open a browser or
 * an unconfigured app), so offer copy-to-clipboard and webmail compose links.
 */
export function EmailOptions({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const to = encodeURIComponent(email);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy my email address:", email);
    }
  };

  return (
    <div className="space-y-3">
      <div className="text-base text-foreground sm:text-lg">{email}</div>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={copy} className={buttonStyles.chip}>
          <span aria-live="polite">{copied ? "Copied!" : "Copy email"}</span>
        </button>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${to}`}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonStyles.chip}
        >
          Gmail
        </a>
        <a
          href={`https://outlook.office.com/mail/deeplink/compose?to=${to}`}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonStyles.chip}
        >
          Outlook
        </a>
      </div>
    </div>
  );
}
