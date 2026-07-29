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
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-500/20
          blur-[140px]
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
          w-[450px]
          h-[450px]
          rounded-full
          bg-purple-500/20
          blur-[150px]
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
          w-[420px]
          h-[420px]
          rounded-full
          bg-cyan-500/15
          blur-[130px]
        "
      />
    </div>
  );
}