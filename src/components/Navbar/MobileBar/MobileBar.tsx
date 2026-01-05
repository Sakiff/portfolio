import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { MENU_ITEMS } from "@/data/menuItems";

type OpenMenuProps = { openMenu: () => void };

const MobileBar = ({ openMenu }: OpenMenuProps) => {
  return (
    <div className="flex items-center justify-center gap-10 flex-col w-full px-10 py-15">
      {MENU_ITEMS.map(({ label, path }) => (
        <Link to={path} className="w-full" key={path} onClick={openMenu}>
          <Button variant={"outline"} className="w-full cursor-pointer">
            {label}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default MobileBar;
