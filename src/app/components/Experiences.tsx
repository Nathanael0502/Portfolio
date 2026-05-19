"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Stagiaire en développement web & mobile",
    company: "Kombo Ampandrana Antananarivo",
    period: "Juin 2025 - Septembre 2025",
    description:
      "Développement d'une application de gestion de portefeuille des clients en Vue.js, Flutter, Laravel et MySQL.",
  },
  {
    title: "Stagiaire en développement web",
    company: "Adema Ivato Antananarivo",
    period: "Juin 2024 - août 2024",
    description:
      "Développement d'une application de gestion de documents en React, Express et MySQL.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 bg-[#050505] text-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.h2
          className="text-4xl sm:text-5xl font-black text-center mb-16"
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Mon{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Expérience
          </span>
        </motion.h2>

        {/* TIMELINE */}
        <motion.div
          className="relative space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* vertical line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="relative pl-12 group"
            >
              {/* DOT */}
              <div className="absolute left-[6px] top-2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/30 group-hover:scale-125 transition-transform" />

              {/* CARD */}
              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden">

                {/* glow hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/5 via-purple-500/10 to-pink-500/5 transition duration-500" />

                {/* CONTENT */}
                <div className="relative z-10">

                  <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition">
                    {exp.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    {exp.company} • {exp.period}
                  </p>

                  <p className="mt-3 text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;