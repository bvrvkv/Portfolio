
import { User, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-slate-800 border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <User className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Who I Am</h3>
                    <p className="text-slate-300 leading-relaxed">
                      I'm a recent Applied Computing graduate with a passion for cybersecurity, AI augmentation, and problem-solving. 
                      With hands-on experience in technical support, resource management, and ICT coordination, I thrive in dynamic 
                      environments that require innovation and collaboration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700 hover:border-green-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Target className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">My Mission</h3>
                    <p className="text-slate-300 leading-relaxed">
                      I aim to excel in Information Technology by enhancing my skills and applying innovative solutions. 
                      My goal is to contribute effectively in a dynamic environment, leveraging expertise in IT infrastructure, 
                      cybersecurity, and system administration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Heart className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">What Drives Me</h3>
                    <p className="text-slate-300 leading-relaxed">
                      My background in cybersecurity, ethical hacking, and emerging technologies fuels my drive to create 
                      impactful solutions. I value teamwork, effective communication, and using technology to address 
                      real-world challenges while maintaining continuous learning and growth.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center lg:text-left">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-6">Personal Info</h3>
              <div className="space-y-4 text-slate-300">
                <div className="flex justify-between items-center py-2 border-b border-slate-600">
                  <span className="font-medium">Full Name:</span>
                  <span>Timothy Baraka</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-600">
                  <span className="font-medium">Date of Birth:</span>
                  <span>November 16, 2001</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-600">
                  <span className="font-medium">Nationality:</span>
                  <span>Kenyan</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-600">
                  <span className="font-medium">Location:</span>
                  <span>Ongata Rongai, Kenya</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Languages:</span>
                  <span>English, Swahili</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
