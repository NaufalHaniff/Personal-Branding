"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { User, Briefcase } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { value: t.about.stat1Val, label: t.about.stat1Label, color: "bg-neo-yellow" },
    { value: t.about.stat2Val, label: t.about.stat2Label, color: "bg-neo-green" },
    { value: t.about.stat3Val, label: t.about.stat3Label, color: "bg-neo-red" },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-card border-y-2 border-black">
      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start gap-2 mb-16 text-center md:text-left">
          <div className="neo-badge bg-neo-yellow text-black px-3.5 py-1 rounded-md text-xs inline-flex items-center gap-1.5 -rotate-1">
            <User className="h-3.5 w-3.5 stroke-[3]" />
            <span>{t.about.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mt-2">
            {t.about.title}
          </h2>
          <div className="h-2 w-24 bg-neo-green border-2 border-black shadow-[2px_2px_0px_0px_#000] mt-1" />
        </div>

        {/* Top Grid: Bio Text & Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Bio Details (Col 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="neo-box p-6 sm:p-8 rounded-2xl bg-background">
              <h3 className="text-xl sm:text-2xl font-black text-foreground mb-4 leading-snug">
                {t.about.headline}
              </h3>

              <p className="text-foreground/85 leading-relaxed text-sm sm:text-base mb-4 font-medium">
                {t.about.p1Body}
              </p>

              <p className="text-foreground/85 leading-relaxed text-sm sm:text-base font-medium">
                {t.about.p2}
              </p>
            </div>

            {/* 3 Stats Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`neo-box p-4 rounded-xl ${stat.color} text-black flex flex-col gap-1 text-center sm:text-left`}
                >
                  <span className="text-2xl sm:text-3xl font-black tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-black/80 font-mono">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Terminal Mockup (Col 5) */}
          <div className="lg:col-span-5">
            <div className="neo-box rounded-2xl bg-[#121214] text-[#f4f4f5] overflow-hidden font-mono text-xs sm:text-sm">
              {/* Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#1e1e24] border-b-2 border-black select-none">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-neo-red border border-black" />
                  <div className="w-3 h-3 rounded-full bg-neo-yellow border border-black" />
                  <div className="w-3 h-3 rounded-full bg-neo-green border border-black" />
                </div>
                <div className="text-xs font-bold text-zinc-400 font-mono">naufal_profile.json</div>
                <div className="w-8" />
              </div>

              {/* JSON Content */}
              <div className="p-5 overflow-x-auto text-left leading-relaxed">
                <span className="text-yellow-300">{"{"}</span>
                <div className="pl-4">
                  <span className="text-sky-300">"nama"</span>: <span className="text-emerald-300">"Naufal Hanif Fauzi"</span>,
                  <br />
                  <span className="text-sky-300">"gelar"</span>: <span className="text-emerald-300">"S1 Teknik Informatika (S.Kom)"</span>,
                  <br />
                  <span className="text-sky-300">"kampus"</span>: <span className="text-emerald-300">"Universitas Pamulang"</span>,
                  <br />
                  <span className="text-sky-300">"peran"</span>: <span className="text-emerald-300">"{t.about.terminalRole}"</span>,
                  <br />
                  <span className="text-sky-300">"coreStack"</span>: <span className="text-yellow-300">{"["}</span>
                  <div className="pl-4">
                    <span className="text-emerald-300">"Laravel"</span>, <span className="text-emerald-300">"MySQL"</span>,
                    <br />
                    <span className="text-emerald-300">"Tailwind CSS"</span>, <span className="text-emerald-300">"Next.js"</span>
                  </div>
                  <span className="text-yellow-300">{"]"}</span>,
                  <br />
                  <span className="text-sky-300">"aiTooling"</span>: <span className="text-yellow-300">{"["}</span>
                  <div className="pl-4">
                    <span className="text-emerald-300">"GitHub Copilot"</span>, <span className="text-emerald-300">"Claude Code"</span>, <span className="text-emerald-300">"Antigravity"</span>
                  </div>
                  <span className="text-yellow-300">{"]"}</span>,
                  <br />
                  <span className="text-sky-300">"lokasi"</span>: <span className="text-emerald-300">"Tangerang Selatan, Banten"</span>
                </div>
                <span className="text-yellow-300">{"}"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Work Experience Timeline */}
        <div className="flex flex-col gap-6 text-left">
          <div className="neo-badge bg-neo-blue text-black px-3 py-1 rounded-md text-xs self-start inline-flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5 stroke-[3]" />
            <span>{t.about.experienceTitle}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.experiences.map((exp, idx) => (
              <div
                key={idx}
                className="neo-box p-6 rounded-2xl bg-background flex flex-col justify-between hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`neo-badge ${exp.color} text-black px-2.5 py-0.5 rounded text-[10px] font-mono`}>
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-base font-black text-foreground">
                    {exp.role}
                  </h4>
                  <h5 className="text-xs font-bold text-foreground/70 mb-4 font-mono">
                    {exp.company}
                  </h5>

                  <ul className="flex flex-col gap-2">
                    {exp.description.map((item, dIdx) => (
                      <li key={dIdx} className="text-xs text-foreground/80 leading-relaxed flex items-start gap-2">
                        <span className="text-black dark:text-neo-yellow font-black mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


