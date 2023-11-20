import Banner from "@/src/components/banner";
import CardVil from "@/src/components/card/CardVil";
import GaleryGrid from "@/src/components/galery/GaleryGrid";
import Footer from "@/src/components/footer";
import Map from "@/components/map";
import { imageData } from "../components/galery/ImageData";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start box-border gap-10">
      <Banner />
      <div className="flex w-full h-auto flex-col md:flex-row justify-evenly px-5 my-10 gap-3 items-stretch">
        <CardVil />
      </div>
      <div className="flex flex-col justify-center items-start">
        <GaleryGrid>
          {imageData.slice(0, 6).map((image, index) => (
            <div key={index}>{image}</div>
          ))}
        </GaleryGrid>
        <Link
          href={"/galeri"}
          className="mx-5 bg-primary hover:bg-primary/90 text-white w-fit px-3 py-1 rounded-xl cursor-pointer"
        >
          {"foto lainnya >"}
        </Link>
      </div>
      <Map />
      <Footer />
    </main>
  );
}
