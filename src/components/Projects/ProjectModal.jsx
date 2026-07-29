import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiExternalLink, HiCode } from "react-icons/hi";

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}) {
  // Prevent rendering when no project is selected
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClose}
          className="
            fixed
            inset-0
            z-[100]
            bg-black/80
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-6
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              relative
              max-w-4xl
              w-full
              bg-slate-900
              rounded-3xl
              overflow-hidden
              border
              border-slate-700
              shadow-2xl
            "
          >
            {/* Close Button */}

            <button
              onClick={onClose}
              className="
                absolute
                top-5
                right-5
                z-10
                w-11
                h-11
                rounded-full
                bg-slate-800
                hover:bg-red-500
                transition
                flex
                items-center
                justify-center
              "
            >
              <HiX className="text-white" size={22} />
            </button>

            {/* Project Image */}

            <img
              src={project.image}
              alt={project.title}
              className="
                w-full
                h-72
                object-cover
              "
            />

            {/* Content */}

            <div className="p-8">

              <h2 className="text-4xl font-black text-white">
                {project.title}
              </h2>

              <p className="mt-5 text-slate-400 leading-8">
                {project.description}
              </p>

              {/* Technologies */}

              <div className="mt-8 flex flex-wrap gap-3">

                {project.technologies.map((item) => (
                  <span
                    key={item}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-blue-500/10
                      text-blue-400
                      border
                      border-blue-500/20
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href={project.demo}
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
                    transition
                  "
                >
                  <HiExternalLink />
                  Live Demo
                </a>

                <a
                  href={project.github}
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
                    transition
                  "
                >
                  <HiCode />
                  GitHub
                </a>

              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}