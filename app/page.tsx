import Navbar from "@/src/components/Navbar";
import About from "@/src/sections/about/About";
import Contact from "@/src/sections/contact/Contact";
import Footer from "@/src/sections/contact/Footer";
import Github from "@/src/sections/github/Github";
import Hero from "@/src/sections/hero/Hero";
import Projects from "@/src/sections/projects/Projects";
import Skills from "@/src/sections/skills/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Github />
      <Contact />
      <Footer />
    </main>
  );
}