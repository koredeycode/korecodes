"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const social = [
  { icon: <FaGithub />, path: "https://github.com/koredeycode" },
  { icon: <FaLinkedinIn />, path: "https://ng.linkedin.com/in/koredeycode" },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/@yusufakoredeyusuf5233",
  },
  { icon: <FaTwitter />, path: "https://x.com/korecodes" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 2,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <motion.div
      className={containerStyles}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {social.map((item, index) => {
        return (
          <motion.div key={index} variants={iconVariants}>
            <Link href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Socials;
