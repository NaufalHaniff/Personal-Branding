"use client";

import React from "react";
import { Cpu } from "lucide-react";

export default function Skills() {
  const row1 = [
    { name: "Vue.Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Next.Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  ];

  const row2 = [
    { name: "PHP / Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "Node.Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  ];

  // Double the rows for infinite marquee loop
  const doubledRow1 = [...row1, ...row1];
  const doubledRow2 = [...row2, ...row2];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-card/5">
      {/* Background radial glows */}
      <div className="absolute top-[20%] left-[5%] w-[250px] h-[250px] rounded-full bg-primary/5 glow-orb" />
      <div className="absolute bottom-[20%] right-[5%] w-[250px] h-[250px] rounded-full bg-secondary/5 glow-orb" />

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

        {/* Marquee Wrapper */}
        <div className="w-full flex flex-col gap-6 relative select-none">
          {/* Gradient overlay for fade effect */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

          {/* Row 1: Left Moving */}
          <div className="w-full overflow-hidden flex whitespace-nowrap">
            <div className="flex gap-6 w-max animate-marquee-left py-2">
              {doubledRow1.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-5 py-3.5 bg-card border border-border shadow-sm shadow-foreground/5 hover:border-primary/45 rounded-full hover:scale-[1.03] transition-all duration-300 cursor-default select-none shrink-0"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-6 w-6 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="font-semibold text-sm text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right Moving */}
          <div className="w-full overflow-hidden flex whitespace-nowrap">
            <div className="flex gap-6 w-max animate-marquee-right py-2">
              {doubledRow2.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-5 py-3.5 bg-card border border-border shadow-sm shadow-foreground/5 hover:border-secondary/45 rounded-full hover:scale-[1.03] transition-all duration-300 cursor-default select-none shrink-0"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-6 w-6 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="font-semibold text-sm text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
