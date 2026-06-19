"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { Sun, Moon, Menu, X, Sparkles } from "lucide-react";

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
      // Check scroll depth for navbar style change
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy logic
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 120; // offset

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
        top: (target as HTMLElement).offsetTop - 80,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 glassmorphism mx-4 my-3 rounded-2xl shadow-lg border border-border"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="flex items-center gap-2 font-bold text-xl tracking-tight"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-extrabold">
            Naufal Hanif
          </span>
          <span className="text-foreground/60 text-sm font-mono">.dev</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary relative py-1 ${
                    activeSection === item.href.slice(1)
                      ? "text-primary"
                      : "text-foreground/70"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-border" />

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border bg-card/50 text-foreground/80 hover:text-primary hover:border-primary transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:rotate-90" />
            ) : (
              <Moon className="h-4 w-4 rotate-0 scale-100 transition-transform dark:rotate-90" />
            )}
          </button>
        </div>

        {/* Mobile Navbar Buttons */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border bg-card/50 text-foreground/85 hover:text-primary transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg border border-border text-foreground hover:bg-card/50 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden absolute top-[calc(100%+8px)] left-4 right-4 rounded-xl border border-border glassmorphism transition-all duration-350 transform origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <ul className="p-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.href.slice(1)
                    ? "bg-primary/10 text-primary border-l-2 border-primary"
                    : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
