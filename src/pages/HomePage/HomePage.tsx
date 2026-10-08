import { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, Check, Copy, MapPin } from "lucide-react";
import Tile from "@/components/Bento/Tile";
import LocalTime from "@/components/Bento/LocalTime";
import { FaWhatsapp } from "react-icons/fa";
import { EMAIL, SOCIAL_LINKS, WHATSAPP_URL } from "@/data/socialLinks";
import { SKILL_ICONS } from "@/data/skillIcons";
import { projectTitle, WORK_CARDS } from "@/data/workCards";

const HomePage = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const latest = WORK_CARDS[0];
  const services = t("services.cards", { returnObjects: true }) as Array<{
    title: string;
  }>;

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(190px,auto)]">
      {/* Intro */}
      <Tile
        index={0}
        className="flex flex-col justify-between gap-10 p-7 md:col-span-2 lg:row-span-2 lg:p-9"
      >
        <span className="pill w-fit">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-lime" />
          </span>
          {t("home.available")}
        </span>

        <div className="flex flex-col gap-5">
          <h1 className="text-5xl leading-[1.02] font-semibold tracking-tight sm:text-6xl">
            {t("home.greeting")}{" "}
            <span className="relative isolate whitespace-nowrap">
              {t("home.name")}
              <span className="absolute bottom-[0.04em] left-0 -z-10 h-[0.16em] w-full rounded-full bg-lime" />
            </span>
          </h1>
          <p className="font-mono text-sm text-muted-foreground uppercase tracking-[0.14em]">
            {t("home.role")}
          </p>
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
            {t("home.description")}
          </p>
        </div>
      </Tile>

      {/* Location */}
      <Tile
        index={1}
        className="flex flex-col justify-between gap-6 border-transparent bg-lime text-lime-foreground"
      >
        <span className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.14em] uppercase opacity-70">
          <MapPin size={13} /> {t("home.basedIn")}
        </span>
        <div>
          <p className="text-2xl font-semibold tracking-tight">
            {t("home.location")}
          </p>
          <p className="mt-1 font-mono text-sm opacity-70">
            <LocalTime /> · {t("home.localTime")}
          </p>
        </div>
      </Tile>

      {/* Photo: a head-and-shoulders crop whose studio background is extended
          sideways, so it frames correctly in both wide and tall tiles. */}
      <Tile
        index={2}
        className="h-80 bg-[#fdfdfd] p-0 sm:h-96 md:row-span-2 md:h-auto md:min-h-[360px]"
      >
        <img
          src="/assets/hero_portrait.jpg"
          alt="Sakif Fataliyev"
          className="absolute inset-0 size-full object-cover object-bottom"
        />
      </Tile>

      {/* Socials */}
      <Tile index={3} className="flex flex-col justify-between gap-3">
        <span className="tile-label">{t("home.elsewhere")}</span>
        <ul className="flex flex-col">
          {SOCIAL_LINKS.map(({ path, icon: Icon, label }) => (
            <li key={path} className="border-b border-border last:border-0">
              <a
                href={path}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between py-2"
              >
                <span className="flex items-center gap-3">
                  <Icon size={17} />
                  <span className="font-medium">{label}</span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                />
              </a>
            </li>
          ))}
        </ul>
      </Tile>

      {/* Latest work */}
      <Tile
        index={4}
        className="group flex min-h-[380px] flex-col p-0 md:col-span-2 lg:row-span-2"
      >
        <div className="flex items-center justify-between p-6 pb-4">
          <span className="tile-label">{t("home.latestWork")}</span>
          <Link
            to="/work"
            className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
          >
            {t("home.viewAll")} <ArrowUpRight size={15} />
          </Link>
        </div>
        <Link
          to={`/work/${latest.slug}`}
          className="relative mx-3 mb-3 flex-1 overflow-hidden rounded-[20px] bg-muted"
        >
          <img
            src={latest.img}
            alt={projectTitle(latest, t)}
            className="absolute inset-0 size-full object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl bg-tile/90 px-4 py-3 backdrop-blur-md">
            <div>
              <p className="font-semibold">{projectTitle(latest, t)}</p>
              <p className="text-xs text-muted-foreground">
                {latest.technologies}
              </p>
            </div>
            <span className="flex size-9 items-center justify-center rounded-full bg-ink text-ink-foreground transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </div>
        </Link>
      </Tile>

      {/* Tech stack */}
      <Tile index={5} className="flex flex-col justify-between gap-6 md:col-span-2">
        <span className="tile-label">{t("home.stack")}</span>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
          {SKILL_ICONS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              title={label}
              className="flex aspect-square items-center justify-center rounded-2xl bg-background text-2xl transition-colors hover:bg-lime hover:text-lime-foreground"
            >
              <Icon />
              <span className="sr-only">{label}</span>
            </div>
          ))}
        </div>
      </Tile>

      {/* Experience */}
      <Tile index={6} className="flex flex-col justify-between gap-6">
        <span className="tile-label">{t("home.experience")}</span>
        <div>
          <p className="text-xl font-semibold tracking-tight">
            {t("experience.role")}
          </p>
          <p className="text-muted-foreground">{t("experience.company")}</p>
          <p className="mt-3 font-mono text-xs text-muted-foreground">
            {t("experience.date")}
          </p>
        </div>
      </Tile>

      {/* Services */}
      <Tile
        index={7}
        className="group flex flex-col justify-between gap-5 border-transparent bg-ink text-ink-foreground"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase opacity-60">
            {t("home.whatIDo")}
          </span>
          <Link
            to="/services"
            aria-label={t("nav.services")}
            className="flex size-8 items-center justify-center rounded-full bg-lime text-lime-foreground transition-transform duration-300 group-hover:rotate-45"
          >
            <ArrowUpRight size={15} />
          </Link>
        </div>
        <ul className="flex flex-col gap-1.5 text-sm">
          {services.map(({ title }) => (
            <li key={title} className="leading-snug">
              {title}
            </li>
          ))}
        </ul>
      </Tile>

      {/* Contact */}
      <Tile
        index={8}
        className="flex flex-col justify-between gap-8 p-7 md:col-span-2 lg:col-span-4 lg:flex-row lg:items-end lg:p-9"
      >
        <div className="flex max-w-xl flex-col gap-3">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("home.contactTitle")}
          </h2>
          <p className="text-muted-foreground">{t("home.contactText")}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={copyEmail}
            className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full border border-border px-5 text-sm font-medium transition-colors hover:bg-accent"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? t("home.copied") : t("home.copyEmail")}
          </button>
          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent(t("home.whatsappMessage"))}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-lime px-6 text-sm font-semibold text-lime-foreground transition-transform hover:-translate-y-0.5"
          >
            <FaWhatsapp size={17} /> {t("home.contactCta")}
          </a>
        </div>
      </Tile>
    </div>
  );
};

export default HomePage;
