export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
}

// Current role first, then reverse-chronological.
export const EXPERIENCE: Role[] = [
  {
    company: "Basis Learning Foundation",
    title: "Software Development Intern",
    period: "Oct 2025 — Present",
    location: "Toronto, ON",
    highlights: [
      "Engineered a full-stack student and alumni tracking platform using Next.js, Django, and PostgreSQL, consolidating scattered records so staff could manage the entire student lifecycle from enrollment through alumni outreach.",
      "Architected secure REST APIs with Django REST Framework, adding pagination and filtering across 300+ profiles.",
      "Reduced manual reporting by developing interactive data visualizations to monitor student information and progress.",
    ],
    stack: ["Next.js", "Django", "Django REST Framework", "PostgreSQL"],
  },
  {
    company: "Trailmark Systems Inc.",
    title: "Product Analyst Intern",
    period: "Feb 2026 — Mar 2026",
    location: "Victoria, BC (Remote)",
    highlights: [
      "Investigated 5 mapping providers to fix remote-area labeling and search issues, comparing cost and geocoding accuracy, then recommended staying on Mapbox GL with authoritative Canadian overlay data over a full migration.",
      "Wrote 7 user stories with INVEST and Fibonacci scoring to fix interview issues, breaking 34 points into dev tasks.",
      "Built a sprint plan identifying a prerequisite spike and shared pipeline, unblocking a 13-point epic and avoiding duplicated work.",
    ],
    stack: ["Mapbox GL", "Geocoding", "User Stories", "Agile"],
  },
  {
    company: "Wrap-It Moving",
    title: "Full Stack Developer",
    period: "Oct 2024 — Jan 2025",
    location: "Vancouver, BC",
    highlights: [
      "Deployed features using JavaScript, TypeScript, and GitHub Actions CI/CD, achieving zero-downtime deployments.",
      "Redesigned and modernized core UI components, substantially improving accessibility and navigation efficiency.",
      "Created a contact form using Node.js, optimizing server response latency and increasing website engagement by 60%.",
      "Optimized mobile UX with Tailwind CSS, shipping a fully production-ready website on desktop, tablet, and mobile.",
    ],
    stack: ["JavaScript", "TypeScript", "GitHub Actions", "Node.js", "Tailwind CSS"],
  },
];

export const EDUCATION = {
  school: "The University of British Columbia",
  degree: "Bachelor of Science, Computer Science",
  period: "2022 — 2027",
  detail: "Expected graduation December 2027",
  note: "Began at UBC Okanagan (2022–23) before transferring to UBC Vancouver.",
};
