import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/Theme/use-theme";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-tile transition-colors hover:bg-accent"
    >
      <Sun className="size-[18px] scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-[18px] scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
