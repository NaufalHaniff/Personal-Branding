"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { FolderGit2, Sparkles, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const { t } = useLanguage();
  const [activeTabKey, setActiveTabKey] = useState<"all" | "b2b" | "thesis" | "inventory">("all");

  const tabs: { key: "all" | "b2b" | "thesis" | "inventory"; label: string }[] = [
    { key: "all", label: t.projects.tabs.all },
    { key: "b2b", label: t.projects.tabs.b2b },
    { key: "thesis", label: t.projects.tabs.thesis },
    { key: "inventory", label: t.projects.tabs.inventory },
  ];

  const filteredProjects =
    activeTabKey === "all"
      ? t.projects.items
      : t.projects.items.filter((project) => project.categoryKey === activeTabKey);

  const getCategoryLabel = (categoryKey: "all" | "b2b" | "thesis" | "inventory") => {
    switch (categoryKey) {
      case "b2b":
        return t.projects.tabs.b2b;
      case "thesis":
        return t.projects.tabs.thesis;
      case "inventory":
        return t.projects.tabs.inventory;
      default:
        return t.projects.tabs.all;
    }
  };

  const getGridClasses = () => {
    if (filteredProjects.length === 1) {
      return "max-w-md mx-auto";
    }
    if (filteredProjects.length === 2) {
      return "max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8";
    }
    return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-card border-b-2 border-black">
      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 mb-12 text-center">
          <div className="neo-badge bg-neo-yellow text-black px-3.5 py-1 rounded-md text-xs inline-flex items-center gap-1.5 -rotate-1">
            <FolderGit2 className="h-3.5 w-3.5 stroke-[3]" />
            <span>{t.projects.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mt-2">
            {t.projects.title}
          </h2>
          <div className="h-2 w-24 bg-neo-blue border-2 border-black shadow-[2px_2px_0px_0px_#000] mt-1" />
        </div>

        {/* Tab Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12 select-none">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTabKey(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTabKey === tab.key
                  ? "neo-box bg-neo-yellow text-black -rotate-1"
                  : "border-2 border-black bg-background text-foreground hover:bg-black/5 dark:hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with dynamic centering */}
        <div className={`${getGridClasses()} text-left transition-all duration-300`}>
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="neo-box-lg rounded-2xl bg-background flex flex-col justify-between overflow-hidden hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              {/* Card Window Top Header */}
              <div>
                <div className="flex items-center justify-between px-4 py-3 bg-card border-b-2 border-black select-none">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-neo-red border border-black" />
                    <div className="w-3 h-3 rounded-full bg-neo-yellow border border-black" />
                    <div className="w-3 h-3 rounded-full bg-neo-green border border-black" />
                  </div>
                  <span className={`neo-badge ${project.accentColor} text-black px-2 py-0.5 rounded text-[10px] font-mono`}>
                    {getCategoryLabel(project.categoryKey)}
                  </span>
                </div>

                {/* Project Image Preview if available */}
                {project.image ? (
                  <div className="relative aspect-video w-full overflow-hidden border-b-2 border-black bg-zinc-100 dark:bg-zinc-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="aspect-video w-full border-b-2 border-black bg-card p-6 flex flex-col justify-center items-center text-center">
                    <FolderGit2 className="h-10 w-10 text-foreground/40 mb-2 stroke-[1.5]" />
                    <span className="font-mono font-bold text-xs text-foreground/60">{t.projects.repoWeb}</span>
                  </div>
                )}

                {/* Card Body */}
                <div className="p-6">
                  {project.isFeatured && (
                    <div className="neo-badge bg-neo-green text-black px-2.5 py-0.5 rounded text-[10px] inline-flex items-center gap-1 mb-3">
                      <Sparkles className="h-3 w-3 stroke-[3]" />
                      <span>{t.projects.featured}</span>
                    </div>
                  )}

                  <h3 className="text-lg font-black text-foreground leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs font-bold text-foreground/60 font-mono mt-1 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-foreground/80 leading-relaxed min-h-[60px]">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded border border-black bg-card text-[10px] font-mono font-bold text-foreground shadow-[1px_1px_0px_0px_#000]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-card border-t-2 border-black flex items-center justify-between gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="neo-btn-sm bg-neo-yellow text-black px-3.5 py-1.5 rounded-lg text-xs font-black inline-flex items-center gap-1 flex-1 justify-center"
                >
                  <span>{t.projects.liveDemo}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 stroke-[3]" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="neo-btn-sm bg-background text-foreground px-3.5 py-1.5 rounded-lg text-xs font-black inline-flex items-center gap-1 justify-center"
                >
                  <span>{t.projects.github}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


