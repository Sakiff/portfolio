import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import DesktopBar from "@/components/Navbar/DesktopBar/DesktopBar";
import { useEffect, useState } from "react";
import MobileBar from "./MobileBar/MobileBar";
import { ModeToggle } from "../Theme/toggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <div className={`flex justify-center`}>
      <div className=" w-full xl:w-11/12 relative">
        <div
          className={` ${
            menuOpen ? "h-[100vw]" : "h-20"
          } border-5 border-border rounded-xl transition-all duration-300 ease-in-out `}
        >
          <div
            className={`${
              menuOpen ? "h-[100vw]" : "h-20"
            } w-full border-5 border-border rounded-xl absolute top-3 left-3 transition-all duration-300 ease-in-out `}
          >
            <div className="flex items-center justify-between pt-2 px-10 md:justify-around md:px-0 ">
              {/* Logo */}
              <div className="flex items-center gap-5">
                <Link to={"/"}>
                  <h1 className="text-3xl">
                    Sakif <strong className="text-muted-foreground">.</strong>
                  </h1>
                </Link>
                <div className="flex md:hidden pt-1">
                  <ModeToggle />
                </div>
              </div>

              {/* Bars Menu Icon */}

              <div className="pt-1">
                {menuOpen ? (
                  <X className="cursor-pointer" onClick={() => openMenu()} />
                ) : (
                  <Menu
                    className="flex md:hidden cursor-pointer"
                    onClick={() => openMenu()}
                  />
                )}
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex">
                <DesktopBar />
              </div>
            </div>

            {/* Mobile Menu */}

            <div
              className={`${
                menuOpen
                  ? "opacity-100 pointer-events-auto translate-y-0"
                  : "opacity-0 pointer-events-none -translate-y-2"
              } transition-all duration-300 ease-in-out`}
            >
              <MobileBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
