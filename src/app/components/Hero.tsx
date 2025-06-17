'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
    id="about"
    className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 max-w-7xl mx-auto " style={{ marginTop:"-10px" }}
  >
    {/* Left - Text */}
    <motion.div
      className="text-white space-y-6 md:w-1/2"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      
    >
      <h1 className="text-4xl sm:text-5xl font-bold">
        Salut, Je suis <span className="text-blue-500">Nathanaël Randrianjafy</span>,
        <br />
        <span className="text-purple-400">Développeur Full-Stack</span>
      </h1>
      <p className="text-gray-300">
      Je suis un développeur Full-Stack passionné par la création d’expériences web conviviales et esthétiques. Ce portfolio présente mes compétences et mes projets.
      </p>
      <Link
        href="/cv/truePortFolioCV.pdf"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        target="_blank"
      >
       Télécharger mon CV
      </Link>
    </motion.div>

    {/* Right - Image */}
    <motion.div
     className="text-white space-y-6 md:w-1/2"
     initial={{ x: -100, opacity: 0 }}
     whileInView={{ x: 0, opacity: 1 }}
     viewport={{ once: false, amount: 0.3 }}
     transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
  initial={{ x: 100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
  whileHover={{ scale: 1.1, boxShadow: '0 0 20px 5px #3b82f6' }}
  className="rounded-full mt-5 md:mt-0 md:ml-[100px] border-4 border-blue-500 shadow-lg overflow-hidden w-[400px] h-[400px]"
 
>
  <Image
    src="/image/nathaImage.png"
    alt="Developer Image"
    width={400}
    height={400}
    className="object-cover"
  />
</motion.div>

    </motion.div>
  </section>
  
  );
};

export default Hero;

