import { motion } from "framer-motion";

const curtainAnimation = {
  initial: (direction: string) => ({
    x: direction === "left" ? "-100%" : "100%",
  }),
  animate: { x: "0%" },
  exit: (direction: string) => ({
    x: direction === "left" ? "100%" : "-100%",
  }),
};

const Curtain = () => {
  const panelCount = 5;
  return (
    <>
      {[...Array(panelCount)].map((_, index) => {
        const direction = index % 2 === 0 ? "left" : "right";
        return (
          <motion.div
            key={index}
            custom={direction}
            variants={curtainAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
            className="h-full flex-1 bg-accent relative"
          />
        );
      })}
    </>
  );
};

export default Curtain;
