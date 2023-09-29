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
      <div>
        <a
          className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0"
          href="https://azaku.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
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
