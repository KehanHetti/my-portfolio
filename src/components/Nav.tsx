// components/Nav.tsx
import React from 'react';

interface Section {
  id: string;
  label: string;
}

type NavProps = {
  sections: Section[];
  activeSection: string;
  scrollTo: (id: string) => void;
};

export default function Nav({ sections, activeSection, scrollTo }: NavProps) {
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className={`w-2 h-8 rounded-full transition-all duration-500 ${
              activeSection === section.id
                ? 'bg-foreground'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
            }`}
            aria-label={`Navigate to ${section.label}`}
          />
        ))}
      </div>
    </nav>
  );
}
