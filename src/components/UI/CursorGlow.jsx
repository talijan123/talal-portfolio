import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e) => {
      x.set(e.clientX - 150);
      y.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="
        fixed
        top-0
        left-0
        w-[300px]
        h-[300px]
        rounded-full
        bg-blue-500/30
        blur-[120px]
        pointer-events-none
        z-50
      "
    />
  );
}