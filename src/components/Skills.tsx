import React from 'react';

export default function Skills() {
  return (
    <section
      id="statistics"
      className="h-screen flex items-center justify-center bg-gray-900"
    >
      <div className="p-8 max-w-3xl">
        <h2 className="text-4xl font-bold text-gray-100 mb-4">Technical Skills</h2>
        <h3 className="text-xl font-semibold text-gray-200 mt-4">Languages</h3>
        <p className="text-gray-300">
          TypeScript, JavaScript, HTML, CSS, Tailwind, C++, C, Java, Python
        </p>
        <h3 className="text-xl font-semibold text-gray-200 mt-4">Technologies</h3>
        <p className="text-gray-300">Astro, Git, GitHub, Vercel, VS Code, Opera PMS</p>
        <h3 className="text-xl font-semibold text-gray-200 mt-4">Tools</h3>
        <p className="text-gray-300">OpenCV, TensorFlow, Speech Recognition APIs, ML Frameworks</p>
      </div>
    </section>
  );
}

