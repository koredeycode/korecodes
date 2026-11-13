"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-9 h-9" aria-hidden />;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );
};

export default ThemeToggle;
