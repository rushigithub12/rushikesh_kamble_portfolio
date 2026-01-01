import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MERN FullStack Ecommerce App",
      category: "Ecommerce",
      description:
        "Built a production-grade full-stack e-commerce application using the MERN stack with a secure user storefront and role-based admin panel. Implemented authentication using Passport.js and JWT, along with dynamic product filtering, sorting, pagination, and persistent cart management. Integrated Stripe Payment Intents and webhooks for secure online payments and reliable order confirmation. Added automated email notifications for orders and password resets using Nodemailer. Deployed the server on Render and Frontend on Vercel with production-ready environment and security configurations.",
      tech: [
        "React",
        "Redux-toolkit",
        "React Hook Form",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Passport.js",
        "JWT Authentication",
        "Stripe",
        "tailwind-css",
        "Render",
        "Vercel",
      ],
      image: "/projectFiles/EcommercePageScreenshot.png",
      demoLink: "https://mern-e-commerce-app-nu.vercel.app",
      repoLink: "https://github.com/rushigithub12/MERN-eCommerce-app.git",
      featured: true,
    },
    {
      title: "Financial Dashboard",
      category: "Next.js Application",
      description:
        "Developed a full-stack financial dashboard with public and authentication-protected routes, invoice CRUD, search and pagination, and server-side data fetching/mutations. Implemented secure authentication, form validation, error handling, performance optimizations, and SEO-ready metadata",
      tech: [
        "Next.js",
        "React.js",
        "TypeScript",
        "tailwind-css",
        "postgres",
        "next-auth",
        "zod",
      ],
      image: "/projectFiles/Financial-dashboard-home.png",
      demoLink: "https://financial-dashboard-nextjs-omega.vercel.app",
      repoLink:
        "https://github.com/rushigithub12/financial_dashboard_nextjs.git",
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
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink size={14} />
                    LIVE DEMO
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
                  >
                    <Github size={14} />
                    SOURCE CODE
                  </a>
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
