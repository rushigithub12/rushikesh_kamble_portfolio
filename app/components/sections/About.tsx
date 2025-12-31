import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* section label */}
          <div className="label mb-8">ABOUT ME</div>
          {/* section title */}
          <h2 className="title-big mb-16">WHO I AM</h2>

          {/* content Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-regular mb-6">
                I am a Senior Frontend Engineer with 6+ years of experience
                building scalable, enterprise-grade web application.
              </p>
              <p className="text-body mb-6">
                I specialize in React, Redux, Next.js and Typescript and have
                work extensively on micro-frontend architecture, API-driven UIs,
                and performance optimization.
              </p>
              <p className="text-body">
                Currently working at Infogain in the vehicle insurance domain,
                building clainm processing systems and guided photo catpure
                platforms.
              </p>
            </div>
            <div className="space-y-8">
              <div className="card">
                <div className="label-small mb-2 text-accent-primary">
                  EXPERIENCE
                </div>
                <div className="text-regular">6+ Years</div>
                <div className="text-body mt-2 opacity-70">
                  Building enterprise web applications
                </div>
              </div>

              <div className="card">
                <div className="label-small mb-2 text-accent-primary">
                  FOCUS
                </div>
                <div className="text-regular">Frontend Architecture</div>
                <div className="text-body mt-2 opacity-70">
                  Micro-frontends, Performance, Scalability
                </div>
              </div>

              <div className="card">
                <div className="label-small mb-2 text-accent-primary">
                  DOMAIN
                </div>
                <div className="text-regular">Insurance & Enterprise</div>
                <div className="text-body mt-2 opacity-70">
                  Vehicle claims, HealthCare, Financial systems
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
