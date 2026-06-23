import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages, Check } from "lucide-react";

const LANGUAGES = [
  { code: "en", label: "EN", fullLabel: "English" },
  { code: "az", label: "AZ", fullLabel: "Azərbaycan" },
] as const;

const LangToggle = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("az") ? "az" : "en";

  const handleChange = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("i18n-lang", code);
  };

  const current = LANGUAGES.find((l) => l.code === currentLang) ?? LANGUAGES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="cursor-pointer flex items-center gap-1.5 px-3 h-9 font-medium"
          aria-label="Select language"
        >
          <Languages className="h-4 w-4 shrink-0" />
          <span className="text-sm">{current.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[130px]">
        {LANGUAGES.map(({ code, label, fullLabel }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleChange(code)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span>
              <span className="font-semibold mr-2">{label}</span>
              <span className="text-muted-foreground text-xs">{fullLabel}</span>
            </span>
            {currentLang === code && (
              <Check className="h-3.5 w-3.5 text-accent ml-2 shrink-0" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangToggle;
