"use client";

import React, { useState, useEffect } from "react";
import GlassCard from "./GlassCard";

interface LeetCodeStats {
  username: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  easyTotal: number;
  mediumSolved: number;
  mediumTotal: number;
  hardSolved: number;
  hardTotal: number;
  ranking: number;
}

export default function LeetCode() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("https://leetcode-stats-api.herokuapp.com/aviralsinghai");
        const data = await res.json();
        
        if (data.status === "error") {
          throw new Error("Failed to fetch LeetCode stats");
        }

        setStats({
          username: "aviralsinghai",
          totalSolved: data.totalSolved,
          totalQuestions: data.totalQuestions,
          easySolved: data.easySolved,
          easyTotal: data.totalEasy,
          mediumSolved: data.mediumSolved,
          mediumTotal: data.totalMedium,
          hardSolved: data.hardSolved,
          hardTotal: data.totalHard,
          ranking: data.ranking,
        });
      } catch (err) {
        console.warn("LeetCode API error", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-10 bg-slate-100 rounded-2xl w-48" />
        <div className="h-64 bg-slate-100 rounded-3xl w-full" />
      </div>
    );
  }

  if (error || !stats) {
    return null;
  }

  const overallPercentage = Math.round((stats.totalSolved / stats.totalQuestions) * 100) || 0;
  const strokeDashOffset = 220 - (220 * overallPercentage) / 100;

  // Formatting helper to avoid locale hydration mismatch on Windows/Browsers
  const formatRank = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-light text-slate-800 flex items-center gap-2 tracking-wide">
          {/* LeetCode SVG Icon */}
          <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.483 0a1.374 1.374 0 00-.961.414l-9.177 9.177a1.378 1.378 0 000 1.95l8.785 8.785a1.378 1.378 0 001.96 0l5.116-5.116a1.378 1.378 0 000-1.951L10.59 4.646a1.378 1.378 0 00-1.96 0L5.347 7.93a1.378 1.378 0 000 1.951L7.79 12.33a1.378 1.378 0 001.96 0L12.24 9.84a1.378 1.378 0 000-1.95L9.79 5.4a1.378 1.378 0 00-1.96 0L4.347 8.89a1.378 1.378 0 000 1.95l8.785 8.785a1.378 1.378 0 001.96 0l5.116-5.116a1.378 1.378 0 000-1.951L13.483.414A1.374 1.374 0 0013.483 0z" />
          </svg>
          LeetCode Stats
        </h3>
        <span className="text-[10px] text-slate-400 font-mono tracking-widest">
          @{stats.username}
        </span>
      </div>

      <GlassCard hoverScale={false} className="flex flex-col md:flex-row gap-6 items-center justify-between">
        {/* Ring Chart Graphic */}
        <div className="flex items-center gap-6">
          <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="35"
                className="stroke-slate-100"
                strokeWidth="5"
                fill="none"
              />
              <circle
                cx="48"
                cy="48"
                r="35"
                className="stroke-pink-600"
                strokeWidth="5"
                fill="none"
                strokeDasharray="220"
                strokeDashoffset={strokeDashOffset}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-xl font-light text-slate-800">{stats.totalSolved}</span>
              <span className="text-[8px] text-slate-400 font-light tracking-widest uppercase">Solved</span>
            </div>
          </div>

          <div>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase block mb-1">Global Rank</span>
            <span className="text-lg font-light text-slate-800">
              {formatRank(stats.ranking)}
            </span>
          </div>
        </div>

        {/* Categories Bar Breakdown */}
        <div className="flex-1 max-w-xs w-full flex flex-col gap-3">
          {/* Easy */}
          <div>
            <div className="flex justify-between text-xs mb-1 font-light">
              <span className="text-slate-500">Easy</span>
              <span className="text-slate-400 font-mono">
                <strong className="text-emerald-600 font-light">{stats.easySolved}</strong>/{stats.easyTotal}
              </span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full"
                style={{ width: `${(stats.easySolved / Math.max(1, stats.easyTotal)) * 100}%` }}
              />
            </div>
          </div>

          {/* Medium */}
          <div>
            <div className="flex justify-between text-xs mb-1 font-light">
              <span className="text-slate-500">Medium</span>
              <span className="text-slate-400 font-mono">
                <strong className="text-indigo-600 font-light">{stats.mediumSolved}</strong>/{stats.mediumTotal}
              </span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: `${(stats.mediumSolved / Math.max(1, stats.mediumTotal)) * 100}%` }}
              />
            </div>
          </div>

          {/* Hard */}
          <div>
            <div className="flex justify-between text-xs mb-1 font-light">
              <span className="text-slate-500">Hard</span>
              <span className="text-slate-400 font-mono">
                <strong className="text-pink-600 font-light">{stats.hardSolved}</strong>/{stats.hardTotal}
              </span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-pink-500 rounded-full"
                style={{ width: `${(stats.hardSolved / Math.max(1, stats.hardTotal)) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Visit Profile CTA for LeetCode */}
        <div className="mt-4 md:mt-0 shrink-0">
          <a
            href={`https://leetcode.com/u/${stats.username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full text-xs font-light tracking-widest text-pink-600 border border-pink-200 hover:border-pink-500 hover:bg-pink-50/20 transition-all duration-300 block text-center"
          >
            VISIT
          </a>
        </div>
      </GlassCard>
    </div>
  );
}
