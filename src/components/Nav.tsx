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
     <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md shadow-lg z-40 border-b border-slate-700/50">
      <ul className="flex justify-center space-x-8 py-4">
        {sections.map((sec) => (
          <li key={sec.id}>
            <button
              onClick={() => scrollTo(sec.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none ${
                activeSection === sec.id
                  ? 'text-amber-500 bg-amber-500/10 border border-amber-500/30'
                  : 'text-slate-300 hover:text-amber-500 hover:bg-slate-800/50'
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



