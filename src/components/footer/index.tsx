import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-center border border-border text-neutral-600 bg-secondary dark:bg-card dark:text-foreground lg:text-left mt-10 mx-5 rounded-t-xl">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start justify-items-center">
          <div className="flex flex-col">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-4 w-4"
              >
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              DESA GEDONGARUM
            </h6>
            <p className="text-muted-foreground dark:text-muted-foreground text-xs sm:text-base">
              Jl. Raya Gedongarum No. 107 Kecamatan Kanor Kabupaten Bojonegoro
              Provinsi Jawa Timur Kode Pos 62193
            </p>
            <p className="mt-3 text-muted-foreground dark:text-muted-foreground text-xs sm:text-base">
              Email: desagedongarum@gmail.com
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Tautan
            </h6>
            <p className="mb-4">
              <Link
                href="/"
                className="text-muted-foreground dark:text-muted-foreground"
              >
                Beranda
              </Link>
            </p>
            <p className="mb-4">
              <Link
                href="/profil"
                className="text-muted-foreground dark:text-muted-foreground"
              >
                Profil
              </Link>
            </p>
            <p className="mb-4">
              <Link
                href="/galery"
                className="text-muted-foreground dark:text-muted-foreground"
              >
                Galery
              </Link>
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Tautan Umum
            </h6>
            <p className="mb-4">
              <a
                href="https://gedongarum-bjn.desa.id/"
                target="_blank"
                className="text-muted-foreground dark:text-muted-foreground"
              >
                Website Resmi
              </a>
            </p>
            <p className="mb-4">
              <a
                href="https://www.google.com/maps/place/Gedongarum,+Kanor,+Bojonegoro+Regency,+East+Java/@-7.083702,112.057469,15z/data=!4m6!3m5!1s0x2e778f8dba48196f:0x28c4ac4dc4aac62!8m2!3d-7.0828816!4d112.0565795!16s%2Fg%2F121dvhps?hl=en&entry=ttu"
                target="_blank"
                className="text-muted-foreground dark:text-muted-foreground"
              >
                Peta
              </a>
            </p>
            <p className="mb-4">
              <a
                href="https://www.youtube.com/watch?v=kaDVVpuRsjw&ab_channel=pemdesgedongarum"
                target="_blank"
                className="text-muted-foreground dark:text-muted-foreground"
              >
                youtube
              </a>
            </p>
            <p className="mb-4">
              <a
                href="https://azaku.vercel.app"
                target="_blank"
                className="text-muted-foreground dark:text-muted-foreground"
              >
                Pengembang
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className=" p-6 text-center dark:text-muted-foreground">
        <span>{"©2023 "}</span>
        <p className="font-semibold text-muted-foreground dark:text-muted-foreground">
          Gedongarum
        </p>
      </div>
    </footer>
  );
};

export default Footer;
