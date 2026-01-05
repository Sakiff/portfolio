import { ModeToggle } from "@/components/Theme/Toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router";
import { MENU_ITEMS } from "@/data/menuItems";

const DesktopBar = () => {
  return (
    <div className="flex items-center justify-end gap-10">
      {/*Navigation Menu Items*/}

      <NavigationMenu>
        <NavigationMenuList>
          {MENU_ITEMS.map(({ label, path }) => (
            <NavigationMenuItem key={path}>
              <NavigationMenuLink
                asChild
                className="text-xl transition-all duration-400 hover:text-input hover:bg-background focus:bg-background "
              >
                <NavLink to={path}>{label}</NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Dark Mode Toggle  */}

      <ModeToggle />
    </div>
  );
};

export default DesktopBar;
