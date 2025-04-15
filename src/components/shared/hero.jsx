'use client';

import Image from 'next/image';
import {PlayCircleIcon} from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="w-full px-5 md:px-20 py-23">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center w-full gap-0">
        {/* LEFT: Text */}
        <div className="text-center md:text-left w-1/2 pr-20 ">
          <h1 className="text-5xl md:text-[78px] font-black text-gray-900 leading-tight">
            Pendidikan <br /> Berkualitas <br />untuk Generasi Masa Depan
          </h1>
          <p className="mt-6 text-gray-700 text-[28px]">
            Lingkungan belajar yang kondusif dan fasilitas modern untuk mendukung perkembangan potensi siswa secara optimal.
          </p>
          <div className="mt-8 flex flex-wrap gap-5 justify-center md:justify-start">
            <button className="bg-orange-600 hover:bg-orange-700 text-white text-[28px] font-semibold px-17 py-5 rounded-2xl shadow w-auto h-auto ">
              Daftar Sekarang
            </button>
            <button className="flex items-center gap-3 text-blue-600 font-medium text-[26px]">
                <span className="material-icons">
                <PlayCircleIcon className='w-8 h-8'/>
                </span> 
                Profil Sekolah
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <Image
                src="/Press.png"
                alt="Lembaga"
                width={300}
                height={20}
                className='w-full h-auto pt-20'
            />
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="md:mt-0">
          <Image
            src="/boy-student.png"
            alt="Siswa"
            width={400}
            height={550}
            className="w-[750px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
