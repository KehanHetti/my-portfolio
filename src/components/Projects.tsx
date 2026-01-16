import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaPython, FaBrain, FaCode, FaMicrophone } from 'react-icons/fa';
import { SiTensorflow, SiOpencv, SiTypescript, SiReact, SiNextdotjs } from 'react-icons/si';

interface Project {
  id: number;
  title: string;
  summary: string;
  tech?: string[];
  githubUrl?: string;
  projectUrl?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

type ProjectsProps = {
  projects: Project[];
};

const TECH_ICONS: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Python: FaPython,
  TensorFlow: SiTensorflow,
  OpenCV: SiOpencv,
  TypeScript: SiTypescript,
  JavaScript: FaCode,
  React: SiReact,
  'Next.js': SiNextdotjs,
  Golang: FaCode,
  'Machine Learning': FaBrain,
  'Deep Learning': FaBrain,
  'Speech Recognition': FaMicrophone,
  'Voice Recognition': FaMicrophone,
  'Web Development': FaCode,
};

export default function Projects({ projects }: ProjectsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('All');
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

  // Extract all unique technologies for filter
  const allTechs = Array.from(
    new Set(
      projects.flatMap((p) => p.tech || [])
    )
  );

  // Enhanced projects with tech stacks
  const enhancedProjects: Project[] = projects.map((p) => {
    if (p.id === 1) {
      return {
        ...p,
        tech: ['Python', 'OpenCV', 'TensorFlow', 'Machine Learning'],
        githubUrl: 'https://github.com/KehanHetti',
      };
    }
    if (p.id === 2) {
      return {
        ...p,
        tech: ['Python', 'JavaScript', 'Speech Recognition', 'Web Development'],
        githubUrl: 'https://github.com/KehanHetti',
      };
    }
    if (p.id === 3) {
      return {
        ...p,
        tech: ['Next.js', 'TypeScript', 'Golang', 'Web Development'],
        githubUrl: 'https://github.com/KehanHetti',
      };
    }
    return p;
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-slate-800/50 py-12 md:py-16 relative flex flex-col overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex-1 flex flex-col min-h-0">
        <div className={`text-center mb-8 flex-shrink-0 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <button
              onClick={() => setActiveFilter('All')}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === 'All'
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 border border-slate-600'
              }`}
            >
              All
            </button>
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveFilter(tech)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === tech
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 border border-slate-600'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-1 min-h-0">
          {enhancedProjects
            .filter((p) => 
              activeFilter === 'All' || p.tech?.includes(activeFilter)
            )
            .map((project, idx) => {
              const Icon = project.icon || FaCode;
              return (
                <div
                  key={project.id}
                  className={`group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Project Thumbnail/Icon */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <Icon className="text-5xl text-amber-500/50 group-hover:text-amber-500 transition-colors duration-300 relative z-10" />
                    <div className="absolute top-4 right-4 z-10">
                      <div className="w-12 h-12 rounded-full bg-amber-500/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
                        <Icon className="text-amber-500 text-xl" />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-5 flex flex-col flex-1 min-h-0">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-500 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed mb-3 flex-1 line-clamp-4">
                      {project.summary}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech?.map((tech) => {
                        const TechIcon = TECH_ICONS[tech] || FaCode;
                        return (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-700/50 border border-slate-600 text-slate-300 text-[10px]"
                          >
                            <TechIcon className="text-amber-500 text-[10px]" />
                            {tech}
                          </span>
                        );
                      })}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-600 hover:border-amber-500 text-slate-300 hover:text-amber-500 rounded-lg transition-all duration-300"
                        >
                          <FaGithub className="text-base" />
                          <span className="text-sm font-medium">View Code</span>
                        </a>
                      )}
                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-600 hover:border-amber-500 text-slate-300 hover:text-amber-500 rounded-lg transition-all duration-300"
                        >
                          <FaExternalLinkAlt className="text-base" />
                          <span className="text-sm font-medium">Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
