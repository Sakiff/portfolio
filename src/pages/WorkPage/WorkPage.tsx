import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WorkCard from "@/components/WorkCard/WorkCard";

const WorkPage = () => {
  type WorkCardItem = {
    number: string;
    title: string;
    description: string;
    technologies: string;
    link: string;
    repoLink: string;
    img: string;
    template: boolean;
  };

  const WORK_CARDS: WorkCardItem[] = [
    {
      number: "01",
      title: "Imperia Groups",
      description:
        "A modern corporate website developed for Imperia Group, an IT solutions provider.The project focuses entirely on frontend development, delivering a clean, responsive, and visually engaging user interface to clearly present the company’s services and expertise.",
      link: "https://imperiagroups.az/",
      repoLink: "https://github.com/Sakiff/ImperiaTech",
      technologies: "HTML5 · CSS3 · Tailwind · JavaScript · React · Email.js",
      img: "/assets/imperia.png",
      template: false,
    },
    {
      number: "02",
      title: "Sum Tekstil",
      description:
        "A full-stack corporate website built for Sum Tekstil, focused on product presentation and brand identity.The project demonstrates backend development skills through API design, data handling, and server-side logic powering a responsive user interface.",
      link: "https://sumtekstil.az/",
      repoLink: "https://github.com/Sakiff/sumsafety",
      technologies: "HTML5 · CSS3 · Tailwind · JavaScript · React · Node.js",
      img: "/assets/sumtekstil.png",
      template: false,
    },
    {
      number: "03",
      title: "HR kursları",
      description:
        "A frontend-focused website developed for HR Courses, built with React, Tailwind CSS, and modern UI animations.The project demonstrates component-based architecture, responsive design, and interactive elements to effectively showcase training programs and course information.",
      link: "https://hr-kurslari.netlify.app/",
      repoLink: "https://github.com/Sakiff/hr-kurslar-",
      technologies: "HTML5 · CSS3 · Tailwind · JavaScript · React",
      img: "/assets/hr-kurslari.png",
      template: false,
    },

    {
      number: "04",
      title: "BizPro Media",
      description:
        "The BizPro Media template website is a frontend-only project built with HTML and CSS.It demonstrates responsive design, structured layouts, and attention to visual detail for showcasing media content effectively.",
      link: "https://bizpromedia.netlify.app/",
      repoLink: "https://github.com/Sakiff/bizpro",
      technologies: "HTML5 · CSS3 ",
      img: "/assets/sumtekstil.png",
      template: true,
    },
  ];

  return (
    <div className="flex items-center justify-center pt-15 px-8 ">
      <Carousel className="w-full max-w-6xl  ">
        <CarouselContent>
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
              <CarouselItem key={number}>
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
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default WorkPage;
