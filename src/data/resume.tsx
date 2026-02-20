import React from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Harsh Srivastava",
  initials: "HS",
  url: "https://harsh-srivastava.dev",
  location: "Noida, India",
  locationLink: "https://www.google.com/maps/place/noida",
  description:
    "Full Stack Engineer | AI | ML ",
  summary:
    "I'm a Computer Science undergraduate at [JSS Academy of Technical Education](/#education) (specializing in Data Science) with hands-on experience building and shipping full-stack applications. I've interned at [Miracle AI](/#work) and [Vaxalor AI](/#work), where I architected production websites, optimized dashboards, and implemented LLM observability pipelines. I'm passionate about building tools that solve real problems — from [professional networking platforms](/#projects) to [AI-powered career tools](/#projects). I was also recognized as a [Reliance Foundation Scholar](/#achievements) for academic excellence.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "C++", icon: Csharp },
    { name: "JavaScript", icon: undefined },
    { name: "Express", icon: undefined },
    { name: "Tailwind CSS", icon: undefined },
    { name: "Three.js", icon: undefined },
    { name: "Framer Motion", icon: undefined },
    { name: "MongoDB", icon: undefined },
    { name: "Supabase", icon: undefined },
    { name: "WebSockets", icon: undefined },
    { name: "WebRTC", icon: undefined },
    { name: "Git/GitHub", icon: undefined },
    { name: "Postman", icon: undefined },
    { name: "Vercel", icon: undefined },
    { name: "SQL", icon: undefined },
    { name: "HTML/CSS", icon: undefined },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://medium.com/@harsh-jsx", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "harshme08@gmail.com",
    tel: "+919818954270",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/harshs16",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harsh-tsx/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Harsh_jsx",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:harshme08@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Miracle AI",
      href: "https://miracleai.in",
      badges: [],
      location: "Onsite – Delhi",
      title: "Full Stack Development Intern",
      logoUrl: "/stealth.jpg",
      start: "December 2025",
      end: "Present",
      description:
        "Architected and shipped a fully responsive production website using Next.js, integrating GPU-accelerated 3D scenes and interactive animations with Three.js. Redesigned the React TypeScript-based dashboard UI, optimizing render paths and interaction flow to reduce perceived latency by 50%. Profiled and optimized critical application paths, collaborating with backend and frontend teams to improve end-to-end performance by 70%. Implemented LLM observability across inference routes, instrumenting latency, token usage, error rates, and per-request cost to enable data-driven performance tuning and budget control.",
    },
    {
      company: "Vaxalor AI",
      href: "https://vaxalor.com",
      badges: [],
      location: "Hybrid",
      title: "Full Stack Developer Intern",
      logoUrl: "/vaxalor.jpg",
      start: "September 2025",
      end: "October 2025",
      description:
        "Owned the end-to-end development of the company's production website using React TypeScript. Integrated Supabase for real-time data sync, authentication, and serverless functions. Delivered multiple full-stack features across the product lifecycle.",
    },
    {
      company: "Central Ground Water Board",
      href: "http://cgwb.gov.in/",
      badges: [],
      location: "Faridabad, Haryana",
      title: "Software Development Intern",
      logoUrl: "/cgwb.jpg",
      start: "April 2025",
      end: "May 2025",
      description:
        "Developed a comprehensive data management portal to digitize groundwater records, reducing manual retrieval time by 40%. Implemented automated reporting scripts using Python and SQL to streamline daily data analysis. Designed and deployed user-friendly interfaces for field officers, ensuring seamless data entry and real-time visualization.",
    },
  ],
  education: [
    {
      school: "JSS Academy of Technical Education",
      href: "https://jssaten.ac.in",
      degree: "B.Tech in Computer Science & Engineering (Specialization: Data Science)",
      logoUrl: "/jssaten.jpg",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
  
    {
      title: "SocioX",
      href: "https://sociox-connect.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "A LinkedIn-inspired full-stack professional networking platform with real-time messaging, post feeds, CRUD workflows, and user profiles. Features bi-directional real-time messaging using WebSockets and a scalable client-server architecture with role-aware data flows.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Supabase",
        "WebSockets",
        "WebRTC",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/HarshS16/SocioX",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/SocioX-Logo.png",
      video: "",
    },
    {
      title: "Rheo - Event Management App",
      href: "https://rheo-sigma.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "A full-stack event orchestration platform supporting event creation, discovery, and QR-based ticketing. Features dynamic QR generation and validation for secure scan-based check-ins, plus transactional and bulk email workflows via Nodemailer and SendGrid.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Supabase",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/HarshS16/Eventflow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Rheo-Logo.png",
      video: "",
    },
    {
      title: "DevElevate - AI Resume & Portfolio Refiner",
      href: "https://dev-elevate-ma91.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "An AI-driven career platform to refine resumes and generate developer portfolios using a modular MERN-based architecture. Integrates the Gemini API for semantic resume analysis, ATS scoring, and context-aware content enhancement. Features a portfolio generator that ingests GitHub repos, extracts metadata, and synthesizes AI-crafted project narratives.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Clerk",
        "Gemini API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/HarshS16/DevElevate",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/develevate.png",
      video: "",
    },
    {
      title: "PostFlow - Social Media Content Management Platform",
      href: "https://postflow-by-harsh.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "A comprehensive full-stack web application for content creators to draft, organize, and schedule social media posts across multiple platforms. Developed as part of the Frontend Developer Intern selection process.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/harshs16/PostFlow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/postflow.png",
      video: "",
    },
    {
      title: "Civix - Civic Issue Reporting Platform",
      href: "https://civix-phi.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Civix is a full-stack web application designed to streamline the process of reporting, tracking, and resolving local civic issues such as potholes, broken streetlights, and uncollected garbage. It provides a bridge between citizens and municipal authorities, bringing accountability and transparency to local issue resolution.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/harshs16/Civix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/civix.png",
      video: "",
    },
    {
      title: "Chai Culture",
      href: "https://chai-culture-alpha.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "A modern, aesthetic landing page dedicated to the art of Chai, celebrating its rich cultural heritage. Built with Vite and React for high performance, the project features smooth, complex animations powered by GSAP and Framer Motion, and a responsive, accessible UI designed with shadcn/ui and Tailwind CSS.",
      technologies: [
        "Vite",
        "React",
        "TypeScript",
        "shadcn/ui",
        "Tailwind CSS",
        "Framer Motion",
        "GSAP",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/harshs16/ChaiCulture",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chai-culture.png",
      video: "",
    },
    {
      title: "CodeInfo",
      href: "https://github.com/harshs16/CodeInfo",
      dates: "2025",
      active: true,
      description:
        "A command-line tool and web interface for analyzing codebases. Generates detailed statistics including language distribution, file complexity metrics, and structural anomalies.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Python - Fire ( CLI)",
        "Flask ( Web Server)"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/harshs16/CodeInfo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/codeinfo.png",
      video: "",
    },
    {
      title: "GiftHunt - AI Gift Discovery",
      href: "https://gifthunt-phi.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "An AI-powered gift discovery platform that helps you find the perfect gift based on the occasion, budget, relationship, and interests. Intelligently hunts down thoughtful gifts across the web and delivers tailored suggestions.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Gemini API",
        "Node.js",
        "PostgreSQL",
      ],
      links: [
       
        {
          type: "Source",
          href: "https://github.com/harshs16/GiftHunt",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gifthunt.png",
      video: "",
    },
    {
      title: "Dreamy Tales - AI Bedtime Story Generator",
      href: "https://dreamy-tales.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "A magical web application that creates personalized bedtime stories for children using AI, complete with soothing audio narration that feels like a warm hug from grandma. Features dynamic story generation based on child's interests and mood.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Gemini API",
        "ElevenLabs",
        "Framer Motion",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/harshs16/DreamyTales",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dreamy-tales.png",
      video: "",
    }
  ],
  hackathons: [
    {
      title: "Head Boy — Indirapuram Public School",
      dates: "April 2020 – March 2022",
      location: "Indirapuram, India",
      description:
        "Elected as the highest student authority, representing the entire student body. Directed a board of 5 members and led a student council of 40+ students, driving coordinated action across departments. Planned and executed large-scale school events and initiatives.",
      image:
        "/ips.jpg",
      links: [] as { title: string; href: string; icon: React.ReactNode }[],
    },
    {
      title: "Reliance Foundation Undergraduate Scholar",
      dates: "October 2023",
      location: "India",
      description:
        "Selected for the Reliance Foundation Undergraduate Scholarship — a highly competitive, merit-based national award recognizing academic excellence and leadership potential.",
      image:
        "rel.png",
      links: [] as { title: string; href: string; icon: React.ReactNode }[],
    },
  ],
} as const;
