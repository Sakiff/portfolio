import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="mt-3 flex flex-col items-center justify-between gap-3 px-2 py-6 text-sm text-muted-foreground sm:flex-row">
      <p>
        © {new Date().getFullYear()} Sakif Fataliyev. {t("footer.rights")}
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="inline-flex cursor-pointer items-center gap-1.5 transition-colors hover:text-foreground"
      >
        {t("footer.backToTop")} <ArrowUp size={14} />
      </button>
    </footer>
  );
};

export default Footer;
