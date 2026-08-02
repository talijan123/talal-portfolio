import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

export default function ContactCard({
  item,
  delay = 0,
}) {
  const Icon = item.icon;

  const cardClass = `
    group

    relative
    overflow-hidden

    flex
    items-center
    justify-between

    rounded-3xl

    bg-white
    dark:bg-slate-900/70

    border
    border-slate-200
    dark:border-slate-700

    backdrop-blur-xl

    p-6

    shadow-lg
    shadow-slate-200/50
    dark:shadow-none

    transition-all
    duration-300

    hover:border-blue-500
    hover:shadow-xl
    hover:shadow-blue-500/15
  `;

  const content = (
    <>
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

      <div className="relative z-10 flex items-center gap-5">
        {/* Icon */}
        <div
          className="
            flex
            items-center
            justify-center

            w-14
            h-14

            rounded-2xl

            bg-blue-500/10

            text-blue-500

            text-2xl
          "
        >
          <Icon />
        </div>

        {/* Text */}
        <div>
          <h3
            className="
              text-lg
              font-bold

              text-slate-900
              dark:text-white
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-1

              text-sm

              text-slate-600
              dark:text-slate-400
            "
          >
            {item.value}
          </p>
        </div>
      </div>

      {/* Arrow */}
      {item.link && (
        <div
          className="
            relative
            z-10

            text-slate-400

            transition-all
            duration-300

            group-hover:text-blue-500
            group-hover:translate-x-1
          "
        >
          <HiArrowUpRight size={22} />
        </div>
      )}
    </>
  );

  if (item.link) {
    return (
      <motion.a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        aria-label={item.title}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.45,
          delay,
        }}
        whileHover={{
          y: -6,
          scale: 1.02,
        }}
        className={cardClass}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay,
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className={cardClass}
    >
      {content}
    </motion.div>
  );
}