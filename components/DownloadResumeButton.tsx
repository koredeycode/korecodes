"use client";

import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { Button } from "./ui/button";

export default function DownloadResumeButton() {
  const [isDownloading, setIsDownloading] = useState(false);
  const handleDownload = () => {
    setIsDownloading(true);
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Yusuf-Akorede-Resume.pdf"; // optional custom name
    link.click();
    setIsDownloading(false);
  };

  return (
    <Button
      onClick={handleDownload}
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
    >
      <span>{isDownloading ? "Downloading" : "Download"} CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
}
