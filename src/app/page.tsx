import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OpenSource } from "@/components/OpenSource";
import { Personal } from "@/components/Personal";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Writing } from "@/components/Writing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Writing />
        <OpenSource />
        <Education />
        <Personal />
        <Contact />
      </main>
      <footer className="border-t border-line bg-white/70 px-5 py-8 text-center text-sm text-graphite">
        <p>(c) {new Date().getFullYear()} Saket Garodia. Built with Next.js, TypeScript, and Tailwind CSS.</p>
      </footer>
    </>
  );
}
