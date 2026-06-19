"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Code, Server, Terminal, Sparkles } from "lucide-react";

export default function Hero() {
  const words = ["User-Friendly", "Kreatif", "Responsif", "Skalabel", "Performa Tinggi"];
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setFadeState("fade-out");
      
      // Delay changing the word until it completely fades out
      setTimeout(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFadeState("fade-in");
      }, 400); // matches duration of fade transitions
    }, 3000);

    return () => clearInterval(wordTimer);
  }, []);

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: (target as HTMLElement).offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-center items-center px-6 overflow-hidden pt-20"
    >
      {/* Background Interactive Patterns */}
      <div className="absolute inset-0 grid-bg opacity-45 dark:opacity-25 pointer-events-none" />
      
      {/* Light/Dark Glowing Blurs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-primary/20 glow-orb" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-secondary/15 glow-orb" />

      {/* Main Container */}
      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center gap-6">
        {/* Intro Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-md text-xs font-medium text-foreground/80 animate-float">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>Tersedia untuk Proyek Baru</span>
        </div>

        {/* Big Catchy Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight select-none">
          Membangun Pengalaman Web Yang{" "}
          <span className="block mt-2 h-[1.25em]">
            <span
              className={`inline-block text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text transition-all duration-350 ${
                fadeState === "fade-in"
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 -translate-y-2 scale-95"
              }`}
            >
              {words[wordIndex]}
            </span>
          </span>
        </h1>

        {/* Sub-description */}
        <p className="max-w-xl text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed font-normal">
          Halo, saya <span className="text-foreground font-semibold">Naufal Hanif</span>. 
          Seorang Full-Stack Developer yang fokus menciptakan website dengan estetika visual menawan,
          animasi halus, dan arsitektur kode yang tangguh.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <button
            onClick={() => handleScrollTo("#projects")}
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-white font-medium px-6 hover:bg-primary/95 transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 btn-glow"
          >
            Lihat Proyek Saya
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={() => handleScrollTo("#contact")}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-card/50 px-6 font-medium hover:bg-card hover:border-foreground/20 transition-all duration-300"
          >
            Hubungi Saya
          </button>
        </div>

        {/* Small floating stack indicators */}
        <div className="hidden md:flex items-center gap-10 mt-12 text-foreground/40 text-xs font-mono select-none">
          <div className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-default">
            <Code className="h-4 w-4" />
            <span>FRONTEND ARCHITECTURE</span>
          </div>
          <div className="h-1.5 w-1.5 rounded-full bg-border" />
          <div className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-default">
            <Server className="h-4 w-4" />
            <span>BACKEND SERVICES</span>
          </div>
          <div className="h-1.5 w-1.5 rounded-full bg-border" />
          <div className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-default">
            <Terminal className="h-4 w-4" />
            <span>DATABASE MANAGEMENT</span>
          </div>
        </div>
      </div>

      {/* Mouse scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40 text-xs font-mono select-none pointer-events-none">
        <span>Scroll kebawah</span>
        <div className="w-5 h-8 rounded-full border-2 border-border flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
