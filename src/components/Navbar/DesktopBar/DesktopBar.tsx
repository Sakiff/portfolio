import { ModeToggle } from "@/components/Theme/toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";

type MenuItem = {
  label: string;
  path: `/${string}`;
};

const MENU_ITEMS: readonly MenuItem[] = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", path: "/contact" },
] as const;

const DesktopBar = () => {
  return (
    <div className="flex items-center justify-end gap-10">
      {/* Navigation Menu Items */}

      <NavigationMenu>
        <NavigationMenuList>
          {MENU_ITEMS.map(({ label, path }) => (
            <NavigationMenuItem key={path}>
              <NavigationMenuLink asChild className="text-xl">
                <Link to={path}>{label}</Link>
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
