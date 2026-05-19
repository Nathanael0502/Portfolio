"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] text-white py-16 px-6 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* TOP SECTION */}
        <div className="flex flex-col items-center text-center gap-6">

          {/* NAME */}
          <h2 className="text-2xl sm:text-3xl font-bold">
            Nathanaël{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Randrianjafy
            </span>
          </h2>

          {/* LINKS */}
          <div className="flex items-center gap-6">

            <a
              href="https://github.com/Nathanael0502/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/10 transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
               rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/10 transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="natharandrianjafy@gmail.com"
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/10 transition"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-sm max-w-md">
         Étudiant en Sciences de Données et Intelligence Artificielle, axé sur le machine learning,
          l’analyse de données et le développement d’applications intelligentes et performantes.
          </p>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* BOTTOM */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Nathanaël Randrianjafy. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;