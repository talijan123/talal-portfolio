import { motion } from "framer-motion";
import { experience } from "../../data/experience";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <section className="mt-28">

      {/* Section Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <p
          className="
            text-blue-500
            uppercase
            tracking-[5px]
            font-bold
          "
        >
          My Journey
        </p>

        <h2
          className="
            mt-4

            text-4xl
            md:text-5xl

            font-black

            text-slate-900
            dark:text-white

            transition-colors
            duration-300
          "
        >
          Education & Experience
        </h2>

        <p
          className="
            mt-5
            max-w-2xl
            mx-auto

            text-lg
            leading-8

            text-slate-600
            dark:text-slate-400

            transition-colors
            duration-300
          "
        >
          My journey of learning, building projects, and continuously improving
          my skills in web development and modern technologies.
        </p>
      </motion.div>

      {/* Timeline */}

      <div className="relative">
        {experience.map((item, index) => (
          <TimelineItem
            key={item.year}
            {...item}
            delay={index * 0.15}
          />
        ))}
      </div>

    </section>
  );
}