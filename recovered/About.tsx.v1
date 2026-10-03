import React from "react";

export default function About() {
  return (
    <section id="about" className="py-32 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Column: Heading & Graphic */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#333333]">02</span>
            <span className="w-12 h-[1px] bg-[#333333]"></span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl text-[#ffffff] uppercase tracking-tighter mb-8">
            About Me
          </h2>
          
          {/* Subtle contour / architectural element */}
          <div className="hidden lg:block w-full h-64 border border-[#111111] relative overflow-hidden mt-12 bg-grain">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-[#000000] opacity-90 z-10" />
            <div className="absolute inset-0 z-0" style={{
              backgroundImage: "repeating-linear-gradient(45deg, #111111 25%, transparent 25%, transparent 75%, #111111 75%, #111111), repeating-linear-gradient(45deg, #111111 25%, #050505 25%, #050505 75%, #111111 75%, #111111)",
              backgroundPosition: "0 0, 10px 10px",
              backgroundSize: "20px 20px",
              opacity: 0.3
            }} />
            <div className="absolute top-4 left-4 font-mono text-[8px] tracking-[0.2em] text-[#00ff66] z-20">
              FIG. 01 / TOPOGRAPHIC MAP
            </div>
            {/* Pulsing focal point */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#00ff66] rounded-full z-20">
              <div className="absolute inset-0 w-full h-full bg-[#00ff66] rounded-full animate-ping opacity-50" />
            </div>
          </div>
        </div>

        {/* Right Column: Content Blocks */}
        <div className="lg:col-span-7 lg:pl-16 flex flex-col gap-16 justify-center">
          
          <div className="space-y-6">
            <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#ffffff] flex items-center gap-4">
              <span className="w-2 h-2 bg-[#00ff66]" /> Background
            </h3>
            <p className="text-[#808080] font-light leading-relaxed text-lg md:text-xl">
              I am a Computer Science student deeply immersed in Artificial Intelligence and Machine Learning. 
              My academic and personal journey is driven by a desire to understand complex systems and model them computationally.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#ffffff] flex items-center gap-4">
              <span className="w-2 h-2 bg-[#00ff66]" /> Interests & Focus
            </h3>
            <p className="text-[#808080] font-light leading-relaxed text-lg md:text-xl">
              Beyond standard software engineering, my primary interests lie at the intersection of quantitative research and financial markets. 
              I spend my time exploring probability, data analysis, algorithm design, and how machine learning can be applied to uncover signals in noise.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#ffffff] flex items-center gap-4">
              <span className="w-2 h-2 bg-[#00ff66]" /> Approach
            </h3>
            <p className="text-[#808080] font-light leading-relaxed text-lg md:text-xl">
              I believe in building strong technical foundations through hands-on problem-solving. Whether it’s optimizing a portfolio strategy or fine-tuning a neural network, I value rigorous analysis, clear architecture, and measurable outcomes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}