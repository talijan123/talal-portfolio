import { motion } from "framer-motion";

const stats = [
  {
    end: 15,
    suffix: "+",
    title: "Projects Built",
  },
  {
    end: 16,
    suffix: "+",
    title: "Technologies",
  },
  {
    end: 2,
    suffix: "+",
    title: "Years Learning",
  },
  {
    end: 100,
    suffix: "%",
    title: "Passion",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="
        py-24

        bg-white
        dark:bg-slate-950

        transition-colors
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >

          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                rounded-2xl

                border

                border-slate-200
                dark:border-slate-800

                bg-white
                dark:bg-slate-900

                p-8

                text-center

                shadow-lg
                shadow-slate-200/60
                dark:shadow-none

                transition-all
                duration-300

                hover:border-blue-500
                hover:shadow-xl
                hover:shadow-blue-500/20
              "
            >
              <h3
                className="
                  text-4xl
                  lg:text-5xl

                  font-black

                  text-blue-500
                "
              >
                {item.end}
                {item.suffix}
              </h3>

              <p
                className="
                  mt-4

                  font-medium

                  text-slate-600
                  dark:text-slate-400
                "
              >
                {item.title}
              </p>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}