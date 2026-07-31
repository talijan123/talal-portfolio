import { motion } from "framer-motion";
import { profile } from "../../data/profile";

export default function AboutImage() {
  return (
    <div className="flex-1 flex justify-center">

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Background Glow */}

        <div
          className="
            absolute
            inset-0
            scale-110
            rounded-3xl

            bg-blue-500/15
            dark:bg-blue-500/20

            blur-[70px]
          "
        />

        {/* Decorative Border */}

        <div
          className="
            absolute
            -inset-4

            rounded-[32px]

            border
            border-blue-500/20

            animate-pulse
          "
        />

        {/* Main Image */}

        <motion.div
          whileHover={{
            scale: 1.03,
            rotate: 1,
          }}
          transition={{
            duration: .3,
          }}
          className="
            relative

            overflow-hidden

            rounded-3xl

            bg-white
            dark:bg-slate-900

            border
            border-slate-200
            dark:border-slate-700

            p-2

            shadow-2xl
            shadow-slate-300/30
            dark:shadow-blue-500/20
          "
        >
          <img
            src={profile.image}
            alt={profile.name}
            className="
              w-80
              lg:w-[360px]

              rounded-2xl

              object-cover

              transition-transform
              duration-500

              hover:scale-105
            "
          />
        </motion.div>

        {/* Experience Badge */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -top-4
            -right-6

            rounded-2xl

            bg-white/90
            dark:bg-slate-900/90

            backdrop-blur-md

            border
            border-slate-200
            dark:border-slate-700

            px-5
            py-3

            shadow-xl
          "
        >
          <p className="text-xl font-black text-blue-500">
            2+
          </p>

          <p className="text-xs text-slate-600 dark:text-slate-400">
            Years Learning
          </p>
        </motion.div>

        {/* Tech Badge */}

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-5
            -left-6

            rounded-2xl

            bg-white/90
            dark:bg-slate-900/90

            backdrop-blur-md

            border
            border-slate-200
            dark:border-slate-700

            px-5
            py-3

            shadow-xl
          "
        >
          <p className="font-semibold text-slate-900 dark:text-white">
            React ⚛️
          </p>

          <p className="text-xs text-slate-600 dark:text-slate-400">
            Front-End Developer
          </p>
        </motion.div>

      </motion.div>

    </div>
  );
}