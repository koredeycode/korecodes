import ContributionGraph from "@/components/ContributionGraph";
import DownloadResumeButton from "@/components/DownloadResumeButton";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full py-12 xl:px-6">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-12">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello, I am <br />
              <span className="text-accent">Yusuf Akorede</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I specialize in building modern, scalable web and mobile
              applications with clean code and intuitive user experiences.
              Passionate about transforming ideas into impactful digital solutions.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="default"
                size="lg"
                className="uppercase flex items-center gap-2"
                asChild
              >
                <Link href="/projects">
                  <span>View Projects</span>
                </Link>
              </Button>
              <DownloadResumeButton />
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <ContributionGraph />
    </section>
  );
};

export default Home;
