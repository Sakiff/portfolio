import ExperienceCard from "../ExperienceCard/ExperienceCard";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8">
      {/* Section Heading */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{t("experience.heading")}</h1>
        <p className="text-muted-foreground max-w-md">
          {t("experience.subheading")}
        </p>
      </div>

      {/* Section Details */}
      <ExperienceCard />
    </div>
  );
};

export default Experience;
