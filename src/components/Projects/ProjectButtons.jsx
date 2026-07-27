import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function ProjectButtons({ github, demo }) {
  return (
    <div className="flex gap-4 mt-8">
      <a
        href={demo}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl"
      >
        <HiOutlineExternalLink />
        Live Demo
      </a>

      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 border border-slate-600 hover:border-blue-500 transition px-5 py-3 rounded-xl"
      >
        <FaGithub />
        GitHub
      </a>
    </div>
  );
}