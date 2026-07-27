import { profile } from "../../data/profile";
import { motion } from "framer-motion";
import { fadeLeft } from "../../animations/fade";
import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";
import TypingText from "./TypingText";

export default function HeroContent() {
    return (
        <motion.div
            className="flex-1 max-w-2xl"
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            custom={0.2}
        >
            <p className="text-blue-500 font-semibold uppercase tracking-widest">
                👋 Hello, I'm
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                {profile.name}
            </h1>

            <TypingText />

            <p className="mt-8 text-slate-400 text-lg leading-8">
                {profile.description}
            </p>

            <HeroButtons />

            <SocialLinks />
        </motion.div>
    );
}