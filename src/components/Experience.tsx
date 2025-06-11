
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      title: "ICT Technician",
      company: "USIU-Africa, Kenya",
      period: "September 2024 - December 2024 (Intern)",
      location: "Nairobi, Kenya",
      status: "Continuing from April 2025",
      responsibilities: [
        "Installation and configuration of computer hardware and software components",
        "Provided multimedia and IT support for classrooms and major events",
        "Assisted in network infrastructure setup, troubleshooting, and maintenance",
        "Managed system updates, backups, and security patches",
        "Provided remote and onsite technical support to staff and clients",
        "Coordinated with IT teams to enhance cybersecurity protocols and system resilience"
      ]
    },
    {
      title: "Technician – Security Systems",
      company: "Girder Engineering LTD, Kenya",
      period: "Previous Role",
      location: "Kenya",
      responsibilities: [
        "Installed and configured security systems, including CCTV, access control, and alarm systems",
        "Handled CCTV installation, maintenance, and troubleshooting",
        "Integrated security systems with network infrastructure for remote access and monitoring",
        "Provided technical advice and support on security infrastructure improvements"
      ]
    }
  ];

  const volunteer = {
    title: "Children's Ward Volunteer",
    organization: "Fatima Mission Hospital",
    period: "November 2017 - December 2017",
    location: "Kenya",
    activities: [
      "Maintained clean and comfortable environment for children",
      "Assisted with meal preparation and feeding",
      "Engaged children in recreational activities and reading",
      "Provided companionship and emotional support"
    ]
  };

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                  <div className="lg:w-1/3 mb-6 lg:mb-0">
                    <div className="flex items-center mb-3">
                      <div className="bg-cyan-500 p-2 rounded-lg mr-4">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-slate-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      {exp.status && (
                        <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium inline-block mt-2">
                          {exp.status}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities:</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                <div className="lg:w-1/3 mb-6 lg:mb-0">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-500 p-2 rounded-lg mr-4">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{volunteer.title}</h3>
                      <p className="text-blue-400 font-medium">{volunteer.organization}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-slate-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{volunteer.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{volunteer.location}</span>
                    </div>
                    <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium inline-block mt-2">
                      Volunteer Work
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <h4 className="text-lg font-semibold text-white mb-4">Activities:</h4>
                  <ul className="space-y-3">
                    {volunteer.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 leading-relaxed">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
