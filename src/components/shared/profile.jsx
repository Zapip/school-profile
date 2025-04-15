import Image from "next/image";

const Profile = () => {
  return (
    <section className="bg-[url('/bgprofile.png')] bg-cover bg-center h-full w-full ">
      <h1 className="flex text-3xl justify-center md:text-6xl font-black text-gray pt-15">
        Bersama SMAN X, Raih Pendidikan Terbaik
      </h1>

      <h3 className="px-20 text-center text-xl py-15 text-gray">
      Dengan fasilitas modern, tenaga pendidik yang kompeten, dan kurikulum yang inovatif, SMA X siap mengantarkan siswa menuju masa depan yang gemilang. Bergabunglah bersama kami dan rasakan pengalaman pendidikan yang tak terlupakan.

      </h3>

      <div className="w-full h-220 aspect-video flex justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 pb-4">
          {/* Frame header seperti browser tab */}
          <div className="bg-white rounded-t-xl px-4 py-2 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <span className="text-sm text-gray-600">uteach.com</span>
            <div className="w-16" /> {/* Spacer */}
          </div>

          {/* Iframe Container */}
          <div className="aspect-video w-full bg-black rounded-b-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/CGr98yMNA5E?si=isqUCiNw0ndDUKaP"
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
