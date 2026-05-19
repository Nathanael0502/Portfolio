"use client";

import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]"
    >
      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full" />
      </div>

      {/* Loader */}
      <div className="relative flex flex-col items-center gap-6">

        <div className="w-14 h-14 border-4 border-white/10 border-t-purple-500 border-r-blue-500 rounded-full animate-spin" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-sm tracking-widest"
        >
          Chargement...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;