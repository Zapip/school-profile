import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container relative px-4 pt-8 pb-20 mx-auto overflow-hidden md:pt-16">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div className="z-10">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              Pendidikan Berkualitas untuk Generasi Masa Depan
            </h1>
            <p className="mt-4 text-slate-700">
              Lingkungan belajar yang kondusif dan fasilitas modern untuk
              mendukung perkembangan potensi siswa secara optimal.
            </p>
            <div className="flex items-center gap-4 mt-8">
              {/* <Button className="px-6 font-medium bg-orange-500 hover:bg-orange-600">
                Daftar Sekarang
              </Button> */}
              <Link href="#" className="flex items-center gap-2 text-slate-700">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-100">
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
                    className="text-slate-700"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <span>Profil Sekolah</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 mt-16">
              <p className="text-sm text-slate-600">Dioperasikan oleh</p>
              <p className="text-sm font-medium text-slate-800">
                Lembaga Pendidikan
              </p>
              <div className="flex -space-x-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute w-[500px] h-[500px] rounded-full bg-orange-100/80 -right-20 -top-20"></div>
            <div className="relative">
              <div className="absolute top-0 right-0 p-3 text-sm font-medium text-white rounded-lg bg-slate-800 -translate-y-1/2">
                <p>Yuk! Ikut gabung bersama kami!</p>
              </div>
              <div className="absolute p-3 text-sm font-medium text-white rounded-lg bg-slate-800 left-10 top-32">
                <p>Seru kok belajar disini!</p>
              </div>
              <div className="absolute p-3 text-sm font-medium text-white rounded-lg bg-slate-800 left-0 top-48">
                <p>Pendidikan berkualitas adalah prioritas kami</p>
              </div>
              <div className="absolute p-3 text-sm font-medium text-white rounded-lg bg-slate-800 left-20 top-64">
                <p>Setiap siswa bisa sukses</p>
              </div>
              <div className="relative w-[300px] h-[300px] mx-auto overflow-hidden rounded-full bg-orange-300">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Student"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute w-[180px] h-[180px] overflow-hidden rounded-full bg-orange-300 -bottom-10 -right-10">
                <Image
                  src="/placeholder.svg?height=180&width=180"
                  alt="Student"
                  width={180}
                  height={180}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
