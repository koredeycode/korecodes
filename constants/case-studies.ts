export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  category: string;
  role: string;
  stack: string[];
  image: string;
  links: { label: string; url: string }[];
  award?: { text: string; url?: string; linkLabel?: string };
  overview: string;
  highlights: { title: string; detail: string }[];
  learned?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "moltbet",
    title: "Moltbet",
    tagline: "On-chain prediction market for AI agents — x402 Hackathon winner",
    year: "2026",
    category: "Web3 · AI Agents",
    role: "Solo builder — protocol, contracts, indexing, API, dashboard",
    stack: ["Solidity", "Hono.js", "Next.js", "TypeScript", "Turborepo"],
    image: "/assets/work/moltbet.png",
    links: [
      { label: "Live app", url: "https://moltbet-web.vercel.app" },
      { label: "Source", url: "https://github.com/koredeycode/moltbet" },
      {
        label: "x402 winners recap",
        url: "https://www.skale.space/blog/san-francisco-agentic-commerce-x402-hackathon-recap-winners",
      },
    ],
    award: {
      text: "won 1st Place (Virtuals Track) & 2nd Place Overall out of 86 builds at the SF Agentic Commerce x402 Hackathon (Feb 2026)",
      url: "https://www.skale.space/blog/san-francisco-agentic-commerce-x402-hackathon-recap-winners",
      linkLabel: "Winners recap",
    },
    overview:
      "Moltbet is a prediction market where the counterparties are autonomous AI agents. Agents propose bets on verifiable events, counter each other's terms, and settle on-chain — no human in the loop. Every agent accumulates on-chain reputation from its accuracy and honesty, which turns the market itself into a scoring system for agent behavior. It won 1st Place (Virtuals Track — Best Trading/DeFi/AI Agent) and 2nd Place Overall out of 86 builds at the SF Agentic Commerce x402 Hackathon (Feb 2026), with partner tracks from Coinbase, Google, Virtuals, and SKALE.",
    highlights: [
      {
        title: "Agent-native participation",
        detail:
          "A programmatic CLI and registration flow lets an agent join, propose, and settle bets entirely through code — humans are welcome to observe, but every market action is agent-driven.",
      },
      {
        title: "Decentralized dispute resolution",
        detail:
          "Disagreements about outcomes resolve through an on-chain dispute process rather than a trusted referee — the contract, not a moderator, decides who gets paid.",
      },
      {
        title: "Blockchain indexing service",
        detail:
          "A dedicated indexing layer watches chain events and exposes clean state to the API and dashboard, so agents and observers query aggregates instead of raw logs.",
      },
      {
        title: "Reputation as evaluation",
        detail:
          "Accuracy and honesty feed an on-chain reputation score per agent — the protocol is, in effect, a public leaderboard of which agents tell the truth.",
      },
    ],
    learned:
      "The hard part of agentic systems isn't making them act — it's making their actions verifiable. Moltbet's design rule became my default: every autonomous behavior needs a settlement mechanism that doesn't trust the agent.",
  },
  {
    slug: "qwenweaver",
    title: "QwenWeaver",
    tagline: "Multi-agent DAG orchestration with judgment built into the graph",
    year: "2025–2026",
    category: "AI · Orchestration",
    role: "Solo builder — orchestration engine, runtime, UI",
    stack: ["TypeScript", "React Flow", "Hono"],
    image: "/assets/work/qwenweaver.png",
    links: [
      {
        label: "Source",
        url: "https://github.com/koredeycode/QwenWeaver",
      },
      { label: "Demo video", url: "https://youtu.be/rWAoW_FgRBY" },
    ],
    overview:
      "QwenWeaver compiles multi-agent work into a DAG and runs it: independent branches execute in parallel automatically via topological ordering, output streams in real time, and — the piece closest to my evaluation work — when multiple agents return competing responses for the same node, a conflict-resolution step judges and merges them against the task's criteria. The system makes evaluation decisions as a normal part of execution, not as an afterthought.",
    highlights: [
      {
        title: "Automatic topological parallelization",
        detail:
          "Workflows are declared as agent graphs; the runtime derives dependency order and runs every independent branch concurrently, with per-node streaming output.",
      },
      {
        title: "Conflict resolution against criteria",
        detail:
          "Competing agent responses for the same node are judged against the task's stated criteria and merged — the same rubric discipline I later formalized in my RAG evaluation harness.",
      },
      {
        title: "Structured agent outputs",
        detail:
          "Agents emit structured, schema-checked outputs so downstream nodes (and the judge) consume data, not prose.",
      },
    ],
    learned:
      "Judging competing outputs against explicit criteria is the core loop of reliable multi-agent systems — and the exact skill Mercor-style evaluation work runs on.",
  },
  {
    slug: "citation-backed-local-rag",
    title: "Citation-Backed Local RAG",
    tagline: "A local RAG pipeline with a zero-GPU evaluation harness",
    year: "2025–2026",
    category: "AI · Evaluation",
    role: "Solo builder — pipeline, harness, test suite",
    stack: ["Python", "Ollama", "BM25", "pytest"],
    image: "/assets/work/rag-eval.png",
    links: [
      {
        label: "Source",
        url: "https://github.com/koredeycode/kaggle-local-rag",
      },
    ],
    overview:
      "A fully local, citation-backed RAG system served via Ollama — running on free Kaggle GPUs where needed. The part I'm proudest of is what surrounds it: a zero-GPU evaluation harness I wrote before trusting the system. Before building the eval, I had to define what 'correct' means, so I wrote explicit rubric definitions for two failure-prone behaviors — what counts as a supported citation (the cited source must actually contain the claim) and what counts as a justified abstention (refuse when the evidence doesn't support an answer, rather than confabulate). Then I measured retrieval quality, citation accuracy, and refusal behavior against those rubrics, instrumented performance (BM25 index build time, embedding-cache hit rate, fp16-vs-fp32 embedding agreement), and held the whole system together with a 225-test suite.",
    highlights: [
      {
        title: "Explicit rubrics before metrics",
        detail:
          "The harness defines — in writing — what a supported citation is and when abstention is justified, then scores against those definitions. Plausible-but-unsupported citations fail, by design.",
      },
      {
        title: "Zero-GPU evaluation",
        detail:
          "Every measurement runs without inference hardware: deterministic retrieval metrics, agreement checks between fp16 and fp32 embeddings, cache-hit-rate accounting. Evaluation shouldn't need a datacenter.",
      },
      {
        title: "Local-first serving",
        detail:
          "The pipeline serves local models through Ollama, including over a tunnel from free Kaggle GPUs — no paid inference in the loop.",
      },
      {
        title: "225-test suite",
        detail:
          "Retrieval, citation, and refusal behavior are locked down by tests, so changes to prompts or retrievers can't silently regress correctness.",
      },
    ],
    learned:
      "This project is the clearest statement of how I evaluate AI: define the rubric first, measure second, and treat 'the system always answers' as a bug, not a feature.",
  },
  {
    slug: "sigil",
    title: "Sigil",
    tagline: "Local-first autonomous agents for Solana — published on npm",
    year: "2026",
    category: "AI Agents · Web3",
    role: "Solo builder — platform, wallet layer, three interfaces",
    stack: ["TypeScript", "LangGraph", "Solana", "npm"],
    image: "/assets/work/sigil.png",
    links: [
      { label: "npm: sigil-wallet", url: "https://www.npmjs.com/package/sigil-wallet" },
      { label: "Source", url: "https://github.com/koredeycode/sigil" },
      { label: "Demo video", url: "https://youtu.be/PFZNtC4M3-A" },
    ],
    overview:
      "Sigil is a local-first platform where autonomous agents manage SPL tokens on Solana Devnet through LangGraph reasoning loops. It's published to npm as sigil-wallet. The design constraint that shaped everything: private keys never leave the OS keychain, and no agent action executes unchecked. Agents operate through a tri-head interface — CLI for scripting, a terminal UI for observation, and a local web dashboard for control — with every action vetted against user-defined guardrails such as per-trade caps before execution.",
    highlights: [
      {
        title: "Guardrails before autonomy",
        detail:
          "Every agent action is checked against user-defined limits (e.g., per-trade caps) before it executes — autonomy is granted, never assumed.",
      },
      {
        title: "Keys stay local",
        detail:
          "The wallet layer keeps private keys in the OS keychain and never touches the cloud — a hard boundary the agent cannot cross.",
      },
      {
        title: "Three interfaces, one brain",
        detail:
          "CLI, TUI, and local web dashboard all drive the same agent runtime, so the tool works equally for scripting and supervision.",
      },
      {
        title: "Published and installable",
        detail:
          "Distributed as sigil-wallet on npm — a real package others can install, not just a demo repo.",
      },
    ],
    learned:
      "Constraining an agent is a product decision, not a safety afterthought. The guardrail layer ended up being the most important code in the repo.",
  },
];
