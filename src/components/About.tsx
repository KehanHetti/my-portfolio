import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="h-screen flex items-center justify-center bg-gray-900"
    >
      <div className="p-8 max-w-3xl">
        <h2 className="text-4xl font-bold text-gray-100 mb-4">About</h2>
        <p className="text-lg text-gray-300">
          Passionate computer science student with practical experience in web
          development, data analysis, and game development. Proficient in
          Python, Java, and TypeScript. Seeking software engineering
          internships to apply my skills and continue growing in real-world
          environments. 
        </p>
      </div>
    </section>
  );
}

