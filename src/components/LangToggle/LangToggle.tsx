import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "az", label: "AZ" },
] as const;

const LangToggle = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("az") ? "az" : "en";

  const handleChange = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("i18n-lang", code);
  };

  return (
    <div
      className="flex h-10 items-center rounded-full border border-border bg-tile p-1"
      role="group"
      aria-label="Select language"
    >
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => handleChange(code)}
          aria-pressed={currentLang === code}
          className={`h-full cursor-pointer rounded-full px-3 font-mono text-xs font-medium transition-colors ${
            currentLang === code
              ? "bg-ink text-ink-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LangToggle;
