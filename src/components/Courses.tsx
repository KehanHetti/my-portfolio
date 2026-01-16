import React, { useEffect, useRef } from 'react';
import { FaCode, FaBrain, FaDatabase, FaCalculator, FaCheckCircle, FaServer, FaGamepad, FaCog } from 'react-icons/fa';

interface Course {
  name: string;
  description: string;
  category: 'CS' | 'Math' | 'Data Science' | 'Other';
  icon: React.ComponentType<{ className?: string }>;
  completed: boolean;
}

const COURSES: Course[] = [
  // Computer Science Courses
  {
    name: 'Computer Hardware and Operating Systems',
    description: 'Computer architecture, hardware components, and operating system fundamentals.',
    category: 'CS',
    icon: FaCog,
    completed: true,
  },
  {
    name: 'Introduction to Computer Networking',
    description: 'Network protocols, TCP/IP, network architecture, and distributed systems.',
    category: 'CS',
    icon: FaServer,
    completed: true,
  },
  {
    name: 'Introduction to Software Engineering',
    description: 'Software engineering principles, design patterns, and development methodologies.',
    category: 'CS',
    icon: FaCode,
    completed: true,
  },
  {
    name: 'Video Game Programming',
    description: 'Game development, graphics programming, and interactive systems.',
    category: 'CS',
    icon: FaGamepad,
    completed: true,
  },
  {
    name: 'Computer Graphics',
    description: '3D graphics rendering, shaders, transformations, and graphics programming.',
    category: 'CS',
    icon: FaCode,
    completed: true,
  },
  {
    name: 'Applied Machine Learning',
    description: 'Practical machine learning applications, model training, and evaluation.',
    category: 'CS',
    icon: FaBrain,
    completed: true,
  },
  {
    name: 'Data Structures and Algorithms',
    description: 'Advanced algorithms, data structures, and complexity analysis for efficient problem solving.',
    category: 'CS',
    icon: FaCode,
    completed: true,
  },
  {
    name: 'Artificial Intelligence',
    description: 'Search, planning, knowledge representation, and the basics of machine learning.',
    category: 'CS',
    icon: FaBrain,
    completed: true,
  },
  {
    name: 'Software Construction',
    description: 'Software engineering best practices, version control, testing, and agile methodologies.',
    category: 'CS',
    icon: FaCode,
    completed: true,
  },
  {
    name: 'Models of Computation',
    description: 'Formal models, automata theory, and computational complexity.',
    category: 'CS',
    icon: FaCode,
    completed: true,
  },
  {
    name: 'Introduction to Computer Systems',
    description: 'System-level programming, memory management, and computer organization.',
    category: 'CS',
    icon: FaCog,
    completed: true,
  },
  {
    name: 'Intermediate Algorithm Design and Analysis',
    description: 'Advanced algorithmic techniques and complexity analysis.',
    category: 'CS',
    icon: FaCode,
    completed: true,
  },
  // Data Science Courses
  {
    name: 'Introduction to Data Science',
    description: 'Statistical analysis, data visualization, and data-driven decision making.',
    category: 'Data Science',
    icon: FaDatabase,
    completed: true,
  },
  // Math Courses
  {
    name: 'Statistics',
    description: 'Probability theory and statistical inference.',
    category: 'Math',
    icon: FaCalculator,
    completed: true,
  },
  {
    name: 'Calculus III',
    description: 'Multivariable calculus and vector fields.',
    category: 'Math',
    icon: FaCalculator,
    completed: true,
  },
  {
    name: 'Matrix Algebra',
    description: 'Linear algebra, matrix operations, and vector spaces.',
    category: 'Math',
    icon: FaCalculator,
    completed: true,
  },
];

export default function Courses() {
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
      className="min-h-screen py-20 sm:py-32 opacity-0"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="space-y-12 sm:space-y-16">
          <div className="space-y-6 sm:space-y-8">
            <div className="text-sm text-muted-foreground font-mono tracking-wider">COURSES</div>
            <h2 className="text-3xl sm:text-4xl font-light">Academic Courses</h2>
            <p className="text-muted-foreground">Key coursework from my Computer Science degree at UBC.</p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {Object.entries(coursesByCategory).map(([category, courses]) => (
              <div key={category} className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">{category}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {courses.map((course) => {
                    const CourseIcon = course.icon;
                    return (
                      <div
                        key={course.name}
                        className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <CourseIcon className="text-lg text-muted-foreground group-hover:text-foreground transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-sm font-medium group-hover:text-muted-foreground transition-colors">
                                {course.name}
                              </h4>
                              {course.completed && (
                                <FaCheckCircle className="text-xs text-muted-foreground flex-shrink-0" />
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground leading-tight">{course.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="pt-8 border-t border-border">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-light text-foreground mb-1">{COURSES.length}</div>
                <div className="text-sm text-muted-foreground">Total Courses</div>
              </div>
              <div>
                <div className="text-2xl font-light text-foreground mb-1">
                  {COURSES.filter((c) => c.completed).length}
                </div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div>
                <div className="text-2xl font-light text-foreground mb-1">
                  {Object.keys(coursesByCategory).length}
                </div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
