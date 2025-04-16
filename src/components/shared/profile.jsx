import Image from "next/image";
import VideoBrowserFrame from "../atoms/VideoCard";

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
        <VideoBrowserFrame videoUrl="https://www.youtube.com/embed/CGr98yMNA5E?si=isqUCiNw0ndDUKaP" />
      </div>
    </section>
  );
};

export default Profile;
