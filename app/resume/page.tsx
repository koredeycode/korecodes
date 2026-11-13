"use client";

import DownloadResumeButton from "@/components/DownloadResumeButton";
import { education, experience, skillsData } from "@/constants";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiCode,
} from "react-icons/fi";
import { FaGitAlt, FaJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiDocker,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiHono,
  SiLangchain,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiOllama,
  SiPostgresql,
  SiRedis,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// Icon mapping for skills
const iconMap: Record<string, ReactNode> = {
  SiTypescript: <SiTypescript />,
  FaPython: <FaPython />,
  FaJs: <FaJs />,
  SiSolidity: <SiSolidity />,
  SiLangchain: <SiLangchain />,
  SiFastapi: <SiFastapi />,
  SiOllama: <SiOllama />,
  SiNextdotjs: <SiNextdotjs />,
  FaReact: <FaReact />,
  SiExpo: <SiExpo />,
  SiNestjs: <SiNestjs />,
  SiExpress: <SiExpress />,
  SiHono: <SiHono />,
  SiPostgresql: <SiPostgresql />,
  SiMongodb: <SiMongodb />,
  SiRedis: <SiRedis />,
  SiDocker: <SiDocker />,
  FaGitAlt: <FaGitAlt />,
  SiTailwindcss: <SiTailwindcss />,
};

// Build skills with actual icons
const skills = {
  ...skillsData,
  skillList: skillsData.skillList.map((skill) => ({
    ...skill,
    icon: iconMap[skill.iconName],
  })),
};

// Verified certificate links by institution
const certLinks: Record<string, string> = {
  "ALX Africa": "https://intranet.alxswe.com/certificates/XpCFNxyrEP",
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex flex-col justify-center py-12 xl:px-6"
    >
      <div className="container mx-auto flex flex-col gap-16 xl:gap-20">
        {/* header */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
          <div>
            <p className="section-title mb-3">Resume</p>
            <h1 className="h2 mb-4">
              Experience, education
              <br />
              &amp; <span className="text-accent">skills.</span>
            </h1>
            <p className="text-muted max-w-xl leading-relaxed">
              {experience.description}
            </p>
          </div>
          <DownloadResumeButton />
        </div>

        {/* experience timeline */}
        <section>
          <h2 className="flex items-center gap-3 text-2xl font-semibold mb-8">
            <span className="w-10 h-10 rounded-full border border-border text-accent flex items-center justify-center">
              <FiAward />
            </span>
            {experience.title}
          </h2>
          <ol className="relative border-l border-border ml-2 pl-8 flex flex-col gap-9">
            {experience.items.map((item, index) => (
              <li key={index} className="relative">
                <span className="absolute -left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-accent bg-background"></span>
                <p className="text-accent text-sm font-medium tracking-wide">
                  {item.duration}
                </p>
                <h3 className="text-lg xl:text-xl font-semibold mt-1">
                  {item.position}
                </h3>
                <p className="text-muted mt-0.5">{item.company}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* education */}
        <section>
          <h2 className="flex items-center gap-3 text-2xl font-semibold mb-8">
            <span className="w-10 h-10 rounded-full border border-border text-accent flex items-center justify-center">
              <FiBookOpen />
            </span>
            {education.title}
          </h2>
          <p className="text-muted max-w-xl leading-relaxed mb-8 -mt-4">
            {education.description}
          </p>
          <ul className="grid md:grid-cols-2 gap-5">
            {education.items.map((item, index) => {
              const cert = certLinks[item.institution];
              return (
                <li
                  key={index}
                  className="rounded-2xl border border-border bg-card p-6 xl:p-7 hover:border-accent/40 transition-colors flex flex-col"
                >
                  <p className="text-accent text-sm font-medium tracking-wide">
                    {item.duration}
                  </p>
                  <h3 className="text-lg font-semibold mt-1">
                    {item.degree}
                  </h3>
                  <p className="text-muted mt-0.5">{item.institution}</p>
                  {cert && (
                    <a
                      href={cert}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-accent hover:text-accent-hover inline-flex items-center gap-1 font-medium text-sm"
                    >
                      View certificate <FiArrowUpRight />
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        {/* skills */}
        <section>
          <h2 className="flex items-center gap-3 text-2xl font-semibold mb-8">
            <span className="w-10 h-10 rounded-full border border-border text-accent flex items-center justify-center">
              <FiCode />
            </span>
            {skills.title}
          </h2>
          <p className="text-muted max-w-xl leading-relaxed mb-8 -mt-4">
            {skills.description}
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {skills.skillList.map((skill, index) => (
              <li
                key={index}
                className="rounded-xl border border-border bg-card px-3 py-4 flex flex-col items-center justify-center gap-2 hover:border-accent/40 transition-colors group"
              >
                <span className="text-3xl text-accent">{skill.icon}</span>
                <span className="text-xs capitalize text-center leading-tight text-muted group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default Resume;
