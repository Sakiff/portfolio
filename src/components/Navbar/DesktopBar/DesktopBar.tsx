import { ModeToggle } from "@/components/Theme/Toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import LangToggle from "@/components/LangToggle/LangToggle";

const MENU_PATHS = ["/", "/services", "/resume", "/work"] as const;
const NAV_KEYS = ["home", "services", "resume", "work"] as const;

const DesktopBar = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-end gap-10">
      {/*Navigation Menu Items*/}

      <NavigationMenu>
        <NavigationMenuList>
          {MENU_PATHS.map((path, i) => (
            <NavigationMenuItem key={path}>
              <NavigationMenuLink
                asChild
                className="text-xl transition-all duration-400 hover:text-input hover:bg-background focus:bg-background "
              >
                <NavLink to={path}>{t(`nav.${NAV_KEYS[i]}`)}</NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Language Toggle */}
      <LangToggle />

      {/* Dark Mode Toggle  */}
      <ModeToggle />
    </div>
  );
};

export default DesktopBar;