import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Astro } from "@/components/ui/svgs/astro";

export const DATA = {
  name: "Alex Mercer - Software Engineer",
  initials: "AM",
  url: "https://alexmercer.dev",
  location: "Austin, TX",
  locationLink: "https://www.google.com/maps/place/austin+tx",
  description:
    "Full-stack engineer turned indie founder. I love building developer tools, fast UIs, and products people actually use.",
  summary:
    "In early 2023, I left a senior engineering role to go all-in on building my own SaaS products. Before that, [I completed a double degree in computer science and business](/#education), [interned at companies like Stripe and Cloudflare](/#work), and [competed in 18+ hackathons](/#hackathons). I also spent a summer in San Francisco as part of a founder residency focused on shipping fast and finding early customers.",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    },
    hackathons: {
      order: 7, enabled: true,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    photos: {
      order: 6, enabled: true,
      heading: "My Recent Travels",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Just shoot me a dm with a direct question on twitter and I'll respond whenever I can. I will ignore all soliciting.",
    },
  },
  photos: [
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
  ],
  skills: [
    { name: "Astro", icon: Astro },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "alex@alexmercer.dev",
    tel: "+1 512 000 0000",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:alex@alexmercer.dev",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Meridian Labs",
      href: "https://meridian.so",
      badges: ["Founder"],
      location: "Austin, TX",
      title: "Co-founder & Engineer",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "January 2023",
      end: undefined,
      description:
        "Building a suite of developer productivity tools focused on local-first architecture and offline sync. Grew to 1,200 paying customers within the first year. Responsible for the full stack — product, engineering, and growth.",
    },
    {
      company: "Stripe",
      href: "https://stripe.com",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=stripe.com&sz=128",
      start: "May 2022",
      end: "August 2022",
      description:
        "Worked on the Payments Infrastructure team. Built an internal load-testing framework in Go that reduced regression testing time by 60%. Contributed to the migration of legacy billing logic to a new event-driven architecture using Kafka.",
    },
    {
      company: "Cloudflare",
      href: "https://cloudflare.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=cloudflare.com&sz=128",
      start: "September 2021",
      end: "December 2021",
      description:
        "Joined the Workers team during a co-op term. Implemented a new dashboard UI for monitoring Worker invocation metrics using React and D3. Added support for custom error boundaries in the Workers runtime sandbox.",
    },
    {
      company: "Datadog",
      href: "https://datadoghq.com",
      badges: [],
      location: "New York, NY",
      title: "Software Engineer Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=datadoghq.com&sz=128",
      start: "January 2021",
      end: "April 2021",
      description:
        "Built new alert correlation features in the Incidents product using Python and React. Improved p99 query latency on the metrics explorer by 40% through query plan optimizations in PostgreSQL.",
    },
    {
      company: "Benchling",
      href: "https://benchling.com",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=benchling.com&sz=128",
      start: "May 2020",
      end: "August 2020",
      description:
        "Worked on the scientific data platform team. Implemented a bulk import pipeline for lab instrument data using TypeScript and AWS Lambda, reducing manual data entry time for research teams by over 80%.",
    },
    {
      company: "Relay Labs",
      href: "https://relay.app",
      badges: [],
      location: "Vancouver, BC",
      title: "Software Engineer Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=relay.app&sz=128",
      start: "September 2019",
      end: "December 2019",
      description:
        "Early-stage startup building workflow automation tools. Shipped core integrations with Slack, Notion, and GitHub. Designed the initial webhook delivery system in Node.js that handled over 500k events per day at peak.",
    },
  ],
  education: [
    {
      school: "Founder Fellowship SF",
      href: "https://foundersfellowship.io",
      degree: "Cohort 4 — Founder in Residence",
      logoUrl: "https://avatar.vercel.sh/founder-fellowship?size=40",
      start: "2023",
      end: "2023",
    },
    {
      school: "University of British Columbia",
      href: "https://ubc.ca",
      degree: "Bachelor of Science, Computer Science",
      logoUrl: "https://www.google.com/s2/favicons?domain=ubc.ca&sz=128",
      start: "2018",
      end: "2023",
    },
    {
      school: "Simon Fraser University",
      href: "https://sfu.ca",
      degree: "Bachelor of Business Administration",
      logoUrl: "https://www.google.com/s2/favicons?domain=sfu.ca&sz=128",
      start: "2018",
      end: "2023",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "https://www.google.com/s2/favicons?domain=ibo.org&sz=128",
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Stackwise",
      href: "https://stackwise.dev",
      dates: "March 2024 - Present",
      active: true,
      description:
        "Built an AI-powered code review tool that integrates with GitHub PRs and provides context-aware feedback based on your team's codebase conventions. Used by 300+ engineering teams.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://stackwise.dev",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "public/example-website.webp",
      video: "",
    },
    {
      title: "Logport",
      href: "https://logport.io",
      dates: "October 2023 - February 2024",
      active: true,
      description:
        "Open-source structured logging dashboard for Node.js and Python services. Ingest logs via a lightweight SDK, query them with a SQL-like syntax, and set up alerts in minutes.",
      technologies: [
        "Next.js",
        "TypeScript",
        "ClickHouse",
        "TailwindCSS",
        "Shadcn UI",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://logport.io",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alexmercer-dev/logport",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Formbase",
      href: "https://formbase.dev",
      dates: "June 2023 - September 2023",
      active: true,
      description:
        "A headless form backend that handles submissions, spam filtering, file uploads, and email notifications — no server required. Drop in one script tag and you're done.",
      technologies: [
        "Astro",
        "TypeScript",
        "Cloudflare Workers",
        "TailwindCSS",
        "Stripe",
        "Resend",
      ],
      links: [
        {
          type: "Website",
          href: "https://formbase.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alexmercer-dev/formbase",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "public/example-website.png",
      video: "",
    },
    {
      title: "Patchwork",
      href: "https://patchwork.run",
      dates: "February 2023 - May 2023",
      active: false,
      description:
        "A visual diff tool for design tokens and Tailwind config changes. Connect it to your repo and get a live preview of how a config change affects every component in your design system.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://patchwork.run",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
  hackathons: [
    {
      title: "PNW Hacks 2022",
      dates: "October 14th - 16th, 2022",
      location: "Seattle, Washington",
      description: "Built a real-time collaborative code review tool using WebSockets and Monaco Editor. Won best developer tool.",
      image: "https://avatar.vercel.sh/pnw-hacks?size=40",
      win: "Best Developer Tool",
      links: [],
    },
    {
      title: "nwHacks 2022",
      dates: "January 15th - 16th, 2022",
      location: "Vancouver, BC",
      description: "Created an accessibility-first browser extension that rewrites complex legal documents into plain English using GPT-3.",
      image: "https://avatar.vercel.sh/nwhacks-2022?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2021",
      dates: "September 17th - 19th, 2021",
      location: "Waterloo, Ontario (Remote)",
      description: "Built a distributed key-value store in Go with a Raft consensus implementation from scratch. Finalist in the systems track.",
      image: "https://avatar.vercel.sh/hackthenorth-2021?size=40",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/raftdb",
        },
      ],
    },
    {
      title: "DubHacks 2021",
      dates: "October 9th - 10th, 2021",
      location: "Seattle, Washington",
      description: "Developed a carbon footprint tracker that integrates with Google Maps to suggest lower-emission commute alternatives.",
      image: "https://avatar.vercel.sh/dubhacks-2021?size=40",
      win: "Best Sustainability Hack",
      links: [],
    },
    {
      title: "StormHacks 2021",
      dates: "April 24th - 25th, 2021",
      location: "Burnaby, BC (Remote)",
      description: "Built a multiplayer browser game where players collaboratively debug a shared codebase before a timer runs out.",
      image: "https://avatar.vercel.sh/stormhacks-2021?size=40",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/bugout",
        },
      ],
    },
    {
      title: "HackCamp 2020",
      dates: "November 14th - 15th, 2020",
      location: "Vancouver, BC (Remote)",
      description: "Created a CLI tool that automatically generates unit test scaffolding from TypeScript function signatures using static analysis.",
      image: "https://avatar.vercel.sh/hackcamp-2020?size=40",
      win: "1st Place Overall",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/testgen",
        },
      ],
    },
    {
      title: "cmd-f 2020",
      dates: "March 7th - 8th, 2020",
      location: "Vancouver, BC",
      description: "Built a mobile-first job board specifically for junior developers, aggregating listings from GitHub Jobs, HN Who's Hiring, and LinkedIn.",
      image: "https://avatar.vercel.sh/cmd-f-2020?size=40",
      links: [],
    },
    {
      title: "nwHacks 2020",
      dates: "January 11th - 12th, 2020",
      location: "Vancouver, BC",
      description: "Developed a peer-to-peer study session platform with live video, shared whiteboards, and Pomodoro timers.",
      image: "https://avatar.vercel.sh/nwhacks-2020?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2019",
      dates: "September 13th - 15th, 2019",
      location: "Waterloo, Ontario",
      description: "Built an API rate-limit visualizer that tracks usage across multiple providers and surfaces anomalies in real time.",
      image: "https://avatar.vercel.sh/hackthenorth-2019?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/ratelens",
        },
      ],
    },
    {
      title: "DeltaHacks V",
      dates: "January 18th - 19th, 2019",
      location: "Hamilton, Ontario",
      description: "Created a VS Code extension that suggests variable names based on type signatures and surrounding code context using a local ML model.",
      image: "https://avatar.vercel.sh/deltahacks-v?size=40",
      links: [],
    },
    {
      title: "StormHacks 2019",
      dates: "March 2nd - 3rd, 2019",
      location: "Burnaby, BC",
      description: "Built a network latency heatmap tool that visualises CDN performance across regions using real user data injected via a lightweight JS snippet.",
      image: "https://avatar.vercel.sh/stormhacks-2019?size=40",
      win: "Best Infrastructure Hack",
      links: [],
    },
  ],
} as const;
