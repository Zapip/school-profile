// app/page.tsx (Next.js 13+) atau pages/index.js (Next.js 12)
'use client';
import React from 'react';
import Card from '../atoms/CardComponent';

export default function Fasilitas() {
    const cardData = [
        {
          label: "Featured",
          title: "Laboratorium IPA Terpadu",
          description: "Tempat bagi siswa untuk melakukan berbagai penelitian yang mendukung masa depan mereka.",
        },
        {
          label: "Popular",
          title: "Lapangan Olahraga Multiguna",
          description: "Area bagi siswa untuk menjalani berbagai aktivitas kebugaran. Seperti bermain bola dll.",
        },
        {
          label: "New",
          title: "Studio Rekaman dan Produksi Multimedia",
          description: "Tempat bagi siswa untuk belajar cara mendistribusikan media dengan efektif.",
        },
      ];
      
      
    
  return (
    <section className="w-full px-10 md:px-20 py-20 bg-white">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        
        {/* Left content */}
        <div className="flex-1 ">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            <span className="border-b-8 border-yellow-400">Fasilitas</span> yang kami <br />Tawarkan!
          </h2>
          <ul className="list-inside list-disc space-y-2 text-gray-800 text-lg">
            <li>10 Laboratorium penunjang praktikum</li>
            <li>Perpustakaan Pusat sekolah</li>
            <li>Ruang kelas ber-AC dan projector</li>
            <li>Aula Serbaguna</li>
            <li>Ruang OSIS & UKS</li>
          </ul>
          <a
            href="#"
            className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
          >
            Selengkapnya →
          </a>
        </div>

        {/* Right content: Video + Cards */}
        <div className="flex-1">
          {/* Video */}
          <div className="rounded-xl overflow-hidden shadow-lg mb-6">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/CGr98yMNA5E?si=isqUCiNw0ndDUKaP"
                title="Fasilitas"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Cards */}
          <div className="min-h-screen bg-amber flex justify-center items-center gap-6 p-6 flex-wrap">
            {cardData.map((card, index) => (
                <Card
                key={index}
                label={card.label}
                title={card.title}
                description={card.description}
                />
            ))}
    </div>


          {/* <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-xl shadow">
              <span className="text-sm text-purple-600 font-bold">Featured</span>
              <h3 className="text-lg font-semibold mt-2">Laboratorium IPA Terpadu</h3>
              <p className="text-sm text-gray-600 mt-1">
                Tempat bagi siswa untuk melakukan berbagai penelitian.
              </p>
              <a href="#" className="text-blue-600 font-semibold text-sm mt-2 inline-block">
                Selengkapnya
              </a>
            </div>

            <div className="p-4 border rounded-xl shadow">
              <span className="text-sm text-blue-600 font-bold">Popular</span>
              <h3 className="text-lg font-semibold mt-2">Lapangan Olahraga Multiguna</h3>
              <p className="text-sm text-gray-600 mt-1">
                Area bagi siswa untuk berbagai aktivitas kebugaran.
              </p>
              <a href="#" className="text-blue-600 font-semibold text-sm mt-2 inline-block">
                Selengkapnya
              </a>
            </div>

            <div className="p-4 border rounded-xl shadow">
              <span className="text-sm text-green-600 font-bold">New</span>
              <h3 className="text-lg font-semibold mt-2">Studio Rekaman & Multimedia</h3>
              <p className="text-sm text-gray-600 mt-1">
                Tempat bagi siswa untuk belajar distribusi media.
              </p>
              <a href="#" className="text-blue-600 font-semibold text-sm mt-2 inline-block">
                Selengkapnya
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
