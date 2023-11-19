import { StaticImageData } from "next/image";
import areaKlanting1 from "../../assets/gedongarum/areaKlanting1.png";
import areaKlanting2 from "../../assets/gedongarum/areaKlanting2.png";
import areaPrapatan1 from "../../assets/gedongarum/areaPrapatan1.png";
import baldes1 from "../../assets/gedongarum/baldes1.png";
import baldes2 from "../../assets/gedongarum/baldes2.png";
import baldes3 from "../../assets/gedongarum/baldes3.png";
import bengawan1 from "../../assets/gedongarum/bengawan1.png";
import depanMasjid1 from "../../assets/gedongarum/depanMasjid1.png";
import depanMasjid2 from "../../assets/gedongarum/depanMasjid2.png";
import jalan1 from "../../assets/gedongarum/jalan1.png";
import jalan2 from "../../assets/gedongarum/jalan2.png";
import jalan3 from "../../assets/gedongarum/jalan3.png";
import jalan4 from "../../assets/gedongarum/jalan4.png";
import jalan5 from "../../assets/gedongarum/jalan5.png";
import klanting1 from "../../assets/gedongarum/klanting1.png";
import klanting2 from "../../assets/gedongarum/klanting2.png";
import klanting3 from "../../assets/gedongarum/klanting3.png";
import klanting4 from "../../assets/gedongarum/klanting4.png";
import masjid1 from "../../assets/gedongarum/masjid1.png";
import pemandangan1 from "../../assets/gedongarum/pemandangan1.png";
import pemandangan2 from "../../assets/gedongarum/pemandangan2.png";
import pembangunan1 from "../../assets/gedongarum/pembangunan1.png";
import pembangunan2 from "../../assets/gedongarum/pembangunan2.png";
import prapatan1 from "../../assets/gedongarum/prapatan1.png";
import prapatan2 from "../../assets/gedongarum/prapatan2.png";
import sawah1 from "../../assets/gedongarum/sawah1.png";
import sawah2 from "../../assets/gedongarum/sawah2.png";
import sawah3 from "../../assets/gedongarum/sawah3.png";
import sawah4 from "../../assets/gedongarum/sawah4.png";
import tanggul1 from "../../assets/gedongarum/tanggul1.png";
import tanggul2 from "../../assets/gedongarum/tanggul2.png";

import Image from "next/image";

const ImageComp = ({ imageProps }: { imageProps: StaticImageData }) => {
  return (
    <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
      <Image
        alt="image"
        height={500}
        width={500}
        objectFit={"cover"}
        className="w-full rounded-md"
        src={imageProps}
      />
    </div>
  );
};

const AreaKlanting1 = <ImageComp imageProps={areaKlanting1} />;
const AreaKlanting2 = <ImageComp imageProps={areaKlanting2} />;
const AreaPrapatan1 = <ImageComp imageProps={areaPrapatan1} />;
const Baldes1 = <ImageComp imageProps={baldes1} />;
const Baldes2 = <ImageComp imageProps={baldes2} />;
const Baldes3 = <ImageComp imageProps={baldes3} />;
const Bengawan1 = <ImageComp imageProps={bengawan1} />;
const DepanMasjid1 = <ImageComp imageProps={depanMasjid1} />;
const DepanMasjid2 = <ImageComp imageProps={depanMasjid2} />;
const Jalan1 = <ImageComp imageProps={jalan1} />;
const Jalan2 = <ImageComp imageProps={jalan2} />;
const Jalan3 = <ImageComp imageProps={jalan3} />;
const Jalan4 = <ImageComp imageProps={jalan4} />;
const Jalan5 = <ImageComp imageProps={jalan5} />;
const Klanting1 = <ImageComp imageProps={klanting1} />;
const Klanting2 = <ImageComp imageProps={klanting2} />;
const Klanting3 = <ImageComp imageProps={klanting3} />;
const Klanting4 = <ImageComp imageProps={klanting4} />;
const Masjid1 = <ImageComp imageProps={masjid1} />;
const Pemandangan1 = <ImageComp imageProps={pemandangan1} />;
const Pemandangan2 = <ImageComp imageProps={pemandangan2} />;
const Pembangunan1 = <ImageComp imageProps={pembangunan1} />;
const Pembangunan2 = <ImageComp imageProps={pembangunan2} />;
const Prapatan1 = <ImageComp imageProps={prapatan1} />;
const Prapatan2 = <ImageComp imageProps={prapatan2} />;
const Sawah1 = <ImageComp imageProps={sawah1} />;
const Sawah2 = <ImageComp imageProps={sawah2} />;
const Sawah3 = <ImageComp imageProps={sawah3} />;
const Sawah4 = <ImageComp imageProps={sawah4} />;
const Tanggul1 = <ImageComp imageProps={tanggul1} />;
const Tanggul2 = <ImageComp imageProps={tanggul2} />;

export const imageData = [
  AreaKlanting1,
  AreaKlanting2,
  AreaPrapatan1,
  Baldes1,
  Baldes2,
  Baldes3,
  Bengawan1,
  DepanMasjid1,
  DepanMasjid2,
  Jalan1,
  Jalan2,
  Jalan3,
  Jalan4,
  Jalan5,
  Klanting1,
  Klanting2,
  Klanting3,
  Klanting4,
  Masjid1,
  Pemandangan1,
  Pemandangan2,
  Pembangunan1,
  Pembangunan2,
  Prapatan1,
  Prapatan2,
  Sawah1,
  Sawah2,
  Sawah3,
  Sawah4,
  Tanggul1,
  Tanggul2,
];
