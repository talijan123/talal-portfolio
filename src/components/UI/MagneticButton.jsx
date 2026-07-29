import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({
  children,
  strength = 25,
  className = "",
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 300,
    damping: 20,
    mass: 0.2,
  });

  const y = useSpring(mouseY, {
    stiffness: 300,
    damping: 20,
    mass: 0.2,
  });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;

    const moveX = (xPos - width / 2) / (width / 2);
    const moveY = (yPos - height / 2) / (height / 2);

    mouseX.set(moveX * strength);
    mouseY.set(moveY * strength);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      className={`inline-block ${className}`}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}