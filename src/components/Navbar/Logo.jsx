import { Link } from "react-scroll";
import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <Link
      to="home"
      smooth={true}
      duration={500}
      spy={true}
      offset={-80}
      className="
        flex
        items-center
        gap-3
        cursor-pointer
        select-none
      "
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Talal Hassan Logo"
        className="
          w-12
          h-12
          object-contain
          transition-transform
          duration-300
          hover:scale-110
        "
      />

      {/* Name */}
      <div className="leading-tight">
        <h1
          className="
            text-xl
            font-black
            text-white
            tracking-wide
          "
        >
          Talal
          <span className="text-blue-500">.</span>
        </h1>

        <p
          className="
            text-xs
            uppercase
            tracking-[3px]
            text-slate-400
          "
        >
          Front-End Developer
        </p>
      </div>
    </Link>
  );
}