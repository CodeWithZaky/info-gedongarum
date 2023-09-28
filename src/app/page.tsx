import Banner from "@/components/layouts/Banner";
import CardList from "@/components/layouts/CardList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start box-border gap-10">
      <Banner />
      <div className="flex flex-col md:flex-row justify-evenly items-start w-full px-10 my-10 gap-3">
        <CardList />
      </div>
    </main>
  );
}
