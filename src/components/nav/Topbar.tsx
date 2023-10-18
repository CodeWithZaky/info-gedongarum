"use client";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "../button/Hamburger";
import { navLinks } from "./Navlinks";
import { MenuTheme } from "../button/MenuTheme";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Topbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-between border-b border-border mx-auto px-5 py-4 mb-5">
      <a
        href="https://www.google.com/search?q=Desa+Gedongarum%2C+Kecamatan+Kanor%2C+Kabupaten+Bojonegoro%2C+Jawa+Timur%2C+Indonesia&sca_esv=574419571&rlz=1C1KNTJ_enID1078ID1078&sxsrf=AM9HkKn-jMCqUctmah0TcBLyJuB35_ODwg%3A1697627440384&ei=ML0vZYqOF_mnseMP1YiBkAg&ved=0ahUKEwiK5q2Eu_-BAxX5U2wGHVVEAIIQ4dUDCBA&uact=5&oq=Desa+Gedongarum%2C+Kecamatan+Kanor%2C+Kabupaten+Bojonegoro%2C+Jawa+Timur%2C+Indonesia&gs_lp=Egxnd3Mtd2l6LXNlcnAiTURlc2EgR2Vkb25nYXJ1bSwgS2VjYW1hdGFuIEthbm9yLCBLYWJ1cGF0ZW4gQm9qb25lZ29ybywgSmF3YSBUaW11ciwgSW5kb25lc2lhMgoQIRigARjDBBgKSJ3FAlDkB1ibrgJwBXgAkAEBmAG-AqABxRmqAQgwLjE4LjIuMbgBA8gBAPgBAcICBxAjGLACGCfCAgIQJsICBRAAGKIE4gMEGAEgQYgGAQ&sclient=gws-wiz-serp"
        target="_blank"
        className="border border-border hover:bg-card cursor-pointer py-1 px-2 rounded-md flex justify-center items-center text-xl text-foreground dark:text-foreground"
      >
        GEDONGARUM
      </a>
      <ul className="flex justify-center items-center gap-7">
        <MenuTheme />
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.link}
            className={clsx(
              pathname === link.link
                ? "text-foreground dark:text-foreground"
                : "text-muted-foreground dark:text-muted-foreground",
              "hidden md:block"
            )}
          >
            {link.name}
          </Link>
        ))}
        <Hamburger />
      </ul>
    </nav>
  );
};

export default Topbar;
