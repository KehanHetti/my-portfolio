import React from 'react';

export default function Courses() {
  return (
    <section
      id="activities"
      className="h-screen flex items-center justify-center bg-gray-800"
    >
      <div className="p-8 max-w-3xl">
        <h2 className="text-4xl font-bold text-gray-100 mb-4">
          Relevant Coursework
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-300 text-lg">
          <li>Machine Architecture</li>
          <li>Machine Learning</li>
          <li>Computer Vision</li>
          <li>Software Construction</li>
          <li>Data Structures and Algorithms</li>
          <li>Artificial Intelligence</li>
        </ul>
      </div>
    </section>
  );
}

