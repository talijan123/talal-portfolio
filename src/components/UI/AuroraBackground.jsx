import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Blue */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-20
          left-10
          w-[520px]
          h-[520px]
          rounded-full
          bg-blue-500/15
          dark:bg-blue-500/20
          blur-[150px]
          transition-all
          duration-500
        "
      />

      {/* Purple */}
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 90, 0],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-40
          right-10
          w-[470px]
          h-[470px]
          rounded-full
          bg-sky-400/15
          dark:bg-purple-500/20
          blur-[150px]
          transition-all
          duration-500
        "
      />

      {/* Cyan */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-10
          left-1/3
          w-[430px]
          h-[430px]
          rounded-full
          bg-cyan-300/15
          dark:bg-cyan-500/15
          blur-[140px]
          transition-all
          duration-500
        "
      />

      {/* White Glow (Light Mode Only) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[650px]
          h-[650px]
          rounded-full
          bg-white/40
          dark:hidden
          blur-[180px]
        "
      />

    </div>
  );
}