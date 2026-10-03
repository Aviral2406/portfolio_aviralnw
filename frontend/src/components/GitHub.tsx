"use client";

import React, { useState, useEffect } from "react";
import GlassCard from "./GlassCard";

interface Repo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

const GITHUB_USERNAME = "Aviral2406"; // User's real GitHub username

export default function GitHub() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!userRes.ok) throw new Error("User not found");
        const userData = await userRes.json();
        
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=4`);
        if (!reposRes.ok) throw new Error("Repos not found");
        const reposData = await reposRes.json();

        setUser({
          login: userData.login,
          avatar_url: userData.avatar_url,
          html_url: userData.html_url,
          bio: userData.bio,
          public_repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
        });

        setRepos(reposData.map((r: any) => ({
          name: r.name,
          description: r.description || "No description provided.",
          html_url: r.html_url,
          stargazers_count: r.stargazers_count,
          forks_count: r.forks_count,
          language: r.language || "TypeScript",
        })));
        setError(false);
      } catch (err) {
        console.warn("GitHub API error.", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-10 bg-slate-100 rounded-2xl w-48" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-32 bg-slate-100 rounded-3xl" />
          <div className="h-32 bg-slate-100 rounded-3xl" />
        </div>
      </div>
    );
  }

  if (error || !user) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-light text-slate-800 flex items-center gap-2 tracking-wide">
          {/* GitHub SVG Icon */}
          <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          GitHub Profile
        </h3>
      </div>

      {user && (
        <GlassCard hoverScale={false} className="flex flex-col md:flex-row gap-6 items-center">
          {user.avatar_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full border-2 border-indigo-200"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-indigo-600 font-light text-xl uppercase shrink-0">
              {user.login.slice(0, 2)}
            </div>
          )}
          
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-base font-light tracking-wide text-slate-800">@{user.login}</h4>
            <p className="text-slate-600 text-xs font-light mt-1.5 mb-4 leading-relaxed">{user.bio}</p>
            <div className="flex justify-center md:justify-start gap-5 text-[10px] font-mono text-slate-400 tracking-wider">
              <span>REPOS: <strong className="text-slate-800 font-medium">{user.public_repos}</strong></span>
              <span>FOLLOWERS: <strong className="text-slate-800 font-medium">{user.followers}</strong></span>
              <span>FOLLOWING: <strong className="text-slate-800 font-medium">{user.following}</strong></span>
            </div>
          </div>

          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full text-xs font-light tracking-widest text-indigo-600 border border-indigo-200 hover:border-indigo-500 hover:bg-indigo-50/20 transition-all duration-300"
          >
            VISIT
          </a>
        </GlassCard>
      )}

      {/* Grid of Repositories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="p-6 rounded-[32px] glass-panel glass-panel-hover h-full flex flex-col justify-between transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-light tracking-wide text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {repo.name}
                  </h4>
                  <span className="text-[9px] px-2.5 py-1 rounded-xl bg-slate-100 border border-slate-200/50 text-slate-500 font-mono">
                    {repo.language}
                  </span>
                </div>
                <p className="text-slate-600 text-xs font-light leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 tracking-wider">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-pink-500/80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  {repo.forks_count}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
