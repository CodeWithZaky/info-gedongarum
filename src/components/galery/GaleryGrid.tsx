import Image from "next/image";

const GaleryGrid = () => {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 px-5 my-10">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20"
        >
          <Image
            alt="image"
            height={500 + i * 20}
            width={500 + i * 10}
            objectFit={"cover"}
            className="w-full rounded-md"
            src={`https://source.unsplash.com/${600 + i + 1}x${600 + i}`}
          />
          <div className="test__body absolute inset-0 p-8 text-foreground flex flex-col">
            <div className="relative">
              <a
                className="test__link absolute inset-0"
                target="_blank"
                href="/"
              ></a>
              <h1 className="test__title text-3xl font-bold mb-3 text-secondary dark:text-foreground">
                Title post
              </h1>
              <p className="test__author font-sm font-light text-secondary/90 dark:text-foreground/90">
                Author
              </p>
            </div>
            <div className="mt-auto">
              <span className="test__tag bg-primary/95 bg-opacity-60 py-1 px-4 rounded-md text-background/90 dark:text-background/90">
                #tag
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GaleryGrid;
