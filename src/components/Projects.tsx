import React from 'react';

interface Project {
  id: number;
  title: string;
  summary: string;
}

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="h-screen flex items-center justify-center bg-gray-900"
    >
      <div className="p-8 w-full max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-100 mb-4">Projects</h2>
        <ul className="space-y-6">
          {projects.map((p) => (
            <li
              key={p.id}
              className="border border-gray-700 rounded-lg p-6 bg-gray-800 shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-gray-200 mb-2">{p.title}</h3>
              <p className="text-gray-300">{p.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

