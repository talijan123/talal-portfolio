import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import ProjectTags from "./ProjectTags";
import ProjectButtons from "./ProjectButtons";

export default function ProjectCard({
  project,
  onOpen,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      onClick={() => onOpen(project)}
      className="
        cursor-pointer
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-slate-900/70
        backdrop-blur-xl
        border
        border-slate-800
        hover:border-blue-500
        transition-all
        duration-500
        shadow-xl
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-72
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950
            via-slate-950/30
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
            flex
            items-end
            justify-end
            p-6
          "
        >
          <div
            className="
              w-12
              h-12
              rounded-full
              bg-blue-600
              flex
              items-center
              justify-center
              text-white
              shadow-lg
              scale-0
              group-hover:scale-100
              transition-all
              duration-300
            "
          >
            <HiArrowUpRight size={24} />
          </div>
        </div>

      </div>

      <div className="p-8">

        <h3
          className="
            text-3xl
            font-black
            transition-colors
            duration-300
            group-hover:text-blue-400
          "
        >
          {project.title}
        </h3>

        <p className="mt-5 text-slate-400 leading-8">
          {project.description}
        </p>

        <ProjectTags
          technologies={project.technologies}
        />

        {/* Prevent buttons from opening the modal */}
        <div
          onClick={(e) => e.stopPropagation()}
        >
          <ProjectButtons
            demo={project.demo}
            github={project.github}
          />
        </div>

      </div>

    </motion.div>
  );
}