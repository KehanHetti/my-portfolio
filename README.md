# kehanhetti.vercel.app

Personal portfolio of Kehan Hettiarachchi, Computer Science student at the University of British Columbia.

**Stack:** Next.js 15 (Pages Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Vercel

## Structure

```
src/
├── components/   layout/ · sections/ · contact/ · ui/
├── data/         Content as typed data (experience, projects, coursework)
├── hooks/        useReveal, useActiveSection, useContactInfo
├── lib/          Shared validation; server/ for rate limiting, Turnstile, email
├── pages/        index.tsx, api/contact.ts
└── styles/       globals.css
```

Content is defined as typed data in `src/data`, so updates require editing data rather than markup.

## Contact form

Currently disabled on the live site; the implementation remains in the repository. To re-enable, restore the commented-out references in `src/pages/index.tsx`, `src/data/profile.ts`, and `src/components/sections/Hero.tsx`.

`POST /api/contact` delivers messages through [Resend](https://resend.com). Spam protection is applied cheapest-first: a honeypot field with a minimum fill time, shared length and link-count validation, a per-IP sliding-window rate limit, and a server-verified Cloudflare Turnstile captcha.

## Privacy

- Email and phone number are assembled client-side after hydration and do not appear in server-rendered HTML.
- Photos in `public/photos/` are blocked for `Googlebot-Image`, served with `X-Robots-Tag: noindex, noimageindex`, and stripped of EXIF metadata. No `og:image` is defined.
- Security headers include a strict Content-Security-Policy, HSTS, `nosniff`, and a restrictive Permissions-Policy (see `next.config.ts`).

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run build
```

### Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | For the contact form | Message delivery via Resend |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Recommended | Renders the captcha widget |
| `TURNSTILE_SECRET_KEY` | Recommended | Verifies captcha tokens server-side |
| `CONTACT_TO_EMAIL` | No | Overrides the recipient address |
| `CONTACT_FROM_EMAIL` | No | Overrides the sender (default `onboarding@resend.dev`) |
