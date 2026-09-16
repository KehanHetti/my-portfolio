import type { IconType } from "react-icons";
import { FaCode, FaJava, FaLaptopCode, FaDatabase, FaExchangeAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiDjango,
  SiPostgresql,
  SiTailwindcss,
  SiCplusplus,
  SiC,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiVercel,
  SiOpencv,
  SiTensorflow,
  SiPytorch,
  SiFramer,
  SiAstro,
  SiGo,
  SiR,
  SiClaude,
} from "react-icons/si";

export interface SkillGroup {
  category: string;
  skills: { name: string; icon: IconType }[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: FaCode },
      { name: "Java", icon: FaJava },
      { name: "C++", icon: SiCplusplus },
      { name: "SQL", icon: FaDatabase },
      { name: "C", icon: SiC },
      { name: "Go", icon: SiGo },
      { name: "R", icon: SiR },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Django", icon: SiDjango },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "OpenCV", icon: SiOpencv },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Vercel", icon: SiVercel },
      { name: "Astro", icon: SiAstro },
      { name: "VS Code", icon: FaLaptopCode },
      { name: "RESTful APIs", icon: FaExchangeAlt },
      { name: "Claude Code", icon: SiClaude },
    ],
  },
];

export const CONCEPTS = [
  "Full-Stack Development",
  "Backend Development",
  "Frontend Development",
  "Machine Learning",
  "Artificial Intelligence",
  "Computer Graphics",
  "Networking",
  "Microservices",
  "CI/CD",
  "DevOps",
  "Automation",
  "Agile",
];
