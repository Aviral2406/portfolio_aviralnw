"use client";

import React from "react";
import GlassCard from "./GlassCard";
import SectionHeader from "./SectionHeader";

const skillsData = [
  {
    category: "Programming",
    icon: (
      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ["Python", "C++", "Java", "SQL"],
  },
  {
    category: "AI / ML",
    icon: (
      <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    skills: ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "NLP", "Reinforcement Learning"],
  },
  {
    category: "Computer Science & Tools",
    icon: (
      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "OS", "Multithreading", "Git", "GitHub", "VS Code"],
  },
  {
    category: "Mathematics",
    icon: (
      <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    skills: ["Linear Algebra", "Calculus", "Probability", "Statistics"],
  },
  {
    category: "Quant Finance",
    icon: (
      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    skills: [
      "Time Series Analysis",
      "Portfolio Optimization",
      "Algorithmic Trading",
      "Monte Carlo Simulation",
      "Risk Management",
      "Financial Modeling"
    ],
  },
  {
    category: "Data Science",
    icon: (
      <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.003 9.003 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    skills: ["Pandas", "NumPy", "SciPy", "Scikit-Learn", "XGBoost", "Matplotlib", "Plotly", "Jupyter Notebook"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-5xl mx-auto px-6 relative">
      <SectionHeader
        title="Skills"
        subtitle="My technical toolset categorized by core competencies."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((categoryObj, idx) => (
          <GlassCard
            key={categoryObj.category}
            delay={0.05 * idx}
            hoverScale={true}
            className="flex flex-col h-full"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="p-2.5 rounded-2xl bg-slate-100 border border-slate-200/50">
                {categoryObj.icon}
              </div>
              <h3 className="text-base font-light tracking-wide text-slate-800">
                {categoryObj.category}
              </h3>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-2.5 mt-auto">
              {categoryObj.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-4 py-2 rounded-2xl bg-slate-100 border border-slate-200/50 text-slate-600 hover:text-indigo-600 hover:border-indigo-500/30 hover:bg-indigo-50/20 transition-all duration-300 font-light"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
