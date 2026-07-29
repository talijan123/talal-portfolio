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
      className="text-center max-w-3xl mx-auto mb-16"
    >
      {/* Badge */}
      <span
        className="
          inline-block
          px-4
          py-2
          rounded-full
          bg-blue-500/10
          border
          border-blue-500/20
          text-blue-400
          text-sm
          font-semibold
          uppercase
          tracking-widest
        "
      >
        {badge}
      </span>

      {/* Heading */}
      <h2
        className="
          mt-6
          text-4xl
          md:text-5xl
          font-black
          text-white
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
          text-slate-400
        "
      >
        {subtitle}
      </p>
    </motion.div>
  );
}