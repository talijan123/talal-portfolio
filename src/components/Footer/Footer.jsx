import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top */}

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <div>

            <h2 className="text-4xl font-black text-white">
              Talal<span className="text-blue-500">.</span>
            </h2>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Passionate Frontend Developer focused on creating
              beautiful, responsive and high-performance websites
              using React, JavaScript and modern technologies.
            </p>

          </div>

          {/* Right */}

          <div className="lg:text-right">

            <h3 className="text-xl font-bold text-white">
              Let's Connect
            </h3>

            <div className="mt-6 flex lg:justify-end gap-5">

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 hover:border-blue-500 hover:bg-blue-500 transition-all duration-300 flex items-center justify-center"
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 hover:border-blue-500 hover:bg-blue-500 transition-all duration-300 flex items-center justify-center"
              >
                <FaLinkedin />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 hover:border-blue-500 hover:bg-blue-500 transition-all duration-300 flex items-center justify-center"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-slate-500 text-center md:text-left">
            © 2026 Talal Hassan. Built with React & Tailwind CSS.
          </p>

        </div>

      </div>

    </footer>
  );
}