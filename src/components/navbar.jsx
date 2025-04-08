"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src={"/logo.svg"} width={24} height={24} alt="Logo" />
              <span className="text-2xl font-bold text-orange">Uteach</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/tentang-kami"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Tentang Kami
            </Link>
            <Link
              href="/testimoni"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Testimoni
            </Link>
            <Link
              href="/kegiatan"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Kegiatan
            </Link>
            <Link
              href="/ppdb"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              PPDB
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Lainnya
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                <Link
                  href="/fasilitas"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Fasilitas
                </Link>
                <Link
                  href="/berita"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Berita
                </Link>
                <Link
                  href="/galeri"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Galeri
                </Link>
                <Link
                  href="/kontak"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Kontak
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/tentang-kami"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Tentang Kami
            </Link>
            <Link
              href="/testimoni"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Testimoni
            </Link>
            <Link
              href="/kegiatan"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Kegiatan
            </Link>
            <Link
              href="/ppdb"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              PPDB
            </Link>
            <Link
              href="/fasilitas"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Fasilitas
            </Link>
            <Link
              href="/berita"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Berita
            </Link>
            <Link
              href="/galeri"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Galeri
            </Link>
            <Link
              href="/kontak"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Kontak
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
