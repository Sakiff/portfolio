import { useTranslation } from "react-i18next";
import { ArrowUpRight, Briefcase, GraduationCap } from "lucide-react";
import Tile from "@/components/Bento/Tile";
import { SKILL_GROUPS } from "@/data/skillIcons";

const PERSONAL_KEYS = [
  "Name",
  "Nationality",
  "Phone",
  "Email",
  "Languages",
] as const;

type EducationItem = {
  date: string;
  title: string;
  institution: string;
  type: "degree" | "bootcamp";
};

const ResumePage = () => {
  const { t } = useTranslation();
  const education = t("education.items", {
    returnObjects: true,
  }) as EducationItem[];

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {/* Experience */}
      <Tile
        index={0}
        className="flex flex-col justify-between gap-8 p-7 md:col-span-2"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="tile-label flex items-center gap-1.5">
            <Briefcase size={13} /> {t("resume.tabs.experience")}
          </span>
          <span className="pill font-mono">{t("experience.date")}</span>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold tracking-tight">
            {t("experience.role")}
          </h2>
          <a
            href="https://imperiagroups.az/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-1 font-medium underline decoration-lime decoration-2 underline-offset-4"
          >
            {t("experience.company")} <ArrowUpRight size={16} />
          </a>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            {t("experience.description")}
          </p>
        </div>
      </Tile>

      {/* About me */}
      <Tile
        index={1}
        className="flex flex-col gap-5 border-transparent bg-ink p-7 text-ink-foreground md:col-span-2 lg:col-span-1 lg:row-span-2"
      >
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase opacity-60">
            {t("resume.tabs.aboutMe")}
          </span>
          <p className="text-sm opacity-70">{t("aboutMe.subheading")}</p>
        </div>
        <dl className="mt-auto flex flex-col">
          {PERSONAL_KEYS.map((key) => (
            <div
              key={key}
              className="flex flex-col gap-0.5 border-t border-current/15 py-3"
            >
              <dt className="font-mono text-[11px] tracking-[0.12em] uppercase opacity-60">
                {t(`aboutMe.labels.${key}`)}
              </dt>
              <dd className="font-medium break-words">
                {t(`aboutMe.values.${key}`)}
              </dd>
            </div>
          ))}
        </dl>
      </Tile>

      {/* Education */}
      {education.map((item, i) => (
        <Tile
          key={item.institution}
          index={i + 2}
          className="flex min-h-[200px] flex-col justify-between gap-6 p-7"
        >
          <div className="flex items-center justify-between">
            <span className="tile-label flex items-center gap-1.5">
              <GraduationCap size={14} />
              {item.type === "bootcamp"
                ? t("education.bootcamp")
                : t("education.degree")}
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {item.date}
            </span>
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="text-muted-foreground">{item.institution}</p>
          </div>
        </Tile>
      ))}

      {/* Skills */}
      <Tile
        index={4}
        className="flex flex-col gap-6 p-7 md:col-span-2 lg:col-span-3"
      >
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="tile-label">{t("resume.tabs.skills")}</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              {t("skills.heading")}
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            {t("skills.subheading")}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map(({ key, items }) => (
            <div
              key={key}
              className="flex flex-col gap-3 rounded-2xl bg-background p-5"
            >
              <span className="tile-label">{t(`skills.groups.${key}`)}</span>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="pill bg-tile transition-colors hover:border-transparent hover:bg-lime hover:text-lime-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Tile>
    </div>
  );
};

export default ResumePage;
