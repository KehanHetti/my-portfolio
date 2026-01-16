import React, { useEffect, useRef, useState } from 'react';
import { FaGraduationCap, FaCode, FaBriefcase, FaDownload, FaCodeBranch, FaRocket, FaBrain, FaChartLine, FaServer, FaImage } from 'react-icons/fa';

const COURSES = [
  {
    code: 'CPSC',
    title: 'Machine Architecture',
    desc: 'Computer architecture, assembly language, and low-level system programming.',
    icon: FaCode,
    category: 'CS',
  },
  {
    code: 'CPSC',
    title: 'Machine Learning',
    desc: 'Supervised and unsupervised learning techniques, neural networks, and model evaluation.',
    icon: FaChartLine,
    category: 'CS',
  },
  {
    code: 'CPSC',
    title: 'Computer Graphics',
    desc: '3D graphics rendering, shaders, transformations, and graphics programming.',
    icon: FaImage,
    category: 'CS',
  },
  {
    code: 'CPSC',
    title: 'Software Construction',
    desc: 'Software engineering best practices, version control, testing, and agile methodologies.',
    icon: FaCodeBranch,
    category: 'CS',
  },
  {
    code: 'CPSC',
    title: 'Data Structures and Algorithms',
    desc: 'Advanced algorithms, data structures, and complexity analysis for efficient problem solving.',
    icon: FaBrain,
    category: 'CS',
  },
  {
    code: 'CPSC',
    title: 'Artificial Intelligence',
    desc: 'Search, planning, knowledge representation, and the basics of machine learning.',
    icon: FaRocket,
    category: 'CS',
  },
  {
    code: 'CPSC',
    title: 'Computer Networking',
    desc: 'Network protocols, TCP/IP, network architecture, and distributed systems.',
    icon: FaServer,
    category: 'CS',
  },
];

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownload = () => {
    // Create a link to download PDF (you'll need to add the actual PDF file)
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Update this path when you add your PDF
    link.download = 'Kehan_Hettiarachchi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="resume" 
      ref={sectionRef}
      className="bg-slate-800/50 py-12 md:py-16 relative flex flex-col overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex-1 flex flex-col min-h-0">
        <div className={`text-center mb-6 flex-shrink-0 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resume</h2>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <FaDownload />
            Download PDF
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
          {/* Left Column: Education & Experience */}
          <div className="space-y-4">
            {/* Education */}
            <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center gap-2 mb-3">
                <FaGraduationCap className="text-amber-500 text-lg" />
                <h3 className="text-lg font-bold text-white">Education</h3>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl">
                <p className="text-sm text-white font-semibold mb-1">
                  The University of British Columbia
                </p>
                <p className="text-slate-300 text-xs mb-1">Bachelor of Science in Computer Science</p>
                <p className="text-amber-500 italic text-xs">Expected Graduation: Sept 2026</p>
              </div>
            </div>

            {/* Experience */}
            <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="inline-flex items-center gap-2 mb-3">
                <FaBriefcase className="text-amber-500 text-lg" />
                <h3 className="text-lg font-bold text-white">Experience</h3>
              </div>
              
              {/* Basis Learning Foundation */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl mb-3">
                <p className="text-sm text-white font-semibold mb-1">
                  Software Development Intern
                </p>
                <p className="text-slate-300 text-xs mb-1">Basis Learning Foundation</p>
                <p className="text-amber-500 italic text-[10px] mb-1.5">Oct 2025 – Dec 2025 • Toronto, ON</p>
                <ul className="text-left text-slate-300 space-y-1 text-[10px] mt-1.5">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5 text-xs">▸</span>
                    <span>Engineered a student and alumni tracking platform using <span className="font-semibold text-white">Next.js</span>, <span className="font-semibold text-white">Django</span>, and <span className="font-semibold text-white">PostgreSQL</span> to centralize disparate data, creating a single source of truth for student lifecycle management.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5 text-xs">▸</span>
                    <span>Architected a secure REST API with <span className="font-semibold text-white">Google Drive</span> integration, automating workflows and enhancing security.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5 text-xs">▸</span>
                    <span>Reduced manual reporting overhead by <span className="font-semibold text-white">30%</span> by developing custom, real-time interactive data visualizations.</span>
                  </li>
                </ul>
              </div>

              {/* Wrap-It Moving */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl">
                <p className="text-sm text-white font-semibold mb-1">
                  Full Stack Developer
                </p>
                <p className="text-slate-300 text-xs mb-1">Wrap-It Moving</p>
                <p className="text-amber-500 italic text-[10px] mb-1.5">Oct 2024 – Jan 2025 • Vancouver, BC</p>
                <ul className="text-left text-slate-300 space-y-1 text-[10px] mt-1.5">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5 text-xs">▸</span>
                    <span>Used <span className="font-semibold text-white">JavaScript</span>, <span className="font-semibold text-white">TypeScript</span>, and <span className="font-semibold text-white">GitHub CI/CD</span> to build features, achieving zero-downtime deployments.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5 text-xs">▸</span>
                    <span>Redesigned and modernized core UI components, substantially improving navigation efficiency by <span className="font-semibold text-white">40%</span>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5 text-xs">▸</span>
                    <span>Optimized contact form pipeline, reducing server response latency by <span className="font-semibold text-white">25%</span> and increasing engagement by <span className="font-semibold text-white">60%</span>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5 text-xs">▸</span>
                    <span>Optimized mobile UX with <span className="font-semibold text-white">Tailwind CSS</span>; shipped fully production-ready on desktop, tablets, and mobile.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Relevant Coursework */}
          <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 mb-3">
              <FaCode className="text-amber-500 text-lg" />
              <h3 className="text-lg font-bold text-white">Relevant Coursework</h3>
            </div>
            <div className="grid grid-cols-1 gap-2">
                    {COURSES.map(({ code, title, desc, icon: Icon }) => (
                      <div
                        key={code}
                        className="bg-slate-800/50 border border-slate-700 rounded-lg p-2.5 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl group"
                      >
                        <div className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-6 h-6 rounded bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
                            <Icon className="text-amber-500 text-xs" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-semibold text-white mb-0.5">
                              {title}
                            </h4>
                            <p className="text-slate-300 text-[10px] leading-tight line-clamp-1">{desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



