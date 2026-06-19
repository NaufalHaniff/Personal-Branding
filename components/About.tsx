"use client";

import React from "react";
import { User, Cpu, Layers, Sparkles } from "lucide-react";

export default function About() {
  const stats = [
    { value: "3+", label: "Tahun Pengalaman" },
    { value: "2+", label: "Proyek Selesai" },
    { value: "95%", label: "Klien Puas" },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-card/15">
      {/* Background decoration */}
      <div className="absolute top-[30%] right-[5%] w-[300px] h-[300px] rounded-full bg-secondary/5 glow-orb" />

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Title */}
        <div className="flex flex-col items-center md:items-start gap-2 mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-card/60 text-xs font-semibold text-primary">
            <User className="h-3 w-3" />
            <span>SIAPA SAYA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Tentang Diri Saya
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mt-2" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-foreground">
              Saya menggabungkan seni desain dengan kekuatan teknologi.
            </h3>

            <p className="text-foreground/75 leading-relaxed">
              Saya adalah seorang Full-Stack Developer yang antusias menciptakan pengalaman digital yang intuitif dan menarik. Saya gemar memecahkan masalah kompleks di sisi backend (logic & data) dan mengejawantahkannya menjadi visual yang hidup dan interaktif di sisi frontend.
            </p>

            <p className="text-foreground/75 leading-relaxed">
              Bagi saya, coding bukan hanya sekadar instruksi untuk mesin, melainkan seni menulis solusi efisien untuk kebutuhan nyata pengguna. Saya selalu berupaya mengikuti perkembangan standar performa web, optimasi SEO, serta aksesibilitas universal.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-4 pt-6 border-t border-border">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1 text-center md:text-left">
                  <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm text-foreground/60 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Mockup */}
          <div className="relative group">
            {/* Ambient Shadow glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-2xl blur-xl transition-all duration-500 group-hover:scale-105 pointer-events-none" />

            <div className="relative border border-border rounded-2xl bg-[#09090b] text-[#a9b1d6] shadow-xl overflow-hidden font-mono text-sm leading-relaxed">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#16161e] border-b border-border select-none">
                <div className="flex gap-2 group/controls">
                  <div className="w-3 h-3 rounded-full bg-[#f7768e] flex items-center justify-center text-[8px] font-extrabold text-red-950/70 cursor-default select-none">
                    <span className="opacity-0 group-hover/controls:opacity-100 transition-opacity duration-150">×</span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-[#e0af68] flex items-center justify-center text-[8px] font-extrabold text-yellow-950/70 cursor-default select-none">
                    <span className="opacity-0 group-hover/controls:opacity-100 transition-opacity duration-150">−</span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-[#9ece6a] flex items-center justify-center text-[8px] font-extrabold text-green-950/70 cursor-default select-none">
                    <span className="opacity-0 group-hover/controls:opacity-100 transition-opacity duration-150">+</span>
                  </div>
                </div>
                <div className="text-xs text-foreground/50 font-sans">developer_profile.json</div>
                <div className="w-14" /> {/* balance */}
              </div>

              {/* Terminal Code Content */}
              <div className="p-6 overflow-x-auto text-left select-text">
                <span className="text-purple-400">{"{"}</span>
                <div className="pl-4">
                  <span className="text-blue-400">"nama"</span>: <span className="text-orange-300">"Naufal Hanif"</span>,
                  <br />
                  <span className="text-blue-400">"peran"</span>: <span className="text-orange-300">"Full-Stack Developer"</span>,
                  <br />
                  <span className="text-blue-400">"fokus"</span>: <span className="text-purple-400">{"["}</span>
                  <div className="pl-4">
                    <span className="text-orange-300">"Modern Web Apps"</span>,
                    <br />
                    <span className="text-orange-300">"API Integration"</span>,
                    <br />
                    <span className="text-orange-300">"Dynamic Animations"</span>
                  </div>
                  <span className="text-purple-400">{"]"}</span>,
                  <br />
                  <span className="text-blue-400">"filosofi"</span>: <span className="text-orange-300">"Menulis kode bersih untuk UI yang menawan"</span>,
                  <br />
                  <span className="text-blue-400">"keahlianUtama"</span>: <span className="text-purple-400">{"["}</span>
                  <div className="pl-4">
                    <span className="text-orange-300">"JavaScript (ES6+)"</span>,
                    <br />
                    <span className="text-orange-300">"Bootstrap"</span>,
                    <br />
                    <span className="text-orange-300">"PHP/Laravel"</span>,
                    <br />
                    <span className="text-orange-300">"Tailwind CSS"</span>,
                    <br />
                    <span className="text-orange-300">"Vue.Js/Node.Js"</span>,
                    <br />
                    <span className="text-orange-300">"React/Next.Js"</span>,
                    <br />
                    <span className="text-orange-300">"TypeScript"</span>
                  </div>
                  <span className="text-purple-400">{"]"}</span>,
                  <br />
                  <span className="text-blue-400">"lokasi"</span>: <span className="text-orange-300">"Tangerang Selatan, Banten"</span>
                </div>
                <span className="text-purple-400">{"}"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
