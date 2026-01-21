import WorkCard from "@/components/WorkCard/WorkCard";
import { WORK_CARDS } from "@/data/workCards";

const WorkPage = () => {
  return (
    <div className="pt-20 lg:px-8 pb-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">My Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {WORK_CARDS.map(
            ({
              title,
              description,
              link,
              number,
              repoLink,
              technologies,
              img,
              template,
            }) => (
              <div
                className="transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden bg-card border"
                key={number}
              >
                <WorkCard
                  title={title}
                  description={description}
                  link={link}
                  number={number}
                  repoLink={repoLink}
                  technologies={technologies}
                  img={img}
                  template={template}
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
