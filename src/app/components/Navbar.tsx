"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Expérience", href: "#experience" },
    { name: "Formation", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  // Smooth scroll handler
  const handleScrollTo = (e: any, href: string) => {
    e.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#070707]/70 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[78px]">

          {/* LOGO */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.25 }}>
            <Link href="/">
              <h1 className="text-2xl font-black tracking-wider text-white relative group">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  N.R.
                </span>

                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-500 group-hover:w-full"></span>
              </h1>
            </Link>
          </motion.div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <motion.div key={link.name} whileTap={{ scale: 0.92 }}>
                <Link
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 rounded-xl hover:text-white group overflow-hidden"
                >
                  {/* hover bg */}
                  <span className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition duration-300"></span>

                  {/* glow */}
                  <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl bg-purple-500/10 transition duration-500"></span>

                  {/* text */}
                  <span className="relative z-10">{link.name}</span>

                  {/* underline */}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-0 h-[2px] rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-8"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg text-white"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* GRADIENT LINE */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-80"></div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0b0b0b]/95 backdrop-blur-2xl border-b border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="flex items-center justify-between px-4 py-3 rounded-2xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 group"
                  >
                    <span>{link.name}</span>

                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;