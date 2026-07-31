import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { Link } from "react-scroll";

import { profile } from "../../data/profile";
import { useTheme } from "../../context/ThemeContext";

import darkLogo from "../../assets/logo-dark.svg";
import lightLogo from "../../assets/logo-light.svg";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className="
        bg-white
        dark:bg-slate-950

        border-t
        border-slate-200
        dark:border-slate-800

        transition-colors
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top */}

        <div className="grid lg:grid-cols-3 gap-14">

          {/* Logo */}

          <div>

            <img
              src={theme === "dark" ? darkLogo : lightLogo}
              alt="Talal Hassan"
              className="h-16 w-auto"
            />

            <p
              className="
                mt-6

                max-w-sm

                leading-8

                text-slate-600
                dark:text-slate-400
              "
            >
              Passionate Front-End Developer creating
              beautiful, responsive and high-performance
              websites using React, JavaScript,
              WordPress and modern technologies.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3
              className="
                text-xl
                font-bold

                text-slate-900
                dark:text-white
              "
            >
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              {navLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={600}
                  offset={-70}
                  className="
                    cursor-pointer

                    text-slate-600
                    dark:text-slate-400

                    hover:text-blue-500

                    transition-all
                    duration-300
                  "
                >
                  {item.name}
                </Link>
              ))}

            </div>

          </div>

          {/* Social */}

          <div className="lg:text-right">

            <h3
              className="
                text-xl
                font-bold

                text-slate-900
                dark:text-white
              "
            >
              Let's Connect
            </h3>

            <div className="mt-6 flex lg:justify-end gap-5">

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="
                  w-12
                  h-12

                  rounded-full

                  bg-slate-100
                  dark:bg-slate-900

                  border
                  border-slate-300
                  dark:border-slate-700

                  flex
                  items-center
                  justify-center

                  text-slate-700
                  dark:text-white

                  transition-all
                  duration-300

                  hover:bg-blue-600
                  hover:border-blue-600
                  hover:text-white
                  hover:-translate-y-1
                "
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
                  w-12
                  h-12

                  rounded-full

                  bg-slate-100
                  dark:bg-slate-900

                  border
                  border-slate-300
                  dark:border-slate-700

                  flex
                  items-center
                  justify-center

                  text-slate-700
                  dark:text-white

                  transition-all
                  duration-300

                  hover:bg-blue-600
                  hover:border-blue-600
                  hover:text-white
                  hover:-translate-y-1
                "
              >
                <FaLinkedin />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="
                  w-12
                  h-12

                  rounded-full

                  bg-slate-100
                  dark:bg-slate-900

                  border
                  border-slate-300
                  dark:border-slate-700

                  flex
                  items-center
                  justify-center

                  text-slate-700
                  dark:text-white

                  transition-all
                  duration-300

                  hover:bg-blue-600
                  hover:border-blue-600
                  hover:text-white
                  hover:-translate-y-1
                "
              >
                <FaEnvelope />
              </a>

            </div>

            {/* Back To Top */}

            <Link
              to="home"
              smooth
              duration={600}
              offset={-70}
              className="
                mt-10

                inline-flex
                items-center
                gap-2

                cursor-pointer

                rounded-full

                bg-blue-600

                px-5
                py-3

                text-white
                font-semibold

                transition-all
                duration-300

                hover:bg-blue-700
                hover:-translate-y-1
              "
            >
              <HiArrowUp />

              Back to Top
            </Link>

          </div>

        </div>

        {/* Bottom */}

        <div
          className="
            mt-16

            pt-8

            border-t
            border-slate-200
            dark:border-slate-800

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-5
          "
        >
          <p
            className="
              text-slate-500
              text-center
            "
          >
            © 2026 Talal Hassan. All Rights Reserved.
          </p>

          <p
            className="
              text-slate-500
              text-center
            "
          >
            Designed & Built with ❤️ using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}