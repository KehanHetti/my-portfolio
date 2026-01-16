import React, { useEffect, useRef } from "react";
import {
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiCplusplus,
  SiC,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiVercel,
  SiOpencv,
  SiTensorflow,
} from "react-icons/si";
import {
  FaCode,
  FaMicrophone,
  FaBrain,
  FaJava,
  FaLaptopCode,
} from "react-icons/fa";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level: number;
  category: "Languages" | "Technologies" | "Tools";
}

const SKILLS: Skill[] = [
  { name: "TypeScript", icon: SiTypescript, level: 5, category: "Languages" },
  { name: "JavaScript", icon: FaCode, level: 5, category: "Languages" },
  { name: "HTML", icon: SiHtml5, level: 5, category: "Languages" },
  { name: "CSS", icon: SiCss3, level: 5, category: "Languages" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: 5,
    category: "Languages",
  },
  { name: "C++", icon: SiCplusplus, level: 4, category: "Languages" },
  { name: "C", icon: SiC, level: 4, category: "Languages" },
  { name: "Java", icon: FaJava, level: 4, category: "Languages" },
  { name: "Python", icon: SiPython, level: 5, category: "Languages" },
  { name: "React", icon: SiReact, level: 5, category: "Technologies" },
  { name: "Next.js", icon: SiNextdotjs, level: 5, category: "Technologies" },
  { name: "Git", icon: SiGit, level: 5, category: "Technologies" },
  { name: "GitHub", icon: SiGithub, level: 5, category: "Technologies" },
  { name: "Vercel", icon: SiVercel, level: 5, category: "Technologies" },
  { name: "VS Code", icon: FaLaptopCode, level: 5, category: "Technologies" },
  { name: "OpenCV", icon: SiOpencv, level: 4, category: "Tools" },
  { name: "TensorFlow", icon: SiTensorflow, level: 4, category: "Tools" },
  {
    name: "Speech Recognition",
    icon: FaMicrophone,
    level: 4,
    category: "Tools",
  },
  { name: "ML Frameworks", icon: FaBrain, level: 4, category: "Tools" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillsByCategory = SKILLS.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>,
  );

  return (
    <section
      id="statistics"
      ref={sectionRef}
      className="min-h-screen py-20 sm:py-32 opacity-0"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="space-y-12 sm:space-y-16">
          <div className="space-y-6 sm:space-y-8">
            <div className="text-sm text-muted-foreground font-mono tracking-wider">
              SKILLS
            </div>
            <h2 className="text-3xl sm:text-4xl font-light">
              Technical Skills
            </h2>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category} className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  {category}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <SkillIcon className="text-lg text-muted-foreground group-hover:text-foreground transition-colors" />
                          <h4 className="text-sm font-medium flex-1">
                            {skill.name}
                          </h4>
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
    </section>
  );
}
