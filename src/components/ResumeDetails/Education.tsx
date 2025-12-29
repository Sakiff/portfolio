import EducationCard from "../EducationCard/EducationCard";

const Education = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Section Heading */}

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">My Education</h1>
        <p className="text-muted-foreground max-w-md">
          Academic background combined with intensive practical training in
          modern web development.
        </p>
      </div>

      {/* Section Details */}

      <div className="flex flex-col gap-6">
        <EducationCard
          date="2022 — 2026 (Expected)"
          title="Information Technologies"
          institution="Azerbaijan Technical University"
          type="degree"
        />

        <EducationCard
          date="2022 — 2023"
          title="MERN Stack Development"
          institution="Code Academy"
          type="bootcamp"
        />
      </div>
    </div>
  );
};

export default Education;
