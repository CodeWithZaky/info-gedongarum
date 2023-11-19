import Image from "next/image";
import { imageData } from "./ImageData";

const GaleryGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-3 p-5">
      {children}
    </div>
  );
};

export default GaleryGrid;
