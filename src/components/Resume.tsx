import React from 'react';

export default function Resume() {
  return (
    <section
      id="resume"
      className="h-screen flex items-start justify-center bg-gray-800"
    >
      <div className="p-8 max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-100 mb-6">Resume</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-200">Education</h3>
          <p className="mt-1 text-gray-300">
            The University of British Columbia{' '}
            <span className="ml-2 italic text-gray-400">Sept 2022 – Apr 2026</span>
          </p>
          <p className="text-gray-300">Bachelor of Science in Computer Science</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-200">Experience</h3>
          <p className="font-medium text-gray-300 mt-2">
            Web Development Intern, Wrap-It-Moving (Oct 2024 – Jan 2025)
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
            <li>
              Implemented 6+ UI enhancements and performance optimizations,
              improving navigation efficiency by 40%.
            </li>
            <li>
              Reduced page load time by 25% through code optimization and
              asset management, boosting user engagement by 60%.
            </li>
            <li>
              Managed CI/CD pipeline and version control, achieving 100% uptime
              during deployments.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

