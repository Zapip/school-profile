"use client";

import { useEffect, useState } from "react";
import {
  AcademicCapIcon,
  BookOpenIcon,
  PencilIcon,
  MagnifyingGlassCircleIcon,
  DocumentTextIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const Ppdb = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set on first render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const profiles = [
    {
      id: 1,
      position: { desktop: "top-10 left-20", mobile: "top-10 left-5" },
      size: { desktop: 64, mobile: 48 },
    },
    {
      id: 2,
      position: { desktop: "top-24 right-32", mobile: "top-5 right-10" },
      size: { desktop: 48, mobile: 40 },
    },
    {
      id: 3,
      position: { desktop: "bottom-20 left-16", mobile: "bottom-20 left-5" },
      size: { desktop: 40, mobile: 32 },
    },
    {
      id: 4,
      position: { desktop: "top-40 left-40", mobile: "top-32 left-12" },
      size: { desktop: 56, mobile: 40 },
    },
    {
      id: 5,
      position: { desktop: "bottom-32 right-24", mobile: "bottom-24 right-8" },
      size: { desktop: 64, mobile: 48 },
    },
    {
      id: 6,
      position: { desktop: "top-16 right-16", mobile: "top-16 right-5" },
      size: { desktop: 48, mobile: 32 },
    },
    {
      id: 7,
      position: { desktop: "bottom-16 right-40", mobile: "bottom-16 right-12" },
      size: { desktop: 56, mobile: 40 },
    },
    {
      id: 8,
      position: { desktop: "bottom-40 left-40", mobile: "bottom-36 left-16" },
      size: { desktop: 40, mobile: 32 },
    },
    {
      id: 9,
      position: { desktop: "top-48 right-48", mobile: "top-40 right-16" },
      size: { desktop: 64, mobile: 48 },
    },
    {
      id: 10,
      position: {
        desktop: "bottom-48 right-56",
        mobile: "bottom-40 right-20",
      },
      size: { desktop: 48, mobile: 40 },
    },
  ];

  const icons = [
    {
      id: 1,
      icon: <BookOpenIcon className="h-6 w-6" />,
      position: { desktop: "top-24 left-[20%]", mobile: "top-20 left-[15%]" },
    },
    {
      id: 2,
      icon: <AcademicCapIcon className="h-6 w-6" />,
      position: {
        desktop: "bottom-24 left-[30%]",
        mobile: "bottom-20 left-[25%]",
      },
    },
    {
      id: 3,
      icon: <PencilIcon className="h-6 w-6" />,
      position: {
        desktop: "top-32 right-[20%]",
        mobile: "top-28 right-[10%]",
      },
    },
    {
      id: 4,
      icon: <MagnifyingGlassCircleIcon className="h-6 w-6" />,
      position: {
        desktop: "bottom-40 right-[30%]",
        mobile: "bottom-36 right-[15%]",
      },
    },
    {
      id: 5,
      icon: <DocumentTextIcon className="h-6 w-6" />,
      position: {
        desktop: "top-48 left-[30%]",
        mobile: "top-40 left-[20%]",
      },
    },
  ];

  return (
    <article
      className="relative flex flex-col items-center justify-center bg-yellow-400 h-screen md:h-screen"
      id="ppdb"
    >
      {/* Background icons */}
      {icons.map((item) => (
        <div
          key={item.id}
          className={`absolute text-white opacity-40 ${
            isMobile ? item.position.mobile : item.position.desktop
          }`}
        >
          {item.icon}
        </div>
      ))}

      {/* Floating Profile Images */}
      {profiles.map((profile) => {
        const size = isMobile ? profile.size.mobile : profile.size.desktop;
        return (
          <div
            key={profile.id}
            className={`absolute ${
              isMobile ? profile.position.mobile : profile.position.desktop
            }`}
          >
            <div
              className="overflow-hidden rounded-full border-2 border-white shadow-lg"
              style={{ width: size, height: size }}
            >
              <img
                src="/images/placeholder/profile.png"
                alt={`Profile ${profile.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        );
      })}

      {/* Main Content */}
      <section className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl md:max-w-4xl">
        <h2 className="mb-4 text-2xl md:text-4xl font-bold text-gray-800">
          Bergabunglah dengan Dunia Pembelajaran Kami!
        </h2>
        <p className="mb-8 text-gray-800 md:text-lg">
          Dengan kurikulum yang komprehensif dan tenaga pendidik yang
          berdedikasi, kami siap mengantarkan Anda menuju kesuksesan.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <a
            href="#daftar"
            className="w-full md:w-auto px-6 py-3 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
          >
            Daftar Sekarang
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3 rounded-md bg-green-500 text-white font-medium flex items-center justify-center hover:bg-green-600 transition-colors"
          >
            <PhoneIcon className="h-5 w-5 mr-2 stroke-2" />
            Konsultasi Gratis
          </a>
        </div>
      </section>
    </article>
  );
};

export default Ppdb;
