import type { NextConfig } from "next";

// Keeps photos out of Google Images / Bing Images while the page itself stays
// indexed. The files must stay crawlable for this to work: a crawler has to be
// able to fetch the image to see the "noindex" rule below.
const IMAGE_NOINDEX_HEADERS = [
  {
    key: "X-Robots-Tag",
    value: "noindex, noimageindex, noarchive, nosnippet",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      // Personal photos (public/photos). Keep every personal image in this
      // folder so it inherits these headers and the robots.txt block.
      {
        source: "/photos/:path*",
        headers: IMAGE_NOINDEX_HEADERS,
      },
      {
        source: "/background.jpg",
        headers: IMAGE_NOINDEX_HEADERS,
      },
      // Images resized by the next/image optimizer
      {
        source: "/_next/image",
        headers: IMAGE_NOINDEX_HEADERS,
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://challenges.cloudflare.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://vitals.vercel-insights.com https://challenges.cloudflare.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-src 'self' https://challenges.cloudflare.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
