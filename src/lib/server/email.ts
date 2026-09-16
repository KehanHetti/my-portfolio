/**
 * Sends a plain-text email through Resend's REST API (https://resend.com),
 * avoiding an SDK dependency. Returns false instead of throwing so callers can
 * map failures to a user-facing response.
 */
export async function sendEmail({
  apiKey,
  from,
  to,
  replyTo,
  subject,
  text,
}: {
  apiKey: string;
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
}): Promise<boolean> {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to: [to], reply_to: replyTo, subject, text }),
    });

    if (!response.ok) {
      console.error("Resend rejected the message:", response.status, await response.text());
      return false;
    }
    return true;
  } catch (error) {
    console.error("Email delivery failed:", error);
    return false;
  }
}
