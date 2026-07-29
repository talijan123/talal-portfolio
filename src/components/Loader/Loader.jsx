import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="
        fixed
        inset-0
        z-[9999]
        bg-slate-950
        flex
        items-center
        justify-center
        overflow-hidden
      "
      exit={{
        opacity: 0,
        scale: 1.03,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-500/20
          blur-[150px]
        "
      />

      <div className="relative z-10 text-center">

        {/* Name */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            text-6xl
            md:text-8xl
            font-black
            text-white
          "
        >
          Talal{" "}
          <span className="text-blue-500">
            Hassan
          </span>
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
            duration: 0.6,
          }}
          className="
            mt-5
            uppercase
            tracking-[8px]
            text-slate-400
            text-sm
          "
        >
          Frontend Developer
        </motion.p>

        {/* Animated Line */}

        <div className="mt-12 w-64 h-[2px] bg-slate-800 mx-auto overflow-hidden rounded-full">

          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "100%",
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
            }}
            className="
              h-full
              w-24
              bg-blue-500
            "
          />

        </div>

        {/* Loading Text */}

        <motion.p
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="
            mt-8
            text-slate-500
            text-sm
            tracking-[4px]
          "
        >
          Loading Experience...
        </motion.p>

      </div>
    </motion.div>
  );
}