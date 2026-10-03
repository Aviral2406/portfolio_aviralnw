import React from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C++", "Java", "SQL", "JavaScript"],
  },
  {
    title: "AI / ML",
    skills: ["Machine Learning", "Deep Learning", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    title: "Quant & Data",
    skills: ["Statistics", "Probability", "Financial Markets", "Time Series", "Backtesting"],
  },
  {
    title: "Engineering",
    skills: ["React", "Git", "GitHub", "APIs", "Databases"],
  },
  {
    title: "Core CS",
    skills: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative z-10 border-t border-[#111111]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#333333]">03</span>
            <span className="w-12 h-[1px] bg-[#333333]"></span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl text-[#ffffff] uppercase tracking-tighter">
            Technical Index
          </h2>
        </div>
        
        {/* Subtle grid decoration */}
        <div className="hidden md:flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 ${i === 4 ? "bg-[#00ff66]" : "bg-[#222222]"}`} />
          ))}
        </div>
      </div>

      {/* 5-Column Index with stark minimal borders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 border-y border-[#111111]">
        {skillCategories.map((category, idx) => (
          <div key={category.title} className={`flex flex-col p-8 md:p-10 ${idx !== skillCategories.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#111111]' : ''}`}>
            <div className="pb-4 mb-6 relative">
              <span className="font-mono text-[10px] text-[#333333] block mb-2">
                03.{idx + 1}
              </span>
              <h3 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#ffffff]">
                {category.title}
              </h3>
              <div className="absolute bottom-0 left-0 w-8 h-[1px] bg-[#00ff66]" />
            </div>
            
            <ul className="flex flex-col gap-4">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 group cursor-default">
                  <span className="font-mono text-[8px] text-[#222222] group-hover:text-[#00ff66] transition-colors duration-300">
                    {'>'}
                  </span>
                  <span className="text-sm font-light text-[#808080] group-hover:text-[#ffffff] group-hover:translate-x-1 transition-all duration-300">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Subtle bottom measurement line */}
      <div className="w-full mt-12 flex items-center justify-between opacity-50">
        <span className="font-mono text-[8px] tracking-[0.3em] text-[#333333]">0.00</span>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#111111] to-transparent mx-8" />
        <span className="font-mono text-[8px] tracking-[0.3em] text-[#00ff66]">1.00</span>
      </div>
    </section>
  );
}