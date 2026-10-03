"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    num: "01",
    title: "Stock Market Predictor",
    description: "Deep learning pipeline utilizing LSTMs and GRUs for market movement forecasting based on historical time series data.",
    tags: ["TensorFlow", "Keras", "LSTMs", "Financial Data"],
    github: "https://github.com/Aviral2406/stock-market-predictor",
  },
  {
    num: "02",
    title: "Portfolio Optimizer",
    description: "Quantitative finance asset allocation algorithms modeled on Modern Portfolio Theory and Markowitz optimization for efficient frontier generation.",
    tags: ["SciPy", "Pandas", "Markowitz", "Quant"],
    github: "https://github.com/Aviral2406/portfolio-optimizer",
  }
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax text reveal
      const panels = gsap.utils.toArray<HTMLElement>(".project-panel");
      
      panels.forEach((panel) => {
        const title = panel.querySelector(".project-title");
        const details = panel.querySelector(".project-details");
        const number = panel.querySelector(".project-number");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          }
        });

        tl.fromTo(number, 
            { opacity: 0, x: -50 }, 
            { opacity: 1, x: 0, duration: 1, ease: "power4.out" }
          )
          .fromTo(title, 
            { opacity: 0, y: 100, rotateX: -45 }, 
            { opacity: 1, y: 0, rotateX: 0, duration: 1.2, ease: "expo.out" }, 
            "-=0.8"
          )
          .fromTo(details, 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 
            "-=1"
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative z-10 w-full">
      <div className="flex items-center gap-4 mb-32">
        <span className="font-mono text-[10px] tracking-widest text-[#333333]">04</span>
        <span className="w-12 h-[1px] bg-[#333333]"></span>
        <h2 className="font-serif text-2xl md:text-3xl text-[#ffffff] uppercase tracking-widest">Selected Work</h2>
      </div>

      <div className="flex flex-col gap-40 w-full">
        {projects.map((project) => (
          <div 
            key={project.title} 
            className="project-panel group relative w-full flex flex-col"
          >
            {/* Massive Number Overlay */}
            <div className="project-number absolute -top-24 -left-8 md:-left-16 text-[12rem] md:text-[20rem] font-serif leading-none text-stroke opacity-10 pointer-events-none z-0">
              {project.num}
            </div>

            {/* Content Container */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end w-full">
              
              {/* Massive Title */}
              <div className="md:col-span-8 flex flex-col justify-end">
                <h3 className="project-title font-serif text-5xl md:text-7xl lg:text-[7rem] leading-[0.85] text-[#ffffff] tracking-tighter uppercase [perspective:1000px] transform-gpu">
                  {project.title.split(' ').map((word, i) => (
                    <span key={i} className="block hover:text-[#00ff66] transition-colors duration-500 cursor-default">
                      {word}
                    </span>
                  ))}
                </h3>
              </div>

              {/* Details (Replaced Code Blocks) */}
              <div className="project-details md:col-span-4 flex flex-col justify-end pb-2 md:pb-6">
                <div className="border-l border-[#333333] pl-6 md:pl-10">
                  <p className="text-[#808080] font-light leading-relaxed mb-8 text-sm md:text-base">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tags.map(tag => (
                      <span key={tag} className="font-mono text-[9px] tracking-widest uppercase text-[#ffffff] bg-[#111111] px-3 py-1.5 rounded-full border border-[#222222]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase text-[#ffffff] group/btn"
                  >
                    <span className="w-8 h-8 rounded-full border border-[#333333] flex items-center justify-center group-hover/btn:border-[#00ff66] group-hover/btn:bg-[#00ff66] group-hover/btn:text-black transition-all duration-300">
                      ↗
                    </span>
                    <span className="group-hover/btn:text-[#00ff66] transition-colors">Explore Repository</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}