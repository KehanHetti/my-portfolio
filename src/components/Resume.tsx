import React, { useEffect, useRef } from 'react';
import { FaGraduationCap, FaBriefcase, FaDownload, FaCodeBranch, FaRocket, FaBrain, FaChartLine, FaServer, FaImage } from 'react-icons/fa';
import {
  SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiCplusplus, SiC, SiPython,
  SiReact, SiNextdotjs, SiGit, SiGithub, SiVercel,
  SiOpencv, SiTensorflow
} from 'react-icons/si';
import { FaCode, FaTools, FaServer as FaServerIcon, FaMicrophone, FaBrain as FaBrainIcon, FaJava, FaLaptopCode } from 'react-icons/fa';

const COURSES = [
  {
    code: 'CPSC',
    title: 'Machine Architecture',
    desc: 'Computer architecture, assembly language, and low-level system programming.',
    icon: FaCodeBranch,
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
    title: 'Software Engineering',
    desc: 'Software engineering principles, design patterns, and development methodologies.',
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
  {
    code: 'CPSC',
    title: 'Game Development',
    desc: 'Game development, graphics programming, and interactive systems.',
    icon: FaImage,
    category: 'CS',
  },
];

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level: number;
  category: 'Languages' | 'Technologies' | 'Tools';
}

const SKILLS: Skill[] = [
  // Languages - ordered from strongest to weakest
  { name: 'Python', icon: SiPython, level: 5, category: 'Languages' },
  { name: 'JavaScript', icon: FaCode, level: 5, category: 'Languages' },
  { name: 'TypeScript', icon: SiTypescript, level: 5, category: 'Languages' },
  { name: 'Java', icon: FaJava, level: 4, category: 'Languages' },
  { name: 'C++', icon: SiCplusplus, level: 4, category: 'Languages' },
  { name: 'C', icon: SiC, level: 4, category: 'Languages' },
  { name: 'HTML', icon: SiHtml5, level: 5, category: 'Languages' },
  { name: 'CSS', icon: SiCss3, level: 5, category: 'Languages' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 5, category: 'Languages' },
  { name: 'React', icon: SiReact, level: 5, category: 'Technologies' },
  { name: 'Next.js', icon: SiNextdotjs, level: 5, category: 'Technologies' },
  { name: 'Git', icon: SiGit, level: 5, category: 'Technologies' },
  { name: 'GitHub', icon: SiGithub, level: 5, category: 'Technologies' },
  { name: 'Vercel', icon: SiVercel, level: 5, category: 'Technologies' },
  { name: 'VS Code', icon: FaLaptopCode, level: 5, category: 'Technologies' },
  { name: 'OpenCV', icon: SiOpencv, level: 4, category: 'Tools' },
  { name: 'TensorFlow', icon: SiTensorflow, level: 4, category: 'Tools' },
  { name: 'Speech Recognition', icon: FaMicrophone, level: 4, category: 'Tools' },
  { name: 'ML Frameworks', icon: FaBrainIcon, level: 4, category: 'Tools' },
];

export default function Resume() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -20% 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Kehan_Hettiarachchi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skillsByCategory = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="min-h-screen py-20 sm:py-32 opacity-0 relative"
    >
      {/* Sunset Glow Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-b from-orange-500/10 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="space-y-12 sm:space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-light">Resume</h2>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 text-sm font-mono"
            >
              <FaDownload className="text-xs" />
              Download PDF
            </button>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Education, Experience, Coursework */}
            <div className="lg:col-span-8 space-y-12 sm:space-y-16">
              {/* Education */}
              <div className="space-y-6">
                <div className="text-sm text-muted-foreground font-mono">EDUCATION</div>
                <div className="space-y-4">
                  <div className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-4 border-b border-border/50 hover:border-border transition-colors duration-500">
                    <div className="lg:col-span-2">
                      <div className="text-sm text-muted-foreground font-mono">2022 — 2027</div>
                    </div>
                    <div className="lg:col-span-10 space-y-2">
                      <div>
                        <h3 className="text-lg font-medium">Bachelor of Science in Computer Science</h3>
                        <div className="text-muted-foreground">The University of British Columbia</div>
                      </div>
                      <p className="text-muted-foreground text-sm">Expected Graduation: April 2027</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-6">
                <div className="text-sm text-muted-foreground font-mono">EXPERIENCE</div>
                <div className="space-y-8 sm:space-y-12">
                  {[
                    {
                      year: '2025',
                      role: 'Software Development Intern',
                      company: 'Basis Learning Foundation',
                      period: 'Oct 2025 — Present',
                      location: 'Toronto, ON',
                      description: [
                        'Engineered a student and alumni tracking platform using Next.js, Django, and PostgreSQL to centralize disparate data, creating a single source of truth for student lifecycle management.',
                        'Architected a secure REST API managing 300+ profiles with optimized pagination and advanced filtering.',
                        'Reduced manual reporting overhead by 30% by developing custom, real-time interactive data visualizations.',
                      ],
                      tech: ['Next.js', 'Django', 'PostgreSQL', 'REST API'],
                    },
                    {
                      year: '2024',
                      role: 'Full Stack Developer',
                      company: 'Wrap-It Moving',
                      period: 'Oct 2024 — Jan 2025',
                      location: 'Vancouver, BC',
                      description: [
                        'Used JavaScript, TypeScript, and GitHub CI/CD to build features, achieving zero-downtime deployments.',
                        'Redesigned and modernized core UI components, substantially improving navigation efficiency by 40%.',
                        'Optimized contact form pipeline, reducing server response latency by 25% and increasing engagement by 60%.',
                        'Optimized mobile UX with Tailwind CSS; shipped fully production-ready on desktop, tablets, and mobile.',
                      ],
                      tech: ['JavaScript', 'TypeScript', 'GitHub CI/CD', 'Tailwind CSS'],
                    },
                  ].map((job, index) => (
                    <div
                      key={index}
                      className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                    >
                      <div className="lg:col-span-2">
                        <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                          {job.year}
                        </div>
                      </div>

                      <div className="lg:col-span-10 space-y-3">
                        <div>
                          <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                          <div className="text-muted-foreground">{job.company}</div>
                          <div className="text-xs text-muted-foreground mt-1">{job.period} • {job.location}</div>
                        </div>
                        <ul className="space-y-2 text-muted-foreground leading-relaxed text-sm">
                          {job.description.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-foreground mt-1">▸</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {job.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="space-y-6">
                <div className="text-sm text-muted-foreground font-mono">RELEVANT COURSEWORK</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {COURSES.map((course) => {
                    const Icon = course.icon;
                    return (
                      <div
                        key={course.title}
                        className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500"
                      >
                        <div className="flex items-start gap-3">
                          <Icon className="text-lg text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium mb-1">{course.title}</h4>
                            <p className="text-xs text-muted-foreground leading-tight">{course.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Skills */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="text-sm text-muted-foreground font-mono">SKILLS</div>
                  {Object.entries(skillsByCategory).map(([category, skills]) => (
                    <div key={category} className="space-y-4">
                      <div className="text-xs text-muted-foreground font-mono">{category}</div>
                      <div className="space-y-3">
                        {skills.map((skill) => {
                          const SkillIcon = skill.icon;
                          return (
                            <div
                              key={skill.name}
                              className="group"
                            >
                              <div className="flex items-center gap-2 mb-1.5">
                                <SkillIcon className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                                <h4 className="text-xs font-medium flex-1">{skill.name}</h4>
                              </div>
                              <div className="w-full bg-muted rounded-full h-1">
                                <div
                                  className="bg-foreground h-1 rounded-full transition-all duration-500"
                                  style={{ width: `${(skill.level / 5) * 100}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
