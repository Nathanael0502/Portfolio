"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Master en Science de données et intelligence artificielle (en cours)",
    school: "Emit Fianarantsoa",
    period: "2025 - En cours",
  },
  {
    degree: "Licence en Développement Logiciel",
    school: "Emit Fianarantsoa",
    period: "2022 - 2025",
  },
  {
    degree: "Baccalauréat Scientifique",
    school: "Lycée Privée Liantsoa School",
    period: "2021 - 2022 (série C)",
  },
  {
    degree: "Baccalauréat Littéraire",
    school: "Lycée Privée Liantsoa School",
    period: "2020 - 2021 (série A2)",
  },
];

const Education = () => {
  return (
    <section
      id="education"
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
            Parcours
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

          {education.map((edu, index) => (
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
                    {edu.degree}
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    {edu.school} • {edu.period}
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

export default Education;