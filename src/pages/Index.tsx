
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
