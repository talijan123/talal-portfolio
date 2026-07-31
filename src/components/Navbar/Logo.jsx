import { Link } from "react-scroll";
import { useTheme } from "../../context/ThemeContext";

import logoDark from "../../assets/logo-dark.svg";
import logoLight from "../../assets/logo-light.svg";

export default function Logo() {
  const { theme } = useTheme();

  return (
    <Link
      to="home"
      smooth={true}
      duration={500}
      offset={-80}
      className="flex items-center gap-3 cursor-pointer"
    >
      <img
        src={theme === "dark" ? logoDark : logoLight}
        alt="Talal Hassan"
        className="
          h-12
          w-auto
          transition-all
          duration-300
          hover:scale-105
        "
      />

      <div className="leading-tight">
        <h1
          className="
            text-xl
            font-black
            text-slate-900
            dark:text-white
            transition-colors
            duration-300
          "
        >
          Talal Hassan
        </h1>

        <p
          className="
            text-[11px]
            uppercase
            tracking-[3px]
            text-slate-500
            dark:text-slate-400
            transition-colors
            duration-300
          "
        >
          Front-End Developer
        </p>
      </div>
    </Link>
  );
}