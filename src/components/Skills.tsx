
import { Shield, Terminal, Network, Users, Brain, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Cybersecurity & Network Security",
      icon: Shield,
      color: "text-red-400",
      bgColor: "bg-red-500",
      skills: [
        "Network Security & Infrastructure Protection",
        "Ethical Hacking & Penetration Testing",
        "Digital Forensics & Cyber Investigation",
        "Threat Analysis & Incident Response",
        "Risk Management & Compliance",
        "Cryptography",
        "Social Engineering Awareness",
        "Operating System Security"
      ]
    },
    {
      title: "Technical & System Administration",
      icon: Terminal,
      color: "text-green-400",
      bgColor: "bg-green-500",
      skills: [
        "System Administration & IT Support",
        "Network Configuration & Troubleshooting",
        "Hardware & Software Installation",
        "System Updates & Security Patches",
        "Remote & Onsite Technical Support",
        "Multimedia & Event Support",
        "Application Deployment"
      ]
    },
    {
      title: "Security Systems & Infrastructure",
      icon: Network,
      color: "text-blue-400",
      bgColor: "bg-blue-500",
      skills: [
        "CCTV & Security Systems Integration",
        "Access Control Systems",
        "Alarm Systems Installation",
        "Network Infrastructure Setup",
        "Remote Monitoring Solutions",
        "Security Infrastructure Consulting"
      ]
    },
    {
      title: "Communication & Leadership",
      icon: Users,
      color: "text-purple-400",
      bgColor: "bg-purple-500",
      skills: [
        "Technical Communication to Non-Technical Stakeholders",
        "Teamwork & Collaboration",
        "Conflict Resolution",
        "IT Training & User Education",
        "Project Coordination",
        "Active Listening & Empathy"
      ]
    },
    {
      title: "Problem Solving & Analysis",
      icon: Brain,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500",
      skills: [
        "Analytical Thinking",
        "Troubleshooting Under Pressure",
        "Innovation & Creative Solutions",
        "Adaptability",
        "Continuous Learning",
        "Strategic Problem-Solving"
      ]
    }
  ];

  const interests = [
    "Music & Audio Production",
    "Science Fiction & Supernatural Themes",
    "Animation & Digital Art",
    "Fiction Reading",
    "Sports & Fitness",
    "Technology Trends",
    "Creative Storytelling"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="text-cyan-400">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className={`bg-slate-800 border-slate-700 hover:border-opacity-50 transition-all duration-300 hover:transform hover:scale-105 group`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`${category.bgColor} p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-lg font-bold text-white group-hover:${category.color} transition-colors duration-300`}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <div className={`w-2 h-2 ${category.bgColor} rounded-full mr-3 opacity-70`}></div>
                        <span className="text-slate-300 text-sm leading-relaxed hover:text-white transition-colors duration-200">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-slate-800 border-slate-700 hover:border-cyan-500 transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg mr-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Interests & Hobbies</h3>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              I find balance between my love for technology and creative interests. Whether it's exploring sci-fi themes, 
              staying active through sports, or diving into innovative tech solutions, I believe in maintaining a well-rounded 
              perspective that fuels both personal growth and professional excellence.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-slate-700 text-slate-300 hover:bg-cyan-500 hover:text-white transition-all duration-300 cursor-default"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
