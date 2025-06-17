'use client'
import { motion } from "framer-motion";
import { Github, Mail, MapPin, Phone } from "lucide-react"

const Contact=()=>{
    return(
        <section
  id="contact"
  className="py-12 px-6 lg:px-24 dark:bg-gray-900"
>
  <motion.h2
    className="text-3xl font-bold text-gray-800 dark:text-white mb-8"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false }}
  >
    Contact
  </motion.h2>

  <motion.div
    className="space-y-6 text-gray-300"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.2,
        },
      },
    }}
  >
    {[
      { icon: <Phone size={24} className="text-blue-400" />, text: "+261 34 84 415 92" },
      { icon: <Mail size={24} className="text-blue-400" />, text: "natharandrianjafy@gmail.com" },
      { icon: <Github size={24} className="text-blue-400" />, text: "Nathanaël0502" },
      { icon: <MapPin size={24} className="text-blue-400" />, text: "Fianarantsoa, Madagascar" },
    ].map((item, index) => (
      <motion.div
        key={index}
        className="flex items-center gap-4 hover:scale-105 hover:text-white transition-transform"
        variants={{
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {item.icon}
        <span>{item.text}</span>
      </motion.div>
    ))}
  </motion.div>
</section>

    )
}

export default Contact;