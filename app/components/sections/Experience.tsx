import { Briefcase, Calendar } from "lucide-react";
import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Infogain",
      role: "Consultant UI",
      period: "Oct 2024 - Present",
      description:
        "Frontend development for Auto Physical Damage applications in the vehicle insurance domain.",
      highlights: [
        `Repair Management: Designed and implemented a Technician Portal
with clock-in/out functionality to track repair hours, improving operational visibility for collision repair workflows.`,
        `Photo-Based Estimation (PBE 2.0): Built an AI-powered guided photo
capture system enabling policyholders and adjusters to submit highquality vehicle damage images using OCR and image validation.`,
        `Developed reusable UI components, integrated REST APIs, and ensured
responsive, accessible interfaces for enterprise users.`,
      ],
      tech: [
        "React.js",
        "Redux",
        "Redux-Saga",
        "Storybook",
        "Styled-Components",
        "Jest",
        "RTL",
        "i18",
        "Material-UI",
        "Emotion",
        "REST API",
        "Typescript",
      ],
    },
    {
      company: "6D Technologies Pvt. Ltd",
      role: "Software Engineer",
      period: "Jan 2023 - Oct 2024",
      description:
        "Built scalable micro-frontend architectures and low-code platforms.",
      highlights: [
        `ETOPUP system: Developed a microfrontend-based system to manage
dealer–retailer hierarchies, roles, features, profiles, and commission
workflows using modular, scalable React applications.`,
        `Built reusable frontend modules and configuration-driven components to
support business process automation and rapid feature rollout across
multiple ETOPUP modules.`,
        `Low-code UI platform: Contributed to a low-code UI platform enabling
faster creation of dynamic UIs, integrating React components with
Fastify (Node.js) and Java microservices for seamless backend
communication.`,
      ],
      tech: [
        "React.js",
        "Micro-frontends",
        "Next.js",
        "ShadcnUI",
        "Fastify",
        "Typescript",
        "Bootstrap",
      ],
    },
    {
      company: "TATA Consultancy Services",
      role: "System Engineer",
      period: "Feb 2020 - Jan 2023",
      description:
        "Developed web applications for healthcare and research organizations.",
      highlights: [
        `Bio-safety management: Developed a system enabling research
scientists to submit and manage protocol registrations through intuitive,
validated web interfaces.`,
        `Bio-compatibility ML application: Built an application for healthcare
organizations to classify health-related documents by integrating
machine learning models with a performant frontend.`,
      ],
      tech: [
        "React",
        "Machine Learning",
        "Data Visualization",
        "REST API",
        "Material-UI",
      ],
    },
  ];
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="label mb-8">WORK HISTORY</div>
          <h2 className="title-big mb-16">EXPERIENCE</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="card hover-lift">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase size={20} className="text-accent-primary" />
                      <h3 className="text-regular">{exp.company}</h3>
                    </div>
                    <div className="label-small mb-2">{exp.role}</div>
                  </div>
                  <div className="flex items-center gap-2 label-small opacity-70">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>

                <p className="text-body mb-6 opacity-80">{exp.description}</p>

                <div className="mb-6">
                  <div className="label-small mb-3">KEY ACHIEVEMENT</div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hindex) => (
                      <li
                        key={hindex}
                        className="text-body flex items-start gap-2"
                      >
                        <span className="text-accent-primary mt-1">.</span>
                        <span className="opacity-80">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="label-small mb-3">TECHNOLOGIES</div>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, tindex) => (
                      <span
                        key={tindex}
                        className="label-small px-3 py-1 border border-border-color"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
