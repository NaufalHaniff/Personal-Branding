"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { Cpu, Code2, Database, Wrench, Bot } from "lucide-react";

export default function Skills() {
  const { t } = useLanguage();

  const row1 = [
    { name: "Laravel", category: t.skills.categoryNames.Framework, color: "bg-neo-red", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "PHP", category: t.skills.categoryNames.Language, color: "bg-neo-blue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "MySQL", category: t.skills.categoryNames.Database, color: "bg-neo-yellow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Tailwind CSS", category: t.skills.categoryNames.Styling, color: "bg-neo-green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "JavaScript", category: t.skills.categoryNames.Language, color: "bg-neo-yellow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Next.js", category: t.skills.categoryNames.Framework, color: "bg-white", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Vue.js", category: t.skills.categoryNames.Framework, color: "bg-neo-green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  ];

  const row2 = [
    { name: "GitHub Copilot", category: t.skills.categoryNames.AITool, color: "bg-neo-blue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Claude Code", category: t.skills.categoryNames.AITool, color: "bg-neo-yellow", icon: "/images/claude.svg" },
    { name: "Antigravity", category: t.skills.categoryNames.AITool, color: "bg-neo-green", icon: "/images/antigravity.svg" },
    { name: "Bootstrap", category: t.skills.categoryNames.Styling, color: "bg-neo-red", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "TypeScript", category: t.skills.categoryNames.Language, color: "bg-neo-blue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Git & GitHub", category: t.skills.categoryNames.VersionControl, color: "bg-white", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "VS Code", category: t.skills.categoryNames.IDE, color: "bg-neo-blue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Figma", category: t.skills.categoryNames.Design, color: "bg-neo-red", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ];

  const categories = [
    {
      title: t.skills.backendTitle,
      icon: <Database className="h-4 w-4 stroke-[2.5]" />,
      color: "bg-neo-yellow",
      skills: ["Laravel 12", "PHP (OOP & Native)", "MySQL", "RESTful API Architecture", "Livewire"],
    },
    {
      title: t.skills.frontendTitle,
      icon: <Code2 className="h-4 w-4 stroke-[2.5]" />,
      color: "bg-neo-blue",
      skills: ["Tailwind CSS", "Next.js / React", "Vue.js", "JavaScript (ES6+)", "TypeScript", "Bootstrap"],
    },
    {
      title: t.skills.aiTitle,
      icon: <Bot className="h-4 w-4 stroke-[2.5]" />,
      color: "bg-neo-green",
      skills: ["GitHub Copilot", "Claude Code", "Antigravity IDE", "Prompt Engineering & Pair Coding"],
    },
    {
      title: t.skills.toolsTitle,
      icon: <Wrench className="h-4 w-4 stroke-[2.5]" />,
      color: "bg-neo-red",
      skills: ["Git & GitHub Workflow", "VS Code", "Figma", "Technical Documentation", "i18n Localization"],
    },
  ];

  const doubledRow1 = [...row1, ...row1];
  const doubledRow2 = [...row2, ...row2];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 mb-16 text-center">
          <div className="neo-badge bg-neo-green text-black px-3.5 py-1 rounded-md text-xs inline-flex items-center gap-1.5 rotate-1">
            <Cpu className="h-3.5 w-3.5 stroke-[3]" />
            <span>{t.skills.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mt-2">
            {t.skills.title}
          </h2>
          <div className="h-2 w-24 bg-neo-yellow border-2 border-black shadow-[2px_2px_0px_0px_#000] mt-1" />
        </div>

        {/* Marquee Display */}
        <div className="w-full flex flex-col gap-5 relative select-none mb-16">
          {/* Row 1 */}
          <div className="w-full overflow-hidden flex whitespace-nowrap py-1">
            <div className="flex gap-4 w-max animate-marquee-left py-1">
              {doubledRow1.map((skill, index) => (
                <div
                  key={index}
                  className="neo-box px-4 py-2.5 rounded-xl bg-card flex items-center gap-3 hover:-rotate-2 transition-transform cursor-default shrink-0"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-6 w-6 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="flex flex-col text-left">
                    <span className="font-black text-sm text-foreground">{skill.name}</span>
                    <span className="text-[10px] font-mono font-bold text-foreground/60">{skill.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="w-full overflow-hidden flex whitespace-nowrap py-1">
            <div className="flex gap-4 w-max animate-marquee-right py-1">
              {doubledRow2.map((skill, index) => (
                <div
                  key={index}
                  className="neo-box px-4 py-2.5 rounded-xl bg-card flex items-center gap-3 hover:rotate-2 transition-transform cursor-default shrink-0"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-6 w-6 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="flex flex-col text-left">
                    <span className="font-black text-sm text-foreground">{skill.name}</span>
                    <span className="text-[10px] font-mono font-bold text-foreground/60">{skill.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="neo-box p-6 rounded-2xl bg-card flex flex-col justify-between hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className={`p-2 rounded-lg border-2 border-black ${cat.color} text-black shadow-[2px_2px_0px_0px_#000]`}>
                    {cat.icon}
                  </div>
                  <h3 className="font-black text-base text-foreground leading-tight">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {cat.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md border-2 border-black bg-background text-xs font-mono font-bold text-foreground shadow-[1.5px_1.5px_0px_0px_#000]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


