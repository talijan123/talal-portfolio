import { motion } from "framer-motion";

export default function ProjectTags({ technologies }) {
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      {technologies.map((tech, index) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.05,
            duration: 0.25,
          }}
          whileHover={{
            y: -3,
            scale: 1.05,
          }}
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            px-4
            py-2

            text-sm
            font-medium

            bg-blue-50
            dark:bg-slate-800/70

            text-slate-700
            dark:text-slate-300

            border
            border-blue-100
            dark:border-slate-700

            backdrop-blur-md

            transition-all
            duration-300

            hover:border-blue-500
            hover:text-blue-500
            hover:shadow-lg
            hover:shadow-blue-500/20
          "
        >
          <span className="h-2 w-2 rounded-full bg-blue-500"></span>

          {tech}
        </motion.span>
      ))}
    </div>
  );
}