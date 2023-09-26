import Carousel from "@/components/fragments/Carousel";

const Banner = () => {
  return (
    <div className="w-full flex justify-between items-center overflow-hidden py-5">
      <Intro />
      <Carousel />
    </div>
  );
};

export default Banner;

const Intro = () => {
  return (
    <div className="w-[50%] px-10 flex flex-col gap-5 font-semibold">
      <p className="text-3xl text-gray-700">Selamat datang di Gedongarum</p>
      <p className="text-gray-500">
        Kami membawa kepada Anda keindahan dan keajaiban Gedongarum melalui
        kata-kata dan pengalaman yang luar biasa. Mari ikuti kami dalam
        perjalanan untuk mengeksplorasi kekayaan dan pesona tempat ini. Kami
        akan membawa Anda lebih dekat dengan keajaiban alam, sejarah yang
        memikat, dan semua yang membuat Gedongarum begitu istimewa.
      </p>
      <p className="text-xl text-gray-600">
        Selamat membaca dan temukan lebih banyak tentang Gedongarum.
      </p>
    </div>
  );
};
