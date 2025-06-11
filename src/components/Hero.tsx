
import { ChevronDown, Shield, Terminal, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="flex justify-center space-x-6 mb-8 animate-pulse">
          <Shield className="w-8 h-8 text-cyan-400" />
          <Terminal className="w-8 h-8 text-green-400" />
          <Network className="w-8 h-8 text-blue-400" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          TIMOTHY
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
            BARAKA
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
          Cybersecurity Specialist & ICT Technician
        </p>
        
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Applied Computing Graduate | Network Security Expert | Ethical Hacker
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            onClick={scrollToAbout}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 text-lg font-semibold transition-all duration-300"
          >
            Download CV
          </Button>
        </div>
        
        <div className="animate-bounce">
          <ChevronDown 
            className="w-8 h-8 text-slate-400 mx-auto cursor-pointer hover:text-cyan-400 transition-colors"
            onClick={scrollToAbout}
          />
        </div>
      </div>
    </section>
  );
};
