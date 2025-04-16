import Image from "next/image"
const Kegiatan = () => {
    return (
        <section className="w-full h-screen px-10 md:px-20 py-20 bg-white flex justify-between ">
            <div className="w-[50%] bg-white bg-[url('/Col.png')] bg-cover bg-center">
                
            </div>

            <div className="w-[50%] ml-5 py-12">
                <h1 className="text-7xl text-gray-900 font-black">Intip Keseruan Kegiatan Kami Disini</h1>
                <h3 className="py-12 text-2xl text-gray-900 leading-relaxed">Temukan berbagai kegiatan menarik yang kami selenggarakan di sini! Kami menawarkan beragam aktivitas yang mencakup bidang akademik, seni, olahraga, dan juga kegiatan sosial. Dari seminardan workshop yang mendidik, pertunjukan seni yang memukau, hingga turnamen olahraga yang seru, semuanya dirancang untuk memberikan pengalaman yang tak terlupakan. Bergabunglah dengan kami dan jadilah bagian dari keluarga yang aktif dan kreatif!</h3>
                <a href="#" className="inline-block mt-6 text-blue-600 font-semibold hover:underline text-2xl">Jelajahi semua kegiatan kami →</a>
            </div>
            
        </section>
    )
}

export default Kegiatan