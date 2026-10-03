"use client";

import React from "react";

export default function Contact() {
  const contactLinks = [
    { name: "Email", value: "aviralsinghai777@gmail.com", href: "mailto:aviralsinghai777@gmail.com" },
    { name: "Location", value: "Indore, Madhya Pradesh", href: "https://maps.google.com/?q=Indore,Madhya+Pradesh" },
    { name: "LinkedIn", value: "linkedin.com/in/aviral-singhai", href: "https://www.linkedin.com/in/aviral-singhai-217b12282/" },
    { name: "GitHub", value: "github.com/Aviral2406", href: "https://github.com/Aviral2406" },
  ];

  return (
    <section id="contact" className="py-32 relative min-h-[90vh] flex flex-col justify-center border-t border-[#111111]">
      {/* Background glow behind contact */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-[#00ff66] blur-[150px] opacity-10 pointer-events-none z-0" />
      
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto z-10 relative">
        
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#00ff66] block mb-8 uppercase">
          07. End of line
        </span>
        
        <h2 className="font-serif text-5xl md:text-8xl lg:text-[7rem] text-[#ffffff] mb-8 leading-[0.9] tracking-tighter uppercase mix-blend-difference">
          Start a <br/>
          <span className="text-transparent" style={{ WebkitTextStroke: "1px #ffffff" }}>Conversation</span>
        </h2>
        
        <p className="text-[#808080] font-light leading-relaxed mb-20 max-w-2xl text-lg">
          Whether it’s discussing AI/ML architecture, quantitative research strategies, 
          algorithmic problem solving, or software engineering opportunities—I am always 
          eager to connect, collaborate, and learn.
        </p>

        {/* Minimal Grid for Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full border-y border-[#111111] py-12 mb-20 text-center">
          {contactLinks.map((link) => (
            <div key={link.name} className="flex flex-col items-center group">
              <span className="font-mono text-[9px] tracking-widest uppercase text-[#333333] mb-4 group-hover:text-[#00ff66] transition-colors duration-500">
                {link.name}
              </span>
              <a 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffffff] group-hover:text-[#00ff66] transition-colors duration-300 font-mono text-xs tracking-wider"
              >
                {link.value}
              </a>
            </div>
          ))}
        </div>

        {/* Minimal Contact Button */}
        <a
          href="mailto:aviralsinghai777@gmail.com"
          className="group relative flex items-center justify-center w-full max-w-xs h-20 border border-[#333333] hover:border-[#00ff66] transition-colors duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#00ff66] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          <span className="relative z-10 text-[10px] tracking-[0.3em] uppercase font-mono text-[#ffffff] group-hover:text-[#000000] transition-colors duration-500">
            Initialize Contact
          </span>
        </a>

      </div>
    </section>
  );
}