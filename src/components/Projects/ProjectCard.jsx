import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import ProjectTags from "./ProjectTags";
import ProjectButtons from "./ProjectButtons";

export default function ProjectCard({ project, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      onClick={() => onOpen(project)}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        cursor-pointer

        bg-white/90
        dark:bg-slate-900/70

        backdrop-blur-xl

        border
        border-slate-200
        dark:border-slate-800

        hover:border-blue-500

        transition-all
        duration-500

        shadow-xl
        shadow-slate-300/30
        dark:shadow-black/40
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

            transition-transform
            duration-700

            group-hover:scale-105
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-slate-950/90
            via-slate-950/30
            to-transparent

            opacity-0
            group-hover:opacity-100

            transition-all
            duration-500

            flex
            flex-col
            items-center
            justify-center
          "
        >
          <div
            className="
              w-14
              h-14
              rounded-full

              bg-blue-600

              flex
              items-center
              justify-center

              text-white

              shadow-xl

              scale-0
              group-hover:scale-100

              transition-all
              duration-300
            "
          >
            <HiArrowUpRight size={28} />
          </div>

          <p
            className="
              mt-4
              text-white
              font-semibold
              tracking-wide
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-500
            "
          >
            Live Preview
          </p>
        </div>
      </div>

      {/* Content */}

      <div className="p-8">

        <h3
          className="
            text-3xl
            font-black

            text-slate-900
            dark:text-white

            transition-colors
            duration-300

            group-hover:text-blue-500
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-5
            leading-8

            text-slate-600
            dark:text-slate-400

            transition-colors
            duration-300
          "
        >
          {project.description}
        </p>

        <ProjectTags
          technologies={project.technologies}
        />

        {/* Buttons */}

        <div
          className="mt-8"
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