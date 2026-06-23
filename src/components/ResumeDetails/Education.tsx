import EducationCard from "../EducationCard/EducationCard";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  const items = t("education.items", { returnObjects: true }) as Array<{
    date: string;
    title: string;
    institution: string;
    type: "degree" | "bootcamp";
  }>;

  return (
    <div className="flex flex-col gap-8">
      {/* Section Heading */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{t("education.heading")}</h1>
        <p className="text-muted-foreground max-w-md">
          {t("education.subheading")}
        </p>
      </div>

      {/* Section Details */}
      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <EducationCard
            key={item.institution}
            date={item.date}
            title={item.title}
            institution={item.institution}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
