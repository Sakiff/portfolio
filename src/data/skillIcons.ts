import { FaCss3, FaFigma, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import type { IconType } from "react-icons/lib";
import { BiLogoTypescript } from "react-icons/bi";

export type SkillTypes = {
  label: string;
  icon: IconType;
};

export const SKILL_ICONS: SkillTypes[] = [
  {
    label: "Html",
    icon: FaHtml5,
  },
  {
    label: "Css",
    icon: FaCss3,
  },
  {
    label: "Tailwind",
    icon: RiTailwindCssFill,
  },
  {
    label: "JavaScript",
    icon: RiJavascriptFill,
  },
  {
    label: "TypeScript",
    icon: BiLogoTypescript,
  },
  {
    label: "React.js",
    icon: FaReact,
  },
  {
    label: "Node.js",
    icon: FaNodeJs,
  },
  {
    label: "Figma",
    icon: FaFigma,
  },
];
