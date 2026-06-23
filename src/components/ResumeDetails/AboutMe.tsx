import { useTranslation } from "react-i18next";

const PERSONAL_KEYS = [
  "Name",
  "Experience",
  "Nationality",
  "Phone",
  "Email",
  "Languages",
] as const;

type PersonalKey = (typeof PERSONAL_KEYS)[number];

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-start justify-start gap-15">
      {/* Section Heading */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{t("aboutMe.heading")}</h1>
        <p className="text-muted-foreground max-w-md">
          {t("aboutMe.subheading")}
        </p>
      </div>
      {/* Section Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-start gap-5 w-full md:w-auto">
        {PERSONAL_KEYS.map((key: PersonalKey) => (
          <div
            className="flex items-center justify-center md:justify-start gap-2 text-lg lg:text-xl"
            key={key}
          >
            <p className="text-muted-foreground">{t(`aboutMe.labels.${key}`)}:</p>
            <p>{t(`aboutMe.values.${key}`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
