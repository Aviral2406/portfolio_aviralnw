"use client";

import React from "react";
import GlassCard from "./GlassCard";
import SectionHeader from "./SectionHeader";

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  description: string;
  courses?: string[];
  delay?: number;
}

function EducationCard({
  degree,
  institution,
  period,
  grade,
  description,
  courses = [],
  delay = 0.1,
}: EducationItemProps) {
  return (
    <GlassCard className="mb-6 relative flex flex-col md:flex-row gap-6 justify-between" delay={delay}>
      <div className="flex-1">
        <div className="flex flex-wrap items-baseline gap-2 mb-2">
          <h3 className="text-lg font-light tracking-wide text-slate-800">{degree}</h3>
          <span className="text-slate-400 font-light text-xs">| {period}</span>
        </div>
        
        <h4 className="text-indigo-600 text-sm font-light tracking-wide mb-3">{institution}</h4>
        <p className="text-slate-600 text-xs md:text-sm font-light mb-5 leading-relaxed">{description}</p>
        
        {courses.length > 0 && (
          <div>
            <span className="text-[10px] font-light text-slate-400 uppercase tracking-widest block mb-2">
              Key Coursework
            </span>
            <div className="flex flex-wrap gap-2">
              {courses.map((course) => (
                <span
                  key={course}
                  className="text-xs px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200/50 text-slate-600 font-light"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {grade && (
        <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end justify-start min-w-[120px]">
          <span className="text-[10px] font-light text-slate-400 uppercase tracking-widest">Academic Standing</span>
          <span className="text-xl font-light text-pink-600 mt-1">{grade}</span>
        </div>
      )}
    </GlassCard>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-20 max-w-5xl mx-auto px-6 relative">
      <SectionHeader
        title="Education"
        subtitle="Academic background and educational milestones."
      />

      <div className="relative border-l border-slate-200 ml-4 pl-6 md:pl-8 space-y-8">
        {/* Decorative timeline points */}
        <div className="absolute top-2 left-0 w-2.5 h-2.5 rounded-full bg-indigo-500 -translate-x-[5.5px] ring-4 ring-white" />
        
        <EducationCard
          degree="Bachelor of Technology in Computer Science"
          institution="Acropolis Institute of Technology and Research, Indore"
          period="2024 - Present (Sophomore)"
          grade="7.75 CGPA"
          description="Pursuing deep foundational knowledge in computer science, software design, mathematical analysis, and data-driven systems. Actively engaged in machine learning coursework and statistical analysis."
          courses={[
            "Data Structures & Algorithms",
            "Linear Algebra",
            "Probability & Statistics",
            "Object-Oriented Programming",
            "Multithreading & Parallel Systems",
            "Discrete Mathematics"
          ]}
          delay={0.1}
        />
        
        <div className="relative">
          <div className="absolute top-2 -left-[30px] md:-left-[38px] w-2.5 h-2.5 rounded-full bg-pink-500 -translate-x-[5.5px] ring-4 ring-white" />
          <EducationCard
            degree="High School & Intermediate Education"
            institution="Saint Dominic Savio English Medium School"
            period="Completed"
            grade="88%"
            description="Completed secondary education with a rigorous focus on Mathematics, Physics, and Computer Science."
            courses={[
              "Calculus",
              "Advanced Mechanics",
              "Computer Science Foundations"
            ]}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
