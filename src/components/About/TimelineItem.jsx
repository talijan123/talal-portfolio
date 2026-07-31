import { motion } from "framer-motion";

export default function TimelineItem({
  year,
  title,
  description,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
      }}
      className="
        relative
        pl-14
        pb-12
      "
    >
      {/* Vertical Line */}

      <div
        className="
          absolute
          left-5
          top-0
          h-full
          w-[2px]

          bg-slate-300
          dark:bg-slate-700
        "
      />

      {/* Timeline Dot */}

      <div
        className="
          absolute
          left-0
          top-2

          flex
          items-center
          justify-center

          w-10
          h-10

          rounded-full

          bg-blue-500

          ring-4
          ring-white
          dark:ring-slate-900

          shadow-lg
          shadow-blue-500/30
        "
      >
        <div className="w-3 h-3 rounded-full bg-white"></div>
      </div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -5,
        }}
        className="
          rounded-2xl

          bg-white
          dark:bg-slate-800/70

          border
          border-slate-200
          dark:border-slate-700

          p-6

          shadow-lg
          shadow-slate-200/50
          dark:shadow-none

          transition-all
          duration-300

          hover:border-blue-500
          hover:shadow-xl
          hover:shadow-blue-500/10
        "
      >
        {/* Year */}

        <span
          className="
            inline-block

            rounded-full

            bg-blue-100
            dark:bg-blue-500/10

            px-4
            py-2

            text-sm
            font-bold

            text-blue-600
            dark:text-blue-400
          "
        >
          {year}
        </span>

        {/* Title */}

        <h3
          className="
            mt-5

            text-2xl
            font-bold

            text-slate-900
            dark:text-white
          "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-4

            leading-8

            text-slate-600
            dark:text-slate-400
          "
        >
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}