import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { profile } from "../../data/profile";

export default function SocialLinks() {
  const iconStyle =
    "text-2xl text-slate-400 hover:text-blue-500 transition-all duration-300 hover:-translate-y-1";

  return (
    <div className="mt-10 flex gap-6">

      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className={iconStyle}
      >
        <FaGithub />
      </a>

      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        className={iconStyle}
      >
        <FaLinkedin />
      </a>

      <a
        href={`mailto:${profile.email}`}
        className={iconStyle}
      >
        <FaEnvelope />
      </a>

    </div>
  );
}