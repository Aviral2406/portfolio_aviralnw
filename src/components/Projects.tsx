"use client";

import React from "react";
import GlassCard from "./GlassCard";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-5xl mx-auto px-6 relative">
      <SectionHeader
        title="Projects"
        subtitle="Some of my recent engineering works and research projects."
      />

      {/* Main Featured Project: Farm Management System */}
      <div className="mb-16">
        <span className="text-[10px] font-light text-indigo-600 uppercase tracking-widest block mb-4">
          Featured Project
        </span>

        <GlassCard className="relative overflow-hidden p-0!" hoverScale={false} delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Project Details (Spans 3 cols on lg) */}
            <div className="p-8 lg:col-span-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="text-[10px] px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-light tracking-wider">
                    Full-Stack & ML
                  </span>
                  <span className="text-[10px] px-3.5 py-1 rounded-full bg-pink-50 border border-pink-100 text-pink-600 font-light tracking-wider">
                    Yield Prediction
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-light tracking-wide text-slate-800 mb-4">
                  Farm Management System
                </h3>

                <p className="text-slate-600 text-sm font-light mb-8 leading-relaxed">
                  A production-grade, full-stack system designed to revolutionize agricultural
                  workflows. Integrating real-time weather analytics and ML yield estimation, it
                  empowers growers to manage crops, allocate tasks, and monitor financial health
                  under a single platform.
                </p>

                <div className="mb-8">
                  <h4 className="text-[10px] font-light text-slate-400 uppercase tracking-widest mb-4">
                    Core Functionality
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-xs text-slate-600 font-light tracking-wide">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      Secure User Auth
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      Dynamic Dashboard
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      Crop Management
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      Task Scheduling
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      Weather Monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      Financial Dashboard
                    </li>
                    <li className="flex items-center gap-2 sm:col-span-2 text-slate-800 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                      Machine Learning Yield Prediction
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-100 text-xs font-light text-slate-400">
                <span className="tracking-widest uppercase">Tech Stack:</span>
                <div className="flex flex-wrap gap-1.5">
                  {["React", "Next.js", "Node.js", "Python", "TensorFlow", "PostgreSQL"].map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-xl bg-slate-100 text-slate-600 border border-slate-200/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Mockup/Screenshot Placeholder (Spans 2 cols on lg) */}
            <div className="lg:col-span-2 bg-gradient-to-br from-slate-100 via-slate-50 to-white p-8 flex flex-col justify-center items-center border-t lg:border-t-0 lg:border-l border-slate-200/50 min-h-[320px] relative overflow-hidden group">
              {/* Abstract Glassmorphic UI Dashboard Mockup (Light theme) */}
              <div className="w-full max-w-[280px] rounded-3xl border border-slate-200 bg-white shadow-xl relative overflow-hidden flex flex-col p-5 z-10 transition-transform duration-500 group-hover:scale-105">
                {/* Mockup Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-pink-400" />
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                  </div>
                  <span className="text-[9px] text-slate-400 tracking-wider font-light">Yield Analytics</span>
                </div>
                {/* Mockup Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-[9px] text-slate-400 block font-light">Predicted Yield</span>
                    <span className="text-xs text-indigo-600 font-light">84.2 Bushels</span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-[9px] text-slate-400 block font-light">Soil Moisture</span>
                    <span className="text-xs text-pink-500 font-light">62.8 %</span>
                  </div>
                </div>
                {/* Mockup Mini Chart SVG */}
                <div className="h-20 bg-slate-50/50 border border-slate-100 rounded-2xl p-2.5 flex flex-col justify-end">
                  <svg className="w-full h-12" viewBox="0 0 100 50">
                    <path
                      d="M0 45 Q 15 25, 30 35 T 60 15 T 90 10 L 100 5 L 100 50 L 0 50 Z"
                      fill="url(#chartGrad)"
                      stroke="#6366f1"
                      strokeWidth="1"
                    />
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-between text-[8px] text-slate-400 mt-1.5 font-mono">
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                  </div>
                </div>
              </div>
              {/* Backdrop Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 opacity-30 blur-3xl pointer-events-none" />
              <span className="absolute bottom-4 text-[9px] text-slate-400 font-mono tracking-widest">
                [ Screenshot Placeholder ]
              </span>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
