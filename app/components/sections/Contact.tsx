import { Github, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "rushikeshkamble9256@gmail.com",
      link: "mailto:rushikeshkamble9256@gmail.com",
    },
    {
      icon: Phone,
      label: "PHONE",
      value: "+91 7620851558",
      link: "tel:+917620851558",
    },
    {
      icon: Linkedin,
      label: "LINKEDIN",
      value: "rushikeshrk987-in",
      link: "https://www.linkedin.com/in/rushikeshrk987-in",
    },
    {
      icon: Github,
      label: "GITHUB",
      value: "rushigithub12",
      link: "https://github.com/rushigithub12",
    },
  ];
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="label mb-8">GET IN TOUCH</div>
          <h2 className="title-big mb-16">CONTACT</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-regular mb-6">Let's work together</p>
              <p className="text-body opacity-80 mb-8">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out.
              </p>
              <div className="card">
                <div className="label-small mb-4">AVAILABILITY</div>
                <div className="text-body">Open to full-time opportunities</div>
              </div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card hover-lift flex items-start gap-4"
                  >
                    <div className="p-3 border border-border-color">
                      <Icon size={24} className="text-accent-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="label-small mb-2 opacity-70">
                        {info.label}
                      </div>
                      <div className="text-body break-all">{info.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
