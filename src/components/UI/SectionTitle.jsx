import { motion } from "framer-motion";

export default function SectionTitle({
  badge,
  title,
  subtitle,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto mb-16 text-center"
    >
      {/* Badge */}

      <span
        className="
          inline-flex
          items-center
          gap-2

          rounded-full

          px-4
          py-2

          text-sm
          font-semibold
          uppercase
          tracking-[3px]

          bg-blue-50
          dark:bg-blue-500/10

          text-blue-600
          dark:text-blue-400

          border
          border-blue-200
          dark:border-blue-500/20

          transition-all
          duration-300
        "
      >
        <span className="h-2 w-2 rounded-full bg-blue-500"></span>

        {badge}
      </span>

      {/* Heading */}

      <h2
        className="
          mt-6

          text-4xl
          md:text-5xl

          font-black

          text-slate-900
          dark:text-white

          transition-colors
          duration-300
        "
      >
        {title}
      </h2>

      {/* Subtitle */}

      <p
        className="
          mt-6

          text-lg
          leading-8

          text-slate-600
          dark:text-slate-400

          transition-colors
          duration-300
        "
      >
        {subtitle}
      </p>
    </motion.div>
  );
}