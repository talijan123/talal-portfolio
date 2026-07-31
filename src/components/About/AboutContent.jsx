import {
  HiAcademicCap,
  HiCode,
  HiGlobeAlt,
  HiShoppingBag,
} from "react-icons/hi";
import Button from "../UI/Button";

const highlights = [
  {
    icon: <HiAcademicCap size={20} />,
    text: "BS Bioinformatics Student",
  },
  {
    icon: <HiCode size={20} />,
    text: "React Developer",
  },
  {
    icon: <HiGlobeAlt size={20} />,
    text: "WordPress Developer",
  },
  {
    icon: <HiShoppingBag size={20} />,
    text: "Amazon Product Research",
  },
];

export default function AboutContent() {
  return (
    <div className="flex-1">

      {/* Small Heading */}

      <p
        className="
          text-blue-500
          uppercase
          tracking-[5px]
          font-bold
        "
      >
        About Me
      </p>

      {/* Main Heading */}

      <h2
        className="
          mt-5

          text-4xl
          md:text-5xl

          font-black

          text-slate-900
          dark:text-white

          leading-tight

          transition-colors
          duration-300
        "
      >
        Turning Ideas Into
        <span className="block text-blue-500">
          Modern Web Experiences
        </span>
      </h2>

      {/* Description */}

      <p
        className="
          mt-8

          leading-8
          text-lg

          text-slate-600
          dark:text-slate-400

          transition-colors
          duration-300
        "
      >
        I'm <strong>Talal Hassan</strong>, a passionate
        Front-End Developer focused on creating modern,
        responsive, and user-friendly web applications.

        I enjoy building clean interfaces using React,
        JavaScript, Tailwind CSS, and WordPress while
        continuously learning new technologies and improving
        my development skills through real-world projects.
      </p>

      {/* Highlights */}

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">

        {highlights.map((item) => (

          <div
            key={item.text}
            className="
              flex
              items-center
              gap-3

              rounded-xl

              bg-slate-50
              dark:bg-slate-800/60

              border
              border-slate-200
              dark:border-slate-700

              px-5
              py-4

              transition-all
              duration-300

              hover:border-blue-500
              hover:-translate-y-1
            "
          >
            <div className="text-blue-500">
              {item.icon}
            </div>

            <span
              className="
                font-medium

                text-slate-700
                dark:text-slate-300
              "
            >
              {item.text}
            </span>
          </div>

        ))}

      </div>

      {/* Button */}

      <div className="mt-10">
        <Button href="/resume.pdf">
          Download Resume
        </Button>
      </div>

    </div>
  );
}