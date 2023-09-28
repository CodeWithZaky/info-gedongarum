import Image from "next/image";
import Link from "next/link";
import DarkModeSwitcher from "../elements/DarkModeSwitcher";
import Hamburger from "../elements/Hamburger";
import { navLinks } from "../datas/Navlinks";

const Topbar = () => {
  return (
    <nav className="w-full flex justify-between border-b border-slate-300 dark:border-slate-700 mx-auto px-5 py-4 mb-5">
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
        <DarkModeSwitcher />
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.link}
            className="dark:text-slate-100 hidden md:block"
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
