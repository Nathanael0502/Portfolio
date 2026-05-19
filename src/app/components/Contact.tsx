"use client";

import { motion } from "framer-motion";
import { Github, Mail, MapPin, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      icon: <Phone size={20} />,
      label: "Téléphone",
      value: "+261 34 84 415 92",
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "natharandrianjafy@gmail.com",
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "Nathanael0502",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "Nathanael Randrianjafy",
    },
    {
      icon: <MapPin size={20} />,
      label: "Localisation",
      value: "Fianarantsoa, Madagascar",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-[#050505] text-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.h2
          className="text-4xl sm:text-5xl font-black text-center mb-16"
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Me{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Contacter
          </span>
        </motion.h2>

        {/* GRID */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {contacts.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"
            >
              {/* glow hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/5 via-purple-500/10 to-pink-500/5 transition duration-500" />

              <div className="relative z-10 flex items-center gap-4">

                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-300 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <div>
                  <p className="text-sm text-gray-400">{item.label}</p>
                  <p className="text-white font-medium group-hover:text-purple-200 transition">
                    {item.value}
                  </p>
                </div>
              </div>

              {/* bottom line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;