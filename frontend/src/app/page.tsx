import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundScene from "@/components/BackgroundScene";

export default function Home() {
  return (
    <>
      {/* Layer 1 is the CSS Background defined in globals.css */}
      
      {/* Layer 2: Persistent 3D Canvas */}
      <BackgroundScene />
      
      {/* Layer 3 & 4: Structural Midground and Foreground Content */}
      <div className="relative z-10 w-full min-h-screen selection:bg-emerald-900/50">
        <Navbar />
        
        <main className="flex flex-col w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Achievements />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
