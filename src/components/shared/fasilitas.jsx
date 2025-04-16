'use client';
import React from 'react';
import Card from '../atoms/CardComponent';
import VideoBrowserFrame from '../atoms/VideoCard';

export default function Fasilitas() {
  const cardData = [
    {
      label: 'Featured',
      title: 'Laboratorium IPA Terpadu',
      description:
        'Tempat bagi siswa untuk melakukan berbagai penelitian yang mendukung masa depan mereka.',
    },
    {
      label: 'Popular',
      title: 'Lapangan Olahraga Multiguna',
      description:
        'Area bagi siswa untuk menjalani berbagai aktivitas kebugaran. Seperti bermain bola dll.',
    },
    {
      label: 'New',
      title: 'Studio Rekaman dan Produksi Multimedia',
      description:
        'Tempat bagi siswa untuk belajar cara mendistribusikan media dengan efektif.',
    },
  ];

  return (
    <section className="w-full  px-10 md:px-20 py-20 bg-white bg-[url('/facilitybg.png')] bg-cover bg-center">
      <div className="grid grid-cols-5 gap-10 items-start">
        {/* Left content */}
        <div className="col-span-2 flex-1">
          <h2 className="text-6xl font-black pt-14 text-gray-900 mb-6">
            Fasilitas yang kami Tawarkan!
          </h2>
          <ul className="list-inside list-disc space-y-2 py-8 text-gray-800 text-2xl">
            <li>10 Laboratorium penunjang praktikum</li>
            <li>Perpustakaan Pusat sekolah</li>
            <li>Ruang kelas ber-AC dan projector</li>
            <li>Aula Serbaguna</li>
            <li>Ruang kelas ber-AC dan projector</li>
            <li>Ruang OSIS & UKS</li>
          </ul>
          <a href="#" className="inline-block mt-6 text-blue-600 font-semibold hover:underline text-2xl">
            Selengkapnya →
          </a>
        </div>

        {/* Right content: Video + Cards */}
        <div className="col-span-3 relative">
            {/* Video */} 
            <div className="absolute top-0 right-0 w-[75%] z-10 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.2)] overflow-hidden p-0">
                <VideoBrowserFrame videoUrl="https://www.youtube.com/embed/CGr98yMNA5E?si=isqUCiNw0ndDUKaP" />
            </div>

            {/* Spacer to give height for positioning */}
            <div className="pt-[280px]" />

            {/* Cards */}
            <div className="relative z-20 w-full flex justify-end pr-12 items-end gap-6 flex-wrap">
                {cardData.map((card, index) => (
                <Card key={index} label={card.label} title={card.title} description={card.description} />
                ))}
            </div>
        </div>

        </div>
    </section>
    );
}
