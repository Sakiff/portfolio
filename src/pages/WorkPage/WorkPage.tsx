import { useTranslation } from "react-i18next";
import Tile from "@/components/Bento/Tile";
import WorkCard from "@/components/WorkCard/WorkCard";
import { WORK_CARDS } from "@/data/workCards";

const WorkPage = () => {
  const { t } = useTranslation();

  const translatedDescriptions = t("work.cards", {
    returnObjects: true,
  }) as Array<{ description: string }>;

  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
      {/* Heading */}
      <Tile
        index={0}
        className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between lg:col-span-2"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold tracking-tight">
            {t("work.heading")}
          </h1>
          <p className="max-w-md text-muted-foreground">
            {t("work.subheading")}
          </p>
        </div>
        <div className="flex items-center gap-3 self-start rounded-full bg-ink py-2 pr-5 pl-2 text-ink-foreground md:self-auto">
          <span className="flex size-10 items-center justify-center rounded-full bg-lime font-semibold text-lime-foreground">
            {String(WORK_CARDS.length).padStart(2, "0")}
          </span>
          <span className="font-mono text-xs tracking-[0.14em] uppercase">
            {t("work.projects")}
          </span>
        </div>
      </Tile>

      {WORK_CARDS.map((card, i) => (
        <WorkCard
          key={card.slug}
          index={i + 1}
          {...card}
          description={translatedDescriptions[i]?.description ?? ""}
          templateLabel={t("work.template")}
          liveLabel={t("work.live")}
          codeLabel={t("work.code")}
          detailsLabel={t("work.viewDetails")}
          privateLabel={t("work.private")}
        />
      ))}
    </div>
  );
};

export default WorkPage;
