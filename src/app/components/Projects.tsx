"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { projects } from "../../../data/projects";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

// découpe en groupes de 2
const chunkArray = (arr: any[], size: number) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const Projects = () => {
  const groupedProjects = chunkArray(projects, 2);

  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-[#050505] overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-120px] w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-purple-500/10 blur-[120px] rounded-full" />
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
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Mes{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projets
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed text-lg">
            Une sélection de projets Full-Stack, Data Science et Intelligence Artificielle.
          </p>
        </motion.div>

        {/* GROUPED ROWS (2 projects per row) */}
        <div className="flex flex-col gap-10">

          {groupedProjects.map((group, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            >
              {group.map((project, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 60, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-500 hover:border-purple-500/30"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/[0.03] via-purple-500/[0.05] to-pink-500/[0.03] transition-all duration-500" />

                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />

                    <div className="absolute top-5 left-5 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl text-sm text-white">
                      {project.category}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 p-7">

                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <ArrowUpRight
                        className="text-gray-500 group-hover:text-purple-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        size={22}
                      />
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.technologies.map((tech: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, idx: Key | null | undefined) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-xl text-sm border border-purple-500/20 bg-purple-500/10 text-purple-200 hover:bg-purple-500/20 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-medium transition-all duration-300 hover:scale-[1.03]"
                    >
                      <Github
                        size={18}
                        className="transition-transform duration-300 group-hover/button:rotate-12"
                      />
                      Voir le code
                    </a>
                  </div>

                  {/* bottom line */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-700" />
                </motion.div>
              ))}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;