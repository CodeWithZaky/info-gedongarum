import Banner from "@/src/components/banner";
import CardVil from "@/src/components/card/CardVil";
import GaleryGrid from "@/src/components/galery/GaleryGrid";
import Footer from "@/src/components/footer";
import Map from "@/components/map";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start box-border gap-10">
      <Banner />
      <div className="flex w-full h-auto flex-col md:flex-row justify-evenly px-10 my-10 gap-3 items-stretch">
        <CardVil />
      </div>
      <GaleryGrid />
      <Map />
      <Footer />
    </main>
  );
}
