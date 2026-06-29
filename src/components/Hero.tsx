"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "AI Enthusiast",
  "Future Quant Developer",
  "Problem Solver",
  "Lifelong Learner"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background Radial Glows */}
      <div className="glow-bg glow-pastel-blue top-1/4 left-1/4 animate-pulse-slow" />
      <div className="glow-bg glow-pastel-pink bottom-1/4 right-1/4 animate-pulse-slow" style={{ animationDelay: "4s" }} />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-slate-200 backdrop-blur-md mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
          <span className="text-[10px] font-normal tracking-widest text-indigo-600 uppercase">
            Open to opportunities
          </span>
        </motion.div>

        {/* Profile Image */}
        <div className="mb-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="relative inline-block group"
          >
            {/* Soft glowing border behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-pastel-blue via-pastel-indigo to-pastel-pink rounded-full blur-md opacity-25 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="Aviral Singhai"
              className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-lg relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl"
            />
          </motion.div>
        </div>

        {/* Main Title (Slate-900 / font-normal/light) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-normal md:font-light tracking-tight text-slate-900 mb-4"
        >
          Aviral Singhai
        </motion.h1>

        {/* Subtitle (Slate-600 / font-normal/light) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-light text-slate-600 mb-8 tracking-wide"
        >
          Computer Science Student
        </motion.h2>

        {/* Rotating Roles Component */}
        <div className="h-12 flex items-center justify-center mb-12">
          <span className="text-base md:text-lg text-slate-600 font-normal tracking-wide mr-2">I am a</span>
          <div className="relative h-full w-64 md:w-80 flex items-center justify-start overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute text-base md:text-lg font-medium tracking-wider text-gradient-pastel"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Buttons (Highly Rounded Pills & Normal Font - Light Mode Adjusted) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-normal tracking-widest text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            VIEW PROJECTS
          </a>
          
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-normal tracking-widest text-slate-800 border border-slate-200 hover:border-slate-350 bg-white/80 hover:bg-white shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
          >
            GET IN TOUCH
          </a>

          {/* Download Resume Link with clean SVG icon */}
          <a
            href="https://doc-0s-4s-apps-viewer.googleusercontent.com/viewer/secure/pdf/so6apbgqk7k0hp80fnvi2ceeipjic272/rk7a2rmgav83fqek6s480gcr5iiknvqa/1782727350000/contribservice/07896136977092685516/ACFrOgCuGFV-fu2EDXhGbQtZ64TPrpqk2qFa_wHWyTY_FRAzLHyToI7x6dCYGuqUh3T2sCAJgXxlMW5UOkIQcP9oOxW8Typs8uGgNEa1Mwl2VQeEzxIoGCJsVuEd12nHobISBYKUcUQymOyWw02J?authuser=0&print=true&nonce=fhkg9afqgaqhs&user=07896136977092685516&hash=4i7u9fq4e5u714cjbskp72r88n1nhatn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-normal tracking-widest text-slate-700 hover:text-slate-900 border border-transparent hover:border-slate-300 hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
          >
            <svg
              className="w-4 h-4 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            RESUME
          </a>
        </motion.div>
      </div>

      {/* Floating Indicators / Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest text-slate-400 font-normal uppercase">Scroll Down</span>
        <div className="w-5 h-9 border border-slate-300 rounded-full flex items-start justify-center p-1">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-1 bg-slate-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
