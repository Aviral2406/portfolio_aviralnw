"use client";

import React from "react";
import GlassCard from "./GlassCard";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-20 max-w-5xl mx-auto px-6 relative">
      <SectionHeader
        title="About Me"
        subtitle="A look into my background, interests, and aspirations."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Left Side: Summary / Biography (Spans 2 columns) */}
        <GlassCard className="md:col-span-2 flex flex-col justify-between" delay={0.1}>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-slate-100 border border-slate-200/50 text-indigo-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-light tracking-wide text-slate-800">Who I Am</h3>
            </div>
            <p className="text-slate-600 text-base leading-relaxed font-light mb-8">
              Sophomore Computer Science student passionate about Artificial Intelligence, Machine
              Learning, Software Engineering, and Quantitative Finance. I thrive at the
              intersection of mathematical elegance and high-performance software, developing
              tools that solve complex scientific and financial problems.
            </p>
          </div>
          <div className="pt-6 border-t border-slate-100 flex gap-6 text-xs text-slate-500 font-light tracking-wider">
            <div>
              <span className="block text-slate-800 font-light text-base mb-0.5">Sophomore</span>
              <span>Year of Study</span>
            </div>
            <div className="border-l border-slate-200 pl-6">
              <span className="block text-slate-800 font-light text-base mb-0.5">B.Tech CompSci</span>
              <span>Degree Focus</span>
            </div>
            <div className="border-l border-slate-200 pl-6">
              <span className="block text-slate-800 font-light text-base mb-0.5">EN, HI, MR</span>
              <span>Languages Spoken</span>
            </div>
          </div>
        </GlassCard>

        {/* Right Side: Professional Career Goal */}
        <GlassCard className="flex flex-col justify-between" delay={0.2}>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-slate-100 border border-slate-200/50 text-pink-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-light tracking-wide text-slate-800">Career Goal</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              My ultimate career objective is to become a{" "}
              <span className="text-indigo-600 font-light">Quantitative Developer</span> or{" "}
              <span className="text-pink-600 font-light">Quantitative Researcher</span>.
            </p>
            <p className="text-slate-500 text-xs mt-4 font-light leading-relaxed tracking-wide">
              I seek to design, build, and optimize low-latency trading infrastructure, mathematical
              pricing models, and systematic trading strategies using data-driven methodologies.
            </p>
          </div>
          <div className="pt-6 border-t border-slate-100 text-[10px] text-slate-400 flex items-center gap-1.5 font-light tracking-widest">
            <span className="w-1 h-1 rounded-full bg-pink-500" />
            ACTIVE PREPARATION
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
