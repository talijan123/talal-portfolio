import { HiArrowRight, HiDownload } from "react-icons/hi";
import { Link } from "react-scroll";
import MagneticButton from "../UI/MagneticButton";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">

      {/* Hire Me */}

      <MagneticButton strength={20}>
        <Link
          to="contact"
          smooth={true}
          duration={600}
          offset={-70}
          className="
            group
            cursor-pointer
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-blue-600
            px-7
            py-4
            font-semibold
            text-white
            shadow-lg
            shadow-blue-600/30
            transition-all
            duration-300
            hover:bg-blue-700
            hover:shadow-blue-500/50
          "
        >
          Hire Me

          <HiArrowRight
            size={20}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>
      </MagneticButton>

      {/* Download Resume */}

      <MagneticButton strength={20}>
        <a
          href="/resume.pdf"
          download
          className="
            group
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-xl
            border
            border-slate-700
            bg-slate-900
            px-7
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:border-blue-500
            hover:bg-slate-800
          "
        >
          Download CV

          <HiDownload
            size={20}
            className="
              transition-transform
              duration-300
              group-hover:translate-y-1
            "
          />
        </a>
      </MagneticButton>

    </div>
  );
}