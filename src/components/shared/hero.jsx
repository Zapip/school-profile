"use client";

import Image from "next/image";
import { PlayCircleIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <article className="w-full h-dvh p-4 pt-24 md:p-20 md:pt-10">
      <section className="flex flex-row justify-between items-center w-full gap-0">
        {/* LEFT: Text */}
        <section className="text-center md:text-left md:w-1/2">
          <h1 className="text-2xl md:text-5xl  font-black text-gray leading-tight">
            Pendidikan Berkualitas untuk Generasi Masa Depan
          </h1>
          <p className="mt-6 text-gray-700 text-xl md:text-2xl">
            Lingkungan belajar yang kondusif dan fasilitas modern untuk
            mendukung perkembangan potensi siswa secara optimal.
          </p>
          <section className="mt-8 flex flex-col md:flex-row gap-5 justify-center items-center md:justify-start">
            <a
              href="#"
              className="bg-orange-600 hover:bg-orange-700 text-white text-2xl font-semibold px-6 py-4 rounded-2xl shadow size-fit"
            >
              Daftar Sekarang
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-blue-600 font-medium text-2xl"
            >
              <span className="material-icons">
                <PlayCircleIcon className="w-8 h-8" />
              </span>
              Profil Sekolah
            </a>
          </section>
          <section className="mt-8 text-sm text-gray-400 flex items-center justify-center md:justify-start gap-4 size-full">
            <p>
              Di percaya oleh <br />
              Lembaga Pendidikan
            </p>
            <section className="flex gap-2 grayscale">
              <span className="relative size-8">
                <Image
                  src="/kemendikbud.png"
                  alt="kemendikbud"
                  fill
                  className="object-contain"
                />
              </span>
              <span className="relative size-8">
                <Image
                  src="/pgri.png"
                  alt="kemendikbud"
                  fill
                  className="object-contain"
                />
              </span>
              <span className="relative size-8">
                <Image
                  src="/osis.png"
                  alt="osis"
                  fill
                  className="object-contain"
                />
              </span>
            </section>
          </section>
        </section>

        {/* RIGHT: Image */}
        <section className="md:mt-0 hidden md:block relative size-[500px]">
          <Image
            src="/boy-student.png"
            alt="Siswa"
            fill
            className="object-contain"
          />
        </section>
      </section>
    </article>
  );
};

export default Hero;
