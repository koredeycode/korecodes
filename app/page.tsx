import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FiArrowRight, FiMail } from "react-icons/fi";

import ContributionGraph from "@/components/ContributionGraph";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Socials from "@/components/Socials";
import { about, education, experience, projects } from "@/constants";
import { caseStudies } from "@/constants/case-studies";

const flagships = caseStudies.map((cs, i) => ({ cs, project: projects[i] }));
const moreProjects = projects.slice(4);

const Home = () => {
  return (
    <main>
      {/* ------------------------------ HERO ------------------------------ */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto pt-36 xl:pt-44 pb-16 px-6">
          <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-8 justify-between">
            <div className="text-center xl:text-left max-w-2xl">
              <p className="text-accent font-medium mb-4 tracking-wide">
                AI &amp; Full-Stack Engineer
              </p>
              <h1 className="h1 mb-6">
                I build <span className="text-accent">and</span> evaluate.
              </h1>
              <p className="text-muted text-lg mb-9 max-w-xl mx-auto xl:mx-0">
                Production LLM agent systems, the evaluation harnesses that keep
                them honest, and the web &amp; backend infrastructure
                underneath — in TypeScript, Python, and Solidity, since 2021.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-6">
                <Link
                  href="/#work"
                  className="px-7 py-3.5 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-colors inline-flex items-center gap-2"
                >
                  View my work <FiArrowRight />
                </Link>
                <Link
                  href="/#contact"
                  className="px-7 py-3.5 rounded-full border border-border hover:border-accent hover:text-accent transition-colors font-medium"
                >
                  Get in touch
                </Link>
                <Socials
                  containerStyles="flex gap-5"
                  iconStyles="w-10 h-10 border border-border rounded-full flex justify-center items-center text-lg hover:border-accent hover:text-accent transition-all duration-300"
                />
              </div>
            </div>
            <div className="w-[300px] h-[300px] xl:w-[506px] xl:h-[506px] shrink-0">
              <Photo />
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------- FEATURED WORK --------------------------- */}
      <section id="work" className="section scroll-mt-28">
        <Reveal>
          <p className="section-title mb-3">Featured Work</p>
          <h2 className="h2 mb-4">
            Four systems, one theme:{" "}
            <span className="text-accent">agents you can trust</span>
          </h2>
          <p className="text-muted max-w-2xl mb-12">
            Each of these ships something autonomous — and each one ships the
            mechanism that makes the autonomy verifiable: settlement, judging,
            rubrics, or guardrails.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {flagships.map(({ cs, project }, i) => (
            <Reveal key={cs.slug} delay={i * 0.08}>
              <Link
                href={`/work/${cs.slug}`}
                className="group block rounded-2xl border border-border bg-card hover:bg-card-hover hover:border-accent/40 transition-all overflow-hidden h-full"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={cs.image}
                    alt={`${cs.title} — ${cs.tagline}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-6 xl:p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      {cs.category}
                    </span>
                    <span className="text-muted text-xs">{cs.year}</span>
                  </div>
                  <h3 className="h3 mb-2 group-hover:text-accent transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-muted text-sm mb-5 leading-relaxed">
                    {cs.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((s) => (
                      <span
                        key={s.name}
                        className="text-xs px-3 py-1 rounded-full border border-border text-muted"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-accent inline-flex items-center gap-2">
                    Read the case study
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------- CONTRIBUTION GRAPH ------------------------- */}
      <section className="border-y border-border bg-card/30 py-14">
        <Reveal>
          <ContributionGraph />
        </Reveal>
      </section>

      {/* --------------------------- MORE PROJECTS --------------------------- */}
      <section id="projects" className="section scroll-mt-28">
        <Reveal>
          <p className="section-title mb-3">More Projects</p>
          <h2 className="h2 mb-12">
            Shipped <span className="text-accent">& deployed</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {moreProjects.map((project, i) => (
            <Reveal key={project.num} delay={(i % 3) * 0.08}>
              <article className="group rounded-2xl border border-border bg-card hover:bg-card-hover hover:border-accent/40 transition-all overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">
                    {project.category}
                  </span>
                  <h3 className="h3 mb-2">{project.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.map((s) => (
                      <span
                        key={s.name}
                        className="text-xs px-2.5 py-1 rounded-full border border-border text-muted"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent-hover font-medium inline-flex items-center gap-1"
                      >
                        Live <BsArrowUpRight />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent inline-flex items-center gap-1"
                    >
                      <BsGithub /> Code
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------- ABOUT ------------------------------- */}
      <section id="about" className="section scroll-mt-28 border-t border-border">
        <Reveal>
          <p className="section-title mb-3">About</p>
          <h2 className="h2 mb-12">
            Engineering, with the{" "}
            <span className="text-accent">measurement</span> attached
          </h2>
        </Reveal>

        <div className="grid xl:grid-cols-2 gap-12 xl:gap-16">
          <Reveal>
            <p className="text-muted leading-relaxed mb-8">
              {about.description}
            </p>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm mb-10">
              {about.info.map((item) => (
                <div key={item.fieldName} className="flex flex-col">
                  <dt className="text-muted text-xs uppercase tracking-wider">
                    {item.fieldName}
                  </dt>
                  <dd className="text-foreground font-medium">
                    {item.fieldValue}
                  </dd>
                </div>
              ))}
            </dl>

            <h3 className="h3 mb-6">Toolbox</h3>
            <div className="flex flex-wrap gap-2.5">
              {[
                "TypeScript",
                "Python",
                "Solidity",
                "LangChain / LangGraph",
                "FastAPI",
                "Ollama",
                "Next.js",
                "React / Expo",
                "Nest.js / Express / Hono",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "Docker",
                "Git & GitHub",
                "Tailwind CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-4 py-1.5 rounded-full border border-border bg-card text-muted hover:border-accent hover:text-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {/* experience */}
            <h3 className="h3 mb-6">Experience</h3>
            <ol className="relative border-l border-border ml-2 mb-12">
              {experience.items.map((item) => (
                <li key={item.company} className="ml-6 pb-8 last:pb-0">
                  <span className="absolute -left-[5px] w-2.5 h-2.5 rounded-full bg-accent mt-2" />
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">
                    {item.duration}
                  </p>
                  <p className="font-medium text-foreground">{item.position}</p>
                  <p className="text-accent text-sm">{item.company}</p>
                </li>
              ))}
            </ol>

            {/* education */}
            <h3 className="h3 mb-6">Education</h3>
            <ol className="relative border-l border-border ml-2">
              {education.items.map((item) => (
                <li key={item.institution} className="ml-6 pb-8 last:pb-0">
                  <span className="absolute -left-[5px] w-2.5 h-2.5 rounded-full bg-accent mt-2" />
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">
                    {item.duration}
                  </p>
                  <p className="font-medium text-foreground">{item.degree}</p>
                  <p className="text-accent text-sm">{item.institution}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ CONTACT ------------------------------ */}
      <section
        id="contact"
        className="section scroll-mt-28 border-t border-border text-center"
      >
        <Reveal>
          <p className="section-title mb-3">Contact</p>
          <h2 className="h2 mb-6">
            Let&apos;s build something{" "}
            <span className="text-accent">worth evaluating</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-10">
            Open to freelance work, collaborations, and full-time roles in AI
            engineering. The fastest way to reach me is email — or use the form
            on the contact page.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
            <a
              href="mailto:koredey4u@gmail.com"
              className="px-7 py-3.5 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-colors inline-flex items-center gap-2"
            >
              <FiMail /> koredey4u@gmail.com
            </a>
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full border border-border hover:border-accent hover:text-accent transition-colors font-medium"
            >
              Contact form
            </Link>
          </div>
          <Socials
            containerStyles="flex justify-center gap-5"
            iconStyles="w-11 h-11 border border-border rounded-full flex justify-center items-center text-lg hover:border-accent hover:text-accent transition-all duration-300"
          />
        </Reveal>
      </section>

      {/* ------------------------------- FOOTER ------------------------------ */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
          <p>© {new Date().getFullYear()} Yusuf Akorede</p>
          <p>
            Built with Next.js & Tailwind —{" "}
            <Link href="/resume" className="text-accent hover:text-accent-hover">
              view my CV
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
