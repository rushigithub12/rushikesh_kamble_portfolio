import { ExternalLink, Github } from "lucide-react";
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "PBE (Photo-Based Estimation)",
      category: "AI-Powered Insurance Platform",
      description:
        "Enterprise-grade AI-powered photo capture and damage assessment platform for automotive insurance. Enables intelligent guided workflow with OCR and real-time image quality analysis.",
      tech: ["React", "Redux", "TypeScript", "OCR API", "Material-UI"],
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      featured: true,
    },
    {
      title: "ETOPUP Service Platform",
      category: "Micro-Frontend Architecture",
      description:
        "Comprehensive dealer and retailer hierarchy management system. Built with micro-frontend architecture for modular development and scalability.",
      tech: ["React", "Micro-frontends", "Redux", "Node.js"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      featured: true,
    },
    {
      title: "Low Code UI Platform",
      category: "Dynamic UI Builder",
      description:
        "Platform to build dynamic UIs with minimal code, expediting project delivery. Integrated with Fastify Node.js and Java microservices backend.",
      tech: ["React", "Node.js", "Fastify", "Java", "REST API"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      featured: true,
    },
    {
      title: "Bio-Compatibility ML Application",
      category: "Healthcare & Machine Learning",
      description:
        "Web application for healthcare organizations to classify documents using ML algorithms. Features dynamic data visualization and reporting.",
      tech: ["React", "Machine Learning", "Data Visualization", "REST API"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    },
    {
      title: "Financial Dashboard",
      category: "Next.js Application",
      description:
        "Modern financial dashboard built with Next.js featuring real-time data updates and interactive charts for financial analysis.",
      tech: ["Next.js", "React", "TypeScript", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      title: "Bio-Safety Management System",
      category: "Research & Compliance",
      description:
        "Web application for research scientists to submit protocol registrations with intuitive interfaces and robust data validation.",
      tech: ["React", "Redux", "Form Validation", "REST API"],
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="label mb-8">SELECTED WORK</div>

          <h2 className="title-big mb-16">PROJECTS</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`card hover-lift overflow-hidden group ${
                  project.featured ? "md:col=span-2" : ""
                }`}
              >
                <div className="relative aspect-video mb-6 overflow-hidden bg-color-background -m-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-from-text-primary/20 to-transparent"></div>
                </div>

                {/* Project content */}
                <div className="space-y-4">
                  <div className="label-small text-accent-primary">
                    {project.category}
                  </div>
                </div>
                <h3 className="text-regular">{project.title}</h3>
                <p className="text-body opacity-80">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="label-small px-3 py-1 border border-border-light bg-color-background"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    className="btn-ghost flex items-center gap-2 opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <ExternalLink size={14} />
                    LIVE DEMO
                  </button>
                  <button
                    className="btn-ghost flex items-center gap-2 opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <Github size={14} />
                    SOURCE CODE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
