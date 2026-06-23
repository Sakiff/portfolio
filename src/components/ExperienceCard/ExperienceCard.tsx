import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const ExperienceCard = () => {
  const { t } = useTranslation();

  return (
    <div className="relative border border-border rounded-xl p-6 bg-input/30">
      <span className="absolute left-0 top-6 h-[calc(100%-3rem)] w-1 bg-primary rounded-full" />

      <div className="flex flex-col gap-4 pl-4">
        <span className="text-sm text-muted-foreground">
          {t("experience.date")}
        </span>

        <h2 className="text-xl font-semibold">{t("experience.role")}</h2>

        <a
          href="https://imperiagroups.az/"
          target="_blank"
          className="inline-flex items-center gap-2 text-primary hover:underline w-fit"
        >
          {t("experience.company")}
          <ExternalLink size={16} />
        </a>

        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
          {t("experience.description")}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
