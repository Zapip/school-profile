import VideoBrowserFrame from "../atoms/VideoCard";

const Profile = () => {
  return (
    <article className="bg-[url('/bgprofile.png')] bg-cover bg-center h-fit w-full p-4 md:p-20 py-8" id="video_profile">
      <h1 className="flex text-3xl justify-center md:text-5xl font-black text-gray text-center">
        Bersama SMAN X, Raih Pendidikan Terbaik
      </h1>

      <h3 className="text-center text-sm md:text-xl text-gray my-12 mt-4">
        Dengan fasilitas modern, tenaga pendidik yang kompeten, dan kurikulum
        yang inovatif, SMA X siap mengantarkan siswa menuju masa depan yang
        gemilang. Bergabunglah bersama kami dan rasakan pengalaman pendidikan
        yang tak terlupakan.
      </h3>

      <section className="w-full h-full aspect-video flex justify-center">
        <VideoBrowserFrame videoUrl="https://www.youtube.com/embed/CGr98yMNA5E?si=isqUCiNw0ndDUKaP" />
      </section>
    </article>
  );
};

export default Profile;
