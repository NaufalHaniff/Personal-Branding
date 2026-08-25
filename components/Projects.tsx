"use client";

import React, { useState } from "react";
import { FolderGit2, ExternalLink, Sparkles, Layers, ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  category: "Semua" | "B2B Platform" | "Skripsi & Riset" | "Sistem Inventaris";
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  image?: string;
  isFeatured?: boolean;
  accentColor: string;
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("Semua");

  const tabs = ["Semua", "B2B Platform", "Skripsi & Riset", "Sistem Inventaris"];

  const projects: Project[] = [
    {
      title: "B2B Multi-Seller Platform (SSBO)",
      subtitle: "PT Oka Iki Indonesia",
      description:
        "Platform e-commerce grosir B2B multi-seller terintegrasi dengan fitur Request for Quotation (RFQ), negosiasi harga real-time langsung ke enterprise buyer, sistem checkout responsif, multi-bahasa dinamis (i18n), serta modul Affiliate & Finance Management.",
      category: "B2B Platform",
      tags: ["Laravel 12", "Livewire", "MySQL", "Tailwind CSS", "i18n", "PHP"],
      demoUrl: "https://ssbo.co.id",
      githubUrl: "https://github.com/NaufalHaniff",
      image: "/projects/SSBO Marketplace B2B.png",
      isFeatured: true,
      accentColor: "bg-neo-yellow",
    },
    {
      title: "SPK Pemilihan Kendaraan Listrik (Metode MOORA)",
      subtitle: "Undergraduate Thesis Project — Universitas Pamulang",
      description:
        "Sistem Pendukung Keputusan (SPK) berbasis web untuk menentukan rekomendasi kendaraan listrik terbaik secara objektif. Menggunakan metode Multi-Objective Optimization on the basis of Ratio Analysis (MOORA) dengan kalkulasi multi-kriteria terbobot.",
      category: "Skripsi & Riset",
      tags: ["PHP / Laravel", "MySQL", "MOORA Algorithm", "Decision Support System", "Tailwind CSS"],
      demoUrl: "https://github.com/NaufalHaniff",
      githubUrl: "https://github.com/NaufalHaniff",
      isFeatured: false,
      accentColor: "bg-neo-blue",
    },
    {
      title: "Ice Cream Inventory Monitoring System",
      subtitle: "PT Dessert Empire Indonesia",
      description:
        "Aplikasi web monitoring inventaris internal untuk pelacakan pergerakan stok produk es krim secara real-time. Memastikan manajemen data pergudangan yang efisien dan akurat dengan dokumentasi arsitektur sistem lengkap.",
      category: "Sistem Inventaris",
      tags: ["Native PHP", "MySQL", "Inventory System", "Bootstrap", "Data Handling"],
      demoUrl: "https://github.com/NaufalHaniff",
      githubUrl: "https://github.com/NaufalHaniff",
      isFeatured: false,
      accentColor: "bg-neo-green",
    },
  ];

  const filteredProjects =
    activeTab === "Semua"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-card border-b-2 border-black">
      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 mb-12 text-center">
          <div className="neo-badge bg-neo-yellow text-black px-3.5 py-1 rounded-md text-xs inline-flex items-center gap-1.5 -rotate-1">
            <FolderGit2 className="h-3.5 w-3.5 stroke-[3]" />
            <span>03 / PORTOFOLIO PROYEK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mt-2">
            Karya &amp; Proyek Terpilih
          </h2>
          <div className="h-2 w-24 bg-neo-blue border-2 border-black shadow-[2px_2px_0px_0px_#000] mt-1" />
        </div>

        {/* Tab Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12 select-none">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === tab
                  ? "neo-box bg-neo-yellow text-black -rotate-1"
                  : "border-2 border-black bg-background text-foreground hover:bg-black/5 dark:hover:bg-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredProjects.map((project, index) => (
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
                    {project.category}
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
                    <span className="font-mono font-bold text-xs text-foreground/60">Sistem Web / Repository</span>
                  </div>
                )}

                {/* Card Body */}
                <div className="p-6">
                  {project.isFeatured && (
                    <div className="neo-badge bg-neo-green text-black px-2.5 py-0.5 rounded text-[10px] inline-flex items-center gap-1 mb-3">
                      <Sparkles className="h-3 w-3 stroke-[3]" />
                      <span>Featured Project</span>
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
                  <span>Live Demo / Web</span>
                  <ArrowUpRight className="h-3.5 w-3.5 stroke-[3]" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="neo-btn-sm bg-background text-foreground px-3.5 py-1.5 rounded-lg text-xs font-black inline-flex items-center gap-1 justify-center"
                >
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

