import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ModeToggle } from "../Theme/Toggle";
import LangToggle from "../LangToggle/LangToggle";

const NAV_ITEMS = [
  { path: "/", key: "home" },
  { path: "/services", key: "services" },
  { path: "/resume", key: "resume" },
  { path: "/work", key: "work" },
] as const;

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
    isActive
      ? "bg-ink text-ink-foreground"
      : "text-muted-foreground hover:text-foreground"
  }`;

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-4 z-50 mb-6">
      <nav className="flex h-16 items-center justify-between rounded-full border border-border bg-tile/85 pr-3 pl-6 backdrop-blur-md">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-semibold tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          Sakif
          <span className="ml-0.5 inline-block size-2 rounded-full bg-lime" />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 rounded-full bg-background p-1 md:flex">
          {NAV_ITEMS.map(({ path, key }) => (
            <NavLink key={path} to={path} end={path === "/"} className={linkClass}>
              {t(`nav.${key}`)}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LangToggle />
          </div>
          <ModeToggle />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-ink text-ink-foreground md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="tile mt-2 flex flex-col gap-1 p-3 md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_ITEMS.map(({ path, key }, i) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-2xl px-4 py-3 text-lg font-medium transition-colors ${
                    isActive ? "bg-ink text-ink-foreground" : "hover:bg-accent"
                  }`
                }
              >
                {t(`nav.${key}`)}
                <span className="font-mono text-xs opacity-60">0{i + 1}</span>
              </NavLink>
            ))}
            <div className="flex justify-center pt-2 sm:hidden">
              <LangToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
