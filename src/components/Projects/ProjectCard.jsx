import { motion } from "framer-motion";
import ProjectTags from "./ProjectTags";
import ProjectButtons from "./ProjectButtons";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="
        group
        overflow-hidden
        rounded-3xl
        bg-slate-900/70
        backdrop-blur-lg
        border
        border-slate-800
        hover:border-blue-500/60
        transition-all
        duration-300
        shadow-xl
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-64
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-3xl font-bold">
          {project.title}
        </h3>

        <p className="mt-5 text-slate-400 leading-8">
          {project.description}
        </p>

        <ProjectTags technologies={project.technologies} />

        <ProjectButtons
          demo={project.demo}
          github={project.github}
        />
      </div>
    </motion.div>
  );
}