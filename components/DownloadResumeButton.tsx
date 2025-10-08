"use client";

// import { useState } from "react";
// import { FiDownload } from "react-icons/fi";
// import { Button } from "./ui/button";

// export default function DownloadResumeButton() {
//   const [isDownloading, setIsDownloading] = useState(false);
//   const handleDownload = () => {
//     setIsDownloading(true);
//     const link = document.createElement("a");
//     link.href = "/Yusuf_Akorede_Resume.pdf";
//     link.download = "Yusuf_Akorede_Resume.pdf"; // optional custom name
//     link.click();
//     setIsDownloading(false);
//   };

//   return (
//     <Button
//       onClick={handleDownload}
//       variant="outline"
//       size="lg"
//       className="uppercase flex items-center gap-2"
//     >
//       <span>{isDownloading ? "Downloading" : "Download"} CV</span>
//       <FiDownload className="text-xl" />
//     </Button>
//   );
// }

import { useState } from "react";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import { Button } from "./ui/button";

export default function DownloadResumeButton() {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);

    // Open PDF in a new browser tab
    window.open("/Yusuf-Akorede-CV.pdf", "_blank", "noopener,noreferrer");

    // Reset state after a short delay (so user sees the loading state briefly)
    setTimeout(() => setIsOpening(false), 500);
  };

  return (
    <Button
      onClick={handleOpen}
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      disabled={isOpening}
    >
      <span>{isOpening ? "Opening..." : "Open CV"}</span>
      <FiExternalLink className="text-xl" />
    </Button>
  );
}
