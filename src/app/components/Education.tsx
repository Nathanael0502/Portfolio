// components/Education.tsx
'use client'

import { motion } from "framer-motion";

const education = [
    {
      degree: "Licence en Développement Logiciel (en cours)",
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
      <section id="education" className="py-20 px-6 bg-[#0f0f0f] text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false,amount:0.4}}
        >
          Éducation
        </motion.h2>
    
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="border-l-4 border-white pl-4 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/10 transition rounded"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <span className="text-sm text-gray-400">
                {edu.school} • {edu.period}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    
    );
  };
  
  export default Education;
  