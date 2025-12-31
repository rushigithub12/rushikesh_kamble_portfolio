"use client";

import Image from "next/image";
import { useEffect } from "react";
import GridBackGround from "@/components/shared/GridBackground";
import { Button } from "@/components/ui/button";
import Hero from "@/components/sections/Hero";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  return (
    <div className="relative">
      <GridBackGround />
      <Hero />
    </div>
  );
}
