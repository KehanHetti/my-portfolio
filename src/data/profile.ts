export const SITE_URL = "https://kehanhetti.vercel.app";

export const PROFILE = {
  name: "Kehan Hettiarachchi",
  headline: "Computer Science Student & Software Engineer",
  tagline:
    "Computer Science student at UBC building full-stack web apps, machine-learning systems, and games.",
  location: "Vancouver, BC",
  resumeUrl: "/resume.pdf",
  resumeFileName: "Kehan_Hettiarachchi_Resume.pdf",
  sourceUrl: "https://github.com/KehanHetti/my-portfolio",
  github: { url: "https://github.com/KehanHetti", handle: "@KehanHetti" },
  linkedin: {
    url: "https://linkedin.com/in/kehan-hettiarachchi",
    handle: "kehan-hettiarachchi",
  },
} as const;

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "coursework", label: "Coursework" },
  // Temporarily hidden along with the contact section.
  // { id: "contact", label: "Contact" },
] as const;
