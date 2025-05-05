// import Image from "next/image";
import GalleryGrid from "../atoms/GalleryGrid";
const Kegiatan = () => {
  return (
    <article className="w-full h-fit px-10 py-0 md:px-20 md:py-20 bg-white flex flex-col md:flex-row justify-between ">
      {/* <section className="w-1/2 bg-[url('/Col.png')] bg-cover bg-center hidden md:block"></section> */}
      <GalleryGrid />

      <section className="md:w-1/2 py-12">
        <h1 className=" text-2xl md:text-5xl text-gray-900 font-black">
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
    </article>
  );
};

export default Kegiatan;
