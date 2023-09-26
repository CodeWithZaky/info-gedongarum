import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {
    name: "Beranda",
    link: "/",
  },
  {
    name: "Profil",
    link: "/profil",
  },
  {
    name: "galeri",
    link: "/galeri",
  },
];

const navbar = () => {
  return (
    <nav className="w-full flex justify-between bg-slate-50 border-b border-slate-300 mx-auto px-5 py-3">
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
        {navLinks.map((link) => (
          <Link key={link.name} href={link.link}>
            {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default navbar;
