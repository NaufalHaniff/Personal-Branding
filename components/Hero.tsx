"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { ArrowRight, Send } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();
  const words = t.hero.words;
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  useEffect(() => {
    // Reset index if words change on language switch
    setWordIndex(0);
  }, [words]);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setFadeState("fade-out");
      setTimeout(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFadeState("fade-in");
      }, 300);
    }, 2800);

    return () => clearInterval(wordTimer);
  }, [words.length]);

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: (target as HTMLElement).offsetTop - 85,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden pt-28 pb-16"
    >
      {/* Neubrutal Dot Matrix Background */}
      <div className="absolute inset-0 neo-dot-bg pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center gap-6">
        {/* Status Pill Badge */}
        <div className="neo-badge bg-neo-green text-black px-4 py-1.5 rounded-full inline-flex items-center gap-2 animate-bounce">
          <span className="w-2.5 h-2.5 rounded-full bg-black animate-ping" />
          <span>{t.hero.statusBadge}</span>
        </div>

        {/* Big Catchy Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.2] text-foreground select-none">
          {t.hero.titlePrefix}{" "}
          <span className="inline-block my-2">
            <span
              className={`inline-block px-4 py-1 rounded-xl border-2 border-black bg-neo-yellow text-black shadow-[4px_4px_0px_0px_#000000] -rotate-1 transition-all duration-300 font-black ${
                fadeState === "fade-in"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              {words[wordIndex] || words[0]}
            </span>
          </span>
        </h1>

        {/* Professional Engineering Value Statement */}
        <p className="max-w-2xl text-base sm:text-lg text-foreground/80 leading-relaxed font-medium">
          {t.hero.bioBody}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2 w-full sm:w-auto">
          <button
            onClick={() => handleScrollTo("#projects")}
            className="neo-btn bg-neo-yellow text-black px-6 py-3.5 rounded-xl text-sm font-extrabold inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>{t.hero.viewProjects}</span>
            <ArrowRight className="h-4 w-4 stroke-[3]" />
          </button>

          <button
            onClick={() => handleScrollTo("#contact")}
            className="neo-btn bg-neo-blue text-black px-6 py-3.5 rounded-xl text-sm font-extrabold inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Send className="h-4 w-4 stroke-[2.5]" />
            <span>{t.hero.contactMe}</span>
          </button>
        </div>

        {/* Floating Quirky Tech Badges */}
        <div className="flex flex-wrap justify-center items-center gap-3 mt-6 select-none">
          <div className="neo-badge bg-card text-foreground px-3.5 py-1.5 rounded-lg text-xs font-mono -rotate-2">
            {t.hero.badge1}
          </div>
          <div className="neo-badge bg-neo-green text-black px-3.5 py-1.5 rounded-lg text-xs font-mono rotate-1">
            {t.hero.badge2}
          </div>
          <div className="neo-badge bg-neo-red text-black px-3.5 py-1.5 rounded-lg text-xs font-mono -rotate-1">
            {t.hero.badge3}
          </div>
        </div>
      </div>
    </section>
  );
}


