import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Core",
      skills: [
        "React.js",
        "Next.js",
        "Redux",
        "Redux-Saga",
        "TypeScript",
        "JavaScript",
      ],
    },
    {
      category: "Styling & UI",
      skills: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Material-UI",
        "ShadcnUI",
        "Styled-Components",
        "Emotion",
      ],
    },
    {
      category: "Testing & Quality",
      skills: ["Jest", "React Testing Library", "Enzyme", "Storybook"],
    },
    {
      category: "Architecture & Tools",
      skills: [
        "Micro-frontends",
        "Webpack",
        "Git & GitHub",
        "Visual Studio Code",
        "i18n",
      ],
    },
    {
      category: "Backend Exposure",
      skills: ["Node.js", "Express", "Fastify", "REST APIs"],
    },
  ];

  return (
    <section id="skils" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* section label */}
          <div className="label mb-8">TECHNICAL EXPERTISE</div>
          <h2 className="title-big mb-16">SKILLS</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="card hover-lift">
                <div className="card-title mb-4">{category.category}</div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="label-small px-3 py-2 border border-border-color bg-transparent hover:bg-accent-primary hover:text-accent-foreground transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
