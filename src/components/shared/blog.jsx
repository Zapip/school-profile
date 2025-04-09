"use client";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
export default function Blog() {
  return (
    <article className="p-4 md:p-20 h-full md:h-screen grid grid-cols-1 md:grid-cols-2 gap-20">
      <section className="flex flex-col justify-center gap-8 relative">
        <span className="absolute left-48 hidden md:block">
          <svg
            width="182"
            height="20"
            viewBox="0 0 182 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8.14588C24.0971 6.12998 108.171 2.20919 177 8.1459C141.272 8.1459 94.7208 8.7462 64.748 15"
              stroke="#FB923C"
              strokeWidth="10"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h1 className="text-3xl md:text-6xl font-extrabold text-gray">
          Tetap Update dengan Kami!
        </h1>
        <p>
          Temukan berbagai artikel/berita menarik tentang kegiatan sekolah,
          prestasi siswa, dan informasi pendidikan terbaru.
        </p>
        <button className="flex gap-4 items-center  text-blue font-medium text-xl hover:text-blue-800">
          Selengkapnya
          <ArrowRightIcon className="size-6 stroke-blue stroke-1" />
        </button>
      </section>
      <section className="flex justify-center items-center relative">
        <svg
          className="size-full"
          viewBox="0 0 534 523"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.9327 167.128C0.640848 219.233 -10.9325 292.614 13.1786 363.026C37.2897 433.439 98.8608 475.766 184.868 503.76C346.248 556.285 499.386 488.397 523.265 421.154C545.57 358.346 534.304 314.587 478.269 257.848C422.234 201.108 383.309 160.807 368.651 103.491C354.21 47.0257 335.203 13.3064 291.348 4.49137C243.915 -5.04266 194.031 1.75648 147.22 31.4528C99.4641 61.7488 51.3916 118.655 26.9327 167.128Z"
            fill="#FB923C"
          />
        </svg>

        <section className="absolute size-fit grid grid-cols-2 gap-4">
          <section className="rounded-xl bg-white px-4 py-6 flex flex-col gap-4 size-fit shadow-md">
            <span className="text-blue-800 text-sm px-2 flex items-center py-2 bg-blue-200 justify-center w-fit rounded">
              Popular
            </span>
            <h2 className="text-slate-900 text-xl font-medium">
              Tips belajar efeektif untuk ujian akhir
            </h2>
            <p className="text-slate-500 text-sm">
              Bagaimana sih caranya belajar efektif, tuk kepoin caranya disini
              dengan cara klik!
            </p>
            <button className="flex gap-4 items-center border-2 justify-center p-1 rounded text-blue font-medium text-xl hover:text-blue-800">
              Selengkapnya
            </button>
          </section>
          <section className="relative aspect-[3/2] rounded-xl overflow-hidden flex flex-col gap-4 border-5 border-slate-200 top-24 shadow-md">
            <Image
              className="object-cover"
              src="/images/blog/24.jpg"
              fill
              alt="blog"
              sizes="(100vw)"
              priority
            />
          </section>
          <section className="relative aspect-[3/2] rounded-xl overflow-hidden flex flex-col gap-4 border-5 border-slate-200 shadow-md">
            <Image
              className="object-cover"
              src="/images/blog/24.jpg"
              fill
              sizes="(100vw)"
              alt="blog"
              priority
            />
          </section>
          <section className="relative aspect-[8/7] rounded-xl overflow-hidden flex flex-col gap-4 border-5 border-slate-200 shadow-md">
            <Image
              className="object-cover"
              src="/images/blog/24.jpg"
              fill
              sizes="(100vw)"
              alt="blog"
              priority
            />
          </section>
        </section>
      </section>
    </article>
  );
}
