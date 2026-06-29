"use client";

import React, { useState } from "react";
import GlassCard from "./GlassCard";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Mock submit delay
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    }, 1500);
  };

  const contactLinks = [
    {
      name: "Email",
      value: "aviralsinghai777@gmail.com",
      href: "mailto:aviralsinghai777@gmail.com",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: "Phone",
      value: "+91 80813 45228",
      href: "tel:+918081345228",
      icon: (
        <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      name: "Location",
      value: "Mumbai, India",
      href: "https://maps.google.com/?q=Mumbai,India",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/aviral-singhai",
      href: "https://www.linkedin.com/in/aviral-singhai-182938272/",
      icon: (
        <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      value: "github.com/Aviral2406",
      href: "https://github.com/Aviral2406",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    },
    {
      name: "Resume",
      value: "View Resume PDF",
      href: "https://doc-0s-4s-apps-viewer.googleusercontent.com/viewer/secure/pdf/so6apbgqk7k0hp80fnvi2ceeipjic272/rk7a2rmgav83fqek6s480gcr5iiknvqa/1782727350000/contribservice/07896136977092685516/ACFrOgCuGFV-fu2EDXhGbQtZ64TPrpqk2qFa_wHWyTY_FRAzLHyToI7x6dCYGuqUh3T2sCAJgXxlMW5UOkIQcP9oOxW8Typs8uGgNEa1Mwl2VQeEzxIoGCJsVuEd12nHobISBYKUcUQymOyWw02J?authuser=0&print=true&nonce=fhkg9afqgaqhs&user=07896136977092685516&hash=4i7u9fq4e5u714cjbskp72r88n1nhatn",
      icon: (
        <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-20 max-w-5xl mx-auto px-6 relative">
      <SectionHeader
        title="Contact"
        subtitle="Get in touch for internships, collaborations, or quantitative research opportunities."
      />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
        {/* Contact Links Card */}
        <div className="md:col-span-2 flex flex-col gap-4 justify-between h-full">
          <div className="flex flex-col gap-4">
            {contactLinks.map((link) => (
              <GlassCard
                key={link.name}
                hoverScale={true}
                className="flex items-center gap-4 p-4!"
              >
                <div className="p-2.5 rounded-2xl bg-slate-100 border border-slate-200/50 shrink-0">
                  {link.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[9px] text-slate-400 uppercase tracking-widest block font-light">
                    {link.name}
                  </span>
                  
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-600 hover:text-indigo-600 transition-colors font-mono truncate block font-light"
                  >
                    {link.value}
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Message Form */}
        <GlassCard hoverScale={false} className="md:col-span-3 h-full" delay={0.1}>
          <h3 className="text-lg font-light tracking-wide text-slate-800 mb-6">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-[10px] font-light text-slate-400 uppercase tracking-widest mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-xs font-light focus:outline-none focus:border-indigo-500/50 transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[10px] font-light text-slate-400 uppercase tracking-widest mb-2">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-xs font-light focus:outline-none focus:border-indigo-500/50 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[10px] font-light text-slate-400 uppercase tracking-widest mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-xs font-light focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
                placeholder="Tell me about your project, team, or opportunity..."
              />
            </div>

            <button
              type="submit"
              disabled={sending || sent}
              className="w-full py-4 rounded-full text-xs font-light tracking-widest text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? (
                <>
                  <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  SENDING...
                </>
              ) : sent ? (
                <>
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                  MESSAGE SENT
                </>
              ) : (
                "SEND MESSAGE"
              )}
            </button>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
