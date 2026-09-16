import { useEffect, useState } from "react";

/**
 * Email and phone are stored as reversed char codes and only assembled in the
 * browser after mount, so they never appear in the server-rendered HTML that
 * scraping bots read.
 */
const decode = (codes: readonly number[]) =>
  String.fromCharCode(...[...codes].reverse());

const EMAIL_CODES = [
  109, 111, 99, 46, 108, 105, 97, 109, 103, 64, 105, 116, 116, 101, 104, 110,
  97, 104, 101, 107,
] as const;
const PHONE_CODES = [50, 53, 52, 50, 45, 55, 50, 55, 45, 52, 48, 54] as const;

export interface ContactInfo {
  email: string;
  phone: string;
  phoneHref: string;
}

/** Returns null during SSR and the first client render. */
export function useContactInfo(): ContactInfo | null {
  const [info, setInfo] = useState<ContactInfo | null>(null);

  useEffect(() => {
    const phone = decode(PHONE_CODES);
    setInfo({
      email: decode(EMAIL_CODES),
      phone,
      phoneHref: `tel:+1${phone.replace(/-/g, "")}`,
    });
  }, []);

  return info;
}
