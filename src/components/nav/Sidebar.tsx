"use client";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./Navlinks";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";
import { MenuTheme } from "../button/MenuTheme";
import { useContext } from "react";
import { ToggleContext } from "@/src/contexts/ToggleButton";

const Sidebar = () => {
  const { isToggled, toggle } = useContext(ToggleContext);

  return (
    <nav
      className={clsx(
        isToggled ? "w-full" : "w-[0px]",
        "transition-all duration-300 h-screen fixed flex top-0 right-0 z-20 md:hidden overflow-hidden bg-background/50"
      )}
    >
      <div
        onClick={toggle}
        className="w-[50%] backdrop-blur-sm h-full cursor-pointer bg-black/5"
      />
      <div className="w-[50%] h-full flex flex-col dark:bg-background bg-background gap-5 p-5 border-l border-border/50">
        <div className="flex justify-between items-center w-full">
          <a
            href="https://www.google.com/search?q=Desa+Gedongarum%2C+Kecamatan+Kanor%2C+Kabupaten+Bojonegoro%2C+Jawa+Timur%2C+Indonesia&sca_esv=574419571&rlz=1C1KNTJ_enID1078ID1078&sxsrf=AM9HkKn-jMCqUctmah0TcBLyJuB35_ODwg%3A1697627440384&ei=ML0vZYqOF_mnseMP1YiBkAg&ved=0ahUKEwiK5q2Eu_-BAxX5U2wGHVVEAIIQ4dUDCBA&uact=5&oq=Desa+Gedongarum%2C+Kecamatan+Kanor%2C+Kabupaten+Bojonegoro%2C+Jawa+Timur%2C+Indonesia&gs_lp=Egxnd3Mtd2l6LXNlcnAiTURlc2EgR2Vkb25nYXJ1bSwgS2VjYW1hdGFuIEthbm9yLCBLYWJ1cGF0ZW4gQm9qb25lZ29ybywgSmF3YSBUaW11ciwgSW5kb25lc2lhMgoQIRigARjDBBgKSJ3FAlDkB1ibrgJwBXgAkAEBmAG-AqABxRmqAQgwLjE4LjIuMbgBA8gBAPgBAcICBxAjGLACGCfCAgIQJsICBRAAGKIE4gMEGAEgQYgGAQ&sclient=gws-wiz-serp"
            target="_blank"
            className="border-2 border-transparent hover:border-primary bg-primary hover:bg-secondary cursor-pointer py-1 px-3 rounded-md text-center text-xl text-white hover:text-foreground transition-all"
          >
            G
          </a>
          <IoClose
            onClick={toggle}
            className="text-4xl dark:text-slate-100 cursor-pointer"
          />
        </div>
        <ul className="flex flex-col justify-start items-end gap-7">
          <MenuTheme />
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className="dark:text-slate-100"
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
