import { Github, Link } from "lucide-react";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

type WorkCardProps = {
  number: string;
  title: string;
  description: string;
  technologies: string;
  link: string;
  repoLink: string;
  img: string;
  template: boolean;
};

const WorkCard = ({
  title,
  description,
  link,
  number,
  repoLink,
  technologies,
  img,
  template,
}: WorkCardProps) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.6 },
    },
  } as const;

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="flex item-center justify-center gap-5 flex-col xl:flex-row "
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Left side */}
      <motion.div
        className="flex flex-col items-start justify-center gap-8"
        variants={fadeUp}
      >
        <span className="text-7xl font-bold">{number}</span>
        <div className="relative">
          <h1 className="text-5xl font-semibold ">{title}</h1>
          {template && (
            <Badge
              variant="outline"
              className="bg-input/50 absolute -top-1 -right-12"
            >
              Template
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground">{description}</p>
        <span className="text-sm uppercase tracking-widest text-border">
          {technologies}
        </span>
        <Separator orientation="horizontal" />
        <div className="flex items-start justify-start gap-4">
          <a href={link} target="_blank">
            <div className="bg-input/70 border-2 border-border rounded-full p-5 cursor-pointer ">
              <Link />
            </div>
          </a>
          <a href={repoLink} target="_blank">
            <div className="bg-input/70 border-2 border-border rounded-full p-5 cursor-pointer ">
              <Github />
            </div>
          </a>
        </div>
      </motion.div>
      {/* Right side */}
      <motion.div
        className="max-w-160 max-h-90 rounded-xl overflow-hidden "
        variants={fadeUp}
      >
        <img
          src={img}
          alt="sumtekstil.az"
          className="object-fit w-full h-full "
        />
      </motion.div>
    </motion.div>
  );
};

export default WorkCard;
