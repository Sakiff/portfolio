import type { IconType } from "react-icons/lib";
import {
  SiGit,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type SkillTypes = {
  label: string;
  icon: IconType;
};

// Core stack shown as icons on the home page.
export const SKILL_ICONS: SkillTypes[] = [
  { label: "React.js", icon: SiReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "Redux", icon: SiRedux },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "MongoDB", icon: SiMongodb },
  { label: "Git", icon: SiGit },
];

export type SkillGroup = {
  key: string;
  items: string[];
};

// Full skill list from the CV, grouped by category. Category names are
// translated via `skills.groups.<key>`.
export const SKILL_GROUPS: SkillGroup[] = [
  {
    key: "frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
    ],
  },
  {
    key: "ui",
    items: ["Radix UI", "shadcn/ui", "Lucide React", "React Icons"],
  },
  {
    key: "state",
    items: ["Redux", "Zustand", "Formik", "Yup", "Zod"],
  },
  { key: "routing", items: ["React Router", "Expo Router"] },
  { key: "animation", items: ["Framer Motion", "Embla Carousel"] },
  {
    key: "backend",
    items: ["Node.js", "Express.js", "MongoDB / Mongoose", "JWT Auth"],
  },
  {
    key: "integrations",
    items: [
      "Socket.IO",
      "Cloudinary",
      "AWS S3 / Cloudflare R2",
      "Google OAuth",
    ],
  },
  {
    key: "tools",
    items: [
      "Git / GitHub",
      "Vite",
      "ESLint / Prettier",
      "Vitest / Jest",
      "Postman",
    ],
  },
  {
    key: "practices",
    items: ["Responsive Design", "SEO", "CRUD", "Form Validation", "i18n"],
  },
];
