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
    <section className="w-full  px-10 md:px-20 py-20 bg-white">
      <div className="grid grid-cols-5 gap-10 items-start">
        {/* Left content */}
        <div className="col-span-2 flex-1">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            <span className="border-b-8 border-yellow-400">Fasilitas</span> yang kami <br />
            Tawarkan!
          </h2>
          <ul className="list-inside list-disc space-y-2 text-gray-800 text-lg">
            <li>10 Laboratorium penunjang praktikum</li>
            <li>Perpustakaan Pusat sekolah</li>
            <li>Ruang kelas ber-AC dan projector</li>
            <li>Aula Serbaguna</li>
            <li>Ruang OSIS & UKS</li>
          </ul>
          <a href="#" className="inline-block mt-6 text-blue-600 font-semibold hover:underline">
            Selengkapnya →
          </a>
        </div>

        {/* Right content: Video + Cards */}
        <div className="col-span-3 relative">
            {/* Video */} 
            <div className="absolute top-0 right-0 w-[75%] z-10 shadow-xl rounded-xl overflow-hidden">
                <VideoBrowserFrame videoUrl="https://www.youtube.com/embed/CGr98yMNA5E?si=isqUCiNw0ndDUKaP" />
            </div>

            {/* Spacer to give height for positioning */}
            <div className="pt-[280px]" />

            {/* Cards */}
            <div className="relative z-20 w-full flex justify-center items-end gap-6 flex-wrap">
                {cardData.map((card, index) => (
                <Card key={index} label={card.label} title={card.title} description={card.description} />
                ))}
            </div>
        </div>

        </div>
    </section>
    );
}
