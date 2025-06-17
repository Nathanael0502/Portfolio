'use client'
import { motion } from "framer-motion";

// components/Experience.tsx
const experiences = [
 
    {
      title: "Stage en Entreprise",
      company: "Adema Ivato Antananarivo",
      period: "Juin 2024 - Septembre 2024",
      description: "Développement d'une application de Gestion de Document en React,Express et Mysql.",
    },
  ];
  
  const Experience = () => {
    return (
      <section id="experience" className="py-20 px-6 bg-[#0f0f0f] text-white">
  <div className="max-w-4xl mx-auto">
    <motion.h2
      className="text-3xl font-bold mb-12 text-center"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false,amount:0.3 }}
    >
      Expérience
    </motion.h2>

    <motion.div
      className="space-y-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="border-l-4 border-white pl-4 hover:shadow-md hover:shadow-white/10 rounded transition"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <span className="text-sm text-gray-400">
            {exp.company} • {exp.period}
          </span>
          <p className="mt-2 text-gray-300">{exp.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

    );
  };
  
  export default Experience;
  