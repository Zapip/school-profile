import Blog from "@/components/shared/blog";
import Ppdb from "@/components/shared/ppdb";
import Testimoni from "@/components/shared/testimoni";

export default function Home() {
  return (
    <main className="min-h-screen bg-white w-full">
      <Testimoni />
      <Blog />
      <Ppdb />
    </main>
  );
}
