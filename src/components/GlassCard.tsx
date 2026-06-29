"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  delay = 0,
  hoverScale = true,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={hoverScale ? { y: -5, scale: 1.01, transition: { duration: 0.2 } } : undefined}
      className={`glass-panel glass-panel-hover rounded-[32px] p-8 transition-all duration-300 relative overflow-hidden group ${className}`}
    >
      {/* Dynamic background glow on hover (Light Mode Pastel gradient overlays) */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-pink-500/5 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {children}
    </motion.div>
  );
}
