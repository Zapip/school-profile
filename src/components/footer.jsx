import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex gap-1 items-start">
            <Image src="logo.svg" width={24} height={24} alt="logo" />
            <h2 className="text-2xl font-bold mb-4">Uteach</h2>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigasi Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tentang-kami"
                  className="hover:text-blue-300 transition duration-200"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/testimoni"
                  className="hover:text-blue-300 transition duration-200"
                >
                  Testimoni
                </Link>
              </li>
              <li>
                <Link
                  href="/kegiatan"
                  className="hover:text-blue-300 transition duration-200"
                >
                  Kegiatan
                </Link>
              </li>
              <li>
                <Link
                  href="/ppdb"
                  className="hover:text-blue-300 transition duration-200"
                >
                  PPDB
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Alamat</h3>
            <p className="mb-4">
              Jl. Pemuda no 14 Desa Karanggayam
              <br />
              Kec. Sinduadi Kab. Sleman Yogyakarta
              <br />
              ID 77854
            </p>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a
              href="mailto:info@uteach.com"
              className="hover:text-blue-300 transition duration-200"
            >
              info@uteach.com
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Sosial Media</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com/uteach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition duration-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@uteach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition duration-200"
                >
                  Tiktok
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/uteach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition duration-200"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            uteach © {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/terms"
              className="text-sm hover:text-blue-300 transition duration-200"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm hover:text-blue-300 transition duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-sm hover:text-blue-300 transition duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
