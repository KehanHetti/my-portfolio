const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/** Verifies a Cloudflare Turnstile token. Fails closed on any error. */
export async function verifyTurnstile(
  token: string,
  secret: string,
  remoteIp?: string,
): Promise<boolean> {
  try {
    const body = new URLSearchParams({ secret, response: token });
    if (remoteIp) body.set("remoteip", remoteIp);

    const response = await fetch(VERIFY_URL, { method: "POST", body });
    const outcome = (await response.json()) as { success?: boolean };
    return outcome.success === true;
  } catch (error) {
    console.error("Turnstile verification failed:", error);
    return false;
  }
}
