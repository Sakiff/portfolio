import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import LangToggle from "@/components/LangToggle/LangToggle";

const MENU_PATHS = ["/", "/services", "/resume", "/work"] as const;
const NAV_KEYS = ["home", "services", "resume", "work"] as const;

type OpenMenuProps = { openMenu: () => void };

const MobileBar = ({ openMenu }: OpenMenuProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center gap-6 flex-col w-full px-10 py-10">
      {MENU_PATHS.map((path, i) => (
        <Link to={path} className="w-full" key={path} onClick={openMenu}>
          <Button variant={"outline"} className="w-full cursor-pointer">
            {t(`nav.${NAV_KEYS[i]}`)}
          </Button>
        </Link>
      ))}

      {/* Language selector in mobile menu */}
      <div className="flex items-center justify-center pt-2">
        <LangToggle />
      </div>
    </div>
  );
};

export default MobileBar;
