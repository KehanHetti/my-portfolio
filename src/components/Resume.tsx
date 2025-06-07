import React from 'react';

const COURSES = [
  {
    code: 'CPSC V210',
    title: 'Software Construction',
    desc: 'Software engineering best practices, version control, testing, and agile methodologies.',
  },
  {
    code: 'CPSC V213',
    title: 'Introduction to Computer Systems',
    desc: 'Computer architecture, assembly language, and low-level system programming.',
  },
  {
    code: 'CPSC V320',
    title: 'Intermediate Algorithm Design & Analysis',
    desc: 'Advanced algorithms, data structures, and complexity analysis for efficient problem solving.',
  },
  {
    code: 'CPSC V322',
    title: 'Introduction to Artificial Intelligence',
    desc: 'Search, planning, knowledge representation, and the basics of machine learning.',
  },
  {
    code: 'CPSC V330',
    title: 'Applied Machine Learning',
    desc: 'Implemented real-world ML models using supervised and unsupervised techniques.',
  },
  {
    code: 'DSCI V100',
    title: 'Introduction to Data Science',
    desc: 'Data wrangling, visualization, and statistical analysis in Python and R.',
  },
  {
    code: 'MATH V200',
    title: 'Calculus III',
    desc: 'Multivariable calculus: gradients, divergence, curl, and multiple integrals.',
  },
  {
    code: 'STAT V251',
    title: 'Elementary Statistics',
    desc: 'Probability theory, distributions, hypothesis testing, and regression basics.',
  },
];

export default function Resume() {
  return (
    <section id="resume" className="min-h-screen bg-gray-800 pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-gray-100 mb-8">Resume</h2>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-200 mb-4">Education</h3>
          <p className="text-lg text-gray-300">
            The University of British Columbia{' '}
            <span className="italic text-gray-400">Sept 2022 – Apr 2026</span>
          </p>
          <p className="text-lg text-gray-300">Bachelor of Science in Computer Science</p>
        </div>

        {/* Relevant Coursework */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-200 mb-6">Relevant Coursework</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {COURSES.map(({ code, title, desc }) => (
              <div
                key={code}
                className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200"
              >
                <h4 className="text-xl font-semibold text-gray-100">{code} – {title}</h4>
                <p className="mt-2 text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-200 mb-4">Experience</h3>
          <p className="text-lg text-gray-300 font-medium">
            Web Development Intern at Wrap-It-Moving from October 2024 to January 2025
          </p>
          <ul className="list-disc list-inside text-gray-300 ml-5 mt-4 space-y-2 text-lg">
            <li>
              Built responsive dark-themed layouts with <span className="font-semibold text-gray-100">TypeScript</span>, <span className="font-semibold text-gray-100">JavaScript</span> and <span className="font-semibold text-gray-100">Tailwind CSS</span>.
            </li>
            <li>
              Boosted page load speed by <span className="font-semibold text-gray-100">25%</span> and navigation efficiency by <span className="font-semibold text-gray-100">40%</span>.
            </li>
            <li>
              Enhanced UX with smooth scroll-snapping and active nav highlighting across devices.
            </li>
            <li>
              Automated deployments using <span className="font-semibold text-gray-100">GitHub Actions</span> and <span className="font-semibold text-gray-100">Vercel</span> for <span className="font-semibold text-gray-100">zero downtime</span>.
            </li>
            <li>
              Maintained <span className="font-semibold text-gray-100">100%</span> uptime and seamless rollbacks through robust CI/CD workflows.
            </li>
            <li>
              Collaborated with designers to standardize UI/UX, refine color schemes, and integrate the <span className="font-semibold text-gray-100">Inter</span> font for a cohesive look.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}



