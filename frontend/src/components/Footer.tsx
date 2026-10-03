"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/50 bg-white/15 backdrop-blur-md py-10 mt-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Branding & Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm font-light tracking-wide text-slate-800">
            Aviral Singhai<span className="text-pastel-pink font-bold">.</span>
          </p>
          <p className="text-[10px] text-slate-400 font-light tracking-wider mt-1.5 uppercase">
            © {currentYear} All rights reserved. Designed & built with care.
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-[10px] text-slate-500 font-light tracking-widest uppercase">
          <a href="#hero" className="hover:text-indigo-600 transition-colors">
            Top
          </a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">
            About
          </a>
          <a href="#education" className="hover:text-indigo-600 transition-colors">
            Education
          </a>
          <a href="#skills" className="hover:text-indigo-600 transition-colors">
            Skills
          </a>
          <a href="#certifications" className="hover:text-indigo-600 transition-colors">
            Certs
          </a>
          <a href="#projects" className="hover:text-indigo-600 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
