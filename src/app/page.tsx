"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import GitHub from "@/components/GitHub";
import LeetCode from "@/components/LeetCode";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen relative font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Background Gradient Mesh (Light Mode Pastel Soft Glows) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="glow-bg glow-pastel-blue top-[-10%] left-[-10%] animate-float-slow" />
        <div className="glow-bg glow-pastel-pink bottom-[-10%] right-[-10%] animate-float-slow" style={{ animationDelay: "4s" }} />
        <div className="glow-bg glow-pastel-purple top-[40%] right-[10%] animate-float-slow" style={{ animationDelay: "8s", width: "500px", height: "500px" }} />
        <div className="glow-bg glow-pastel-indigo bottom-[30%] left-[20%] animate-float-slow" style={{ animationDelay: "2s", width: "450px", height: "450px" }} />
      </div>

      <Navbar />

      <main className="relative z-10 w-full">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Education Section */}
        <Education />

        {/* Skills Section */}
        <Skills />

        {/* Certifications Section */}
        <Certifications />

        {/* Projects Section */}
        <Projects />

        {/* GitHub & LeetCode Section */}
        <section id="stats" className="py-20 max-w-5xl mx-auto px-6 relative">
          <SectionHeader
            title="Coding Profiles"
            subtitle="My programming activity, open-source repositories, and problem-solving benchmarks."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <GitHub />
            <LeetCode />
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
