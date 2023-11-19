import Carousel from "@/src/components/banner/Carousel";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center overflow-hidden py-5 gap-5 my-10">
      <Intro />
      <Carousel />
    </div>
  );
};

export default Banner;

const Intro = () => {
  return (
    <div className="w-full md:w-[50%] px-10 flex flex-col gap-5 font-semibold">
      <p className="text-3xl text-foreground dark:text-foreground">
        Selamat datang di Gedongarum
      </p>
      <p className="text-muted-foreground dark:text-muted-foreground">
        Kami membawa kepada Anda keindahan dan keajaiban Gedongarum melalui
        informasi dan pengalaman yang luar biasa. Mari ikuti kami dalam
        perjalanan untuk mengeksplorasi kekayaan dan pesona tempat ini. Kami
        akan membawa Anda lebih dekat dengan keajaiban alam, sejarah yang
        memikat, dan semua yang membuat Gedongarum begitu istimewa.
      </p>
      <p className="text-xl text-foreground/80 dark:text-foreground/80">
        Selamat membaca dan temukan lebih banyak tentang Gedongarum.
      </p>
      <Link
        href={"/profil"}
        className="bg-primary hover:bg-secondary cursor-pointer py-1 px-4 rounded-md text-center text-xl text-white hover:text-foreground transition-all w-fit"
      >
        {"Profil Gedongarum >"}
      </Link>
    </div>
  );
};
