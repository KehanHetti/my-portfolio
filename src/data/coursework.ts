export interface Course {
  code: string;
  name: string;
  description: string;
}

export interface CourseGroup {
  category: string;
  /** Technical groups are always visible; electives sit behind a toggle. */
  primary: boolean;
  courses: Course[];
}

// Titles match the UBC transcript.
export const COURSE_GROUPS: CourseGroup[] = [
  {
    category: "Computer Science",
    primary: true,
    courses: [
      { code: "CPSC 427", name: "Video Game Programming", description: "Game engines, graphics programming, and interactive systems." },
      { code: "CPSC 330", name: "Applied Machine Learning", description: "Practical machine learning, model training, and evaluation." },
      { code: "CPSC 322", name: "Introduction to Artificial Intelligence", description: "Search, planning, knowledge representation, and reasoning under uncertainty." },
      { code: "CPSC 320", name: "Intermediate Algorithm Design and Analysis", description: "Advanced algorithmic techniques and complexity analysis." },
      { code: "CPSC 317", name: "Introduction to Computer Networking", description: "Network protocols, TCP/IP, and network architecture." },
      { code: "CPSC 314", name: "Computer Graphics", description: "3D rendering, shaders, and transformations." },
      { code: "CPSC 313", name: "Computer Hardware and Operating Systems", description: "Computer architecture and operating system fundamentals." },
      { code: "CPSC 310", name: "Introduction to Software Engineering", description: "Software engineering principles, design patterns, and team development." },
      { code: "CPSC 221", name: "Basic Algorithms and Data Structures", description: "Core data structures, algorithms, and complexity analysis." },
      { code: "CPSC 213", name: "Introduction to Computer Systems", description: "System-level programming, memory management, and computer organization." },
      { code: "CPSC 210", name: "Software Construction", description: "Object-oriented design, testing, and version control." },
      { code: "CPSC 121", name: "Models of Computation", description: "Logic, proof, and formal models of computation." },
      { code: "COSC 121", name: "Computer Programming II", description: "Object-oriented programming, recursion, and abstract data types." },
      { code: "COSC 111", name: "Computer Programming I", description: "Programming fundamentals, control flow, and problem decomposition." },
      { code: "COSC 122", name: "Computer Fluency", description: "Core computing concepts, data representation, and computational thinking." },
      { code: "COSC 101", name: "Digital Citizenship", description: "Ethics, privacy, and security in a networked society." },
    ],
  },
  {
    category: "Math, Statistics & Data",
    primary: true,
    courses: [
      { code: "MATH 221", name: "Matrix Algebra", description: "Linear algebra, matrix operations, and vector spaces." },
      { code: "MATH 200", name: "Calculus III", description: "Multivariable calculus and vector fields." },
      { code: "MATH 101", name: "Integral Calculus with Applications to Physical Sciences", description: "Integration techniques, series, and applications." },
      { code: "MATH 100", name: "Differential Calculus with Applications to Physical Sciences", description: "Limits, derivatives, and applications." },
      { code: "STAT 251", name: "Elementary Statistics", description: "Probability theory and statistical inference." },
      { code: "DSCI 100", name: "Introduction to Data Science", description: "Statistical analysis, data visualization, and data-driven decisions." },
    ],
  },
  {
    category: "Science",
    primary: false,
    courses: [
      { code: "EOSC 213", name: "Computational Methods in Geological Engineering", description: "Numerical methods and computational modelling of earth systems." },
      { code: "PHYS 111", name: "Introductory Physics for the Physical Sciences", description: "Mechanics, waves, and energy." },
      { code: "BIOL 111", name: "Introduction to Modern Biology", description: "Cell biology, genetics, and the foundations of modern biology." },
      { code: "ATSC 113", name: "Applied Meteorology", description: "Weather systems and atmospheric science." },
      { code: "FRST 303", name: "Principles of Forest Science", description: "Forest ecosystems and sustainable resource management." },
      { code: "EOSC 114", name: "The Catastrophic Earth", description: "Natural hazards, risk, and the processes that drive them." },
      { code: "EOSC 111", name: "Laboratory Exploration of Planet Earth", description: "Hands-on investigation of earth materials and processes." },
    ],
  },
  {
    category: "Arts & Humanities",
    primary: false,
    courses: [
      { code: "ENGL 109", name: "Studies in Composition (Enhanced)", description: "Academic writing, argumentation, and clear communication." },
      { code: "ENGL 110", name: "Approaches to Literature and Culture", description: "Critical reading and analysis of literature and culture." },
      { code: "PSYO 111", name: "Introduction to Psychology: Basic Processes", description: "Perception, cognition, and learning." },
      { code: "ASIA 433", name: "Representations of Muslims in Hindi/Urdu Films", description: "Media representation and critical film analysis." },
    ],
  },
];
