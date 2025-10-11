import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import TechStackMarquee from "@/components/TechStackMarquee";
import Projects from "@/components/project";
import Blogs from "@/components/Blogs";
import CalltoAction from "@/components/CalltoAction";
import SectionBorder from "@/components/SectionBorder";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero/About Section */}
      <Reveal delay={0.1} duration={0.6} amount={0.3}>
        <Hero />
      </Reveal>

      {/* Section Border */}
      <Reveal delay={0.05} duration={0.4} amount={0.8}>
        <SectionBorder className="max-w-2xl mx-auto mt-8 mb-2" />
      </Reveal>

      {/* Experience Section */}
      <Reveal delay={0.1} duration={0.6} amount={0.3}>
        <Experience />
      </Reveal>

      {/* Section Border */}
      <Reveal delay={0.05} duration={0.4} amount={0.8}>
        <SectionBorder className="max-w-2xl mx-auto mt-8 mb-2" />
      </Reveal>

      {/* Tech Stack Section */}
      <Reveal delay={0.1} duration={0.6} amount={0.3}>
        <div className="max-w-2xl mx-auto mt-12 mb-12">
          <TechStackMarquee className="w-full" />
        </div>
      </Reveal>

      {/* Section Border */}
      <Reveal delay={0.05} duration={0.4} amount={0.8}>
        <SectionBorder className="max-w-2xl mx-auto mt-8 mb-2" />
      </Reveal>

      {/* Projects Section */}
      <Reveal delay={0.1} duration={0.6} amount={0.3}>
        <Projects />
      </Reveal>

      {/* Section Border */}
      <Reveal delay={0.05} duration={0.4} amount={0.8}>
        <SectionBorder className="max-w-2xl mx-auto mt-8 mb-2" />
      </Reveal>

      {/* Blogs Section */}
      <Reveal delay={0.1} duration={0.6} amount={0.3}>
        <Blogs />
      </Reveal>

      {/* Section Border */}
      <Reveal delay={0.05} duration={0.4} amount={0.8}>
        <SectionBorder className="max-w-2xl mx-auto mt-8 mb-2" />
      </Reveal>

      {/* Call to Action Section */}
      <Reveal delay={0.1} duration={0.6} amount={0.4}>
        <CalltoAction />
      </Reveal>
    </>
  );
}
