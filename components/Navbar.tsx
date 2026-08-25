"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { Sun, Moon, Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Tentang", href: "#about" },
    { name: "Keahlian", href: "#skills" },
    { name: "Proyek", href: "#projects" },
    { name: "Kontak", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: (target as HTMLElement).offsetTop - 85,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 pb-2">
      <nav
        className={`max-w-6xl mx-auto px-4 sm:px-6 py-2.5 rounded-xl border-2 border-black bg-card shadow-[4px_4px_0px_0px_#000000] transition-all duration-200 flex items-center justify-between ${
          scrolled ? "bg-card/95 backdrop-blur-sm" : "bg-card"
        }`}
      >
        {/* Logo Branding */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 border-black bg-neo-yellow text-black font-extrabold text-base tracking-tight shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000000] transition-all select-none"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-neo-green border border-black animate-pulse" />
          <span className="font-black text-black">NaufalHanif</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all select-none ${
                      isActive
                        ? "bg-neo-blue text-black border-2 border-black shadow-[2px_2px_0px_0px_#000000] -rotate-1"
                        : "text-foreground hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white border-2 border-transparent"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="h-6 w-[2px] bg-black dark:bg-zinc-700" />

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="neo-btn-sm p-2 rounded-lg bg-neo-green text-black flex items-center justify-center"
            aria-label="Toggle Theme"
            title="Ganti Tema"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 stroke-[2.5]" />
            ) : (
              <Moon className="h-4 w-4 stroke-[2.5]" />
            )}
          </button>
        </div>

        {/* Mobile Action Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="neo-btn-sm p-2 rounded-lg bg-neo-green text-black flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4 stroke-[2.5]" /> : <Moon className="h-4 w-4 stroke-[2.5]" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="neo-btn-sm p-2 rounded-lg bg-neo-yellow text-black flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5 stroke-[2.5]" /> : <Menu className="h-5 w-5 stroke-[2.5]" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto p-4 rounded-xl border-2 border-black bg-card shadow-[5px_5px_0px_0px_#000000] animate-fade-in-up">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-bold border-2 border-black transition-all ${
                      isActive
                        ? "bg-neo-blue text-black shadow-[2px_2px_0px_0px_#000000]"
                        : "bg-background text-foreground hover:bg-neo-yellow hover:text-black"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

