import React from "react";
import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";
import ResumeButton from "../custom/ResumeButton";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          {/* small Label */}
          <div className="label mb-8 opacity-70">FRONTENED ENGINEER</div>

          {/* Main hero title */}
          <h1 className="hero-title mb-8">
            RUSHIKESH
            <br />
            KAMBLE
          </h1>

          {/* Subtitle */}
          <p className="text-big mb-12 max-w-3xl">
            Senior Frontend Engineer specializing in React, Next.js, and
            Typescript. 6+ years building scalable enterprise applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="btn-accent cursor-pointer"
            >
              VIEW PROJECTS
            </Link>
            <ResumeButton />
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="btn-ghost cursor-pointer"
            >
              CONTACT ME
            </Link>
          </div>
          {/* Scroll Indicator */}
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="inline-flex items-center gap-2 label-small cursor-pointer hover:opacity-70 transition-opacity"
          >
            SCROLL TO EXPLORE
            <ArrowDown size={12} className="animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
