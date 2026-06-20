"use client";

import React, { useState } from "react";
import { FolderGit2, ExternalLink, Layers } from "lucide-react";

interface Project {
  title: string;
  description: string;
  category: "Frontend" | "Backend" | "Full-Stack";
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  image?: string;
  isFeatured?: boolean;
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const tabs = ["All", "Full-Stack", "Frontend", "Backend"];

  const projects: Project[] = [
    {
      title: "SSBO Marketplace B2B",
      description: "Platform e-commerce grosir B2B terintegrasi dengan negosiasi harga real-time, sistem invoice otomatis, restriksi seller, dan multi-bahasa dinamis.",
      category: "Full-Stack",
      tags: ["Laravel 11", "Livewire", "MySQL", "Tailwind CSS", "PHP"],
      demoUrl: "https://ssbo.co.id",
      githubUrl: "https://github.com",
      image: "/projects/SSBO Marketplace B2B.png",
      isFeatured: true,
    },
  ];

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden bg-card/15">
      {/* Background decoration */}
      <div className="absolute bottom-[20%] left-[5%] w-[320px] h-[320px] rounded-full bg-primary/5 glow-orb" />

      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 mb-12 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-card/60 text-xs font-semibold text-primary">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Proyek Pilihan Terkini
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mt-2" />
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-2 mb-12 select-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 border ${activeTab === tab
                ? "bg-primary border-primary text-white shadow-md shadow-primary/20 scale-[1.03]"
                : "bg-card/50 border-border text-foreground/60 hover:border-foreground/30 hover:text-foreground hover:bg-card"
                }`}
            >
              {tab === "All" ? "Semua Kategori" : tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg hover:border-transparent transition-all duration-350 hover:scale-[1.02] w-full max-w-md"
              style={{
                // Stagger transition delayed entrance on mount simulated via class
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Outer Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/0 to-primary/0 opacity-0 group-hover:opacity-100 group-hover:from-primary/10 group-hover:to-secondary/5 transition-opacity duration-350 pointer-events-none" />

              {/* Mock Window Top Bar (Premium aesthetic) */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-foreground/[0.03] border-b border-border select-none">
                <div className="flex gap-1.5 group/controls">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 flex items-center justify-center text-[7px] font-extrabold text-red-950/70 cursor-default select-none">
                    <span className="opacity-0 group-hover/controls:opacity-100 transition-opacity duration-150">×</span>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 flex items-center justify-center text-[7px] font-extrabold text-yellow-950/70 cursor-default select-none">
                    <span className="opacity-0 group-hover/controls:opacity-100 transition-opacity duration-150">−</span>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 flex items-center justify-center text-[7px] font-extrabold text-green-950/70 cursor-default select-none">
                    <span className="opacity-0 group-hover/controls:opacity-100 transition-opacity duration-150">+</span>
                  </div>
                </div>
                <div className="text-[10px] text-foreground/40 font-mono tracking-widest uppercase">
                  {project.category}
                </div>
                <div className="w-9" />
              </div>

              {/* Project Image Preview */}
              {project.image && (
                <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-foreground/[0.02]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow z-10 text-left">
                {/* Project Badge if Featured */}
                {project.isFeatured && (
                  <div className="inline-flex self-start items-center gap-1 mb-3.5 px-2 py-0.5 rounded-md bg-primary/15 border border-primary/20 text-[10px] font-semibold text-primary">
                    <Layers className="h-3 w-3" />
                    <span>Featured</span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/60 leading-relaxed mt-2 flex-grow min-h-[72px]">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-foreground/5 border border-border text-[10px] text-foreground/70 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/60 hover:text-foreground transition-colors"
                  >
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
