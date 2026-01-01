import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border-light bg-white">
      <div className="container mx-auto px-6 md:px:12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="header-logo">RK</div>

            <div className="text-body opacity-70 flex items-center gap-2">
              © {currentYear} Rushikesh Kamble. Built with{" "}
              <Heart
                size={16}
                className="text-accent-primary"
                fill="currentColor"
              />
              and Next.js
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/rushikeshrk987-in"
                target="_blank"
                rel="noopener noreferrer"
                className="label-small hover:opacity-70 transition-opacity"
              >
                LINKEDIN
              </a>
              <a
                href="https://github.com/rushigithub12"
                target="_blank"
                rel="noopener noreferrer"
                className="label-small hover:opacity-70 transition-opacity"
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
