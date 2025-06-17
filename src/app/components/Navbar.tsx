"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icônes (optionnel)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Expérience", href: "#experience" },
    { name: "Formation", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-[#0a0a0a] shadow">
    <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-white">N.R.</h1>
  
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="relative text-white group transition duration-300 ease-in-out"
          >
            {link.name}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition duration-300 rounded"></span>
          </Link>
        ))}
      </nav>
  
      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white cursor-pointer">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  
    {/* Barre en bas du header avec ombre */}
    <div className="h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-blue-500/50" />
  
    {/* Mobile Navigation */}
    {isOpen && (
      <nav className="md:hidden bg-[#111] px-6 py-4 space-y-4">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="block text-white relative group transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>
    )}
  </header>
  

  );
};

export default Navbar;

