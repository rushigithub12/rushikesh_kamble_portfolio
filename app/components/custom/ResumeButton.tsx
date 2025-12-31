import React from "react";
import { Download } from "lucide-react";

const ResumeButton = () => {
  return (
    <a
      href="/resume/Rushikesh_Kamble_Resume.pdf"
      download
      className="btn-primary flex items-center justify-center gap-2"
    >
      <Download size={16} />
      DOWNLOAD RESUME
    </a>
  );
};

export default ResumeButton;
