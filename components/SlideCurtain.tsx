"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const SlideCurtain = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="fixed inset-0 z-40 pointer-events-none"
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
      />
    </AnimatePresence>
  );
};

export default SlideCurtain;
