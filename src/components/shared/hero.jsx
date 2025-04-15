'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* LEFT: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Pendidikan{' '}
            <span className="relative inline-block">
              <span className="text-indigo-900">Berkualitas</span>
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-orange-500 z-[-1] rounded-sm"></span>
            </span>
            <br />
            untuk Generasi Masa Depan
          </h1>
          <p className="mt-6 text-gray-700 text-lg">
            Lingkungan belajar yang kondusif dan fasilitas modern untuk mendukung perkembangan potensi siswa secara optimal.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg shadow">
              Daftar Sekarang
            </button>
            <button className="flex items-center gap-2 text-blue-600 font-medium">
              <span className="material-icons">play_circle</span> Profil Sekolah
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            Dipercaya oleh <span className="text-gray-700 font-semibold">Lembaga Pendidikan</span>
          </div>
        </div>

        {/* RIGHT: Images & Chat */}
        <div className="relative md:w-1/2 mt-12 md:mt-0 flex justify-center items-center">
          {/* Chat bubbles */}
          <div className="absolute top-0 left-0 md:-translate-x-1/4 text-sm space-y-2">
            <div className="bg-white rounded-xl shadow px-4 py-2">Yuk, ikut gabung bersama kami</div>
            <div className="bg-white rounded-xl shadow px-4 py-2">Seru loo! belajar disini</div>
          </div>

          <div className="relative z-10">
            <div className="w-[200px] h-[200px] rounded-full bg-orange-100 absolute -top-6 -right-6 z-[-1]"></div>
            <Image src="/girl-student.png" alt="Siswi" width={250} height={250} className="rounded-full" />
          </div>

          <div className="absolute bottom-0 right-0 md:translate-x-1/4 text-sm space-y-2 text-white">
            <div className="bg-gray-800 rounded-xl px-4 py-2">Pendidikan berkualitas adalah prioritas kami.</div>
            <div className="bg-gray-800 rounded-xl px-4 py-2">Setiap siswa bisa sukses.</div>
          </div>

          <div className="absolute bottom-0 left-0 bg-amber-600">
            <Image src="/boy-student.png" alt="Siswa" width={200} height={200} className="rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}