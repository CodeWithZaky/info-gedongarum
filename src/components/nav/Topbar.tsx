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
      <Link
        href="/"
        className="border-2 border-transparent hover:border-primary bg-primary hover:bg-secondary cursor-pointer py-1 px-3 rounded-md text-center text-xl text-white hover:text-foreground transition-all"
      >
        G
      </Link>
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
