'use client'
import { motion } from "framer-motion";
const skills = [
    // Frontend
    { name: "React", logo: "/skills/react.svg" },
    { name: "Next.js", logo: "/skills/Next.js.svg" },
    { name: "Angular", logo: "/skills/angular.svg" },
    { name: "Tailwind CSS", logo: "/skills/tailwind.svg" },
  
    // Backend
    { name: "Spring Boot", logo: "/skills/spring.svg" },
    { name: "NestJS", logo: "/skills/Nest.js.svg" },
    { name: "Express", logo: "/skills/Express.svg" },
    { name: "Laravel", logo: "/skills/Laravel.svg" },

    
    //Programmation Langage
    { name: "CodeIgniter", logo: "/skills/CodeIgniter.svg" },
    { name: "C++", logo: "/skills/C++.svg" },
    { name: "C", logo: "/skills/C.svg" },
    { name: "C#", logo: "/skills/CSharp.svg" },
    { name: "Python", logo: "/skills/Python.svg" },
  
    // Mobile
    { name: "React Native", logo: "/skills/react.svg" },
  
    // Outils
    { name: "Git", logo: "/skills/Git.svg" },
    { name: "GitHub", logo: "/skills/GitHub.svg" },
    { name: "Postman", logo: "/skills/Postman.svg" },

    //Base de données
    { name: "Mysql", logo: "/skills/MySQL.svg" },
    { name: "SQLite", logo: "/skills/SQLite.svg" },
    { name: "PostgresSQL", logo: "/skills/PostgresSQL.svg" },

  ];
 
  const Skills = () => {
    return (
      <section id="skills" className="py-20 bg-[#0f0f0f] text-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Compétences & Outils
        </motion.h2>
    
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map(({ name, logo }, index) => (
            <motion.div
              key={name}
              className="flex flex-col items-center space-y-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.15, rotate: 3 }}
            >
              <motion.img
                src={logo}
                alt={name}
                className="w-12 h-12"
                whileHover={{
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.4 },
                }}
              />
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
  };
  
  export default Skills;
  