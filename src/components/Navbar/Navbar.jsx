import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ResumeButton from "./ResumeButton";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

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