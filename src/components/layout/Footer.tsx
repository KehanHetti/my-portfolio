import React from "react";
import { PROFILE } from "@/data/profile";

const LINKS = [
  { label: "GitHub", href: PROFILE.github.url },
  { label: "LinkedIn", href: PROFILE.linkedin.url },
  { label: "Resume", href: PROFILE.resumeUrl },
  { label: "Source", href: PROFILE.sourceUrl },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {PROFILE.name} · Built with Next.js, TypeScript &amp; Tailwind CSS
        </p>
        <ul className="flex gap-6">
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
