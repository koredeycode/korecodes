"use client"
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact
} from "react-icons/fa";
import {
  SiAppwrite,
  SiDirectus,
  SiExpo,
  SiExpress,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
  SiVite, SiHono
} from "react-icons/si";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

import { projects } from "@/constants";

// Icon mapping
const stackIcons: { [key: string]: React.ReactNode } = {
  "Html 5": <FaHtml5 />,
  "HTML5": <FaHtml5 />,
  "Css 3": <FaCss3 />,
  "CSS3": <FaCss3 />,
  "JavaScript": <FaJs />,
  "TypeScript": <SiTypescript />,
  "React.js": <FaReact />,
  "React Native": <SiExpo />,
  "Next.js": <SiNextdotjs />,
  "NextJS": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  "TailwindCSS": <SiTailwindcss />,
  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  "NestJS": <SiNestjs />,
  "Nest.js": <SiNestjs />,
  "PostgreSQL": <SiPostgresql />,
  "Fumadocs": <SiNextdotjs />, // Fallback or specific icon if available
  "Directus": <SiDirectus />,
  "Vite": <SiVite />,
  "Appwrite": <SiAppwrite />,
  "Plasmo": <SiVite />,
  "Solidity": <SiSolidity />,
  "Hono.js": <SiHono />,
};

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const searchParams = useSearchParams();

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  useEffect(() => {
    const title = searchParams.get("title");
    if (title && swiper) {
      const index = projects.findIndex(
        (p) => p.title.toLowerCase() === title.toLowerCase()
      );
      if (index !== -1) {
        swiper.slideTo(index);
        setProject(projects[index]);
      }
    }
  }, [searchParams, swiper]);

  return (
    <motion.section
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
            My <span className="text-accent">Projects</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Here are some of my recent projects.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div>
                <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block">
                  {project.category} project
                </span>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.title}
                </h2>
              </div>
              <p className="text-white/60">{project.description}</p>
              
              {/* Stack Badges */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => {
                  return (
                    <Badge 
                      key={index} 
                      variant="accent" 
                      className="text-base px-3 py-1 gap-2 bg-accent/10 border-accent/20 text-accent hover:bg-accent/20"
                    >
                      {stackIcons[item.name] && <span className="text-lg">{stackIcons[item.name]}</span>}
                      {item.name}
                    </Badge>
                  );
                })}
              </div>

              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {project.github_api && (
                  <Link
                    href={project.github_api}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>API repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              onSwiper={setSwiper}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[300px] sm:h-[400px] xl:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    <WorkSliderBtns
                      containerStyles="flex gap-2 absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-4 z-20 justify-center"
                      iconStyles=""
                      btnStyles="bg-accent hover:bg-accent-hover text-primary text-[18px] sm:text-[22px] w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] flex justify-center items-center transition-all"
                    />
                    </div>
                  </SwiperSlide>
                );
              })}
              
              {/* <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                iconStyles=""
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              /> */}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
