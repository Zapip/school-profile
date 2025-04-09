"use client";

import { useEffect, useState } from "react";

export default function Ppdb() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const profiles = [
    { id: 1, position: { desktop: "top-10 left-20", mobile: "top-10 left-5" } },
    {
      id: 2,
      position: { desktop: "top-24 right-32", mobile: "top-5 right-10" },
    },
    {
      id: 3,
      position: { desktop: "bottom-20 left-16", mobile: "bottom-20 left-5" },
    },
    {
      id: 4,
      position: { desktop: "top-40 left-40", mobile: "top-32 left-12" },
    },
    {
      id: 5,
      position: { desktop: "bottom-32 right-24", mobile: "bottom-24 right-8" },
    },
    {
      id: 6,
      position: { desktop: "top-16 right-16", mobile: "top-16 right-5" },
    },
    {
      id: 7,
      position: { desktop: "bottom-16 right-40", mobile: "bottom-16 right-12" },
    },
    {
      id: 8,
      position: { desktop: "bottom-40 left-40", mobile: "bottom-36 left-16" },
    },
    {
      id: 9,
      position: { desktop: "top-48 right-48", mobile: "top-40 right-16" },
    },
    {
      id: 10,
      position: { desktop: "bottom-48 right-56", mobile: "bottom-40 right-20" },
    },
  ];

  const icons = [
    {
      id: 1,
      icon: "📚",
      position: { desktop: "top-20 left-1/4", mobile: "top-20 left-1/4" },
    },
    {
      id: 2,
      icon: "🎓",
      position: { desktop: "bottom-24 left-1/3", mobile: "bottom-24 left-20" },
    },
    {
      id: 3,
      icon: "✏️",
      position: { desktop: "top-32 right-1/4", mobile: "top-32 right-10" },
    },
    {
      id: 4,
      icon: "🔍",
      position: {
        desktop: "bottom-40 right-1/3",
        mobile: "bottom-36 right-16",
      },
    },
    {
      id: 5,
      icon: "📝",
      position: { desktop: "top-48 left-1/3", mobile: "top-44 left-16" },
    },
  ];

  return (
    <article
      className="relative bg-yellow-400 py-16 md:py-24 h-full md:h-screen"
      id="ppdb"
    >
      {/* Background icons */}
      {icons.map((icon) => (
        <div
          key={icon.id}
          className={`absolute opacity-10 text-2xl ${
            isMobile ? icon.position.mobile : icon.position.desktop
          }`}
        >
          {icon.icon}
        </div>
      ))}

      {/* Profile images */}
      {/* {profiles.map((profile) => (
        <div
          key={profile.id}
          className={`absolute ${
            isMobile ? profile.position.mobile : profile.position.desktop
          }`}
        >
          <div
            className={`h-${
              profile.id % 3 === 0 ? "16" : profile.id % 2 === 0 ? "12" : "10"
            } w-${
              profile.id % 3 === 0 ? "16" : profile.id % 2 === 0 ? "12" : "10"
            } overflow-hidden rounded-full border-2 border-white shadow-lg`}
          >
            <img
              src={`images/placeholder/profile.png`}
              alt={`Profile ${profile.id}`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ))} */}

      {/* Content */}
      <div className="container relative mx-auto px-4 text-center z-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-gray md:text-4xl">
            Bergabunglah dengan Dunia Pembelajaran Kami!
          </h2>
          <p className="mb-8 text-gray-800 md:text-lg">
            Dengan kurikulum yang komprehensif dan tenaga pendidik yang
            berdedikasi, kami siap mengantarkan Anda menuju kesuksesan.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <a
              href="#daftar"
              className="w-full rounded-md bg-orange-500 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-600 md:w-auto"
            >
              Daftar Sekarang
            </a>
            <a
              href="https://wa.me/1234567890"
              className="flex w-full items-center justify-center rounded-md bg-green-500 px-6 py-3 font-medium text-white transition-colors hover:bg-green-600 md:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
