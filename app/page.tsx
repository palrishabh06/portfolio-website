import Navbar from "@/src/components/Navbar";
import About from "@/src/sections/about/About";
import Hero from "@/src/sections/hero/Hero";
import Projects from "@/src/sections/projects/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}