import { motion } from "framer-motion";

export default function StatCard({
  number,
  label,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="
        group

        rounded-2xl

        p-8

        text-center

        bg-white
        dark:bg-slate-800/70

        backdrop-blur-xl

        border
        border-slate-200
        dark:border-slate-700

        shadow-lg
        shadow-slate-200/60
        dark:shadow-none

        transition-all
        duration-300

        hover:border-blue-500
        hover:shadow-xl
        hover:shadow-blue-500/10
      "
    >
      {/* Number */}

      <h3
        className="
          text-5xl
          font-black

          text-blue-500

          transition-transform
          duration-300

          group-hover:scale-110
        "
      >
        {number}
      </h3>

      {/* Label */}

      <p
        className="
          mt-4

          text-base
          font-medium

          text-slate-600
          dark:text-slate-400

          transition-colors
          duration-300
        "
      >
        {label}
      </p>
    </motion.div>
  );
}