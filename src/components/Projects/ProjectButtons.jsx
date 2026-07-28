import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function ProjectButtons({ demo, github }) {
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      <a
        href={demo}
        target="_blank"
        rel="noreferrer"
        className="
          flex
          items-center
          gap-2
          px-6
          py-3
          rounded-xl
          bg-blue-600
          hover:bg-blue-700
          transition-all
          duration-300
          font-medium
        "
      >
        <HiOutlineExternalLink />
        Live Demo
      </a>

      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="
          flex
          items-center
          gap-2
          px-6
          py-3
          rounded-xl
          border
          border-slate-700
          hover:border-blue-500
          hover:text-blue-400
          transition-all
          duration-300
          font-medium
        "
      >
        <FaGithub />
        GitHub
      </a>
    </div>
  );
}