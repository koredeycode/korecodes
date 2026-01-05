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
    ],
    image: "/assets/work/lendly.png",
    live: "", // Not deployed yet
    github: "https://github.com/koredeycode/lendly-mobile",
    github_api: "https://github.com/koredeycode/lendly-api",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Educare",
    description:
      "Built an API documentation site for a fictional School Management System using Next.js and Fumadocs, with auto-generated docs from an OpenAPI spec.",
    stack: [
      { name: "Next.js" },
      { name: "Fumadocs" },
      { name: "TailwindCSS" },
      { name: "Typescript" },
    ],
    image: "/assets/work/educare.png",
    live: "https://edu-care-docs.vercel.app/",
    github: "https://github.com/koredeycode/educare",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Wagr",
    description:
      "A decentralized betting platform where users can create, join, and settle wagers securely on-chain.",
    stack: [{ name: "Html 5" }, { name: "Tailwind CSS" }, { name: "Typescript" }, { name: "NextJS" }],
    image: "/assets/work/wagr.png",
    live: "https://wagr-web.vercel.app", // add live link if deployed
    github: "https://github.com/koredeycode/Wagr",
  },
  {
    num: "04",
    category: "fullstack",
    title: "IPVerse",
    description:
      "Blockchain-powered marketplace for buying and licensing intellectual property assets worldwide.",
    stack: [{ name: "NextJS" }, { name: "Tailwind CSS" }, { name: "Node.js" }],
    image: "/assets/work/ipverse.png",
    live: "https://ipverse.vercel.app/",
    github: "https://github.com/koredeycode/IPVerse",
  },
  {
    num: "05",
    category: "frontend",
    title: "Union Tx Analyzer",
    description:
      "Helps Union Testnets users track their transactions and visualize activity in a clear dashboard.",
    stack: [{ name: "NextJS" }, { name: "Tailwind CSS" }, { name: "Typescript" }],
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
];
