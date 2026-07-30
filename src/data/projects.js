import placeholder from "../assets/images/projects/placeholder.png";
import Bytereviwer from"../assets/images/projects/Bytereviwer.png"
import Portfolio from"../assets/images/projects/Portfolio.png"

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A modern developer portfolio built with React, Tailwind CSS, Framer Motion, and reusable components.",

    image: placeholder,

    technologies: [
      "React",
      "Tailwind",
      "Framer Motion",
      "Vite",
    ],

    github: "#",
    demo: "#",
  },

  {
    id: 2,
    title: "ByteReviewer",
    description:
      "A professional WordPress technology blog focused on AI, Cloud Computing, DevOps, and software reviews.",

    image: Bytereviwer,

    technologies: [
      "WordPress",
      "SEO",
      "Elementor",
    ],

    github: "#",
    demo: "https://www.bytereviewer.com",
  },

  {
    id: 3,
    title: "AI Image SaaS",
    description:
      "An AI-powered image generation platform using React, Supabase, and Clerk authentication.",

    image: placeholder,

    technologies: [
      "React",
      "Supabase",
      "Clerk",
      "Tailwind",
    ],

    github: "#",
    demo: "#",
  },

  {
    id: 4,
    title: "Amazon Product Research",
    description:
      "Amazon product research workflow using Helium 10, Keepa, and Google Sheets.",

    image: placeholder,

    technologies: [
      "Helium 10",
      "Keepa",
      "Google Sheets",
      "Amazon",
    ],

    github: "#",
    demo: "#",
  },
];