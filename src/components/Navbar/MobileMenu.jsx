import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

import ResumeButton from "./ResumeButton";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden relative">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Mobile Menu"
        className="
          flex
          items-center
          justify-center
          w-11
          h-11
          rounded-full

          text-slate-900
          dark:text-white

          hover:bg-slate-200
          dark:hover:bg-slate-800

          transition-all
          duration-300
        "
      >
        {isOpen ? (
          <HiOutlineX size={28} />
        ) : (
          <HiOutlineMenu size={28} />
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="
              absolute
              top-16
              right-0
              w-72

              rounded-2xl
              overflow-hidden

              backdrop-blur-xl

              bg-white/95
              dark:bg-slate-900/95

              border
              border-slate-200
              dark:border-slate-800

              shadow-2xl

              z-50
            "
          >
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy
                  smooth
                  duration={500}
                  offset={-80}
                  activeClass="!text-blue-500"
                  onClick={closeMenu}
                  className="
                    px-6
                    py-4

                    cursor-pointer
                    font-medium

                    text-slate-700
                    dark:text-slate-300

                    hover:bg-slate-100
                    dark:hover:bg-slate-800

                    hover:text-blue-500

                    transition-all
                    duration-300
                  "
                >
                  {link.name}
                </Link>
              ))}

              {/* Bottom Actions */}
              <div
                className="
                  mt-3
                  pt-5
                  px-6

                  flex
                  items-center
                  justify-between

                  border-t
                  border-slate-200
                  dark:border-slate-800
                "
              >
                <ResumeButton />
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}