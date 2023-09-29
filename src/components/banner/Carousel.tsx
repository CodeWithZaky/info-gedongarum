"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Carousel.css";

// import required modules
import { EffectCards } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

export default function App() {
  return (
    <div className="w-full md:w-[50%] relative">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/600x600"
            alt="image"
            width={400}
            height={400}
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/400x400"
            alt="image"
            width={400}
            height={400}
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://source.unsplash.com/500x500"
            alt="image"
            width={400}
            height={400}
            objectFit="cover"
          />
        </SwiperSlide>
        <SwiperSlide className="bg-card dark:bg-card shadow-sm shadow-muted-foreground">
          <Link href="/galeri" className="flex flex-col text-muted-foreground">
            <p>Go to</p>
            <p className="underline text-foreground">Galeri</p>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
