"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ];
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background border-b border-border-light:"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <nav className="flex items-center justify-between h-20">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="header-logo cursor-pointer hover:opacity-70 transition-opacity"
          >
            RK
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                offset={-80}
                className="nav-link cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden label-small"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu?.classList.toggle("hidden");
            }}
          >
            MENU
          </button>
        </nav>
        <div id="mobile-menu" className="hidden md:hidden pb-6 bg-background">
          <div className="flex flex-col space-y-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                offset={-80}
                className="nav-link cursor-pointer block"
                onClick={() => {
                  document
                    .getElementById("mobile-menu")
                    ?.classList.add("hidden");
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
