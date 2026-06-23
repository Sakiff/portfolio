import WorkCard from "@/components/WorkCard/WorkCard";
import { WORK_CARDS } from "@/data/workCards";
import { useTranslation } from "react-i18next";

const WorkPage = () => {
  const { t } = useTranslation();

  const translatedDescriptions = t("work.cards", {
    returnObjects: true,
  }) as Array<{ description: string }>;

  return (
    <div className="pt-20 lg:px-8 pb-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          {t("work.heading")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {WORK_CARDS.map(
            (
              { title, link, number, repoLink, technologies, img, template },
              i
            ) => (
              <div
                className="transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden bg-card border"
                key={number}
              >
                <WorkCard
                  title={title}
                  description={translatedDescriptions[i]?.description ?? ""}
                  link={link}
                  number={number}
                  repoLink={repoLink}
                  technologies={technologies}
                  img={img}
                  template={template}
                  templateLabel={t("work.template")}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
