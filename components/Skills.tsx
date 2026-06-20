"use client";

import React, { useState, useEffect } from "react";
import { Cpu, Layout, Server, Database, Settings, ShieldCheck } from "lucide-react";

interface SkillItem {
  name: string;
  level: string;
  percentage: number;
  colorClass: string; // for custom accent rings
}

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: SkillItem[];
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const categories: SkillCategory[] = [
    {
      title: "Frontend Development",
      description: "Membangun tampilan web yang responsif, cepat, dan interaktif.",
      icon: <Layout className="h-5 w-5 text-purple-500" />,
      items: [
        { name: "Vue.Js", level: "Dasar", percentage: 50, colorClass: "shadow-[#4fc08d]/20 border-[#4fc08d]/40" },
        { name: "Next.Js", level: "Dasar", percentage: 50, colorClass: "shadow-[#f7df1e]/20 border-[#f7df1e]/40" },
        { name: "TypeScript", level: "Dasar", percentage: 50, colorClass: "shadow-[#3178c6]/20 border-[#3178c6]/40" },
        { name: "Tailwind CSS", level: "Ahli", percentage: 95, colorClass: "shadow-[#38bdf8]/20 border-[#38bdf8]/40" },
        { name: "HTML & CSS", level: "Ahli", percentage: 95, colorClass: "shadow-[#e34c26]/20 border-[#e34c26]/40" },
        { name: "JavaScript (ES6+)", level: "Lanjutan", percentage: 80, colorClass: "shadow-[#f7df1e]/20 border-[#f7df1e]/40" },
      ],
    },
    {
      title: "Backend Development",
      description: "Memproses logika bisnis, manajemen basis data, dan struktur API.",
      icon: <Server className="h-5 w-5 text-cyan-500" />,
      items: [
        { name: "Node.js", level: "Dasar", percentage: 50, colorClass: "shadow-[#339933]/20 border-[#339933]/40" },
        { name: "PHP", level: "Ahli", percentage: 95, colorClass: "shadow-[#777bb4]/20 border-[#777bb4]/40" },
        { name: "Laravel", level: "Ahli", percentage: 95, colorClass: "shadow-[#ff2d20]/20 border-[#ff2d20]/40" },
      ],
    },
    {
      title: "Database & DevOps",
      description: "Mengamankan data dan men-deploy web secara andal ke awan.",
      icon: <Database className="h-5 w-5 text-emerald-500" />,
      items: [
        { name: "MySQL", level: "Ahli", percentage: 95, colorClass: "shadow-[#4479a1]/20 border-[#4479a1]/40" },
        { name: "Git & GitHub", level: "Lanjutan", percentage: 80, colorClass: "shadow-[#f05032]/20 border-[#f05032]/40" },
        { name: "Vercel / Netlify", level: "Lanjutan", percentage: 80, colorClass: "shadow-[#f7df1e]/20 border-[#f7df1e]/40" },
      ],
    },
    {
      title: "Tools & Lainnya",
      description: "Aset pendukung kelancaran pengembangan dan kolaborasi tim.",
      icon: <Settings className="h-5 w-5 text-amber-500" />,
      items: [
        { name: "Figma (UI Design)", level: "Menengah", percentage: 75, colorClass: "shadow-[#f24e1e]/20 border-[#f24e1e]/40" },
        { name: "GitHub Copilot", level: "Lanjutan", percentage: 88, colorClass: "shadow-[#ff6c37]/20 border-[#ff6c37]/40" },
        { name: "Claude Code", level: "Menengah", percentage: 70, colorClass: "shadow-[#c21325]/20 border-[#c21325]/40" },
        { name: "Antigravity", level: "Lanjutan", percentage: 80, colorClass: "shadow-[#2088ff]/20 border-[#2088ff]/40" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-[20%] left-[5%] w-[250px] h-[250px] rounded-full bg-primary/5 glow-orb" />

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 mb-16 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-card/60 text-xs font-semibold text-primary">
            <Cpu className="h-3 w-3" />
            <span>KEAHLIAN TEKNIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Kemampuan & Teknologi
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mt-2" />
        </div>

        {/* Tab & Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Categories Selector Tabs (Left) */}
          <div className="lg:col-span-1 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-none select-none">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex-shrink-0 flex items-center gap-4 px-5 py-4 rounded-xl text-left border transition-all duration-300 w-auto lg:w-full ${activeCategory === index
                  ? "bg-card border-primary/40 shadow-md shadow-primary/5 text-foreground"
                  : "bg-card/40 border-border text-foreground/60 hover:bg-card hover:text-foreground"
                  }`}
              >
                <div className={`p-2.5 rounded-lg transition-colors ${activeCategory === index ? "bg-primary/10" : "bg-foreground/5"
                  }`}>
                  {cat.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wide">{cat.title}</h4>
                  <p className="text-xs text-foreground/50 mt-0.5 hidden lg:block max-w-[200px] truncate">
                    {cat.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Category Skills (Right) */}
          <div className="lg:col-span-2 border border-border bg-card/40 rounded-2xl p-6 md:p-8 backdrop-blur-md">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground">
                {categories[activeCategory].title}
              </h3>
              <p className="text-sm text-foreground/65 mt-1.5 leading-relaxed">
                {categories[activeCategory].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories[activeCategory].items.map((skill, index) => (
                <div
                  key={index}
                  className={`group relative p-4 rounded-xl border border-border bg-card/50 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:border-transparent hover:shadow-md ${skill.colorClass}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-xs text-foreground/50 font-medium">
                      {skill.level}
                    </span>
                  </div>

                  {/* Progress bar container */}
                  <div className="h-1.5 w-full bg-foreground/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out origin-left"
                      style={{
                        width: `${skill.percentage}%`,
                        transform: animate ? "scaleX(1)" : "scaleX(0)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
