/**
 * Contact form validation shared by the client (instant feedback) and the API
 * route (the actual enforcement point).
 */

export const CONTACT_LIMITS = {
  name: 100,
  email: 200,
  message: 5000,
  maxLinks: 3,
} as const;

export interface ContactInput {
  name: string;
  email: string;
  message: string;
}

export type ValidationResult =
  | { ok: true; data: ContactInput }
  | { ok: false; error: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LINK_PATTERN = /https?:\/\//gi;

export function validateContact(raw: Record<string, unknown>): ValidationResult {
  const field = (key: keyof ContactInput) =>
    String(raw[key] ?? "")
      .trim()
      .slice(0, CONTACT_LIMITS[key]);

  const data = {
    name: field("name"),
    email: field("email"),
    message: field("message"),
  };

  if (!data.name || !data.email || !data.message) {
    return { ok: false, error: "Please fill in every field." };
  }
  if (!EMAIL_PATTERN.test(data.email)) {
    return { ok: false, error: "That email address doesn't look right." };
  }
  // Link-stuffed messages are a hallmark of spam bots.
  if ((data.message.match(LINK_PATTERN) ?? []).length > CONTACT_LIMITS.maxLinks) {
    return { ok: false, error: "Please include fewer links in your message." };
  }

  return { ok: true, data };
}
