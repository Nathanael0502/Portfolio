'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  // Frontend
  { name: 'React', logo: '/skills/react.svg', category: 'Frontend' },
  { name: 'Next.js', logo: '/skills/Next.js.svg', category: 'Frontend' },
  { name: 'Angular', logo: '/skills/angular.svg', category: 'Frontend' },
  { name: 'Tailwind CSS', logo: '/skills/tailwind.svg', category: 'Frontend' },

  // Backend
  { name: 'Spring Boot', logo: '/skills/spring.svg', category: 'Backend' },
  { name: 'NestJS', logo: '/skills/Nest.js.svg', category: 'Backend' },
  { name: 'Express', logo: '/skills/Express.svg', category: 'Backend' },
  { name: 'Laravel', logo: '/skills/Laravel.svg', category: 'Backend' },

  // Languages
  { name: 'Python', logo: '/skills/Python.svg', category: 'Langage' },
  { name: 'C++', logo: '/skills/C++.svg', category: 'Langage' },
  { name: 'C', logo: '/skills/C.svg', category: 'Langage' },
  { name: 'C#', logo: '/skills/CSharp.svg', category: 'Langage' },

  // Mobile
  { name: 'React Native', logo: '/skills/react.svg', category: 'Mobile' },
  { name: 'Flutter', logo: '/skills/Flutter.svg', category: 'Mobile' },


  // Database
  { name: 'MySQL', logo: '/skills/MySQL.svg', category: 'Base de données' },
  { name: 'SQLite', logo: '/skills/SQLite.svg', category: 'Base de données' },
  { name: 'PostgreSQL', logo: '/skills/PostgresSQL.svg', category: 'Base de données' },

  // Tools
  { name: 'Git', logo: '/skills/Git.svg', category: 'Outils' },
  { name: 'GitHub', logo: '/skills/GitHub.svg', category: 'Outils' },
  { name: 'Postman', logo: '/skills/Postman.svg', category: 'Outils' },

  // AI & Data Science
  { name: 'Matplotlib', logo: '/skills/Matplotlib.svg', category: 'IA & Data' },
  { name: 'TensorFlow', logo: '/skills/TensorFlow.svg', category: 'IA & Data' },
  { name: 'Pandas', logo: '/skills/Pandas.svg', category: 'IA & Data' },
  { name: 'NumPy', logo: '/skills/NumPy.svg', category: 'IA & Data' },
  { name: 'Scikit-Learn', logo: '/skills/scikit-learn.svg', category: 'IA & Data' },
  { name: 'Jupyter', logo: '/skills/Jupyter.svg', category: 'IA & Data' },
];

const categories = [
  'Frontend',
  'Backend',
  'Langage',
  'Mobile',
  'Base de données',
  'Outils',
  'IA & Data',
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-[#050505] overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[-120px] w-[320px] h-[320px] bg-blue-500/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-[-120px] w-[320px] h-[320px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-purple-500/20 bg-white/5 backdrop-blur-2xl shadow-lg shadow-purple-500/10 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-60 animate-ping"></span>

              <span className="relative inline-flex h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></span>
            </span>

            <span className="text-sm font-medium bg-gradient-to-r from-blue-200 to-purple-300 bg-clip-text text-transparent">
              Technologies & Expertise
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Mes{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed text-lg">
            Technologies modernes utilisées dans le développement
            Full-Stack, le Machine Learning, la Data Science et
            l’intelligence artificielle.
          </p>
        </motion.div>

        {/* CATEGORIES */}
        <div className="space-y-20">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: categoryIndex * 0.1,
              }}
            >
              {/* CATEGORY TITLE */}
              <div className="flex items-center gap-4 mb-10">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

                <h3 className="text-xl font-semibold text-white whitespace-nowrap">
                  {category}
                </h3>

                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
              </div>

              {/* SKILLS GRID */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                      }}
                      whileHover={{
                        y: -8,
                        scale: 1.03,
                      }}
                      className="group relative"
                    >
                      {/* Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 rounded-3xl" />

                      {/* Card */}
                      <div className="relative h-full flex flex-col items-center justify-center gap-5 px-6 py-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl hover:border-purple-500/30 transition-all duration-500 overflow-hidden">
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-blue-500/[0.03] via-purple-500/[0.05] to-pink-500/[0.03]" />

                        {/* Logo */}
                        <motion.div
                          whileHover={{
                            rotate: [0, -8, 8, 0],
                          }}
                          transition={{ duration: 0.5 }}
                          className="relative z-10"
                        >
                          <Image
                            src={skill.logo}
                            alt={skill.name}
                            width={55}
                            height={55}
                            className="object-contain drop-shadow-xl"
                          />
                        </motion.div>

                        {/* Name */}
                        <h4 className="relative z-10 text-sm sm:text-base font-medium text-gray-200 group-hover:text-white transition-colors duration-300 text-center">
                          {skill.name}
                        </h4>

                        {/* Bottom Line */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-16 h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full transition-all duration-500" />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;