"use client";

import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// Testimoni data (tambahkan sebanyak yang kamu mau)
const testimonies = [
  {
    name: "Helien Jummy",
    role: "Mahasiswa",
    image: "logo.svg",
    message:
      "Saya sangat senang belajar di sini. Guru-gurunya sangat mendukung dan teman-temannya menyenangkan. Sekolah ini memberikan lingkungan belajar yang kondusif dan fasilitas yang lengkap.",
  },
  {
    name: "Ralph Edwards",
    role: "Orang Tua",
    image: "logo.svg",
    message:
      "Anak saya tumbuh dengan cepat sejak masuk sekolah di sini. Mereka tidak hanya belajar pelajaran, tetapi juga karakter.",
  },
  {
    name: "Hellena John",
    role: "Siswa 2018",
    image: "logo.svg",
    message:
      "Ekstrakurikuler di sekolah ini keren banget dan banyak pilihan. Aku jadi nemuin bakat baru seperti menggambar dan bermain basket.",
  },
  {
    name: "David Oshodi",
    role: "Manager",
    image: "logo.svg",
    message:
      "Fasilitas dan suasana belajar di sini sangat mendukung. Anak-anak jadi lebih semangat belajar dan eksplorasi.",
  },
  {
    name: "Lia Riska",
    role: "Alumni",
    image: "logo.svg",
    message:
      "Guru-guru sangat berdedikasi, dan saya merasa sangat terbantu selama bersekolah di sini. Terima kasih atas semuanya!",
  },
  {
    name: "Sabrina Adinda",
    role: "Alumni",
    image: "logo.svg",
    message:
      "Tempat terbaik untuk menumbuhkan minat belajar anak. Saya sangat merekomendasikan!",
  },
  {
    name: "Sabrina Adinda",
    role: "Alumni",
    image: "logo.svg",
    message:
      "Tempat terbaik untuk menumbuhkan minat belajar anak. Saya sangat merekomendasikan!",
  },
];

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function Testimoni() {
  const testiPerPage = 3;
  const slides = chunkArray(testimonies, testiPerPage);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1 < slides.length ? prev + 1 : prev));
  };

  return (
    <article className="p-4 md:p-20 h-full md:h-screen" id="testimoni">
      {/* Header */}
      <section className="flex flex-col md:flex-row gap-4 w-full justify-between items-start md:items-center mb-10">
        <h1 className="text-3xl md:text-6xl font-extrabold text-gray">
          Kata Mereka Tentang Kami
        </h1>
        <section className=" hidden md:flex gap-4 items-center text-orange border-orange">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border transition duration-200 hover:border-2"
          >
            <ChevronLeftIcon className="w-5 h-5 " />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full border transition duration-200 hover:border-2"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </section>
      </section>

      {/* Carousel */}
      <section className="overflow-hidden">
        <div
          className="flex flex-col md:flex-row transition-transform duration-500 ease-in-out"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((group, slideIndex) => (
            <div
              key={slideIndex}
              className="flex flex-col md:flex-row px-2 gap-6 mb-6"
              style={{ width: `${100 / slides.length}%` }}
            >
              {group.map((testi, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/3 p-4 bg-white shadow-md rounded-lg flex flex-col justify-between"
                >
                  <p className="text-gray line-clamp-4">{testi.message}</p>
                  <div className="flex gap-4 items-center mt-6">
                    <Image
                      src={testi.image}
                      alt={testi.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                      <h2 className="font-semibold text-gray">{testi.name}</h2>
                      <p className="text-sm text-gray-600">{testi.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
