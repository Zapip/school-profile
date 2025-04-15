import Blog from "@/components/shared/blog";
import Hero from "@/components/shared/hero";
import Ppdb from "@/components/shared/ppdb";
import Testimoni from "@/components/shared/testimoni";

export default function Home() {
  return (
    <main className="min-h-screen bg-white w-full">
      <section id="hero"> <Hero /> </section>
      <section id="testimoni"> <Testimoni /> </section>
      <section id="blog"> <Blog /> </section>
      <section id="ppdb"> <Ppdb /> </section>
    </main>
  )
}
