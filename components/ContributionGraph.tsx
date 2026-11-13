"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

const ContributionGraph = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  // Auto-scroll the calendar to the right end (most recent weeks) once it
  // renders wider than the viewport; re-run when the theme remounts it.
  useEffect(() => {
    if (!mounted) return;
    const el = scrollRef.current;
    if (!el) return;
    let tries = 0;
    const timer = window.setInterval(() => {
      tries += 1;
      if (el.scrollWidth > el.clientWidth) {
        el.scrollLeft = el.scrollWidth;
        window.clearInterval(timer);
      } else if (tries > 40) {
        window.clearInterval(timer);
      }
    }, 200);
    return () => window.clearInterval(timer);
  }, [mounted, resolvedTheme]);

  const dark = resolvedTheme !== "light";

  return (
    <div className="text-muted">
      <h2 className="h3 mb-8 text-foreground text-center">
        Consistency, on the record
      </h2>
      <div ref={scrollRef} className="overflow-x-auto pb-2">
        <div className="w-fit mx-auto px-4">
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
    </div>
  );
};

export default ContributionGraph;
