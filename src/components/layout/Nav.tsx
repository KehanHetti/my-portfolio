import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { cn } from "@/lib/cn";

interface NavProps {
  items: readonly { id: string; label: string }[];
  activeSection: string;
}

export default function Nav({ items, activeSection }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (id: string) =>
    cn(
      "text-sm transition-colors",
      activeSection === id ? "text-white" : "text-neutral-400 hover:text-white",
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-border/60 bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
        <a
          href="#hero"
          onClick={() => setOpen(false)}
          className="font-mono text-sm tracking-wider text-white transition-colors hover:text-neutral-300"
        >
          KH
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {items.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={activeSection === id ? "location" : undefined} className={linkClass(id)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="p-2 text-white md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <ul id="mobile-menu" hidden={!open} className="space-y-1 border-t border-border/60 px-6 py-4 md:hidden">
        {items.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} onClick={() => setOpen(false)} className={cn("block py-2", linkClass(id))}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
