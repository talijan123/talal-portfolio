import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ResumeButton from "./ResumeButton";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        sticky
        top-0
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "py-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg border-b border-slate-200 dark:border-slate-800"
            : "py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />

        <NavLinks />

        <div className="hidden lg:flex items-center gap-4">
          <ResumeButton />
          <ThemeToggle />
        </div>

        <MobileMenu />
      </div>
    </nav>
  );
}