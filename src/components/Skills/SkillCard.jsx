import { motion } from "framer-motion";

export default function SkillCard({
  icon: Icon,
  name,
  color,
  category,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay,
      }}
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      className="
        group

        relative
        overflow-hidden

        rounded-3xl

        bg-white
        dark:bg-slate-900/70

        border
        border-slate-200
        dark:border-slate-700

        backdrop-blur-xl

        p-7

        shadow-lg
        shadow-slate-200/60
        dark:shadow-none

        transition-all
        duration-300

        hover:border-blue-500
        hover:shadow-xl
        hover:shadow-blue-500/15
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute

          -top-20
          -right-20

          h-40
          w-40

          rounded-full

          bg-blue-500/10

          blur-3xl

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* Icon */}

      <div className="relative z-10 flex justify-center">
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.15,
          }}
          transition={{
            duration: .25,
          }}
        >
          <Icon
            className={`text-6xl ${color}`}
          />
        </motion.div>
      </div>

      {/* Skill */}

      <h3
        className="
          relative
          z-10

          mt-6

          text-xl
          font-bold

          text-center

          text-slate-900
          dark:text-white
        "
      >
        {name}
      </h3>

      {/* Category */}

      <p
        className="
          relative
          z-10

          mt-2

          text-sm

          text-center

          text-slate-500
          dark:text-slate-400
        "
      >
        {category}
      </p>
    </motion.div>
  );
}