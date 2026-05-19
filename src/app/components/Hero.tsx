'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="w-full overflow-hidden relative bg-[#050505]">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />

        <div className="absolute bottom-[-150px] right-[-120px] w-[350px] h-[350px] bg-purple-500/20 blur-[120px] rounded-full animate-pulse" />

        <div className="absolute top-[40%] left-[45%] w-[250px] h-[250px] bg-pink-500/10 blur-[120px] rounded-full" />
      </div>

      <section
        id="about"
        className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-6 max-w-7xl mx-auto pt-24 md:pt-0 relative"
      >
        {/* LEFT SIDE */}
        <motion.div
          className="text-white space-y-7 md:w-1/2 text-center md:text-left z-10"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {/* AVAILABLE BADGE */}
        <motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full 
  border border-purple-500/20 
  bg-white/5 
  backdrop-blur-2xl 
  shadow-lg shadow-purple-500/10
  mt-4"
>
  {/* Animated Dot */}
  <span className="relative flex h-3 w-3">
    <span className="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-60 animate-ping"></span>

    <span className="relative inline-flex h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></span>
  </span>

  {/* Text */}
  <span className="text-sm font-medium bg-gradient-to-r from-blue-200 to-purple-300 bg-clip-text text-transparent tracking-wide">
    Disponible pour des projets
  </span>
</motion.div>
          {/* TITLE */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
            >
              Bonjour, Je suis{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Nathanaël Randrianjafy
              </span>
            </motion.h1>

            {/* TYPING ANIMATION */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-2xl sm:text-3xl font-semibold text-purple-300 h-[40px]"
            >
              <TypeAnimation
                sequence={[
                  'Développeur Full-Stack',
                  2000,
                  'Étudiant en Intelligence Artificielle',
                  2000,
                  'Passionné de Data Science',
                  2000,
                  'Créateur d’expériences web modernes',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
          </div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-gray-300 max-w-2xl leading-relaxed text-base sm:text-lg"
          >
            Développeur Full-Stack passionné par la création
            d’applications modernes, performantes et intuitives.
            Diplômé en développement web et actuellement en M1
            Sciences des Données & Intelligence Artificielle.
            J’aime concevoir des expériences numériques élégantes
            mêlant design, backend et intelligence artificielle.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              href="/cv/CV_Nathanaël_Randrianjafy.pdf"
              target="_blank"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-[1px]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-70 blur-xl transition-all duration-500 group-hover:opacity-100" />

              <span className="relative px-8 py-3 rounded-2xl bg-[#0a0a0a] text-white font-medium transition-all duration-300 group-hover:bg-[#111]">
                Télécharger mon CV
              </span>
            </Link>

            <Link
              href="#projects"
              className="px-8 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition-all duration-300"
            >
              Voir mes projets
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end mt-16 md:mt-0 relative"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
        >
          <motion.div
            whileHover={{
              scale: 1.03,
              rotate: 1,
            }}
            transition={{ duration: 0.4 }}
            className="group relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] flex items-center justify-center"
          >
            {/* ORBITAL RING */}
            <svg
              className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite]"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient
                  id="borderGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>

              <circle
                cx="50"
                cy="50"
                r="48"
                stroke="url(#borderGradient)"
                strokeWidth="1"
                fill="transparent"
                strokeDasharray="40 30 10 40"
                strokeLinecap="round"
              />
            </svg>

            {/* FLOATING PARTICLES */}
            <div className="absolute top-10 left-0 w-3 h-3 bg-blue-500 rounded-full blur-sm animate-bounce" />

            <div className="absolute bottom-12 right-2 w-2 h-2 bg-pink-500 rounded-full blur-sm animate-pulse" />

            <div className="absolute top-1/2 -right-4 w-4 h-4 bg-purple-500 rounded-full blur-md animate-ping" />

            {/* IMAGE */}
            <div className="relative w-[80%] h-[80%] rounded-full overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(168,85,247,0.15)] transition-all duration-500 group-hover:border-purple-500/40">
              <Image
                src="/image/imagenathan.jpg"
                alt="Nathanaël Randrianjafy"
                fill
                priority
                className="object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10" />
            </div>

            {/* FLOATING CARD */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-4 -left-8 bg-white/5 backdrop-blur-2xl border border-white/10 px-5 py-4 rounded-2xl shadow-2xl"
            >
              <p className="text-white text-sm font-semibold">
                M1 Data Science & IA
              </p>

              <span className="text-xs text-purple-300">
                Machine Learning • IA • Fullstack
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;