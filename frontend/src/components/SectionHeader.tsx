"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative inline-block"
      >
        <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-900 mb-2 relative z-10">
          {title}
        </h2>
        {/* Styled Gradient Underline */}
        <div className="h-1 w-24 bg-gradient-to-r from-pastel-indigo via-pastel-purple to-pastel-pink rounded-full mx-auto" />
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-slate-600 max-w-md text-xs md:text-sm font-normal tracking-wide"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
