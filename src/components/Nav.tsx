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
     <nav className="fixed top-0 left-0 w-full bg-transparent shadow-lg z-40">
      <ul className="flex justify-center space-x-8 py-4">
        {sections.map((sec) => (
          <li key={sec.id}>
            <button
              onClick={() => scrollTo(sec.id)}
              className={`text-white transition-opacity duration-200 focus:outline-none ${
                activeSection === sec.id ? 'opacity-100' : 'opacity-80 hover:opacity-100'
              }`}
            >
              {sec.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}



