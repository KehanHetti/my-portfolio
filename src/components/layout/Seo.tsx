import React from "react";
import Head from "next/head";
import { PROFILE, SITE_URL } from "@/data/profile";

const TITLE = `${PROFILE.name} | ${PROFILE.headline}`;
const DESCRIPTION = `${PROFILE.name} is a Computer Science student at UBC and software engineer building full-stack web applications, machine-learning systems, and games.`;
const CANONICAL = `${SITE_URL}/`;

// Keep the page indexable while keeping photos out of image search:
// noimageindex stops images on this page being indexed, and
// max-image-preview:none removes the thumbnail beside the search result.
// robots.txt and X-Robots-Tag headers (next.config.ts) cover the files too.
const ROBOTS = "index, follow, noimageindex, max-image-preview:none, max-snippet:-1";

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  jobTitle: "Software Engineer",
  url: SITE_URL,
  sameAs: [PROFILE.github.url, PROFILE.linkedin.url],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vancouver",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "The University of British Columbia" },
  knowsAbout: ["Software Engineering", "Full Stack Development", "Machine Learning", "Python", "TypeScript", "React", "Next.js", "C++"],
};

export default function Seo() {
  return (
    <Head>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="author" content={PROFILE.name} />
      <link rel="canonical" href={CANONICAL} />
      <meta name="robots" content={ROBOTS} />
      <meta name="googlebot" content={ROBOTS} />

      {/* No og:image on purpose, so link previews never pull a personal photo */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={CANONICAL} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:site_name" content={PROFILE.name} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
      />
    </Head>
  );
}
