"use client";

import { about, education, experience, skillsData } from "@/constants";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiDirectus,
  SiExpo,
  SiExpress,
  SiNestjs,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// Icon mapping for skills
const iconMap: Record<string, ReactNode> = {
  FaHtml5: <FaHtml5 />,
  FaCss3: <FaCss3 />,
  FaJs: <FaJs />,
  SiTypescript: <SiTypescript />,
  FaReact: <FaReact />,
  SiExpo: <SiExpo />,
  SiNextdotjs: <SiNextdotjs />,
  SiTailwindcss: <SiTailwindcss />,
  FaNodeJs: <FaNodeJs />,
  SiExpress: <SiExpress />,
  SiNestjs: <SiNestjs />,
  FaGitAlt: <FaGitAlt />,
  FaFigma: <FaFigma />,
  SiDirectus: <SiDirectus />,
};

// Build skills with actual icons
const skills = {
  ...skillsData,
  skillList: skillsData.skillList.map((skill) => ({
    ...skill,
    icon: iconMap[skill.iconName],
  })),
};

import DownloadResumeButton from "@/components/DownloadResumeButton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-6"
    >
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h1 className="h2 mb-4">
            My <span className="text-accent">Resume</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Here is a summary of my professional experience and skills.
          </p>
        </div>
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
            <TabsList className="flex flex-row flex-wrap justify-center sm:justify-start gap-1 bg-white/5 p-1 rounded-lg flex-1">
              <TabsTrigger 
                className="flex-1 px-6 py-3 rounded-md text-base font-medium transition-all data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=inactive]:text-white/60 hover:text-white" 
                value="experience"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger 
                className="flex-1 px-6 py-3 rounded-md text-base font-medium transition-all data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=inactive]:text-white/60 hover:text-white" 
                value="education"
              >
                Education
              </TabsTrigger>
              <TabsTrigger 
                className="flex-1 px-6 py-3 rounded-md text-base font-medium transition-all data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=inactive]:text-white/60 hover:text-white" 
                value="skills"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger 
                className="flex-1 px-6 py-3 rounded-md text-base font-medium transition-all data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=inactive]:text-white/60 hover:text-white" 
                value="about"
              >
                About Me
              </TabsTrigger>
            </TabsList>
            <DownloadResumeButton />
          </div>
          <ScrollArea className="h-[60vh] w-full bg-white/5 rounded-xl p-6 sm:p-8">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                {/* <ScrollArea className="h-[400px]"> */}
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                {/* </ScrollArea> */}
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                {/* <ScrollArea className="h-[400px]"> */}
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                {/* </ScrollArea> */}
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group gap-2">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                              <p className="capitalize text-sm">{skill.name}</p>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full h-full"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[120px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.fieldName}</span>
                        <h3 className="text-xl text-center lg:text-left">
                          {item.fieldValue}
                        </h3>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
