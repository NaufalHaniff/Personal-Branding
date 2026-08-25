"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLanguage, ProjectItem } from "./LanguageContext";
import { FolderGit2, Sparkles, ArrowUpRight, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  categoryLabel: string;
  repoWebText: string;
  featuredText: string;
  liveDemoText: string;
  githubText: string;
  viewImagesText: string;
  zoomImageText: string;
  clickToViewGallery: string;
  clickToZoom: string;
  closeModalText: string;
  prevImageText: string;
  nextImageText: string;
}

function ProjectCard({
  project,
  categoryLabel,
  repoWebText,
  featuredText,
  liveDemoText,
  githubText,
  viewImagesText,
  zoomImageText,
  clickToViewGallery,
  clickToZoom,
  closeModalText,
  prevImageText,
  nextImageText,
}: ProjectCardProps) {
  const images = project.images && project.images.length > 0 ? project.images : project.image ? [project.image] : [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImgIndex, setModalImgIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard navigation & body scroll lock for modal
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
      if (e.key === "ArrowLeft") {
        setModalImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
      if (e.key === "ArrowRight") {
        setModalImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen, images.length]);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setModalImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setModalImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    setModalImgIndex(idx);
  };

  const openModal = () => {
    if (images.length > 0) {
      setModalImgIndex(0);
      setIsModalOpen(true);
    }
  };

  const formattedViewImages = viewImagesText.replace("{count}", String(images.length));

  return (
    <>
      <div className="neo-box-lg rounded-2xl bg-background flex flex-col justify-between overflow-hidden hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
        {/* Card Window Top Header */}
        <div>
          <div className="flex items-center justify-between px-4 py-3 bg-card border-b-2 border-black select-none">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-neo-red border border-black" />
              <div className="w-3 h-3 rounded-full bg-neo-yellow border border-black" />
              <div className="w-3 h-3 rounded-full bg-neo-green border border-black" />
            </div>
            <span className={`neo-badge ${project.accentColor} text-black px-2 py-0.5 rounded text-[10px] font-mono`}>
              {categoryLabel}
            </span>
          </div>

          {/* Project Image Preview (Initial View: Single Cover Image) */}
          {images.length > 0 ? (
            <div
              onClick={openModal}
              className="relative aspect-video w-full overflow-hidden border-b-2 border-black bg-zinc-100 dark:bg-zinc-800 group select-none cursor-pointer"
              title={images.length > 1 ? clickToViewGallery : clickToZoom}
            >
              <img
                src={images[0]}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Hover Overlay Hint */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <div className="neo-badge bg-neo-yellow text-black px-3 py-1.5 rounded-lg text-xs font-black inline-flex items-center gap-1.5 shadow-[2px_2px_0px_#000]">
                  <Maximize2 className="h-3.5 w-3.5 stroke-[2.5]" />
                  <span>{images.length > 1 ? formattedViewImages : zoomImageText}</span>
                </div>
              </div>

              {/* Multiple images indicator tag */}
              {images.length > 1 && (
                <div className="absolute bottom-2.5 right-2.5 neo-badge bg-black text-white px-2 py-0.5 rounded text-[10px] font-mono font-bold shadow-[1px_1px_0px_#000]">
                  1 / {images.length}
                </div>
              )}
            </div>
          ) : (
            <div className="aspect-video w-full border-b-2 border-black bg-card p-6 flex flex-col justify-center items-center text-center">
              <FolderGit2 className="h-10 w-10 text-foreground/40 mb-2 stroke-[1.5]" />
              <span className="font-mono font-bold text-xs text-foreground/60">{repoWebText}</span>
            </div>
          )}

          {/* Card Body */}
          <div className="p-6">
            {project.isFeatured && (
              <div className="neo-badge bg-neo-green text-black px-2.5 py-0.5 rounded text-[10px] inline-flex items-center gap-1 mb-3">
                <Sparkles className="h-3 w-3 stroke-[3]" />
                <span>{featuredText}</span>
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
            <span>{liveDemoText}</span>
            <ArrowUpRight className="h-3.5 w-3.5 stroke-[3]" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="neo-btn-sm bg-background text-foreground px-3.5 py-1.5 rounded-lg text-xs font-black inline-flex items-center gap-1 justify-center"
          >
            <span>{githubText}</span>
          </a>
        </div>
      </div>

      {/* Full Neubrutalism Lightbox Modal (Rendered to body via createPortal) */}
      {mounted && isModalOpen && images.length > 0 && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="neo-box-lg rounded-2xl bg-card border-2 border-black max-w-4xl w-full overflow-hidden flex flex-col shadow-[8px_8px_0px_0px_#000000] animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Title Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-card border-b-2 border-black select-none">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-neo-red border border-black" />
                <div className="w-3 h-3 rounded-full bg-neo-yellow border border-black" />
                <div className="w-3 h-3 rounded-full bg-neo-green border border-black" />
                <span className="font-mono font-bold text-xs text-foreground/80 ml-2 hidden sm:inline">
                  {project.title}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {images.length > 1 && (
                  <span className="neo-badge bg-neo-yellow text-black px-2.5 py-0.5 rounded text-xs font-mono font-black">
                    {modalImgIndex + 1} / {images.length}
                  </span>
                )}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="neo-btn-sm bg-neo-red text-black p-1.5 rounded-lg flex items-center justify-center"
                  aria-label={closeModalText}
                  title={closeModalText}
                >
                  <X className="h-4 w-4 stroke-[3]" />
                </button>
              </div>
            </div>

            {/* Modal Image Display with Interactive Controls */}
            <div className="relative bg-zinc-950 flex items-center justify-center min-h-[300px] max-h-[72vh] overflow-hidden select-none">
              <img
                src={images[modalImgIndex]}
                alt={`${project.title} screenshot ${modalImgIndex + 1}`}
                className="w-full h-full max-h-[72vh] object-contain"
              />

              {/* Prev / Next Buttons in Modal */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 neo-btn bg-neo-yellow text-black p-2.5 sm:p-3 rounded-xl shadow-[3px_3px_0px_#000] hover:scale-110 active:scale-95 transition-all"
                    aria-label={prevImageText}
                    title={prevImageText}
                  >
                    <ChevronLeft className="h-5 w-5 stroke-[3]" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 neo-btn bg-neo-yellow text-black p-2.5 sm:p-3 rounded-xl shadow-[3px_3px_0px_#000] hover:scale-110 active:scale-95 transition-all"
                    aria-label={nextImageText}
                    title={nextImageText}
                  >
                    <ChevronRight className="h-5 w-5 stroke-[3]" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Bottom Bar with Dot Indicators */}
            {images.length > 1 && (
              <div className="p-3 sm:p-4 bg-card border-t-2 border-black flex items-center justify-center gap-2 select-none">
                {images.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={(e) => handleDotClick(e, dotIdx)}
                    className={`h-2.5 rounded-full transition-all border-2 border-black ${
                      modalImgIndex === dotIdx
                        ? "w-8 bg-neo-yellow shadow-[1px_1px_0px_#000]"
                        : "w-2.5 bg-background hover:bg-neo-yellow/50"
                    }`}
                    aria-label={`Slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

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
            <ProjectCard
              key={project.title}
              project={project}
              categoryLabel={getCategoryLabel(project.categoryKey)}
              repoWebText={t.projects.repoWeb}
              featuredText={t.projects.featured}
              liveDemoText={t.projects.liveDemo}
              githubText={t.projects.github}
              viewImagesText={t.projects.viewImagesText}
              zoomImageText={t.projects.zoomImageText}
              clickToViewGallery={t.projects.clickToViewGallery}
              clickToZoom={t.projects.clickToZoom}
              closeModalText={t.projects.closeModal}
              prevImageText={t.projects.prevImage}
              nextImageText={t.projects.nextImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



