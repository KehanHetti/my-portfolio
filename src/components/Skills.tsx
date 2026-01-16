import React, { useEffect, useRef, useState } from 'react';
import { 
  SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiCplusplus, SiC, SiPython,
  SiReact, SiNextdotjs, SiGit, SiGithub, SiVercel,
  SiOpencv, SiTensorflow
} from 'react-icons/si';
import { FaCode, FaTools, FaServer, FaMicrophone, FaBrain, FaJava, FaLaptopCode } from 'react-icons/fa';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level: number; // 1-5
  category: 'Languages' | 'Technologies' | 'Tools';
}

const SKILLS: Skill[] = [
  // Languages
  { name: 'TypeScript', icon: SiTypescript, level: 5, category: 'Languages' },
  { name: 'JavaScript', icon: FaCode, level: 5, category: 'Languages' },
  { name: 'HTML', icon: SiHtml5, level: 5, category: 'Languages' },
  { name: 'CSS', icon: SiCss3, level: 5, category: 'Languages' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 5, category: 'Languages' },
  { name: 'C++', icon: SiCplusplus, level: 4, category: 'Languages' },
  { name: 'C', icon: SiC, level: 4, category: 'Languages' },
  { name: 'Java', icon: FaJava, level: 4, category: 'Languages' },
  { name: 'Python', icon: SiPython, level: 5, category: 'Languages' },
  
  // Technologies
  { name: 'React', icon: SiReact, level: 5, category: 'Technologies' },
  { name: 'Next.js', icon: SiNextdotjs, level: 5, category: 'Technologies' },
  { name: 'Git', icon: SiGit, level: 5, category: 'Technologies' },
  { name: 'GitHub', icon: SiGithub, level: 5, category: 'Technologies' },
  { name: 'Vercel', icon: SiVercel, level: 5, category: 'Technologies' },
  { name: 'VS Code', icon: FaLaptopCode, level: 5, category: 'Technologies' },
  
  // Tools
  { name: 'OpenCV', icon: SiOpencv, level: 4, category: 'Tools' },
  { name: 'TensorFlow', icon: SiTensorflow, level: 4, category: 'Tools' },
  { name: 'Speech Recognition', icon: FaMicrophone, level: 4, category: 'Tools' },
  { name: 'ML Frameworks', icon: FaBrain, level: 4, category: 'Tools' },
];

const CATEGORY_INFO = {
  Languages: { 
    icon: FaCode, 
    label: 'Languages', 
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-l-cyan-500'
  },
  Technologies: { 
    icon: FaServer, 
    label: 'Technologies', 
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-l-purple-500'
  },
  Tools: { 
    icon: FaTools, 
    label: 'Tools', 
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-l-green-500'
  },
};

export default function Skills() {
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

  const skillsByCategory = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section
      id="statistics"
      ref={sectionRef}
      className="bg-slate-800/50 py-12 md:py-16 relative flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex-1 flex flex-col">
        <div className={`text-center mb-8 flex-shrink-0 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Technical <span className="text-amber-500">Skills</span>
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsByCategory).map(([category, skills], categoryIdx) => {
            const categoryInfo = CATEGORY_INFO[category as keyof typeof CATEGORY_INFO];
            const CategoryIcon = categoryInfo.icon;
            
            return (
              <div
                key={category}
                className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${categoryIdx * 0.15}s` }}
              >
                <div className={`bg-slate-800/50 border border-slate-700 rounded-xl ${categoryInfo.borderColor} border-l-4 p-5 h-full`}>
                  <div className="flex items-center gap-2 mb-5">
                    <CategoryIcon className="text-lg text-amber-500" />
                    <h3 className="text-lg font-bold text-white">{categoryInfo.label}</h3>
                  </div>

                  <div className="space-y-4">
                    {skills.map((skill, idx) => {
                      const SkillIcon = skill.icon;
                      const percentage = (skill.level / 5) * 100;
                      
                      return (
                        <div
                          key={skill.name}
                          className="group"
                          style={{ animationDelay: `${(categoryIdx * 0.15) + (idx * 0.03)}s` }}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <SkillIcon className="text-xl text-amber-500 flex-shrink-0" />
                            <h4 className="text-sm font-semibold text-white group-hover:text-amber-500 transition-colors flex-1">
                              {skill.name}
                            </h4>
                          </div>
                          {/* Progress Bar */}
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <div
                              className="bg-amber-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
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
