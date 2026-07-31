import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function ProjectButtons({ demo, github }) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">

      {/* Live Demo */}

      <a
        href={demo}
        target="_blank"
        rel="noreferrer"
        className="
          group
          inline-flex
          items-center
          gap-2

          rounded-xl

          px-6
          py-3

          font-semibold

          bg-blue-600
          text-white

          shadow-lg
          shadow-blue-500/20

          transition-all
          duration-300

          hover:bg-blue-700
          hover:shadow-blue-500/40
          hover:-translate-y-1
        "
      >
        <HiOutlineExternalLink
          className="
            text-lg
            transition-transform
            duration-300
            group-hover:rotate-12
          "
        />

        Live Demo
      </a>

      {/* GitHub */}

      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="
          group
          inline-flex
          items-center
          gap-2

          rounded-xl

          px-6
          py-3

          font-semibold

          bg-white
          dark:bg-slate-900

          text-slate-800
          dark:text-white

          border
          border-slate-300
          dark:border-slate-700

          shadow-md
          dark:shadow-none

          transition-all
          duration-300

          hover:border-blue-500
          hover:text-blue-500
          hover:-translate-y-1
          hover:shadow-lg
          hover:shadow-blue-500/20
        "
      >
        <FaGithub
          className="
            text-lg
            transition-transform
            duration-300
            group-hover:rotate-12
          "
        />

        Source Code
      </a>

    </div>
  );
}