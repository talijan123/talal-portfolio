import { profile } from "../../data/profile";
import { motion } from "framer-motion";
import { fadeRight } from "../../animations/fade";
export default function HeroImage() {
    return (
        <motion.div
            className="flex-1 flex justify-center items-center"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            custom={0.4}
        >
            <div className="relative">

                {/* Background Glow */}
                <div
                    className="
            absolute
            inset-0
            scale-110
            rounded-full
            bg-blue-500/20
            blur-3xl
          "
                />

                {/* Main Image */}
                <div
                    className="
            relative
            w-80
            h-80
            lg:w-[430px]
            lg:h-[430px]
            rounded-full
            overflow-hidden
            border-4
            border-blue-500
            shadow-2xl
            shadow-blue-500/30
            z-10
          "
                >
                    <img
                        src={profile.image}
                        alt={profile.name}
                        loading="eager"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Top Left Circle */}
                <motion.div
                    animate={{
                        y: [0, -12, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
    absolute
    -top-6
    -left-6
    w-8
    h-8
    rounded-full
    bg-blue-500
  "
                />

                {/* Bottom Right Circle */}
                <motion.div
                    animate={{
                        y: [0, 12, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
    absolute
    bottom-6
    -right-6
    w-6
    h-6
    rounded-full
    bg-purple-500
  "
                />

                {/* Decorative Ring */}
                <div
                    className="
            absolute
            -bottom-10
            -left-10
            w-24
            h-24
            rounded-full
            border
            border-blue-500/30
            z-0
          "
                />
            </div>
        </motion.div>
    );
}