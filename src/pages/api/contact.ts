import type { NextApiRequest, NextApiResponse } from "next";
import { validateContact } from "@/lib/contact";
import { sendEmail } from "@/lib/server/email";
import { createRateLimiter } from "@/lib/server/rateLimit";
import { verifyTurnstile } from "@/lib/server/turnstile";
import { SITE_URL } from "@/data/profile";

/**
 * POST /api/contact
 *
 * Layered spam protection, cheapest checks first:
 *   1. honeypot field and minimum fill time (bots are silently "accepted")
 *   2. input validation
 *   3. per-IP rate limit
 *   4. Cloudflare Turnstile captcha (when TURNSTILE_SECRET_KEY is set)
 * Messages are delivered through Resend (RESEND_API_KEY).
 */

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "kehanhetti@gmail.com";
// Resend allows sending from onboarding@resend.dev without a verified domain.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
const MIN_FILL_TIME_MS = 3000;

const isRateLimited = createRateLimiter({ windowMs: 10 * 60 * 1000, max: 3 });

type ResponseBody = { ok: true } | { ok: false; error: string };

function clientIp(req: NextApiRequest): string {
  const forwarded = req.headers["x-forwarded-for"];
  const raw = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  return raw?.split(",")[0]?.trim() || req.socket.remoteAddress || "unknown";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  const body = (req.body ?? {}) as Record<string, unknown>;
  const fail = (status: number, error: string) =>
    res.status(status).json({ ok: false, error });

  // Pretend success so bots get no signal to adapt.
  const filledHoneypot = typeof body.company === "string" && body.company.trim() !== "";
  const tooFast = typeof body.elapsed === "number" && body.elapsed < MIN_FILL_TIME_MS;
  if (filledHoneypot || tooFast) {
    return res.status(200).json({ ok: true });
  }

  const result = validateContact(body);
  if (!result.ok) return fail(400, result.error);

  const ip = clientIp(req);
  if (isRateLimited(ip)) {
    return fail(429, "Too many messages sent. Please try again a bit later.");
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    const token = typeof body.token === "string" ? body.token : "";
    if (!token) return fail(400, "Please complete the captcha.");
    if (!(await verifyTurnstile(token, turnstileSecret, ip))) {
      return fail(400, "Captcha check failed. Please try again.");
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set.");
    return fail(503, "The contact form isn't available right now.");
  }

  const { name, email, message } = result.data;
  const sent = await sendEmail({
    apiKey,
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    text: `${message}\n\n—\nFrom: ${name} <${email}>\nSent from ${SITE_URL}`,
  });

  if (!sent) return fail(502, "The message could not be sent right now.");
  return res.status(200).json({ ok: true });
}
