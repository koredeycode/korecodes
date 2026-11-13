export const projects = [
  {
    num: "01",
    category: "web3",
    title: "Moltbet",
    description:
      "An on-chain prediction market where autonomous AI agents propose, counter, and settle bets on verifiable events — earning on-chain reputation from their accuracy and honesty. Awarded 1st Place (Virtuals Track) and 2nd Place Overall out of 86 builds at the SF Agentic Commerce x402 Hackathon (Feb 2026), with partner tracks from Coinbase, Google, Virtuals, and SKALE.",
    stack: [
      { name: "Next.js" },
      { name: "Hono.js" },
      { name: "Solidity" },
      { name: "TypeScript" },
    ],
    image: "/assets/work/moltbet.png",
    live: "https://moltbet-web.vercel.app",
    github: "https://github.com/koredeycode/moltbet",
  },
  {
    num: "02",
    category: "ai",
    title: "QwenWeaver",
    description:
      "A multi-agent workflow orchestrator that compiles tasks into a DAG: independent branches execute in parallel with real-time streaming, and a conflict-resolution step judges and merges competing agent responses against the task's criteria.",
    stack: [
      { name: "TypeScript" },
      { name: "LangGraph" },
      { name: "Next.js" },
    ],
    image: "/assets/work/qwenweaver.png",
    live: "https://youtu.be/rWAoW_FgRBY",
    github: "https://github.com/koredeycode/QwenWeaver",
  },
  {
    num: "03",
    category: "ai",
    title: "Citation-Backed Local RAG",
    description:
      "A local, citation-backed RAG system served via Ollama — with the part I'm proudest of: a zero-GPU evaluation harness that defines the rubric for a supported citation and a justified abstention, then measures retrieval quality, citation accuracy, and refusal behavior. Held together by a 225-test suite.",
    stack: [
      { name: "Python" },
      { name: "Ollama" },
    ],
    image: "/assets/work/rag-eval.png",
    live: "",
    github: "https://github.com/koredeycode/kaggle-local-rag",
  },
  {
    num: "04",
    category: "web3",
    title: "Sigil",
    description:
      "A local-first, multi-agent platform for Solana, published to npm as sigil-wallet. Autonomous agents manage SPL tokens through LangGraph reasoning loops behind a tri-head interface (CLI, TUI, local dashboard), with private keys kept in the OS keychain and every agent action vetted against user-defined guardrails.",
    stack: [
      { name: "TypeScript" },
      { name: "LangGraph" },
      { name: "Solana" },
    ],
    image: "/assets/work/sigil.png",
    live: "https://www.npmjs.com/package/sigil-wallet",
    github: "https://github.com/koredeycode/sigil",
  },
  {
    num: "05",
    category: "fullstack",
    title: "CinemaX",
    description:
      "A full-stack cinema booking application featuring real-time seat selection, secure payments, and QR ticket generation.",
    stack: [
      { name: "Next.js" },
      { name: "MongoDB" },
      { name: "TypeScript" },
    ],
    image: "/assets/work/cinemax.png",
    live: "https://cinemax-tl4h.onrender.com",
    github: "https://github.com/koredeycode/cinemax",
  },
  {
    num: "06",
    category: "fullstack",
    title: "Nestmates",
    description:
      "Connects tenants with potential roommates, simplifying shared living arrangements.",
    stack: [
      { name: "Vite" },
      { name: "Express.js" },
      { name: "Expo" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/nestmates.png",
    live: "https://nestmates-web.onrender.com",
    github: "https://github.com/koredeycode/nestmates",
  },
  {
    num: "07",
    category: "frontend",
    title: "Educare",
    description:
      "Built an API documentation site for a fictional School Management System using Next.js and Fumadocs, with auto-generated docs from an OpenAPI spec.",
    stack: [
      { name: "Next.js" },
      { name: "Fumadocs" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/educare.png",
    live: "https://edu-care-docs.vercel.app/",
    github: "https://github.com/koredeycode/educare",
  },
  {
    num: "08",
    category: "frontend",
    title: "X Articles Exporter",
    description:
      "A privacy-focused browser extension that allows you to save your favorite long-form content from X.com as clean, readable, and printable PDF documents.",
    stack: [
      { name: "React.js" },
      { name: "Vite" },
      { name: "Plasmo" },
      { name: "TypeScript" },
    ],
    image: "/assets/work/article-exporter.png",
    live: "https://x-articles-exporter.vercel.app/",
    github: "https://github.com/koredeycode/x-articles-exporter",
  },
  {
    num: "09",
    category: "frontend",
    title: "Union Tx Analyzer",
    description:
      "Helps Union Testnets users track their transactions and visualize activity in a clear dashboard.",
    stack: [{ name: "NextJS" }, { name: "TypeScript" }, { name: "Tailwind CSS" }],
    image: "/assets/work/union.png",
    live: "https://union-transaction-analyzer.vercel.app/",
    github: "https://github.com/koredeycode/Union-Transaction-Analyzer",
  },
];

export const blogs = [
  {
    title: "Deploy Directus to an Ubuntu Server",
    description:
      "Learn how to self-host Directus on an Ubuntu server using Docker and Nginx. This guide covers the entire process, from configuring background services to securing your production deployment with SSL.",
    url: "https://directus.io/docs/tutorials/self-hosting/deploy-directus-to-an-ubuntu-server",
    image: "/assets/blogs/ubuntu.jpeg",
  },
  {
    title: "Guide to Exporting and Importing Data within Web5 Applications",
    description:
      "Master data portability in the decentralized web by learning to move records between applications. This tutorial demonstrates how to query, serialize, and transfer data across Decentralized Web Nodes (DWNs) using the Web5 JS SDK.",
    url: "https://koredeycode.hashnode.dev/guide-to-exporting-and-importing-data-within-web5-applications",
    image: "/assets/blogs/web5.webp",
  },
  {
    title: "How to Create a USSD Application with TypeScript and Node.js",
    description:
      "Build interactive mobile USSD menus using Node.js and TypeScript. This walkthrough explains how to handle gateway requests and manage session logic to create seamless text-based services for feature phones.",
    url: "https://koredeycode.hashnode.dev/how-to-create-a-ussd-application-with-typescript-and-nodejs",
    image: "/assets/blogs/ussd.webp",
  },
  {
    title: "The Hidden Cost of npm install - And How To Fix It",
    description:
      "Tired of node_modules bloating your drive and slow install times? This guide analyzes the architectural limitations of npm and compares two superior alternatives: pnpm for maximum disk efficiency and Bun for blazing-fast performance. Learn how to migrate your projects and choose the right tool for your workflow.",
    url: "https://koredeycode.hashnode.dev/the-hidden-cost-of-npm-install-and-how-to-fix-it",
    image: "/assets/blogs/npm.webp",
  },
];

export const about = {
  title: "About Me",
  description:
    "I'm Yusuf Akorede, an AI and full-stack engineer who builds and evaluates. I ship production LLM applications, and I build the measurement around them: an evaluation harness for a local RAG pipeline, conflict-resolution that judges competing agent outputs, and an on-chain prediction market where agents are scored on their accuracy. Coding in TypeScript, Python, and Solidity since 2021 — always open to interesting freelance and collaboration opportunities.",
  info: [
    { fieldName: "Name", fieldValue: "Yusuf Akorede" },
    { fieldName: "Phone", fieldValue: "+234 81 3909 8183" },
    { fieldName: "Experience", fieldValue: "5+ Years" },
    { fieldName: "Nationality", fieldValue: "Nigerian" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English" },
  ],
};

export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experience",
  description:
    "AI and full-stack engineer — building production LLM agent systems, evaluation harnesses, and the web and backend infrastructure underneath them.",
  items: [
    {
      company: "ATOM-GROUP",
      position: "Software Engineer",
      duration: "Feb 2026 - Present",
    },
    {
      company: "YorubaEcho",
      position: "Backend Developer (Volunteer)",
      duration: "2025",
    },
    {
      company: "SabiRent",
      position: "Frontend Developer",
      duration: "2025",
    },
    {
      company: "ALX Africa (Project Works)",
      position: "Engineering Intern",
      duration: "2022 - 2023",
    },
    {
      company: "Open-Source Contributions",
      position: "Contributor",
      duration: "2021 - Present",
    },
  ],
};

export const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description:
    "A science degree plus formal software engineering training — the biochemistry foundation doubles as subject-matter depth for science-domain AI evaluation work.",
  items: [
    {
      institution: "Obafemi Awolowo University, Ile-Ife",
      degree: "B.Sc. Biochemistry",
      duration: "2025",
    },
    {
      institution: "ALX Africa",
      degree: "Software Engineering Program",
      duration: "2022 - 2023",
    },
  ],
};

export const skillsData = {
  title: "Skills",
  description:
    "Technologies I use to build and evaluate AI systems — from LLM agents and RAG pipelines to full-stack web, backend services, and smart contracts.",
  skillList: [
    { iconName: "SiTypescript", name: "TypeScript" },
    { iconName: "FaPython", name: "Python" },
    { iconName: "FaJs", name: "JavaScript" },
    { iconName: "SiSolidity", name: "Solidity" },
    { iconName: "SiLangchain", name: "LangChain" },
    { iconName: "SiLangchain", name: "LangGraph" },
    { iconName: "SiFastapi", name: "FastAPI" },
    { iconName: "SiOllama", name: "Ollama" },
    { iconName: "SiNextdotjs", name: "Next.js" },
    { iconName: "FaReact", name: "React.js" },
    { iconName: "SiExpo", name: "React Native + Expo" },
    { iconName: "SiNestjs", name: "Nest.js" },
    { iconName: "SiExpress", name: "Express.js" },
    { iconName: "SiHono", name: "Hono.js" },
    { iconName: "SiPostgresql", name: "PostgreSQL" },
    { iconName: "SiMongodb", name: "MongoDB" },
    { iconName: "SiRedis", name: "Redis" },
    { iconName: "SiDocker", name: "Docker" },
    { iconName: "FaGitAlt", name: "Git & GitHub" },
    { iconName: "SiTailwindcss", name: "Tailwind CSS" },
  ],
};
