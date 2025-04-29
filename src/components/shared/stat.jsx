import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const Stat = () => {
  const stats = [
    { value: "1200+", label: "Siswa berprestasi" },
    { value: "80+", label: "Guru Professional" },
    { value: "150+", label: "Kelas Internasional" },
  ];

  return (
    <article className="w-full bg-slate-900 py-[70px] px-5 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Arrow */}
        <button className="p-3 h-12 w-12 hidden md:flex rounded-full border transition duration-200 hover:border-2 text-white justify-center items-center mb-5 md:mb-0">
          <ChevronLeftIcon className="w-5 h-5 text-white" />
        </button>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full text-center justify-center items-center">
          {stats.map((stat, index) => (
            <section
              key={index}
              className="text-6xl text-yellow-400 font-black flex flex-col justify-center text-center min-w-[250px]"
            >
              {stat.value}
              <p className="text-2xl pt-10 font-normal text-white">
                {stat.label}
              </p>
            </section>
          ))}
        </section>

        {/* Right Arrow */}
        <button className="p-3 h-12 w-12 hidden md:flex rounded-full border transition duration-200 hover:border-2 text-white justify-center items-center mt-5 md:mt-0">
          <ChevronRightIcon className="w-5 h-5 text-white" />
        </button>
      </div>
    </article>
  );
};

export default Stat;
