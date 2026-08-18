import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="conteudo" className="flex-1">
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
