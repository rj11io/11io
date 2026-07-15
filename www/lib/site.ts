// All site copy lives here, sourced from the 11cv content files
// (../11cv/content/*.md). Edit this file to update the site text.

export const identity = {
  name: "Ricardo Jorge",
  nickname: "RJ",
  title: "AI Product Engineer",
  location: "Lisbon, Portugal",
  availability: "Remote · B2B",
  email: "ricardojorgexyz@gmail.com",
  site: "https://www.rj11.io",
  cv: "https://cv.rj11.io",
  github: "https://github.com/rj11io",
  linkedin: "https://www.linkedin.com/in/rj11io",
}

export const hero = {
  lede: "I work hands-on with early-stage teams to turn ambitious ideas into polished, production-ready products at the intersection of AI engineering, product engineering, and data visualisation.",
}

export const about: string[] = [
  "Hi, I'm Ricardo Jorge, but you can call me RJ. I started coding young, purely for fun: modding and reverse-engineering games and consoles, building my own fighting game on the MUGEN engine, and running dedicated servers for the titles I grew up on. At 14, programming LEGO Mindstorms robots took my team to a second-place national finish and the final four of the 2008 robotics world cup in China.",
  "I went professional in 2015 and quickly specialised in frontend TypeScript applications, building on React since 2016 and Next.js since 2018, an early bet on the stack that became the standard for both the web and AI products.",
  "On most projects I was the first frontend hire, which meant owning the architecture, tooling, component library, infrastructure, and pipelines from day one. Most of my industry experience is in cybersecurity, building dashboards and proprietary data explorers. That's where I developed a passion for data-driven products, and where I learned what separates a polished product from a prototype.",
  "I've built with AI since the first releases of Copilot, ChatGPT, and MidJourney, moving from autocomplete to prompt and context engineering to designing full agent harnesses. Today I run an automated fleet of AI agents that maintain my personal projects.",
  "I operate as a self-guided missile: point me at a target and I'll figure out how to hit it on my own, using everything I've learned to avoid the pitfalls and drive straight to the solution.",
]

export type Service = {
  name: string
  description: string
}

export const services: Service[] = [
  {
    name: "AI Product Engineering",
    description:
      "AI products, agent harnesses, custom skills, automations, chat experiences, and data-extraction systems.",
  },
  {
    name: "Product & MVP Engineering",
    description:
      "End-to-end product delivery, from architecture and design systems to testing, infrastructure, and release workflows.",
  },
  {
    name: "Data Products & Technical Leadership",
    description:
      "Dashboards, proprietary data explorers, data visualisation, frontend architecture, and team foundations.",
  },
]

export type Job = {
  role: string
  company: string
  url?: string
  period: string
  summary: string
}

export const experience: Job[] = [
  {
    role: "AI Product Engineer",
    company: "rj11io",
    url: "https://www.rj11.io",
    period: "2025–Present",
    summary:
      "Hands-on AI product engineering for multiple early-stage startups: AI data extraction from PDFs, AI SEO analytics, a GenAI dermatopathology portal, cybersecurity dashboards, proprietary data explorers, AI chat experiences, n8n workflows, and agent harnesses, skills, and automations.",
  },
  {
    role: "Product / Datavis Engineer",
    company: "Hunt Intelligence",
    url: "https://hunt.io/",
    period: "2024–2025",
    summary:
      "Went deep on my specialty, data visualisation, for a threat-intelligence product: custom datavis components, core modules like AttackCapture™ and HuntSQL™, and a new API documentation platform built on OpenAPI.",
  },
  {
    role: "Senior Frontend Engineer → Team Lead",
    company: "OMEGA Systems",
    url: "https://www.omegasys.eu/",
    period: "2023–2024",
    summary:
      "Built the next generation of OMEGA's iGaming platform management system in TypeScript and React; promoted to lead the frontend team, setting standards for onboarding, documentation, and async workflows.",
  },
  {
    role: "Senior Frontend Engineer",
    company: "Phantasma Chain",
    url: "https://phantasma.info/",
    period: "2022–2023",
    summary:
      "Frontend monorepo for all new tools and apps, the Phantasma UI Storybook, the block explorer, and contributions to the TypeScript SDK.",
  },
  {
    role: "Frontend Lead",
    company: "BinaryEdge · Coalition",
    url: "https://www.coalitioninc.com/",
    period: "2020–2021",
    summary:
      "Started as a solo frontend engineer and grew the Customer Security frontend team. Tech lead for Coalition Explorer, the component library, and attack-surface monitoring on the BinaryEdge Portal.",
  },
]

export type EarlierJob = {
  role: string
  company: string
  period: string
}

export const earlier: EarlierJob[] = [
  {
    role: "Fullstack Engineer, Co-Founder",
    company: "Glaiveware",
    period: "2018–2019",
  },
  { role: "React Native Developer", company: "Sycret.ink", period: "2017" },
  {
    role: "Full Stack JavaScript Developer",
    company: "American Heart Association",
    period: "2016",
  },
  { role: "Frontend Developer", company: "NextBitt", period: "2015–2016" },
  { role: "Java Developer", company: "Science4you", period: "2015" },
]

export type Project = {
  name: string
  url: string
  period: string
  description: string
}

export const projects: Project[] = [
  {
    name: "11ai",
    url: "https://ai.rj11.io/",
    period: "2026–Present",
    description: "Open-source AI skills, plugins, and workflows.",
  },
  {
    name: "11bench",
    url: "https://bench.rj11.io/",
    period: "2026–Present",
    description: "Open-source AI benchmarks.",
  },
  // KEEP THESE COMMENTS UNTIL TOLD OTHERWISE
  // {
  //   name: "11intel",
  //   url: "https://intel.rj11.io/",
  //   period: "2026–Present",
  //   description: "AI intel briefing reports in a blog format.",
  // },
  // {
  //   name: "11blog",
  //   url: "https://blog.rj11.io/",
  //   period: "2023–Present",
  //   description: "Personal blog.",
  // },
  // {
  //   name: "11labs",
  //   url: "https://labs.rj11.io/",
  //   period: "2026–Present",
  //   description: "AI Factory for micro software and tools.",
  // },
  // {
  //   name: "thevibe.coach",
  //   url: "https://www.thevibe.coach/",
  //   period: "2026–Present",
  //   description: "AI Vibe Code Coaching.",
  // },
  {
    name: "GitHub",
    url: "https://github.com/rj11io",
    period: "2023–Present",
    description: "Modern GitHub for AI open-source projects.",
  },
  {
    name: "GitHub archive",
    url: "https://github.com/ricardojrmcom?tab=repositories",
    period: "2020–2023",
    description: "Legacy GitHub with the open source I produced 2020–2023.",
  },
]

export type SkillGroup = {
  name: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    name: "Core Stack",
    items: [
      "TypeScript",
      "React.js",
      "Next.js",
      "AI SDK",
      "Convex",
      "Playwright",
      "Vercel",
    ],
  },
  {
    name: "AI Engineering",
    items: [
      "Agent Automations",
      "Custom Agent Skills",
      "Harness Engineering",
      "Codex",
      "Claude Code",
      "n8n"
    ],
  },
  {
    name: "UI & Design",
    items: [
      "Tailwind CSS",
      "shadcn/ui",
      "Material-UI",
      "Design Systems",
      "Storybook",
      "Refactoring UI",
    ],
  },
  {
    name: "Data & Visualisation",
    items: [
      "Dashboards",
      "Data Visualisation (d3, Recharts, Nivo)",
      "Web Scraping",
      "Data Enrichment",
    ],
  },
  {
    name: "Leadership & Delivery",
    items: [
      "Team & Project Management",
      "End-to-End Product Engineering",
      "Product Design",
      "Agile Methodologies",
    ],
  },
  {
    name: "Foundations",
    items: [
      "JavaScript",
      "Node.js",
      "HTML5",
      "CSS",
      "Git",
      "GitHub Actions",
      "REST APIs",
      "CI/CD",
      "Testing",
    ],
  },
]

export type Social = {
  label: string
  href: string
}

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/rj11io" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rj11io" },
  { label: "X / Twitter", href: "https://twitter.com/rj11io" },
  { label: "Substack", href: "https://rj11io.substack.com/" },
  { label: "Medium", href: "https://medium.com/@rj11io" },
]

export const nav = [
  { label: "About", href: "#about" },
  { label: "What I do", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
]
