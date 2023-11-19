"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import baldes1 from "../../assets/gedongarum/baldes1.png";
import masjid1 from "../../assets/gedongarum/masjid1.png";
import klanting1 from "../../assets/gedongarum/klanting1.png";

export default function App() {
  const [swipperSlideCss] = useState(
    "flex items-center justify-center rounded-lg h-full"
  );

  return (
    <div className="hidden md:block w-full md:w-[50%] relative">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper md:w-[320px] md:h-[350px]"
      >
        <SwiperSlide className={swipperSlideCss}>
          <Image src={baldes1} alt="image" fill objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide className={swipperSlideCss}>
          <Image src={masjid1} alt="image" fill objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide className={swipperSlideCss}>
          <Image src={klanting1} alt="image" fill objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide className="bg-card dark:bg-card shadow-sm shadow-muted-foreground flex items-center justify-center rounded-lg">
          <Link
            href="/galeri"
            className="flex flex-col justify-center items-center h-full text-muted-foreground"
          >
            <p>Go to</p>
            <p className="underline dark:text-foreground">Galeri</p>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
