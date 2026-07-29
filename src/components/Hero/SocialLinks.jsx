import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { profile } from "../../data/profile";

const socials = [
  {
    icon: FaGithub,
    href: profile.github,
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: profile.linkedin,
    label: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    href: `mailto:${profile.email}`,
    label: "Email",
  },
];

export default function SocialLinks() {
  return (
    <div className="mt-10 flex items-center gap-5">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.label}
            href={social.href}
            target={
              social.label !== "Email"
                ? "_blank"
                : undefined
            }
            rel={
              social.label !== "Email"
                ? "noreferrer"
                : undefined
            }
            aria-label={social.label}
            className="
              group
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-slate-700
              bg-slate-900
              text-slate-400
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-500
              hover:bg-blue-500/10
              hover:text-blue-400
              hover:shadow-blue-500/30
            "
          >
            <Icon
              size={24}
              className="
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />
          </a>
        );
      })}
    </div>
  );
}