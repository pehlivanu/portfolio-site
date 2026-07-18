import dynamic from "next/dynamic";
import About from "@/components/sections/About";

const Experience = dynamic(() => import("@/components/sections/Experience"), { ssr: true });
const Education = dynamic(() => import("@/components/sections/Education"), { ssr: true });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: true });

import Footer from "@/components/layout/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Liviu Ionesi",
    url: "https://liviuionesi.com",
    jobTitle: "Technical Lead & Senior Full-Stack Engineer",
    description:
      "Technical Lead & Senior Full-Stack Engineer. Building the digital backbone of the Automotive and Fintech industries. I specialize in Spring Boot microservices, React frontends, and driving high-velocity, enterprise-grade software delivery through AI-augmented workflows.",
    knowsAbout: [
      "Spring Boot",
      "Microservices",
      "React",
      "Next.js",
      "Java",
      "Automotive Software",
      "Fintech",
      "Enterprise Software Architecture",
    ],
    sameAs: [
      "https://github.com/pehlivanu",
      "https://linkedin.com/in/liviu-ionesi",
      "https://www.xing.com/profile/Liviu_Ionesi/web_profile",
    ],
  };

  return (
    <div className="min-h-full pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <About />
      <Experience />
      <Education />
      <Projects />

  
      <Footer />
    </div>
  );
}
