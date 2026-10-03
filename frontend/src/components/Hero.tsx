import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[100vh] pt-32 pb-16 flex flex-col justify-center relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full h-full relative z-10">
        
        {/* Left Side: Massive Typography Content */}
        <div className="flex flex-col justify-center h-full space-y-12 max-w-2xl">
          
          {/* Label */}
          <div className="flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#333333]"></span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#00ff66] uppercase">
              Computer Science · AI/ML
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-7xl md:text-8xl lg:text-[8rem] leading-[0.8] tracking-tighter text-[#ffffff] uppercase mix-blend-difference">
            Aviral<br />
            <span className="text-[#00ff66] italic font-light ml-8 md:ml-16">Singhai</span>
          </h1>

          {/* Supporting Statement */}
          <p className="text-xl md:text-3xl font-light text-[#ffffff] max-w-xl leading-tight">
            Building intelligent systems through <span className="text-[#00ff66]">machine learning</span>, <span className="text-[#00ff66]">algorithms</span>, and quantitative thinking.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-8 pt-4">
            <a
              href="#projects"
              className="group flex items-center justify-center relative w-40 h-40 rounded-full border border-[#333333] hover:border-[#00ff66] transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#00ff66] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10 text-[10px] tracking-widest uppercase font-mono text-[#ffffff] group-hover:text-black transition-colors duration-500 text-center px-4">
                Explore<br />Work
              </span>
            </a>
            
            <a
              href="#contact"
              className="group flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-sans text-[#ffffff] border-b border-[#333333] pb-1 hover:border-[#00ff66] hover:text-[#00ff66] transition-all duration-300"
            >
              Get In Touch
              <span className="transition-transform group-hover:translate-x-2">→</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8 pt-12">
            {["GitHub", "LinkedIn", "LeetCode"].map((social) => (
              <a 
                key={social}
                href={
                  social === "GitHub" ? "https://github.com/Aviral2406" :
                  social === "LinkedIn" ? "https://www.linkedin.com/in/aviral-singhai-217b12282/" :
                  "https://leetcode.com/u/aviralsinghai/"
                } 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[10px] font-mono tracking-widest text-[#808080] hover:text-[#00ff66] transition-colors uppercase relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-[#00ff66] hover:after:w-full after:transition-all after:duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Empty for 3D Sculpture Deep Plunge */}
        <div className="hidden lg:block w-full h-full pointer-events-none" />
      </div>

      {/* Extreme Scroll Indicator */}
      <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 xl:left-32 flex flex-col items-center gap-8 hidden sm:flex z-10">
        <span className="font-mono text-[10px] text-[#00ff66] rotate-90 origin-left tracking-[0.3em] whitespace-nowrap opacity-70">
          SCROLL
        </span>
        <div className="w-[1px] h-24 bg-[#111111] relative overflow-hidden mt-8">
          <div className="w-full h-1/3 bg-[#ffffff] absolute top-0 animate-[bounce_2.5s_infinite]" />
        </div>
      </div>
    </section>
  );
}