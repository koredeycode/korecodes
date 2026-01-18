export const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Lendly",
    description:
      "A comprehensive lending platform connecting lenders and borrowers. Features real-time messaging, secure wallet transactions, item management, and a reputation system.",
    stack: [
      { name: "React Native" },
      { name: "NestJS" },
      { name: "PostgreSQL" },
      { name: "TypeScript" },
    ],
    image: "/assets/work/lendly.png",
    live: "", // Not deployed yet
    github: "https://github.com/koredeycode/lendly-mobile",
    github_api: "https://github.com/koredeycode/lendly-api",
  },
  {
    num: "02",
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
    num: "03",
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
    num: "04",
    category: "fullstack",
    title: "Wagr",
    description:
      "A decentralized betting platform where users can create, join, and settle wagers securely on-chain.",
    stack: [ { name: "NextJS" },  { name: "TypeScript" }, { name: "Tailwind CSS" }, { name: "Solidity" }],
    image: "/assets/work/wagr.png",
    live: "https://wagr-web.vercel.app", // add live link if deployed
    github: "https://github.com/koredeycode/Wagr",
  },
  {
    num: "05",
    category: "fullstack",
    title: "IPVerse",
    description:
      "Blockchain-powered marketplace for buying and licensing intellectual property assets worldwide.",
    stack: [{ name: "NextJS" }, { name: "Tailwind CSS" }, { name: "Node.js" }, { name: "Appwrite" }],
    image: "/assets/work/ipverse.png",
    live: "https://ipverse.vercel.app/",
    github: "https://github.com/koredeycode/IPVerse",
  },
  {
    num: "06",
    category: "frontend",
    title: "Union Tx Analyzer",
    description:
      "Helps Union Testnets users track their transactions and visualize activity in a clear dashboard.",
    stack: [{ name: "NextJS" }, { name: "TypeScript" }, { name: "Tailwind CSS" }],
    image: "/assets/work/union.png",
    live: "https://union-transaction-analyzer.vercel.app/", // put your deployed link here
    github: "https://github.com/koredeycode/Union-Transaction-Analyzer",
  },
//   {
//     num: "06",
//     category: "fullstack",
//     title: "Stacksync",
//     description:
//       "Integrates Paystack with Directus for a smooth payment experience — a hackathon-winning project.",
//     stack: [{ name: "Html 5" }, { name: "Css 3" }],
//     image: "/assets/work/thumb3.png",
//     live: "",
//     github: "https://github.com/koredeycode/stacksync",
//   },
//   {
//     num: "07",
//     category: "fullstack",
//     title: "SoundScape",
//     description:
//       "A music player that curates playlists based on mood and listening history.",
//     stack: [{ name: "Html 5" }, { name: "Css 3" }],
//     image: "/assets/work/thumb3.png",
//     live: "",
//     github: "https://github.com/koredeycode/soundscape",
//   },
//   {
//     num: "08",
//     category: "fullstack",
//     title: "Nestmates",
//     description:
//       "Connects tenants with potential roommates, simplifying shared living arrangements.",
//     stack: [{ name: "Html 5" }, { name: "Css 3" }],
//     image: "/assets/work/thumb3.png",
//     live: "",
//     github: "https://github.com/koredeycode/nestmates",
//   },
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
    "I'm Yusuf Akorede, a passionate full-stack developer with over three years of experience building web applications and scalable backend systems. I enjoy turning ideas into elegant solutions, focusing on clean code, performance, and great user experiences. I'm always open to exciting freelance opportunities and collaborations.",
  info: [
    { fieldName: "Name", fieldValue: "Yusuf Akorede" },
    { fieldName: "Phone", fieldValue: "+234 81 3909 8183" },
    { fieldName: "Experience", fieldValue: "3+ Years" },
    { fieldName: "Nationality", fieldValue: "Nigerian" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English" },
  ],
};

export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experience",
  description:
    "Full-Stack Software Developer with passion for building scalable web applications, integrating backend systems, and delivering performant UI solutions.",
  items: [
    {
      company: "YorubaEcho",
      position: "Backend Developer",
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
    "A mix of formal study and self-driven learning, focusing on computer science, software engineering, and modern full-stack development.",
  items: [
    {
      institution: "University of the People",
      degree: "Bachelor of Science in Computer Science",
      duration: "2025 - Present",
    },
    {
      institution: "ALX Africa",
      degree: "Software Engineering Program",
      duration: "2023",
    },
    {
      institution: "Alchemy University",
      degree: "Web3 Development Bootcamp",
      duration: "2023 - Present",
    },
  ],
};

export const skillsData = {
  title: "Skills",
  description:
    "Technologies and tools I use to build performant, scalable web applications — from front-end interfaces to backend services and integrations.",
  skillList: [
    { iconName: "FaHtml5", name: "HTML5" },
    { iconName: "FaCss3", name: "CSS3" },
    { iconName: "FaJs", name: "JavaScript" },
    { iconName: "SiTypescript", name: "TypeScript" },
    { iconName: "FaReact", name: "React.js" },
    { iconName: "SiExpo", name: "React Native + Expo" },
    { iconName: "SiNextdotjs", name: "Next.js" },
    { iconName: "SiTailwindcss", name: "Tailwind CSS" },
    { iconName: "FaNodeJs", name: "Node.js" },
    { iconName: "SiExpress", name: "Express.js" },
    { iconName: "SiNestjs", name: "Nest.js" },
    { iconName: "FaGitAlt", name: "Git & GitHub" },
    { iconName: "FaFigma", name: "Figma" },
    { iconName: "SiDirectus", name: "Directus" },
  ],
};
