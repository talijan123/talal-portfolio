import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({
        x: -100,
        y: -100,
    });

    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        const addHover = () => setHovering(true);
        const removeHover = () => setHovering(false);

        window.addEventListener("mousemove", moveCursor);

        const elements = document.querySelectorAll(
            "a, button, input, textarea, [role='button']"
        );

        elements.forEach((el) => {
            el.addEventListener("mouseenter", addHover);
            el.addEventListener("mouseleave", removeHover);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);

            elements.forEach((el) => {
                el.removeEventListener("mouseenter", addHover);
                el.removeEventListener("mouseleave", removeHover);
            });
        };
    }, []);

    return (
        <>
            {/* Outer Cursor */}

            <motion.div
                animate={{
                    x: position.x - (hovering ? 22 : 18),
                    y: position.y - (hovering ? 22 : 18),
                    width: hovering ? 44 : 36,
                    height: hovering ? 44 : 36,
                }}
                transition={{
                    type: "spring",
                    stiffness: 1500,
                    damping: 22,
                    mass: 0.15,
                }}
                className="
          fixed
          top-0
          left-0
          rounded-full
          border-2
          border-blue-500
          pointer-events-none
          z-[9999]
        "
            />

            {/* Inner Cursor */}

            <motion.div
                animate={{
                    x: position.x - 4,
                    y: position.y - 4,
                    scale: hovering ? 1.8 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 2200,
                    damping: 18,
                    mass: 0.1,
                }}
                className="
          fixed
          top-0
          left-0
          w-2
          h-2
          rounded-full
          bg-blue-500
          pointer-events-none
          z-[9999]
        "
            />
        </>
    );
}