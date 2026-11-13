"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

const ContributionGraph = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const dark = resolvedTheme !== "light";

  return (
    <div className="flex flex-col items-center justify-center text-muted overflow-x-auto">
      <h2 className="h3 mb-8 text-foreground text-center">
        Consistency, on the record
      </h2>
      <div className="w-full flex justify-center px-4">
        {mounted && (
          <GitHubCalendar
            key={resolvedTheme}
            username="koredeycode"
            colorScheme={dark ? "dark" : "light"}
            fontSize={12}
            blockSize={13}
            blockMargin={5}
            theme={
              dark
                ? {
                    dark: ["#1a2338", "#0e4429", "#006d32", "#26a641", "#2dd4bf"],
                  }
                : undefined
            }
            style={{
              color: dark ? "#94a3b8" : "#64748b",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ContributionGraph;
