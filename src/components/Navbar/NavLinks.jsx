import { Link } from "react-scroll";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function NavLinks() {
  return (
    <div className="hidden lg:flex items-center gap-10">
      {navLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          activeClass="!text-blue-500"
          className="
            relative
            cursor-pointer
            text-slate-700
            dark:text-slate-300
            font-medium
            transition-all
            duration-300
            hover:text-blue-500
            after:absolute
            after:left-0
            after:-bottom-1
            after:h-[2px]
            after:w-0
            after:bg-blue-500
            after:transition-all
            after:duration-300
            hover:after:w-full
          "
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}