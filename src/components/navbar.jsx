"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="w-full sticky top-0 bg-white shadow-sm z-90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <section className="flex gap-x-12">
          <Link href="/" className="flex items-center gap-0.5">
            <Image src="logo.svg" width={24} height={24} alt="Logo" />
            <span className="text-2xl font-bold text-gray">Uteach</span>
          </Link>
          <div className="hidden items-center gap-8 lg:flex font-medium">
            {/* Nav Links */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("tentang")}
                className="flex items-center gap-1 px-1 py-2 text-gray-800 hover:text-orange-500 "
              >
                Tentang Kami{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  className={cn(
                    "transition-transform",
                    openDropdown === "tentang" && "rotate-180"
                  )}
                >
                  <path
                    d="M12.0709 13.314L17.0209 8.364C17.1131 8.26849 17.2235 8.19231 17.3455 8.1399C17.4675 8.08749 17.5987 8.05991 17.7315 8.05875C17.8643 8.0576 17.996 8.0829 18.1189 8.13318C18.2417 8.18346 18.3534 8.25772 18.4473 8.35161C18.5412 8.4455 18.6154 8.55715 18.6657 8.68005C18.716 8.80295 18.7413 8.93463 18.7402 9.06741C18.739 9.20018 18.7114 9.3314 18.659 9.45341C18.6066 9.57541 18.5304 9.68576 18.4349 9.778L12.7779 15.435C12.5904 15.6225 12.3361 15.7278 12.0709 15.7278C11.8057 15.7278 11.5514 15.6225 11.3639 15.435L5.7069 9.778C5.61139 9.68576 5.53521 9.57541 5.4828 9.45341C5.43039 9.3314 5.4028 9.20018 5.40165 9.06741C5.4005 8.93463 5.4258 8.80295 5.47608 8.68005C5.52636 8.55715 5.60061 8.4455 5.6945 8.35161C5.7884 8.25772 5.90005 8.18346 6.02295 8.13318C6.14584 8.0829 6.27752 8.0576 6.4103 8.05875C6.54308 8.05991 6.6743 8.08749 6.7963 8.1399C6.91831 8.19231 7.02865 8.26849 7.1209 8.364L12.0709 13.314Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              {openDropdown === "tentang" && (
                <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md bg-white py-2 shadow-lg">
                  <Link
                    href="/tentang/profil"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profil
                  </Link>
                  <Link
                    href="/tentang/visi-misi"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Visi & Misi
                  </Link>
                  <Link
                    href="/tentang/struktur"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Struktur Organisasi
                  </Link>
                </div>
              )}
            </div>

            <a
              href="#testimoni"
              className="px-1 py-2 text-gray-800 hover:text-orange-500"
            >
              Testimoni
            </a>

            <a
              href="/kegiatan"
              className="px-1 py-2 text-gray-800 hover:text-orange-500"
            >
              Kegiatan
            </a>

            <a
              href="/ppdb"
              className="px-1 py-2 text-gray-800 hover:text-orange-500"
            >
              PPDB
            </a>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("lainnya")}
                className="flex items-center gap-1 px-1 py-2 text-gray-800 hover:text-orange-500"
              >
                Lainnya{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  className={cn(
                    "transition-transform",
                    openDropdown === "lainnya" && "rotate-180"
                  )}
                >
                  <path
                    d="M12.0709 13.314L17.0209 8.364C17.1131 8.26849 17.2235 8.19231 17.3455 8.1399C17.4675 8.08749 17.5987 8.05991 17.7315 8.05875C17.8643 8.0576 17.996 8.0829 18.1189 8.13318C18.2417 8.18346 18.3534 8.25772 18.4473 8.35161C18.5412 8.4455 18.6154 8.55715 18.6657 8.68005C18.716 8.80295 18.7413 8.93463 18.7402 9.06741C18.739 9.20018 18.7114 9.3314 18.659 9.45341C18.6066 9.57541 18.5304 9.68576 18.4349 9.778L12.7779 15.435C12.5904 15.6225 12.3361 15.7278 12.0709 15.7278C11.8057 15.7278 11.5514 15.6225 11.3639 15.435L5.7069 9.778C5.61139 9.68576 5.53521 9.57541 5.4828 9.45341C5.43039 9.3314 5.4028 9.20018 5.40165 9.06741C5.4005 8.93463 5.4258 8.80295 5.47608 8.68005C5.52636 8.55715 5.60061 8.4455 5.6945 8.35161C5.7884 8.25772 5.90005 8.18346 6.02295 8.13318C6.14584 8.0829 6.27752 8.0576 6.4103 8.05875C6.54308 8.05991 6.6743 8.08749 6.7963 8.1399C6.91831 8.19231 7.02865 8.26849 7.1209 8.364L12.0709 13.314Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              {openDropdown === "lainnya" && (
                <div className="absolute right-0 top-full z-10 mt-1 w-48 rounded-md bg-white py-2 shadow-lg">
                  <Link
                    href="/lainnya/fasilitas"
                    className="block px-4 py-2 hover:bg-gray-100 text-amber"
                  >
                    Fasilitas
                  </Link>
                  <Link
                    href="/lainnya/galeri"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Galeri
                  </Link>
                  <Link
                    href="/lainnya/kontak"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Kontak
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* Mobile menu button */}
        <button
          className="ml-auto block lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currenColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
        {/* Instagram Button */}
        <Link
          href="https://instagram.com/shcool_name"
          className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-yellow-400 to-pink-500 px-4 py-2 text-white lg:flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <span>shcool_name</span>
        </Link>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 top-[72px] z-20 w-full bg-white px-4 py-4 shadow-md lg:hidden">
            <div className="flex flex-col space-y-4">
              <div className="border-b pb-2">
                <button
                  onClick={() => toggleDropdown("tentang-mobile")}
                  className="flex w-full items-center justify-between py-2 text-gray-800"
                >
                  <span>Tentang Kami</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={cn(
                      "transition-transform",
                      openDropdown === "tentang-mobile" && "rotate-180"
                    )}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {openDropdown === "tentang-mobile" && (
                  <div className="ml-4 mt-2 flex flex-col space-y-2">
                    <Link
                      href="/tentang/profil"
                      className="py-1 text-gray-600 hover:text-orange-500"
                    >
                      Profil
                    </Link>
                    <Link
                      href="/tentang/visi-misi"
                      className="py-1 text-gray-600 hover:text-orange-500"
                    >
                      Visi & Misi
                    </Link>
                    <Link
                      href="/tentang/struktur"
                      className="py-1 text-gray-600 hover:text-orange-500"
                    >
                      Struktur Organisasi
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/testimoni"
                className="border-b py-2 text-gray-800 hover:text-orange-500"
              >
                Testimoni
              </Link>

              <Link
                href="/kegiatan"
                className="border-b py-2 text-gray-800 hover:text-orange-500"
              >
                Kegiatan
              </Link>

              <Link
                href="/ppdb"
                className="border-b py-2 text-gray-800 hover:text-orange-500"
              >
                PPDB
              </Link>

              <div className="border-b pb-2">
                <button
                  onClick={() => toggleDropdown("lainnya-mobile")}
                  className="flex w-full items-center justify-between py-2 text-gray-800"
                >
                  <span>Lainnya</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={cn(
                      "transition-transform",
                      openDropdown === "lainnya-mobile" && "rotate-180"
                    )}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {openDropdown === "lainnya-mobile" && (
                  <div className="ml-4 mt-2 flex flex-col space-y-2">
                    <Link
                      href="/lainnya/fasilitas"
                      className="py-1 text-gray-600 hover:text-orange-500"
                    >
                      Fasilitas
                    </Link>
                    <Link
                      href="/lainnya/galeri"
                      className="py-1 text-gray-600 hover:text-orange-500"
                    >
                      Galeri
                    </Link>
                    <Link
                      href="/lainnya/kontak"
                      className="py-1 text-gray-600 hover:text-orange-500"
                    >
                      Kontak
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="https://instagram.com/shcool_name"
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-yellow-400 to-pink-500 px-4 py-2 text-center text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>shcool_name</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
