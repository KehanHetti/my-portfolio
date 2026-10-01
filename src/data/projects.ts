export interface Project {
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  /** Optional per-project links; add a repo or demo URL to surface it on the card. */
  links?: { repo?: string; demo?: string };
}

export const PROJECTS: Project[] = [
  {
    title: "UBC Academic Planner",
    summary:
      "A full-stack degree planner that audits requirements and generates course plans and timetables for UBC students.",
    highlights: [
      "Audits 5,700+ degree requirements and generates degree plans across 298 programs from prerequisite graphs, ordering courses by dependency.",
      "Reduced database egress 96% by offloading cached data to Cloudflare R2 with column-scoped queries.",
      "Constraint-based timetable optimizer builds conflict-free schedules from 14,800+ sections.",
    ],
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    title: "New Terra",
    summary:
      "A 2D action game built in C++ and OpenGL on a custom Entity Component System. Recognized as the best game for graphics in the class.",
    highlights: [
      "A* pathfinding over baked navigation grids combined with boids flocking for smooth enemy movement.",
      "Poisson disk sampling places enemy spawns naturally and without overlap in each room.",
      "Three enemy types with distinct AI: aiming, shooting, and teleportation. Built by a 6-person team.",
    ],
    stack: ["C++", "OpenGL", "ECS", "Game AI"],
  },
  {
    title: "CS2 Damage Detection System",
    summary:
      "A machine-learning system that detects in-game damage events from Counter-Strike 2 gameplay footage in real time.",
    highlights: [
      "Achieved 90%+ classification accuracy and reduced event misclassification by 35% through preprocessing.",
      "Engineered an automated pipeline to preprocess raw gameplay footage, improving training efficiency by 40%.",
      "Led a 3-person cross-functional team using Agile methods to deliver a production-ready MVP.",
    ],
    stack: ["Python", "OpenCV", "TensorFlow"],
  },
  {
    title: "Navis",
    summary:
      "An AI-powered voice navigation tool that lets people browse the web hands-free.",
    highlights: [
      "Speech recognition engine with 95%+ command accuracy across major browsers.",
      "Reduces navigation time by 60% compared to manual interaction.",
      "WCAG-compliant, with support for major screen readers.",
    ],
    stack: ["Python", "JavaScript", "Speech Recognition", "Accessibility"],
  },
  {
    title: "Content Distributor",
    summary:
      "A platform that publishes content to Instagram, Reddit, YouTube, Pinterest, and LinkedIn simultaneously. I built the frontend as part of a team.",
    highlights: [
      "Built the Next.js and TypeScript frontend for composing and publishing content across five platforms from one interface.",
      "Dynamic forms tailored to each platform's requirements, with client-side validation.",
    ],
    stack: ["Next.js", "TypeScript"],
  },
];
