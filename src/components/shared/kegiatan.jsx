// import Image from "next/image";
// import GalleryGrid from "../atoms/GalleryGrid";
const Kegiatan = () => {
  return (
    <section className="w-full h-fit px-10 md:px-20 py-20 bg-white flex flex-col md:flex-row justify-between ">
      <div className="w-1/2 bg-[url('/Col.png')] bg-cover bg-center"></div>
      {/* <GalleryGrid
        images={[
          { src: "/kemendikbud.png", className: "col-span-1 row-span-2" },
          { src: "/kemendikbud.png", className: "col-span-1 row-span-3" },
          { src: "/kemendikbud.png", className: "col-span-1 row-span-2" },
          { src: "/kemendikbud.png", className: "col-span-1 row-span-2" },
          { src: "/kemendikbud.png", className: "col-span-1 row-span-6" },
          { src: "/kemendikbud.png", className: "col-span-1 row-span-6" },
          { src: "/kemendikbud.png", className: "col-span-1 row-span-1" },
          { src: "/kemendikbud.png", className: "col-span-1 row-span-1" },
          // ...tambahkan sesuai pola yang kamu inginkan
        ]}
      /> */}

      <section className="w-1/2 ml-5 py-12">
        <h1 className="text-5xl text-gray-900 font-black">
          Intip Keseruan Kegiatan Kami Disini
        </h1>
        <h3 className="py-12 text-xl text-gray-900 leading-relaxed">
          Temukan berbagai kegiatan menarik yang kami selenggarakan di sini!
          Kami menawarkan beragam aktivitas yang mencakup bidang akademik, seni,
          olahraga, dan juga kegiatan sosial. Dari seminardan workshop yang
          mendidik, pertunjukan seni yang memukau, hingga turnamen olahraga yang
          seru, semuanya dirancang untuk memberikan pengalaman yang tak
          terlupakan. Bergabunglah dengan kami dan jadilah bagian dari keluarga
          yang aktif dan kreatif!
        </h3>
        <a
          href="#"
          className="inline-block mt-6 text-blue-600 font-semibold hover:underline text-2xl"
        >
          Jelajahi semua kegiatan kami →
        </a>
      </section>
    </section>
  );
};

export default Kegiatan;
