import GaleryGrid from "@/src/components/galery/GaleryGrid";
import { imageData } from "@/src/components/galery/ImageData";

const page = () => {
  return (
    <div>
      <GaleryGrid>
        {imageData.map((image, index) => (
          <div key={index}>{image}</div>
        ))}
      </GaleryGrid>
    </div>
  );
};

export default page;
