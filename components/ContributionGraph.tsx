"use client";

import { GitHubCalendar } from "react-github-calendar";

const ContributionGraph = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white/60">
      <h2 className="text-2xl font-bold mb-8 text-white text-center">
        My GitHub Contributions
      </h2>
      <div className="w-full flex justify-center px-4">
        <GitHubCalendar
          username="koredeycode"
          colorScheme="dark"
          fontSize={12}
          blockSize={20}
          blockMargin={5}
          theme={{
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
          style={{
            color: "white",
          }}
        />
      </div>
    </div>
  );
};

export default ContributionGraph;
