"use client";

import { FiDownload } from "react-icons/fi";
import { Button } from "./ui/button";

export default function DownloadResumeButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Yusuf-Akorede-Resume.pdf"; // optional custom name
    link.click();
  };

  return (
    <Button
      onClick={handleDownload}
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
}
