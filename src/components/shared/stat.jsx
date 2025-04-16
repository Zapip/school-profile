import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const Stat = () => {
  return (
    <section className="w-full bg-slate-900 py-[70px] px-20 relative">
      {/* Left Arrow */}
      <div className="absolute left-20 top-1/2 -translate-y-1/2 p-3 h-12 w-12 rounded-full border transition duration-200 hover:border-2 text-white flex justify-center items-center">
        <ChevronLeftIcon className="w-5 h-5 text-white" />
      </div>

      {/* Right Arrow */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 p-3 h-12 w-12 rounded-full border transition duration-200 hover:border-2 text-white flex justify-center items-center">
        <ChevronRightIcon className="w-5 h-5 text-white" />
      </div>

      {/* Stats Grid */}
      <div className="flex justify-center gap-60 w-full text-center">
        <div className="text-8xl text-yellow-400 font-black flex flex-col justify-center text-center">
          1200+
          <p className="text-2xl pt-10 font-normal text-white">Siswa berprestasi</p>
        </div>
        <div className="text-8xl text-yellow-400 font-black flex flex-col justify-center text-center">
          80+
          <p className="text-2xl pt-10 font-normal text-white">Guru Professional</p>
        </div>
        <div className="text-8xl text-yellow-400 font-black flex flex-col justify-center text-center">
          150+
          <p className="text-2xl pt-10 font-normal text-white">Kelas Internasional</p>
        </div>
      </div>
    </section>
  );
};

export default Stat;
