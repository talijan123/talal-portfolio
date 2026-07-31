import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { fadeLeft } from "../../animations/fade";

import TypingText from "./TypingText";
import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";
import TechStack from "./TechStack";

export default function HeroContent() {
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      animate="visible"
      custom={0.2}
      className="flex-1 max-w-2xl"
    >
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-blue-500/20
          bg-blue-500/10
          px-4
          py-2
        "
      >
        <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>

        <span className="text-sm font-medium text-blue-500">
          Available for Front-End Opportunities
        </span>
      </motion.div>

      <p
        className="
          mt-8
          font-bold
          uppercase
          tracking-[6px]
          text-blue-500
        "
      >
        Hello, I'm
      </p>

      <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none">
        <span className="text-slate-900 dark:text-white transition-colors duration-300">
          {profile.name.split(" ")[0]}
        </span>

        <span className="block text-blue-500">
          {profile.name.split(" ")[1]}
        </span>
      </h1>

      <div className="mt-6">
        <TypingText />
      </div>

      <p
        className="
          mt-4
          text-sm
          uppercase
          tracking-[3px]
          text-slate-500
          dark:text-slate-400
        "
      >
        React • JavaScript • Tailwind CSS • Node.js
      </p>

      <p
        className="
          mt-8
          max-w-xl
          text-lg
          leading-8
          text-slate-600
          dark:text-slate-400
          transition-colors
          duration-300
        "
      >
        {profile.description}
      </p>

      <div className="mt-10">
        <HeroButtons />
      </div>

      <div className="mt-10">
        <SocialLinks />
      </div>

      <div className="mt-10">
        <TechStack />
      </div>
    </motion.div>
  );
}