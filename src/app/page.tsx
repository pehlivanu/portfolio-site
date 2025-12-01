import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-full pb-20">
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center text-ide-text opacity-50 text-sm font-mono">
        <p>Built with Next.js 16 & Tailwind CSS</p>
      </footer>
    </div>
  );
}
