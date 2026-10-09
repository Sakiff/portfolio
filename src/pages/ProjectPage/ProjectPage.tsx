import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Github,
  Lock,
} from "lucide-react";
import Tile from "@/components/Bento/Tile";
import { projectTitle, splitTechs, WORK_CARDS } from "@/data/workCards";

// Keyed by slug so the gallery starts from the first screenshot on every project.
const ProjectPage = () => {
  const { slug } = useParams();
  return <ProjectView key={slug} slug={slug} />;
};

const ProjectView = ({ slug }: { slug?: string }) => {
  const { t } = useTranslation();
  const index = WORK_CARDS.findIndex((card) => card.slug === slug);
  const project = WORK_CARDS[index];
  // `prev` stays fully visible underneath while `active` fades in on top,
  // so the gallery never flashes the empty background between screenshots.
  const [view, setView] = useState({ active: 0, prev: 0 });
  const { active, prev } = view;
  const setActive = (next: (i: number) => number) =>
    setView((v) => ({ prev: v.active, active: next(v.active) }));

  const count = project?.shots.length ?? 0;
  const go = (step: number) => setActive((i) => (i + step + count) % count);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % count);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count]);

  if (!project) return <Navigate to="/work" replace />;

  const descriptions = t("work.cards", { returnObjects: true }) as Array<{
    description: string;
  }>;
  const next = WORK_CARDS[(index + 1) % WORK_CARDS.length];
  const previous = WORK_CARDS[(index - 1 + WORK_CARDS.length) % WORK_CARDS.length];
  // Private projects have no public URL; the gallery shows a placeholder host.
  const domain = project.link
    ? new URL(project.link).hostname
    : "finance-system.local";
  const shot = project.shots[active];

  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
      <div className="flex items-center justify-between gap-3 lg:col-span-3">
        <Link
          to="/work"
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-tile px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
        >
          <ArrowLeft size={15} /> {t("work.back")}
        </Link>
        <div className="flex min-w-0 items-center gap-2">
          <Link
            to={`/work/${previous.slug}`}
            aria-label={`${t("work.prevProject")}: ${projectTitle(previous, t)}`}
            title={`${t("work.prevProject")}: ${projectTitle(previous, t)}`}
            className="group flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-tile transition-colors hover:bg-accent"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-0.5"
            />
          </Link>
          <Link
            to={`/work/${next.slug}`}
            className="group inline-flex min-w-0 items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-ink-foreground transition-transform hover:-translate-y-0.5"
          >
            <span className="truncate">
              {t("work.nextProject")}
              <span className="hidden sm:inline">: {projectTitle(next, t)}</span>
            </span>
            <ArrowRight
              size={15}
              className="shrink-0 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>

      {/* Header */}
      <Tile index={0} className="flex flex-col gap-6 p-7 lg:col-span-2 lg:p-9">
        <span className="tile-label">
          {project.number} / {String(WORK_CARDS.length).padStart(2, "0")}
        </span>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          {projectTitle(project, t)}
        </h1>
        <p className="max-w-2xl leading-relaxed text-muted-foreground lg:text-lg">
          {descriptions[index]?.description}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-2">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-1.5 rounded-full bg-lime px-6 text-sm font-semibold text-lime-foreground transition-transform hover:-translate-y-0.5"
            >
              {t("work.live")} <ArrowUpRight size={16} />
            </a>
          ) : (
            <span className="inline-flex h-12 items-center gap-1.5 rounded-full border border-border px-6 text-sm font-medium text-muted-foreground">
              <Lock size={15} /> {t("work.privateNote")}
            </span>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-1.5 rounded-full border border-border px-6 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Github size={16} /> {t("work.code")}
            </a>
          )}
        </div>
      </Tile>

      {/* Meta */}
      <Tile
        index={1}
        className="flex flex-col gap-5 border-transparent bg-ink p-7 text-ink-foreground"
      >
        <dl className="flex flex-col">
          <div className="flex flex-col gap-1 border-b border-current/15 pb-4">
            <dt className="font-mono text-[11px] tracking-[0.12em] uppercase opacity-60">
              {t("work.type")}
            </dt>
            <dd className="font-medium">
              {project.template
                ? t("work.template")
                : project.link
                  ? t("work.clientProject")
                  : t("work.private")}
            </dd>
          </div>
          {project.link && (
            <div className="flex flex-col gap-1 border-b border-current/15 py-4">
              <dt className="font-mono text-[11px] tracking-[0.12em] uppercase opacity-60">
                {t("work.website")}
              </dt>
              <dd>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium break-all underline decoration-lime decoration-2 underline-offset-4"
                >
                  {domain}
                </a>
              </dd>
            </div>
          )}
          <div className="flex flex-col gap-2 pt-4">
            <dt className="font-mono text-[11px] tracking-[0.12em] uppercase opacity-60">
              {t("work.stack")}
            </dt>
            <dd className="flex flex-wrap gap-1.5">
              {splitTechs(project.technologies).map((tech) => (
                <span key={tech} className="pill border-current/20">
                  {tech}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </Tile>

      {/* Gallery */}
      <Tile index={2} className="flex flex-col gap-3 p-3 lg:col-span-3">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 px-2 pt-1">
          <div className="hidden gap-1.5 sm:flex">
            <span className="size-3 rounded-full bg-border" />
            <span className="size-3 rounded-full bg-border" />
            <span className="size-3 rounded-full bg-border" />
          </div>
          <div className="min-w-0 flex-1 truncate rounded-full bg-background px-4 py-1.5 font-mono text-xs text-muted-foreground">
            {domain}
            <span className="text-foreground">
              {shot.path === "/" ? "" : shot.path}
            </span>
          </div>
          <span className="font-mono text-xs text-muted-foreground tabular-nums">
            {active + 1}/{count}
          </span>
          <div className="flex gap-1">
            <button
              onClick={() => go(-1)}
              aria-label="Previous screenshot"
              className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-border transition-colors hover:bg-accent"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next screenshot"
              className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-border transition-colors hover:bg-accent"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-muted">
          {project.shots.map((s, i) => (
            <img
              key={s.img}
              src={s.img}
              alt={i === active ? `${projectTitle(project, t)} — ${s.path}` : ""}
              aria-hidden={i !== active}
              className={`absolute inset-0 size-full object-cover object-top ${
                i === active
                  ? "z-20 opacity-100 transition-opacity duration-300"
                  : i === prev
                    ? "z-10 opacity-100"
                    : "z-0 opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
          {project.shots.map((s, i) => (
            <button
              key={s.img}
              onClick={() => setActive(() => i)}
              aria-label={s.path}
              className={`relative aspect-[16/10] cursor-pointer overflow-hidden rounded-xl border-2 transition-all ${
                i === active
                  ? "border-lime"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={s.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 size-full object-cover object-top"
              />
            </button>
          ))}
        </div>
      </Tile>

      {/* Next project */}
      <Tile index={3} className="group p-0 lg:col-span-3">
        <Link
          to={`/work/${next.slug}`}
          className="flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-col gap-2">
            <span className="tile-label">{t("work.nextProject")}</span>
            <span className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {projectTitle(next, t)}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={next.shots[0]?.img ?? next.img}
              alt=""
              className="hidden h-24 w-40 rounded-xl object-cover object-top sm:block"
            />
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-ink text-ink-foreground transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={22} />
            </span>
          </div>
        </Link>
      </Tile>
    </div>
  );
};

export default ProjectPage;
