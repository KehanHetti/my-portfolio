import React, { useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  summary: string;
  tech?: string[];
  githubUrl?: string;
  projectUrl?: string;
}

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
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
      className="min-h-screen py-20 sm:py-32 opacity-0 relative"
    >
      {/* Sunset Glow Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-b from-orange-500/10 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="space-y-12 sm:space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-light">Selected Work</h2>
            <div className="text-sm text-muted-foreground font-mono">PROJECTS</div>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {enhancedProjects.map((project, index) => (
              <div
                key={project.id}
                className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
              >

                <div className="lg:col-span-2">
                  <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">{project.summary}</p>
                </div>

                <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end items-start mt-2 lg:mt-0">
                  {project.tech?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                    >
                      {tech}
                    </span>
                  ))}
                  <div className="flex gap-2 w-full lg:w-auto mt-2 lg:mt-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-border rounded hover:border-muted-foreground/50 transition-colors duration-300"
                        aria-label="View on GitHub"
                      >
                        <FaGithub className="text-sm text-muted-foreground hover:text-foreground transition-colors" />
                      </a>
                    )}
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-border rounded hover:border-muted-foreground/50 transition-colors duration-300"
                        aria-label="View project"
                      >
                        <FaExternalLinkAlt className="text-sm text-muted-foreground hover:text-foreground transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
