import portfolio from "../assets/images/projects/portfolio.png";
import bytereviewer from "../assets/images/projects/bytereviewer.png";
import aiSaas from "../assets/images/projects/ai-saas.png";
import amazon from "../assets/images/projects/amazon.png";

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",

    description:
      "A modern developer portfolio showcasing my skills, projects and experience using React and Tailwind CSS.",

    image: portfolio,

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
      "Technology blog focused on AI, Cloud Computing, DevOps and Web Development.",

    image: bytereviewer,

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
      "AI powered image generation platform built with modern React architecture.",

    image: aiSaas,

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
      "Amazon product research workflow using Helium 10, Keepa and Google Sheets.",

    image: amazon,

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