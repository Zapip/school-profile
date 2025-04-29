"use client";
import React from "react";
import Card from "../atoms/CardComponent";
import VideoBrowserFrame from "../atoms/VideoCard";

const Fasilitas = () => {
  const cardData = [
    {
      label: "Featured",
      title: "Laboratorium IPA Terpadu",
      description:
        "Tempat bagi siswa untuk melakukan berbagai penelitian yang mendukung masa depan mereka.",
    },
    {
      label: "Popular",
      title: "Lapangan Olahraga Multiguna",
      description:
        "Area bagi siswa untuk menjalani berbagai aktivitas kebugaran. Seperti bermain bola dll.",
    },
    {
      label: "New",
      title: "Studio Rekaman dan Produksi Multimedia",
      description:
        "Tempat bagi siswa untuk belajar cara mendistribusikan media dengan efektif.",
    },
  ];

  return (
    <article className="w-full px-4 md:px-20 py-20 bg-white bg-[url('/facilitybg.png')] bg-cover bg-center">
      <section className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
        {/* Left content */}
        <section className="md:col-span-2 flex-1">
          <h2 className="text-4xl md:text-6xl font-black pt-14 text-gray-900 mb-6">
            Fasilitas yang kami Tawarkan!
          </h2>
          <ul className="list-inside list-disc space-y-2 py-8 text-gray-800 text-xl md:text-2xl">
            <li>10 Laboratorium penunjang praktikum</li>
            <li>Perpustakaan Pusat sekolah</li>
            <li>Ruang kelas ber-AC dan projector</li>
            <li>Aula Serbaguna</li>
            <li>Ruang kelas ber-AC dan projector</li>
            <li>Ruang OSIS & UKS</li>
          </ul>
          <a
            href="#"
            className="inline-block mt-6 text-blue-600 font-semibold hover:underline text-xl md:text-2xl"
          >
            Selengkapnya →
          </a>
        </section>

        {/* Right content: Video + Cards */}
        <section className="md:col-span-3 relative">
          {/* Video */}
          <section className="absolute top-0 right-0 w-full md:w-[75%] z-10 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.2)] overflow-hidden p-0">
            <VideoBrowserFrame videoUrl="https://www.youtube.com/embed/CGr98yMNA5E?si=isqUCiNw0ndDUKaP" />
          </section>

          {/* Spacer to give height for positioning */}
          <section className="pt-[280px]" />

          {/* Cards */}
          <section className="relative z-20 w-full flex flex-col md:flex-row justify-end pr-0 md:pr-12 items-end gap-6 flex-wrap">
            {cardData.map((card, index) => (
              <Card
                key={index}
                label={card.label}
                title={card.title}
                description={card.description}
              />
            ))}
          </section>
        </section>
      </section>
    </article>
  );
};
export default Fasilitas;
