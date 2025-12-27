import { MoveUpRight, type LucideIcon } from "lucide-react";
import { Link } from "react-router";
import { motion, MotionValue, useTransform } from "framer-motion";

type CardsProps = {
  cardNumber: number;
  title: string;
  text: string;
  Icon: LucideIcon;
  range: number[];
  targetScale: number;
  progress: MotionValue<number>;
};

const ServicesCard = ({
  cardNumber,
  title,
  text,
  Icon,
  range,
  targetScale,
  progress,
}: CardsProps) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  const darkBgMap: Record<number, string> = {
    0: "dark:bg-amber-600",
    1: "dark:bg-amber-800",
    2: "dark:bg-amber-900",
    3: "dark:bg-amber-700",
  };

  const lightBgMap: Record<number, string> = {
    0: "bg-amber-200",
    1: "bg-amber-300",
    2: "bg-amber-400",
    3: "bg-amber-500",
  };

  return (
    <motion.div
      className="h-screen flex items-start md:items-center justify-center sticky pt-24 md:pt-0"
      style={{
        scale,
        top: `calc(-13% + ${cardNumber * 25}px)`,
      }}
    >
      {/* CARD */}
      <div
        className={`relative w-full max-w-6xl
        min-h-105 md:h-80
        rounded-3xl overflow-hidden
        ${lightBgMap[cardNumber]} ${darkBgMap[cardNumber]}
        px-6 py-8 md:p-10
        shadow-2xl transition-all duration-1000`}
      >
        {/* SCROLL HINT – only desktop & first card */}
        {cardNumber === 0 && <ScrollHint />}

        {/* subtle border */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/10 dark:ring-white/10" />

        {/* ICON */}
        <div
          className="
          md:absolute md:top-0 md:left-0 md:h-full md:w-20
          flex md:flex-col items-center md:items-center
          justify-center md:pt-10
          mb-6 md:mb-0
          bg-black/5 dark:bg-white/5
          md:bg-transparent
        "
        >
          <span className="text-3xl bg-black/10 dark:bg-white/10 p-3 rounded-2xl">
            <Icon />
          </span>
        </div>

        {/* CONTENT */}
        <div className="md:pl-24 flex flex-col gap-5 md:gap-8 h-full justify-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-base md:text-lg leading-relaxed opacity-90 max-w-2xl">
            {text}
          </p>

          {/* CTA */}
          <Link to="/portfolio" className="self-start md:self-end">
            <motion.div
              whileHover={{ x: 10, y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
              className="mt-4 md:mt-6 flex items-center gap-2 text-base md:text-lg font-medium"
            >
              <span>View Work</span>
              <MoveUpRight />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// Scroll Hint
// Scroll Hint
const ScrollHint = () => {
  return (
    <div className="hidden md:flex absolute top-6 right-6 z-20 flex-col items-center gap-2">
      <div className="w-7 h-12 rounded-full border-2 border-black/40 dark:border-white/40 flex items-start justify-center p-1">
        <motion.span
          className="w-1.5 h-1.5 rounded-full bg-black/60 dark:bg-white/60"
          animate={{ y: [0, 16, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <span className="text-xs opacity-60">Scroll</span>
    </div>
  );
};

export default ServicesCard;
