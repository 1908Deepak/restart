export type NavLink = {
  name: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
};

export type SocialLinks = {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  website?: string;
};

export type HeroContent = {
  greeting: string;
  name: string;
  role: string;
  summary: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url?: string;
  ogImage?: string;
  keywords?: string[];
  nav: NavLink[];
  hero: HeroContent;
  about: { headline: string; body: string };
  projects: Project[];
  social: SocialLinks;
};

export const SITE: SiteConfig = {
  name: "Your Name",
  title: "Your Name — Portfolio",
  description: "Full‑stack developer crafting fast, accessible web apps.",
  url: "https://example.com",
  ogImage: "/og.png",
  keywords: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "Portfolio",
  ],
  nav: [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  hero: {
    greeting: "Hi, I'm",
    name: "Your Name",
    role: "Full‑stack Developer",
    summary:
      "I design and build delightful digital products with a focus on performance, accessibility, and DX.",
    ctaPrimary: { label: "View Projects", href: "#projects" },
    ctaSecondary: { label: "Contact", href: "#contact" },
  },
  about: {
    headline: "About me",
    body:
      "I'm a developer who enjoys turning complex problems into elegant solutions. I care deeply about product quality, code readability, and user experience.",
  },
  projects: [
    {
      title: "Project Alpha",
      description:
        "A modern dashboard with real‑time analytics and responsive data visualizations.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
      link: "https://example.com",
      github: "https://github.com/yourname/project-alpha",
      image: "/project-alpha.png",
    },
    {
      title: "Open Source Lib",
      description: "A tiny, well‑typed utility library published to npm.",
      tags: ["TypeScript", "Library", "Open Source"],
      link: "https://npmjs.com/package/your-lib",
      github: "https://github.com/yourname/your-lib",
      image: "/project-lib.png",
    },
    {
      title: "Personal Blog",
      description:
        "A content‑driven blog with MDX, full‑text search, and dark mode.",
      tags: ["Next.js", "MDX", "Search"],
      link: "https://blog.example.com",
      github: "https://github.com/yourname/blog",
      image: "/project-blog.png",
    },
  ],
  social: {
    github: "https://github.com/yourname",
    linkedin: "https://www.linkedin.com/in/yourname",
    twitter: "https://twitter.com/yourname",
    email: "you@example.com",
    website: "https://example.com",
  },
};