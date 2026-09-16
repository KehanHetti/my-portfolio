import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/cn";

/** Small monospace label used above headings and sub-groups. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
      {children}
    </div>
  );
}

interface SectionProps {
  id: string;
  label: string;
  title: string;
  description?: string;
  /** Rendered opposite the heading on wide screens, e.g. a download link. */
  action?: React.ReactNode;
  children: React.ReactNode;
}

/** Page section with consistent spacing, heading, and scroll-in reveal. */
export function Section({ id, label, title, description, action, children }: SectionProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={`${id}-heading`}
      className="reveal border-t border-border/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-6 sm:space-y-16 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4">
            <Eyebrow>{label}</Eyebrow>
            <h2 id={`${id}-heading`} className="text-3xl font-light tracking-tight sm:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="max-w-2xl leading-relaxed text-muted-foreground">{description}</p>
            )}
          </div>
          {action}
        </div>
        {children}
      </div>
    </section>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground">
      {children}
    </span>
  );
}

export const buttonStyles = {
  outline:
    "inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:border-muted-foreground/50 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50",
  chip: "rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-muted-foreground/50 hover:text-foreground",
};

export const inputStyles = cn(
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground",
  "placeholder:text-muted-foreground transition-colors focus:border-muted-foreground/60 focus:outline-none",
);
