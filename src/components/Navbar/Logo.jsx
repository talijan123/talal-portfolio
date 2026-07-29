import { Link } from "react-scroll";
import logo from "../../assets/logo.svg";

export default function Logo() {
  return (
    <Link
      to="home"
      smooth
      duration={500}
      offset={-80}
      className="flex items-center gap-3 cursor-pointer"
    >
      <img
        src={logo}
        alt="Talal Hassan"
        className="
          h-12
          w-auto
          transition-transform
          duration-300
          hover:scale-105
        "
      />

      <div className="leading-tight">
        <h1 className="text-xl font-black text-white">
          Talal Hassan
        </h1>

        <p className="text-[11px] uppercase tracking-[3px] text-slate-400">
          Front-End Developer
        </p>
      </div>
    </Link>
  );
}