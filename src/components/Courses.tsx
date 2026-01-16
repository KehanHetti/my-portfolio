import React, { useEffect, useRef, useState } from 'react';
import { FaCode, FaBrain, FaDatabase, FaCalculator, FaCheckCircle } from 'react-icons/fa';

interface Course {
  name: string;
  description: string;
  category: 'CS' | 'Math' | 'Data Science';
  icon: React.ComponentType<{ className?: string }>;
  completed: boolean;
}

const COURSES: Course[] = [
  { 
    name: 'Machine Architecture', 
    description: 'Assembly language and low-level system programming.',
    category: 'CS', 
    icon: FaCode, 
    completed: true 
  },
  { 
    name: 'Machine Learning', 
    description: 'Neural networks and model evaluation.',
    category: 'CS', 
    icon: FaBrain, 
    completed: true 
  },
  { 
    name: 'Computer Vision', 
    description: 'Image processing and computer vision algorithms.',
    category: 'CS', 
    icon: FaBrain, 
    completed: true 
  },
  { 
    name: 'Software Construction', 
    description: 'Version control, testing, and agile methodologies.',
    category: 'CS', 
    icon: FaCode, 
    completed: true 
  },
  { 
    name: 'Data Structures & Algorithms', 
    description: 'Advanced algorithms and complexity analysis.',
    category: 'CS', 
    icon: FaCode, 
    completed: true 
  },
  { 
    name: 'Artificial Intelligence', 
    description: 'Search, planning, and knowledge representation.',
    category: 'CS', 
    icon: FaBrain, 
    completed: true 
  },
  { 
    name: 'Computer Networking', 
    description: 'Network protocols and distributed systems.',
    category: 'CS', 
    icon: FaCode, 
    completed: true 
  },
  { 
    name: 'Data Science', 
    description: 'Statistical analysis and data visualization.',
    category: 'Data Science', 
    icon: FaDatabase, 
    completed: true 
  },
  { 
    name: 'Statistics', 
    description: 'Probability theory and statistical inference.',
    category: 'Math', 
    icon: FaCalculator, 
    completed: true 
  },
  { 
    name: 'Calculus III', 
    description: 'Multivariable calculus and vector fields.',
    category: 'Math', 
    icon: FaCalculator, 
    completed: true 
  },
];

const CATEGORY_INFO = {
  CS: { 
    label: 'Computer Science', 
    icon: FaCode, 
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-l-cyan-500',
    lineColor: 'bg-cyan-500'
  },
  Math: { 
    label: 'Mathematics', 
    icon: FaCalculator, 
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-l-pink-500',
    lineColor: 'bg-pink-500'
  },
  'Data Science': { 
    label: 'Data Science', 
    icon: FaDatabase, 
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-l-green-500',
    lineColor: 'bg-green-500'
  },
};

export default function Courses() {
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

  const coursesByCategory = COURSES.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {} as Record<string, Course[]>);

  return (
    <section
      id="activities"
      ref={sectionRef}
      className="bg-slate-800/50 py-6 md:py-8 relative flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col">
        <div className={`text-center mb-4 flex-shrink-0 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
            Academic <span className="text-amber-500">Courses</span>
          </h2>
          <p className="text-slate-300 text-xs leading-relaxed">Key coursework from my Computer Science degree at UBC.</p>
        </div>

        <div className="space-y-6">
          {Object.entries(coursesByCategory).map(([category, courses], categoryIdx) => {
            const categoryInfo = CATEGORY_INFO[category as keyof typeof CATEGORY_INFO];
            
            return (
              <div
                key={category}
                className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${categoryIdx * 0.15}s` }}
              >
                <div className="mb-3">
                  <div className={`h-0.5 ${categoryInfo.lineColor} rounded-full mb-2`}></div>
                  <h3 className="text-lg font-bold text-white">{categoryInfo.label}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {courses.map((course, idx) => {
                    const CourseIcon = course.icon;
                    return (
                      <div
                        key={course.name}
                        className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg group"
                        style={{ animationDelay: `${(categoryIdx * 0.15) + (idx * 0.05)}s` }}
                      >
                        <div className="flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/50 flex-shrink-0">
                            <CourseIcon className="text-amber-500 text-sm" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-1">
                              <h4 className="text-xs font-semibold text-white group-hover:text-amber-500 transition-colors">
                                {course.name}
                              </h4>
                              {course.completed && (
                                <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                              )}
                            </div>
                            <p className="text-slate-400 text-[10px] leading-tight">
                              {course.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className={`mt-4 flex-shrink-0 bg-slate-800/50 border border-slate-700 rounded-lg p-3 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-xl font-bold text-amber-500 mb-0.5">{COURSES.length}</div>
              <div className="text-slate-300 text-xs">Total Courses</div>
            </div>
            <div>
              <div className="text-xl font-bold text-amber-500 mb-0.5">
                {COURSES.filter((c) => c.completed).length}
              </div>
              <div className="text-slate-300 text-xs">Completed</div>
            </div>
            <div>
              <div className="text-xl font-bold text-amber-500 mb-0.5">
                {Object.keys(coursesByCategory).length}
              </div>
              <div className="text-slate-300 text-xs">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
