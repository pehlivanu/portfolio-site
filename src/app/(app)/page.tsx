import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";

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
