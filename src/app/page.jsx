import Testimoni from "@/components/shared/testimoni";
import Blog from "@/components/shared/blog";
import Ppdb from "@/components/shared/ppdb";

export default function Home() {
  return (
    <main className="min-h-screen bg-white w-full">
      <Testimoni />
      <Blog />
      <Ppdb />
    </main>
  );
}
