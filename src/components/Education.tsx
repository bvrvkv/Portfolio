
import { GraduationCap, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Applied Computing",
      institution: "KCA University, Kenya",
      period: "2020 - 2024",
      description: "Comprehensive program covering software development, network security, database management, and emerging technologies.",
      type: "degree"
    },
    {
      degree: "KCSE Certificate",
      institution: "Alliance High School, Kenya",
      period: "2016 - 2019",
      description: "Strong foundation in mathematics, sciences, and computer studies.",
      type: "certificate"
    }
  ];

  const certifications = [
    {
      name: "AI Career Essentials",
      provider: "ALX",
      description: "Comprehensive training in AI fundamentals, machine learning, and career development in the AI field."
    },
    {
      name: "Foundations of Cybersecurity",
      provider: "Google (via Coursera)",
      description: "Essential cybersecurity principles, threat analysis, and security best practices."
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education & <span className="text-cyan-400">Training</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 text-cyan-400 mr-3" />
              Academic Background
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-cyan-500 p-2 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                        <p className="text-cyan-400 font-medium mb-2">{edu.institution}</p>
                        <div className="flex items-center text-slate-400 mb-3">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{edu.period}</span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="w-6 h-6 text-green-400 mr-3" />
              Professional Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-500 p-2 rounded-lg">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-2">{cert.name}</h4>
                        <p className="text-green-400 font-medium mb-3">{cert.provider}</p>
                        <p className="text-slate-300 text-sm leading-relaxed">{cert.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
