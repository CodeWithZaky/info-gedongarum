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
        "transition-all duration-300 h-screen fixed flex top-0 right-0 z-20 md:hidden overflow-hidden bg-slate-950/50 "
      )}
    >
      <div
        onClick={toggle}
        className="w-[50%] backdrop-blur-sm h-full cursor-pointer"
      />
      <div className="w-[50%] h-full flex flex-col dark:bg-slate-900 bg-slate-100 gap-5 p-5">
        <div className="flex justify-between items-center w-full">
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
