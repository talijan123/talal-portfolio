import { motion, AnimatePresence } from "framer-motion";
import {
  HiX,
  HiExternalLink,
  HiCode,
} from "react-icons/hi";

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-[100]
            bg-black/70
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-5
          "
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 40,
            }}
            transition={{
              duration: .3,
            }}
            className="
              relative

              w-full
              max-w-5xl

              max-h-[90vh]
              overflow-y-auto

              rounded-3xl

              bg-white
              dark:bg-slate-900

              border
              border-slate-200
              dark:border-slate-700

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

                z-20

                w-11
                h-11

                rounded-full

                bg-white
                dark:bg-slate-800

                border
                border-slate-200
                dark:border-slate-700

                flex
                items-center
                justify-center

                transition-all
                duration-300

                hover:bg-red-500
                hover:text-white
              "
            >
              <HiX size={22} />
            </button>

            {/* Image */}

            <img
              src={project.image}
              alt={project.title}
              className="
                w-full
                h-80
                object-cover
              "
            />

            {/* Content */}

            <div className="p-8 lg:p-10">

              <h2
                className="
                  text-4xl
                  font-black

                  text-slate-900
                  dark:text-white
                "
              >
                {project.title}
              </h2>

              <p
                className="
                  mt-6

                  leading-8

                  text-slate-600
                  dark:text-slate-400
                "
              >
                {project.description}
              </p>

              {/* Technologies */}

              <div className="mt-8 flex flex-wrap gap-3">

                {project.technologies.map((item) => (

                  <span
                    key={item}
                    className="
                      inline-flex
                      items-center
                      gap-2

                      rounded-full

                      px-4
                      py-2

                      bg-blue-50
                      dark:bg-slate-800

                      border
                      border-blue-100
                      dark:border-slate-700

                      text-slate-700
                      dark:text-slate-300

                      transition

                      hover:border-blue-500
                      hover:text-blue-500
                    "
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>

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
                    inline-flex
                    items-center
                    gap-2

                    rounded-xl

                    px-6
                    py-3

                    bg-blue-600
                    text-white

                    font-semibold

                    transition-all
                    duration-300

                    hover:bg-blue-700
                    hover:-translate-y-1
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
                    inline-flex
                    items-center
                    gap-2

                    rounded-xl

                    px-6
                    py-3

                    bg-white
                    dark:bg-slate-900

                    text-slate-800
                    dark:text-white

                    border
                    border-slate-300
                    dark:border-slate-700

                    font-semibold

                    transition-all
                    duration-300

                    hover:border-blue-500
                    hover:text-blue-500
                    hover:-translate-y-1
                  "
                >
                  <HiCode />

                  Source Code

                </a>

              </div>

            </div>

          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}