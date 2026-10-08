import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import Tile from "@/components/Bento/Tile";
import { SERVICE_CARDS } from "@/data/serviceCards";

// Column spans for the service tiles on large screens: a wide tile next to
// a narrow one, then a row of three, so the grid reads as a bento pattern.
const SPANS = ["lg:col-span-2", "", "", "", "md:col-span-2 lg:col-span-1"];

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {/* Heading */}
      <Tile
        index={0}
        className="flex flex-col justify-end gap-4 p-7 md:col-span-2 lg:min-h-[280px] lg:p-9"
      >
        <span className="tile-label">
          0{SERVICE_CARDS.length} — {t("nav.services")}
        </span>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          {t("services.heading")}
        </h1>
        <p className="max-w-lg text-muted-foreground lg:text-lg">
          {t("services.subheading")}
        </p>
      </Tile>

      {/* CTA */}
      <Tile
        index={1}
        className="group min-h-[220px] border-transparent bg-lime p-0 text-lime-foreground md:col-span-2 lg:col-span-1"
      >
        {/* The whole card is the link, not just its label. */}
        <Link
          to="/work"
          className="flex h-full min-h-[220px] flex-col justify-between p-7"
        >
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase opacity-70">
            {t("services.ctaTitle")}
          </span>
          <span className="flex items-end justify-between text-3xl font-semibold tracking-tight">
            {t("services.viewWork")}
            <span className="flex size-12 items-center justify-center rounded-full bg-lime-foreground text-lime transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={20} />
            </span>
          </span>
        </Link>
      </Tile>

      {/* Services */}
      {SERVICE_CARDS.map(({ cardNumber, icon: Icon }, i) => (
        <Tile
          key={cardNumber}
          index={i + 2}
          className={`group flex min-h-[240px] flex-col justify-between gap-8 p-7 ${SPANS[i]}`}
        >
          <div className="flex items-start justify-between">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-background transition-colors duration-300 group-hover:bg-lime group-hover:text-lime-foreground">
              <Icon size={24} />
            </span>
            <span className="font-mono text-sm text-muted-foreground">
              0{cardNumber + 1}
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold tracking-tight">
              {t(`services.cards.${i}.title`)}
            </h2>
            <p className="max-w-xl leading-relaxed text-muted-foreground">
              {t(`services.cards.${i}.text`)}
            </p>
          </div>
        </Tile>
      ))}
    </div>
  );
};

export default ServicesPage;
