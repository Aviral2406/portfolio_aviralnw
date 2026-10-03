"use client";

import React, { useState, useEffect } from "react";

interface LeetCodeStats {
  totalSolved: number;
  ranking: number;
}

export default function Achievements() {
  const [lcStats, setLcStats] = useState<LeetCodeStats | null>(null);
  const [ghRepos, setGhRepos] = useState<number | null>(null);

  useEffect(() => {
    // Fetch LeetCode
    fetch("https://leetcode-stats-api.herokuapp.com/aviralsinghai")
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== "error") {
          setLcStats({ totalSolved: data.totalSolved, ranking: data.ranking });
        }
      })
      .catch(() => {});

    // Fetch GitHub
    fetch("https://api.github.com/users/Aviral2406")
      .then((res) => res.json())
      .then((data) => {
        if (data.public_repos) {
          setGhRepos(data.public_repos);
        }
      })
      .catch(() => {});
  }, []);

  const formatNum = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const ledgerItems = [
    {
      year: "2024 - Present",
      category: "Education",
      title: "Acropolis Institute of Technology and Research, Indore",
      detail: "B.Tech in Computer Science and Engineering (AI & ML)",
    }
  ];

  return (
    <section id="achievements" className="py-32 relative z-10 border-t border-[#111111]">
      <div className="flex items-center gap-4 mb-24">
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#333333]">06</span>
        <span className="w-12 h-[1px] bg-[#333333]"></span>
        <h2 className="font-serif text-5xl md:text-7xl text-[#ffffff] uppercase tracking-tighter">Ledger</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left: Timeline Ledger */}
        <div className="lg:col-span-8 flex flex-col">
          {ledgerItems.map((item, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-6 py-12 border-b border-[#111111] group hover:bg-[#050505] transition-colors px-6 -mx-6">
              <div className="font-mono text-[10px] tracking-[0.2em] text-[#808080] md:pt-2">
                {item.year}
              </div>
              <div className="md:col-span-3">
                <span className="font-mono text-[9px] tracking-widest uppercase text-[#00ff66] block mb-4 border border-[#00ff66]/20 bg-[#00ff66]/5 px-2 py-1 w-max">
                  {item.category}
                </span>
                <h4 className="font-serif text-3xl md:text-4xl text-[#ffffff] mb-4 tracking-tight">{item.title}</h4>
                <p className="text-base font-light text-[#808080]">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Live Metrics */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="border border-[#111111] p-8 bg-[#000000] relative overflow-hidden bg-grain group hover:border-[#333333] transition-colors">
            {/* Ambient Glow */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#00ff66] blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity" />

            <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#ffffff] mb-12 border-b border-[#111111] pb-6 flex items-center justify-between">
              Live Technical Metrics
              <span className="w-1.5 h-1.5 bg-[#00ff66] animate-pulse" />
            </h3>
            
            <div className="space-y-12">
              {/* LeetCode */}
              {lcStats && (
                <div className="relative">
                  <span className="font-mono text-[9px] tracking-widest text-[#333333] absolute -left-4 top-2 rotate-180" style={{ writingMode: 'vertical-rl' }}>
                    DATA
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#808080] block mb-3 uppercase">LeetCode</span>
                  <div className="flex justify-between items-end mb-4 border-b border-[#111111] pb-2">
                    <span className="text-[#ffffff] font-serif text-4xl tracking-tighter">{lcStats.totalSolved}</span>
                    <span className="font-mono text-[8px] tracking-widest text-[#00ff66] uppercase">Solved</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-[#808080] font-mono text-xl tracking-tighter">{formatNum(lcStats.ranking)}</span>
                    <span className="font-mono text-[8px] tracking-widest text-[#333333] uppercase">Global Rank</span>
                  </div>
                </div>
              )}

              {/* GitHub */}
              {ghRepos !== null && (
                <div className="relative">
                  <span className="font-mono text-[9px] tracking-widest text-[#333333] absolute -left-4 top-2 rotate-180" style={{ writingMode: 'vertical-rl' }}>
                    DATA
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#808080] block mb-3 uppercase">GitHub</span>
                  <div className="flex justify-between items-end border-b border-[#111111] pb-2">
                    <span className="text-[#ffffff] font-serif text-4xl tracking-tighter">{ghRepos}</span>
                    <span className="font-mono text-[8px] tracking-widest text-[#00ff66] uppercase">Public Repos</span>
                  </div>
                </div>
              )}

              {!lcStats && ghRepos === null && (
                <div className="animate-pulse flex flex-col gap-6">
                  <div className="h-6 bg-[#111111] w-1/3"></div>
                  <div className="h-12 bg-[#111111] w-full"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}