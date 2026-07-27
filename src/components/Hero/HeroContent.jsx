import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";
import TypingText from "./TypingText";

export default function HeroContent() {
  return (
    <div className="flex-1 max-w-xl">
      <p className="text-blue-500 font-semibold">
        👋 Hello, I'm
      </p>

      <h1 className="mt-4 text-5xl lg:text-7xl font-black leading-tight">
        Talal Hassan
      </h1>

      <TypingText />

      <p
        className="
          mt-8
          text-slate-400
          text-lg
          leading-8
        "
      >
        I build modern, responsive and user-focused web
        applications using React, JavaScript, WordPress,
        and AI-powered tools.
      </p>

      <HeroButtons />

      <SocialLinks />
    </div>
  );
}