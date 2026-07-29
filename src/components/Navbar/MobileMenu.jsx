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
        className="text-white text-3xl"
      >
        {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
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
              bg-slate-900/95
              backdrop-blur-xl
              border
              border-slate-800
              rounded-2xl
              shadow-2xl
              overflow-hidden
              z-50
            "
          >
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  activeClass="!text-blue-500"
                  onClick={closeMenu}
                  className="
                    px-6
                    py-4
                    cursor-pointer
                    text-slate-300
                    font-medium
                    transition-all
                    duration-300
                    hover:bg-slate-800
                    hover:text-blue-500
                  "
                >
                  {link.name}
                </Link>
              ))}

              <div className="border-t border-slate-800 mt-3 pt-5 px-6 flex items-center justify-between">
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