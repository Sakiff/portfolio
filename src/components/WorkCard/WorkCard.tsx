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
      className="flex flex-col gap-5 p-6"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Image */}
      <motion.div
        className="w-full h-48 rounded-xl overflow-hidden"
        variants={fadeUp}
      >
        <img src={img} alt={title} className="object-cover w-full h-full" />
      </motion.div>

      {/* Content */}
      <motion.div className="flex flex-col gap-4" variants={fadeUp}>
        <div className="relative flex-1">
          {template && (
            <Badge
              variant="outline"
              className="bg-input/50 absolute top-0 right-2"
            >
              Template
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-muted-foreground">
            {number}
          </span>
          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-3">
          {description}
        </p>
        <span className="text-xs uppercase tracking-widest ">
          {technologies}
        </span>
        <Separator orientation="horizontal" />
        <div className="flex items-center justify-start gap-4">
          <a href={link} target="_blank" onClick={(e) => e.stopPropagation()}>
            <div className="bg-input/70 border-2 border-border rounded-full p-3 cursor-pointer hover:bg-input transition-colors">
              <Link size={16} />
            </div>
          </a>
          <a
            href={repoLink}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-input/70 border-2 border-border rounded-full p-3 cursor-pointer hover:bg-input transition-colors">
              <Github size={16} />
            </div>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorkCard;
