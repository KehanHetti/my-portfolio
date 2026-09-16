import React, { useState } from "react";
import { CONTACT_LIMITS, validateContact } from "@/lib/contact";
import { buttonStyles, inputStyles } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import { Turnstile } from "./Turnstile";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string };

const EMPTY_FORM = { name: "", email: "", message: "", company: "" };

export function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [token, setToken] = useState("");
  const [captchaResets, setCaptchaResets] = useState(0);
  // Submissions faster than a human could type are treated as bots server-side.
  const [startedAt] = useState(() => Date.now());

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status.state === "error" || status.state === "sent") setStatus({ state: "idle" });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContact(form);
    if (!validation.ok) return setStatus({ state: "error", message: validation.error });
    if (TURNSTILE_SITE_KEY && !token) {
      return setStatus({ state: "error", message: "Please complete the captcha." });
    }

    setStatus({ state: "sending" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...validation.data,
          company: form.company,
          token,
          elapsed: Date.now() - startedAt,
        }),
      });
      const result = (await response.json()) as { ok: boolean; error?: string };

      // Turnstile tokens are single-use; fetch a fresh one for any retry.
      setToken("");
      setCaptchaResets((n) => n + 1);

      if (response.ok && result.ok) {
        setForm(EMPTY_FORM);
        setStatus({ state: "sent" });
      } else {
        setStatus({ state: "error", message: result.error ?? "Something went wrong." });
      }
    } catch {
      setStatus({ state: "error", message: "Couldn't reach the server. Check your connection." });
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      <label className="block">
        <span className="sr-only">Name</span>
        <input
          name="name"
          value={form.name}
          onChange={update}
          required
          maxLength={CONTACT_LIMITS.name}
          autoComplete="name"
          placeholder="Name"
          className={inputStyles}
        />
      </label>
      <label className="block">
        <span className="sr-only">Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={update}
          required
          maxLength={CONTACT_LIMITS.email}
          autoComplete="email"
          placeholder="Email"
          className={inputStyles}
        />
      </label>
      <label className="block">
        <span className="sr-only">Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={update}
          required
          maxLength={CONTACT_LIMITS.message}
          rows={5}
          placeholder="Message"
          className={cn(inputStyles, "resize-none")}
        />
      </label>

      {/* Honeypot: hidden from people, tempting to bots */}
      <div className="hidden" aria-hidden="true">
        <input
          name="company"
          value={form.company}
          onChange={update}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {TURNSTILE_SITE_KEY && (
        <Turnstile siteKey={TURNSTILE_SITE_KEY} onToken={setToken} resetSignal={captchaResets} />
      )}

      <button
        type="submit"
        disabled={status.state === "sending"}
        className={cn(buttonStyles.outline, "w-full py-3 text-base")}
      >
        {status.state === "sending" ? "Sending…" : "Send message"}
      </button>

      <p aria-live="polite" className="min-h-5 text-sm text-muted-foreground">
        {status.state === "sent" && (
          <span className="text-foreground">
            Thanks, your message is on its way. I&apos;ll get back to you soon.
          </span>
        )}
        {status.state === "error" &&
          `${status.message} You can also reach me with the email options.`}
      </p>
    </form>
  );
}
