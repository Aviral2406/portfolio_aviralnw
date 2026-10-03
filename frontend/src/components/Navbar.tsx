"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { num: "01", name: "Home", href: "#hero" },
    { num: "02", name: "About", href: "#about" },
    { num: "03", name: "Skills", href: "#skills" },
    { num: "04", name: "Projects", href: "#projects" },
    { num: "05", name: "Certifications", href: "#certifications" },
    { num: "06", name: "Achievements", href: "#achievements" },
    { num: "07", name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled ? "bg-[#000000]/80 backdrop-blur-xl border-b border-[#111111]" : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32 h-20 flex items-center justify-between">
        {/* Left: Monogram and Name */}
        <Link href="#hero" className="flex items-center gap-4 group">
          <span className="font-serif text-[#ffffff] text-2xl tracking-tighter group-hover:text-[#00ff66] transition-colors duration-500">
            A<span className="italic font-light">S</span>
          </span>
        </Link>

        {/* Center: Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative flex items-center gap-2 overflow-hidden"
            >
              <span className="font-mono text-[9px] text-[#333333] group-hover:text-[#00ff66] transition-colors duration-300">{link.num}</span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#808080] group-hover:text-[#ffffff] transition-colors duration-300">
                {link.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Right: Resume Button */}
        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-mono text-[#ffffff] border border-[#333333] hover:border-[#00ff66] transition-colors flex items-center gap-3 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-[#00ff66] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
            <span className="relative z-10 group-hover:text-[#000000] transition-colors duration-500">
              Resume
            </span>
            <span className="relative z-10 text-[9px] group-hover:text-[#000000] transition-colors duration-500">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}