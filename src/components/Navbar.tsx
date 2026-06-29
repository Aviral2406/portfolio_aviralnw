"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Stats", href: "#stats" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section tracking
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 200;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navLinks[i].href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 border border-slate-200 backdrop-blur-xl shadow-md"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Logo / Brand Name */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="text-xl font-normal tracking-widest text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">
            AS<span className="text-pastel-pink font-bold">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3 py-1.5 rounded-full text-[11px] font-normal tracking-wider transition-all duration-300 relative ${
                activeSection === link.href ? "text-indigo-600 font-medium" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.name}
              {activeSection === link.href && (
                <motion.span
                  layoutId="activeNavBackground"
                  className="absolute inset-0 bg-slate-900/5 border border-slate-900/5 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Contact CTA Button (Desktop) */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-[10px] font-normal tracking-widest text-indigo-600 border border-indigo-200 hover:border-indigo-400 bg-indigo-50/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(79,70,229,0.15)] animate-pulse-slow"
          >
            CONNECT
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center justify-center p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-white/95 border border-slate-200/50 backdrop-blur-2xl rounded-[32px] p-8 flex flex-col gap-4 shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-sm font-normal tracking-wide transition-all ${
                    activeSection === link.href
                      ? "text-indigo-600 bg-slate-100 font-medium"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-5 py-3.5 rounded-2xl text-xs font-normal tracking-widest text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition-opacity"
            >
              CONNECT
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
