import ExperienceCard from "../ExperienceCard/ExperienceCard";

const Experience = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Section Heading */}

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">My Experience</h1>
        <p className="text-muted-foreground max-w-md">
          Practical frontend experience gained through real-world projects and
          production-level development.
        </p>
      </div>
      {/* Section Details */}

      <ExperienceCard />
    </div>
  );
};

export default Experience;
