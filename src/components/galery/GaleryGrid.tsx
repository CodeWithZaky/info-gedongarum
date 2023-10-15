import Image from "next/image";

const GaleryGrid = ({ itemsPerPage }: { itemsPerPage: number }) => {
  return (
    <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 px-5 my-10">
      {[...Array(itemsPerPage)].map((_, i) => (
        <div
          key={i}
          className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20"
        >
          <Image
            alt="image"
            height={500}
            width={500}
            objectFit={"cover"}
            className="w-full rounded-md"
            src={`https://source.unsplash.com/${600 + i + 1}x${600 + i}`}
          />
        </div>
      ))}
    </div>
  );
};

export default GaleryGrid;
