import { SKILL_ICONS } from "@/data/skillIcons";

const Skills = () => {
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
