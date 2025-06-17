"use client"
import Image from "next/image";
import { projects } from "../../../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-[#0f0f0f] text-white">
  <div className="max-w-7xl mx-auto text-center">
    <motion.h2
      className="text-3xl font-bold mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Mes Projets
    </motion.h2>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-10"
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
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-[#1a1a1a] border border-gray-700 rounded-lg overflow-hidden shadow-lg cursor-pointer"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 15px rgba(255,255,255,0.1)",
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={400}
            className="w-full h-80 object-cover"
          />
          <div className="p-5 text-left">
            <h3 className="text-xl font-semibold mb-2 text-white">
              {project.title}
            </h3>
            <p className="text-sm mb-3 text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-800 text-gray-300 text-sm px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              className="inline-block bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition"
              target="_blank"
            >
              Voir le code
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

  );
};

export default Projects;
