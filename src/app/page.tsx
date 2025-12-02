import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";

import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-full pb-20">
      <Hero />
      <Experience />
      <Education />
      <Projects />

  
      <Footer />
    </div>
  );
}
