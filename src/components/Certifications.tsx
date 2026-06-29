"use client";

import React from "react";
import GlassCard from "./GlassCard";
import SectionHeader from "./SectionHeader";

interface CertItem {
  title: string;
  provider: string;
  badgeColor: "indigo" | "pink";
}

export default function Certifications() {
  const certifications: CertItem[] = [
    {
      title: "Oracle OCI AI Foundations",
      provider: "Oracle",
      badgeColor: "indigo"
    },
    {
      title: "AWS Academy Cloud Architecting",
      provider: "Amazon Web Services",
      badgeColor: "pink"
    },
    {
      title: "Oracle Database Programming with SQL",
      provider: "Oracle",
      badgeColor: "indigo"
    },
    {
      title: "Programming with Generative AI",
      provider: "NPTEL",
      badgeColor: "pink"
    },
    {
      title: "Lloyds Banking Group Data Science Simulation",
      provider: "Forage",
      badgeColor: "indigo"
    },
    {
      title: "Google Cloud Arcade",
      provider: "Google Cloud",
      badgeColor: "pink"
    }
  ];

  return (
    <section id="certifications" className="py-20 max-w-5xl mx-auto px-6 relative">
      <SectionHeader
        title="Certifications"
        subtitle="Professional credentials and simulated industry completions."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <GlassCard
            key={idx}
            delay={0.05 * idx}
            className="flex flex-col justify-between h-full hover:border-indigo-500/25"
          >
            <div>
              {/* Award / Medal SVG Icon */}
              <div className={`w-10 h-10 rounded-2xl bg-slate-100 border border-slate-200/50 flex items-center justify-center mb-5 ${
                cert.badgeColor === "indigo" ? "text-indigo-600" : "text-pink-600"
              }`}>
                <svg
                  className="w-4.5 h-4.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-8.06 3.42 3.42 0 014.438 0 3.42 3.42 0 00-1.946 8.06 3.42 3.42 0 010 4.438 3.42 3.42 0 00-1.946 8.06 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-8.06 3.42 3.42 0 010-4.438z"
                  />
                </svg>
              </div>

              <h3 className="text-sm font-normal text-slate-900 mb-2 leading-snug tracking-wide">
                {cert.title}
              </h3>
              <p className="text-slate-500 text-xs font-light font-mono tracking-wider uppercase">
                {cert.provider}
              </p>
            </div>
            
            <div className="mt-5 pt-3.5 border-t border-slate-100 text-[10px] text-slate-400 uppercase tracking-widest font-light flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${
                cert.badgeColor === "indigo" ? "bg-indigo-500" : "bg-pink-500"
              }`} />
              Verified Certificate
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
