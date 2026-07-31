import { profile } from "../../data/profile";
import { motion } from "framer-motion";
import { fadeRight } from "../../animations/fade";

export default function HeroImage() {
  return (
    <motion.div
      className="flex-1 flex justify-center items-center relative"
      variants={fadeRight}
      initial="hidden"
      animate="visible"
      custom={0.4}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
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
            rounded-full
            bg-blue-500/20
            dark:bg-blue-500/20
            blur-[80px]
          "
        />

        {/* Decorative Ring */}
        <div
          className="
            absolute
            -inset-6
            rounded-full
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
            duration: 0.3,
          }}
          className="
            relative
            w-80
            h-80
            lg:w-[430px]
            lg:h-[430px]
            rounded-full
            bg-white
            dark:bg-slate-900
            p-3
            border
            border-slate-200
            dark:border-white/10
            shadow-2xl
            shadow-slate-300/40
            dark:shadow-blue-500/20
            overflow-hidden
            z-10
            transition-all
            duration-300
          "
        >
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src={profile.image}
              alt={profile.name}
              loading="eager"
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-500
                hover:scale-110
              "
            />
          </div>
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
            -top-3
            -right-6
            bg-white/90
            dark:bg-slate-900/90
            backdrop-blur-md
            border
            border-slate-200
            dark:border-slate-700
            rounded-2xl
            px-5
            py-3
            shadow-xl
            transition-all
            duration-300
            z-20
          "
        >
          <p className="text-blue-500 font-bold text-lg">
            2+
          </p>

          <p className="text-xs text-slate-600 dark:text-slate-400 whitespace-nowrap">
            Years Learning
          </p>
        </motion.div>

        {/* Tech Badge */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-5
            -left-8
            bg-white/90
            dark:bg-slate-900/90
            backdrop-blur-md
            border
            border-slate-200
            dark:border-slate-700
            rounded-2xl
            px-5
            py-3
            shadow-xl
            transition-all
            duration-300
            z-20
          "
        >
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            React ⚛️
          </p>

          <p className="text-xs text-slate-600 dark:text-slate-400">
            Tailwind CSS
          </p>
        </motion.div>

        {/* Floating Blue Circle */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -top-10
            -left-10
            w-8
            h-8
            rounded-full
            bg-blue-500
            shadow-lg
            shadow-blue-500/50
          "
        />

        {/* Floating Purple Circle */}
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-0
            -right-10
            w-6
            h-6
            rounded-full
            bg-purple-500
            shadow-lg
            shadow-purple-500/50
          "
        />
      </motion.div>
    </motion.div>
  );
}