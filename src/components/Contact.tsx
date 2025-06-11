
import { Mail, Phone, MapPin, User, MessageSquare, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bvrvkvtimi@gmail.com",
      link: "mailto:bvrvkvtimi@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+254) 708267906",
      link: "tel:+254708267906"
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "+254 708267906",
      link: "https://wa.me/254708267906"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "942-00511, Ongata Rongai, Kenya",
      link: null
    }
  ];

  const references = [
    {
      name: "Peter Siwatum",
      title: "Supervisor – USIU-Africa",
      email: "psiwatum@usiu.ac.ke",
      phone: "(+254) 703306444"
    },
    {
      name: "Erikson Kimiti",
      title: "Supervisor",
      email: "kibserikson@gmail.com",
      phone: "(+254) 721364251"
    },
    {
      name: "Collins Ondiek",
      title: "University Lecturer – KCA University",
      email: "a.ondiek@kcau.ac.ke",
      phone: "(+254) 724759925"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how I can contribute to your team's success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                const content = (
                  <Card className="bg-slate-800 border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="bg-cyan-500 p-2 rounded-lg">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm">{contact.label}</p>
                          <p className="text-white font-medium">{contact.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );

                return contact.link ? (
                  <a key={index} href={contact.link} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Send className="w-6 h-6 text-cyan-400 mr-3" />
                  Send Me a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-300 mb-2">Your Name</label>
                      <Input 
                        placeholder="Enter your name" 
                        className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-2">Your Email</label>
                      <Input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Subject</label>
                    <Input 
                      placeholder="Enter subject" 
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2">Message</label>
                    <Textarea 
                      placeholder="Enter your message" 
                      rows={6}
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-500"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 text-lg font-semibold transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <User className="w-6 h-6 text-green-400 mr-3" />
              Professional References
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {references.map((ref, index) => (
                <Card key={index} className="bg-slate-700 border-slate-600 hover:border-green-500 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-semibold text-white mb-2">{ref.name}</h4>
                    <p className="text-green-400 text-sm mb-3">{ref.title}</p>
                    <div className="space-y-1 text-slate-300 text-sm">
                      <p>
                        <a href={`mailto:${ref.email}`} className="hover:text-cyan-400 transition-colors">
                          {ref.email}
                        </a>
                      </p>
                      <p>
                        <a href={`tel:${ref.phone.replace(/\s/g, '')}`} className="hover:text-cyan-400 transition-colors">
                          {ref.phone}
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <p className="text-slate-400">
            © 2024 Timothy Baraka. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
