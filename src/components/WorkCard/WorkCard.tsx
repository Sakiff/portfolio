import { Link } from "react-router";
import { ArrowUpRight, Github, Lock } from "lucide-react";
import Tile from "@/components/Bento/Tile";
import { cn } from "@/lib/utils";
import { splitTechs } from "@/data/workCards";

type WorkCardProps = {
  index: number;
  className?: string;
  slug: string;
  number: string;
  title: string;
  description: string;
  technologies: string;
  link?: string;
  repoLink?: string;
  img: string;
  template: boolean;
  templateLabel: string;
  liveLabel: string;
  codeLabel: string;
  detailsLabel: string;
  privateLabel: string;
};

const WorkCard = ({
  index,
  className,
  slug,
  number,
  title,
  description,
  technologies,
  link,
  repoLink,
  img,
  template,
  templateLabel,
  liveLabel,
  codeLabel,
  detailsLabel,
  privateLabel,
}: WorkCardProps) => {
  return (
    <Tile index={index} className={cn("group flex flex-col gap-6 p-3", className)}>
      {/* Image */}
      <Link
        to={`/work/${slug}`}
        className="relative block aspect-[16/10] shrink-0 overflow-hidden rounded-[20px] bg-muted"
      >
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="absolute inset-0 size-full object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span className="absolute top-4 left-4 rounded-full bg-tile/90 px-3 py-1 font-mono text-xs backdrop-blur-md">
          {number}
        </span>
        {template && (
          <span className="absolute top-4 right-4 rounded-full bg-lime px-3 py-1 text-xs font-medium text-lime-foreground">
            {templateLabel}
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 px-4 pb-4">
        <Link to={`/work/${slug}`} className="w-fit">
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        </Link>
        <p className="line-clamp-3 leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {splitTechs(technologies).map((tech) => (
            <span key={tech} className="pill bg-background py-0.5">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          <Link
            to={`/work/${slug}`}
            className="inline-flex h-11 items-center gap-1.5 rounded-full bg-ink px-5 text-sm font-medium text-ink-foreground transition-transform hover:-translate-y-0.5"
          >
            {detailsLabel} <ArrowUpRight size={15} />
          </Link>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-1.5 rounded-full border border-border px-5 text-sm font-medium transition-colors hover:bg-accent"
            >
              {liveLabel}
            </a>
          ) : (
            <span className="inline-flex h-11 items-center gap-1.5 rounded-full border border-border px-5 text-sm font-medium text-muted-foreground">
              <Lock size={14} /> {privateLabel}
            </span>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-1.5 rounded-full border border-border px-5 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Github size={15} /> {codeLabel}
            </a>
          )}
        </div>
      </div>
    </Tile>
  );
};

export default WorkCard;
