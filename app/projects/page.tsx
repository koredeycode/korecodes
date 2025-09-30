"use client";
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
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Wagr",
    description:
      "A decentralized betting platform where users can create, join, and settle wagers securely on-chain.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/wagr.png",
    live: "https://wagr-web.vercel.app", // add live link if deployed
    github: "https://github.com/koredeycode/Wagr",
  },
  {
    num: "02",
    category: "fullstack",
    title: "IPVerse",
    description:
      "Blockchain-powered marketplace for buying and licensing intellectual property assets worldwide.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/ipverse.png",
    live: "https://ipverse.vercel.app/",
    github: "https://github.com/koredeycode/IPVerse",
  },
  {
    num: "03",
    category: "frontend",
    title: "Union Tx Analyzer",
    description:
      "Helps Union Testnets users track their transactions and visualize activity in a clear dashboard.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/assets/work/union.png",
    live: "https://union-transaction-analyzer.vercel.app/", // put your deployed link here
    github: "https://github.com/koredeycode/Union-Transaction-Analyzer",
  },
  {
    num: "04",
    category: "fullstack",
    title: "Stacksync",
    description:
      "Integrates Paystack with Directus for a smooth payment experience — a hackathon-winning project.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/koredeycode/stacksync",
  },
  {
    num: "06",
    category: "fullstack",
    title: "SoundScape",
    description:
      "A music player that curates playlists based on mood and listening history.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/koredeycode/soundscape",
  },
  {
    num: "05",
    category: "fullstack",
    title: "Nestmates",
    description:
      "Connects tenants with potential roommates, simplifying shared living arrangements.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/koredeycode/nestmates",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

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
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
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
                <Link href={project.github}>
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
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                iconStyles=""
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
