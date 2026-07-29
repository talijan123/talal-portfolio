import { motion } from "framer-motion";

const techStack = [
  "React",
  "Tailwind CSS",
  "JavaScript",
  "WordPress",
  "Node.js",
  "Git",
  "GitHub",
  "AI Tools",
  "Amazon FBA",
];

export default function TechStack() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      {techStack.map((tech, index) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.08,
            duration: 0.4,
          }}
          whileHover={{
            y: -4,
            scale: 1.05,
          }}
          className="
            rounded-full
            border
            border-slate-700
            bg-slate-900/80
            px-5
            py-2.5
            text-sm
            font-medium
            text-slate-300
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-blue-500
            hover:text-blue-400
            hover:shadow-lg
            hover:shadow-blue-500/20
            cursor-default
          "
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
}