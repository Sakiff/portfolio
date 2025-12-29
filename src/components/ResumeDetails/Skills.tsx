import { FaCss3, FaFigma, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import type { IconType } from "react-icons/lib";
import { BiLogoTypescript } from "react-icons/bi";

const Skills = () => {
  type SkillTypes = {
    label: string;
    icon: IconType;
  };

  const SKILL_ICONS: SkillTypes[] = [
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

  return (
    <div className="flex flex-col gap-2">
      {/* Section Heading */}

      <h1 className="text-3xl font-bold">My skills</h1>
      <p className="text-muted-foreground max-w-md">
        A collection of technologies and tools I actively use to build reliable,
        maintainable, and modern web applications.
      </p>

      {/* Section Details*/}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-6 items-center justify-center pt-4">
        {SKILL_ICONS.map(({ icon: Icon, label }) => (
          <div
            className="flex flex-col items-center justify-center gap-2 "
            key={label}
          >
            <div className="bg-input/50 border-2 border-border rounded-2xl p-20 md:p-10 flex items-center justify-center w-full sm:w-auto">
              <Icon className="text-8xl md:text-5xl" />
            </div>
            <p className="text-center">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
