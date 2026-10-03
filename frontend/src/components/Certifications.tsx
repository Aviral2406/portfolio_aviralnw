"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const certifications = [
  {
    num: "CERT-01",
    title: "Introduction to Deep Learning",
    issuer: "Wingspan",
    issued: "January 10, 2026",
    category: "Deep Learning",
    description: "Completed foundational coursework covering deep learning concepts and neural-network fundamentals.",
    url: "https://verify.onwingspan.com",
  },
  {
    num: "CERT-02",
    title: "Introduction to Natural Language Processing",
    issuer: "Wingspan",
    issued: "January 10, 2026",
    category: "Natural Language Processing",
    description: "Completed introductory coursework in natural language processing concepts and applications.",
    url: "https://verify.onwingspan.com",
  },
  {
    num: "CERT-03",
    title: "Python Foundation Certification",
    issuer: "Wingspan",
    issued: "January 10, 2026",
    category: "Python",
    description: "Completed foundational certification covering Python programming concepts.",
    url: "https://verify.onwingspan.com",
  },
  {
    num: "CERT-04",
    title: "Artificial Intelligence Foundation Certification",
    issuer: "Wingspan",
    issued: "January 11, 2026",
    category: "Artificial Intelligence",
    description: "Completed foundational coursework in artificial intelligence concepts.",
    url: "https://verify.onwingspan.com",
  },
];

export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".cert-item");
      
      items.forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top bottom-=50",
          end: "bottom top",
          animation: gsap.fromTo(item, 
            { opacity: 0, x: -30 }, 
            { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
          ),
          toggleActions: "play none none reverse"
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="py-32 relative z-10 border-t border-[#111111]">
      {/* Header */}
      <div className="flex flex-col mb-24">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#333333]">05</span>
          <span className="w-12 h-[1px] bg-[#333333]"></span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#00ff66] uppercase">
            Foundational Learning · 2026
          </span>
        </div>
        <h2 className="font-serif text-5xl md:text-7xl text-[#ffffff] uppercase tracking-tighter">Certifications</h2>
      </div>

      {/* Ledger Container */}
      <div className="relative border border-[#111111] bg-[#000000] overflow-hidden bg-grain">
        {/* Subtle Background Markings */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 100% 100%, #111111 0%, transparent 40%), linear-gradient(0deg, transparent 95%, #111111 100%)",
          backgroundSize: "100% 100%, 100% 40px"
        }} />
        <div className="absolute top-4 right-4 font-mono text-[8px] tracking-[0.3em] text-[#333333]">
          SEC-05 // LOG
        </div>

        <div className="flex flex-col">
          {certifications.map((cert, idx) => (
            <div 
              key={cert.num} 
              className={`cert-item group relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 p-8 md:p-12 transition-colors duration-500 hover:bg-[#050505] ${idx !== certifications.length - 1 ? "border-b border-[#111111]" : ""}`}
            >
              {/* Animated Hover Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00ff66] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              {/* Left Column: Meta */}
              <div className="md:col-span-4 flex flex-col justify-start">
                <span className="font-mono text-[12px] tracking-widest text-[#ffffff] mb-2">{cert.num}</span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#808080] mb-1">{cert.issued}</span>
                <span className="font-mono text-[9px] tracking-widest uppercase text-[#ffffff] border border-[#333333] bg-[#111111] px-3 py-1.5 mt-6 self-start group-hover:border-[#00ff66] transition-colors duration-300">
                  {cert.category}
                </span>
              </div>

              {/* Right Column: Details */}
              <div className="md:col-span-8 flex flex-col justify-start">
                <h3 className="font-serif text-3xl md:text-4xl text-[#ffffff] mb-4 tracking-tight">{cert.title}</h3>
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#808080] mb-6 flex items-center gap-2">
                  Issuer <span className="w-4 h-[1px] bg-[#333333]"></span> {cert.issuer}
                </span>
                <p className="text-[#808080] font-light leading-relaxed mb-8 text-sm md:text-base max-w-2xl">
                  {cert.description}
                </p>
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] tracking-widest uppercase text-[#ffffff] border-b border-[#333333] pb-1 hover:text-[#00ff66] hover:border-[#00ff66] transition-colors self-start flex items-center gap-2 group/link"
                >
                  Verify Authenticity 
                  <span className="group-hover/link:translate-x-1 group-hover:link:-translate-y-1 transition-transform">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}