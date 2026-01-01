"use client";

import { useEffect } from "react";
import GridBackGround from "@/components/shared/GridBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  return (
    <div className="relative">
      <GridBackGround />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
