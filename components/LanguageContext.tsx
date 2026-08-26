"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "id" | "en";

export interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  categoryKey: "all" | "b2b" | "thesis" | "inventory";
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  image?: string;
  images?: string[];
  isFeatured?: boolean;
  accentColor: string;
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    statusBadge: string;
    titlePrefix: string;
    words: string[];
    bioGreeting: string;
    bioName: string;
    bioBody: string;
    viewProjects: string;
    contactMe: string;
    badge1: string;
    badge2: string;
    badge3: string;
  };
  about: {
    tag: string;
    title: string;
    headline: string;
    p1Name: string;
    p1Edu: string;
    p1Body: string;
    p2: string;
    stat1Val: string;
    stat1Label: string;
    stat2Val: string;
    stat2Label: string;
    stat3Val: string;
    stat3Label: string;
    terminalRole: string;
    terminalJson: {
      nameKey: string;
      nameVal: string;
      degreeKey: string;
      degreeVal: string;
      universityKey: string;
      universityVal: string;
      roleKey: string;
      roleVal: string;
      coreStackKey: string;
      aiToolingKey: string;
      locationKey: string;
      locationVal: string;
    };
    experienceTitle: string;
    experiences: {
      role: string;
      company: string;
      period: string;
      color: string;
      description: string[];
    }[];
  };
  skills: {
    tag: string;
    title: string;
    backendTitle: string;
    frontendTitle: string;
    aiTitle: string;
    toolsTitle: string;
    categoryNames: {
      Framework: string;
      Language: string;
      Database: string;
      Styling: string;
      AITool: string;
      VersionControl: string;
      IDE: string;
      Design: string;
    };
  };
  projects: {
    tag: string;
    title: string;
    tabs: {
      all: string;
      b2b: string;
      thesis: string;
      inventory: string;
    };
    liveDemo: string;
    github: string;
    featured: string;
    repoWeb: string;
    viewImagesText: string;
    zoomImageText: string;
    clickToViewGallery: string;
    clickToZoom: string;
    closeModal: string;
    prevImage: string;
    nextImage: string;
    items: ProjectItem[];
  };
  contact: {
    tag: string;
    title: string;
    cardHeadline: string;
    cardDesc: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    locationVal: string;
    chatWaBtn: string;
    sendDirectEmailBtn: string;
    sendEmailAction: string;
    openWaAction: string;
    openWorkType: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabelInput: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    sendingBtn: string;
    successTitle: string;
    successDesc: string;
    sendAnother: string;
    errRequired: string;
    errEmail: string;
  };
  footer: {
    allRightsReserved: string;
    subtext: string;
    backToTop: string;
  };
}

export const dictionaries: Record<Language, Translations> = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      contact: "Kontak",
    },
    hero: {
      statusBadge: "Tersedia untuk Peluang & Proyek Baru",
      titlePrefix: "Rekayasa Platform Web",
      words: ["B2B & B2C Skala Besar", "Performa Tinggi & Andal", "Arsitektur Skalabel", "Sistem Enterprise", "Akselerasi AI Modern"],
      bioGreeting: "",
      bioName: "Naufal Hanif Fauzi",
      bioBody:
        "Full-Stack Web Developer dengan spesialisasi pengembangan platform web berskala besar, sistem e-commerce B2B/B2C multi-seller, dan arsitektur database performa tinggi. Menggabungkan ekosistem modern Laravel, MySQL, Next.js, dan akselerasi modern AI tooling untuk menghasilkan solusi digital yang andal dan efisien.",
      viewProjects: "Lihat Portofolio Proyek",
      contactMe: "Hubungi Saya",
      badge1: "⚡ Laravel & Next.js",
      badge2: "🤖 AI-Assisted (Copilot, Claude, Antigravity)",
      badge3: "📍 Tangerang Selatan",
    },
    about: {
      tag: "01 / TENTANG DIRI SAYA",
      title: "Perjalanan Profesional & Latar Belakang",
      headline: "Merancang arsitektur backend yang tangguh dan menghadirkan antarmuka digital yang presisi serta skalabel.",
      p1Name: "Naufal Hanif Fauzi",
      p1Edu: "Universitas Pamulang (2021 – 2025)",
      p1Body:
        "Sebagai Full-Stack Web Developer dengan rekam jejak lebih dari 4 tahun dalam pengembangan perangkat lunak web dan pengalaman profesional di industri, saya berfokus pada perancangan sistem web end-to-end. Spesialisasi saya mencakup ekosistem Laravel, perancangan basis data relasional MySQL performa tinggi, serta pengembangan antarmuka modern yang responsif dan berpusat pada pengguna untuk platform berskala B2B dan B2C.",
      p2: "Saya menerapkan metodologi rekayasa modern dengan mengintegrasikan AI Developer Tooling terkini seperti GitHub Copilot, Claude Code, dan Antigravity. Pendekatan ini menjadi akselerator dalam mempercepat siklus riset teknis, memastikan kualitas dan keamanan kode, serta mengoptimalkan arsitektur sistem secara menyeluruh demi menghasilkan solusi digital yang andal dan teruji.",
      stat1Val: "4+ Tahun",
      stat1Label: "Web Dev Background",
      stat2Val: "3 Proyek",
      stat2Label: "Produksi & Skripsi",
      stat3Val: "S1 Informatika",
      stat3Label: "Universitas Pamulang",
      terminalRole: "Full-Stack Web Developer",
      terminalJson: {
        nameKey: "nama",
        nameVal: "Naufal Hanif Fauzi",
        degreeKey: "gelar",
        degreeVal: "S1 Teknik Informatika (S.Kom)",
        universityKey: "kampus",
        universityVal: "Universitas Pamulang",
        roleKey: "peran",
        roleVal: "Full-Stack Web Developer",
        coreStackKey: "coreStack",
        aiToolingKey: "aiTooling",
        locationKey: "lokasi",
        locationVal: "Tangerang Selatan, Banten",
      },
      experienceTitle: "PENGALAMAN KERJA PROFESIONAL",
      experiences: [
        {
          role: "Full-Stack Developer",
          company: "PT Oka Iki Indonesia",
          period: "Okt 2025 - Sekarang",
          color: "bg-neo-yellow",
          description: [
            "Fokus pada ekosistem Laravel dalam pengembangan end-to-end platform Business-to-Business (B2B) multi-seller berskala besar.",
            "Merancang antarmuka responsif untuk desktop dan mobile dengan fitur dynamic multi-language (i18n) dan modul affiliate marketing.",
            "Mengembangkan fitur negosiasi & Request for Quotation (RFQ) pada panel seller untuk transaksi skala enterprise.",
            "Membangun modul Admin Dashboard dan Finance Management untuk audit serta tracking arus pendapatan platform.",
          ],
        },
        {
          role: "Full-Stack Developer (Internship / Kerja Praktik)",
          company: "PT Dessert Empire Indonesia",
          period: "Mei 2024 - Jul 2024",
          color: "bg-neo-blue",
          description: [
            "Membangun sistem monitoring inventaris produk es krim berbasis web untuk pelacakan pergerakan stok secara real-time.",
            "Mengembangkan fungsi frontend dan backend menggunakan Native PHP dan database MySQL secara terstruktur.",
            "Menyusun dokumentasi teknis arsitektur sistem dan memberikan panduan operasional sistem.",
          ],
        },
        {
          role: "Teaching Assistant (Internship)",
          company: "PT Racer Robotic Indonesia",
          period: "Nov 2018 - Feb 2019",
          color: "bg-neo-green",
          description: [
            "Menyampaikan modul edukasi dasar robotika & perakitan, serta menjadi panitia acara edukasi Roboland dan kompetisi IYRC Indonesia.",
          ],
        },
      ],
    },
    skills: {
      tag: "02 / KEAHLIAN & TEKNOLOGI",
      title: "Tech Stack & AI Tooling",
      backendTitle: "Backend & Database",
      frontendTitle: "Frontend & Styling",
      aiTitle: "AI Developer Tooling",
      toolsTitle: "Workflow & Tools",
      categoryNames: {
        Framework: "Framework",
        Language: "Bahasa",
        Database: "Database",
        Styling: "Styling",
        AITool: "AI Tool",
        VersionControl: "Version Control",
        IDE: "IDE",
        Design: "Desain",
      },
    },
    projects: {
      tag: "03 / PORTOFOLIO PROYEK",
      title: "Karya & Proyek Terpilih",
      tabs: {
        all: "Semua",
        b2b: "B2B Platform",
        thesis: "Skripsi & Riset",
        inventory: "Sistem Inventaris",
      },
      liveDemo: "Live Demo / Web",
      github: "GitHub",
      featured: "Featured Project",
      repoWeb: "Sistem Web / Repository",
      viewImagesText: "Lihat {count} Gambar",
      zoomImageText: "Perbesar Gambar",
      clickToViewGallery: "Klik untuk melihat galeri screenshot",
      clickToZoom: "Klik untuk memperbesar",
      closeModal: "Tutup (Esc)",
      prevImage: "Gambar Sebelumnya (Arrow Left)",
      nextImage: "Gambar Selanjutnya (Arrow Right)",
      items: [
        {
          title: "B2B Multi-Seller Platform (SSBO)",
          subtitle: "PT Oka Iki Indonesia",
          description:
            "Platform e-commerce grosir B2B multi-seller terintegrasi dengan fitur Request for Quotation (RFQ), negosiasi harga real-time langsung ke enterprise buyer, sistem checkout responsif, multi-bahasa dinamis (i18n), serta modul Affiliate & Finance Management.",
          categoryKey: "b2b",
          tags: ["Laravel 12", "Livewire", "MySQL", "Tailwind CSS", "i18n", "PHP"],
          demoUrl: "https://ssbo.co.id",
          githubUrl: "https://github.com/NaufalHaniff",
          image: "/projects/SSBO B2B Home.png",
          images: [
            "/projects/SSBO B2B Home.png",
            "/projects/SSBO B2B Product.png",
            "/projects/SSBO B2B Dashboard.png",
          ],
          isFeatured: true,
          accentColor: "bg-neo-yellow",
        },
        {
          title: "SPK Pemilihan Kendaraan Listrik (Metode MOORA)",
          subtitle: "Undergraduate Thesis Project — Universitas Pamulang",
          description:
            "Sistem Pendukung Keputusan (SPK) berbasis web untuk menentukan rekomendasi kendaraan listrik terbaik secara objektif. Menggunakan metode Multi-Objective Optimization on the basis of Ratio Analysis (MOORA) dengan kalkulasi multi-kriteria terbobot.",
          categoryKey: "thesis",
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
          categoryKey: "inventory",
          tags: ["Native PHP", "MySQL", "Inventory System", "Bootstrap", "Data Handling"],
          demoUrl: "https://github.com/NaufalHaniff",
          githubUrl: "https://github.com/NaufalHaniff",
          isFeatured: false,
          accentColor: "bg-neo-green",
        },
      ],
    },
    contact: {
      tag: "04 / HUBUNGI SAYA",
      title: "Mari Terhubung & Berkolaborasi",
      cardHeadline: "Punya penawaran proyek atau ingin berdiskusi?",
      cardDesc:
        "Saya selalu terbuka untuk mendiskusikan peluang kerja penuh waktu (Full-time), kontrak, arsitektur sistem web skala B2B/B2C, integrasi AI workflow, maupun sekadar bertukar sapa.",
      emailLabel: "Email Langsung",
      phoneLabel: "WhatsApp / Telepon",
      locationLabel: "Domisili",
      locationVal: "Tangerang Selatan, Banten",
      chatWaBtn: "Chat via WhatsApp",
      sendDirectEmailBtn: "Kirim Email Langsung",
      sendEmailAction: "Kirim Pesan Email",
      openWaAction: "Buka WhatsApp",
      openWorkType: "Open Remote & On-site",
      nameLabel: "NAMA LENGKAP *",
      namePlaceholder: "Masukkan nama Anda",
      emailLabelInput: "ALAMAT EMAIL *",
      emailPlaceholder: "nama@email.com",
      messageLabel: "DETAIL PESAN / PENAWARAN *",
      messagePlaceholder: "Ceritakan detail penawaran proyek atau pertanyaan Anda...",
      sendBtn: "Kirim Pesan Sekarang",
      sendingBtn: "Mengirim Pesan...",
      successTitle: "Pesan Berhasil Terkirim!",
      successDesc:
        "Terima kasih sudah menghubungi saya. Saya akan segera meninjau pesan Anda dan membalasnya secepat mungkin.",
      sendAnother: "Kirim Pesan Lainnya",
      errRequired: "Semua bidang formulir wajib diisi!",
      errEmail: "Format alamat email Anda tidak valid!",
    },
    footer: {
      allRightsReserved: "Semua Hak Cipta Dilindungi.",
      subtext: "Dibuat dengan Next.js & Tailwind CSS • Desain Neubrutalism UI",
      backToTop: "Kembali ke atas",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      statusBadge: "Available for Opportunities & New Projects",
      titlePrefix: "Architecting Web Platforms",
      words: ["Large-Scale B2B & B2C", "High-Performance Systems", "Scalable Architecture", "Enterprise Solutions", "Modern AI Workflows"],
      bioGreeting: "",
      bioName: "Naufal Hanif Fauzi",
      bioBody:
        "Full-Stack Web Developer specializing in large-scale web platforms, multi-seller B2B/B2C systems, and high-performance database architectures. Combining Laravel, MySQL, Next.js, and AI-accelerated developer workflows to deliver robust, scalable, and high-impact digital solutions.",
      viewProjects: "View Portfolio Projects",
      contactMe: "Contact Me",
      badge1: "⚡ Laravel & Next.js",
      badge2: "🤖 AI-Assisted (Copilot, Claude, Antigravity)",
      badge3: "📍 South Tangerang, Indonesia",
    },
    about: {
      tag: "01 / ABOUT ME",
      title: "Professional Journey & Background",
      headline: "Architecting resilient backend systems and delivering precise, scalable digital interfaces.",
      p1Name: "Naufal Hanif Fauzi",
      p1Edu: "Universitas Pamulang (2021 – 2025)",
      p1Body:
        "As a Full-Stack Web Developer with over 4 years of software development background and hands-on industry experience, I specialize in engineering end-to-end web architectures. My core expertise centers on the Laravel ecosystem, high-performance MySQL relational database modeling, and building responsive, user-centric interfaces tailored for enterprise B2B and consumer B2C platforms.",
      p2: "I actively leverage modern engineering workflows by integrating advanced AI Developer Tooling including GitHub Copilot, Claude Code, and Antigravity. This integration serves as a powerful force multiplier—accelerating technical research cycles, enforcing rigorous code quality and security standards, and optimizing overall system architecture to deliver robust, production-ready solutions.",
      stat1Val: "4+ Years",
      stat1Label: "Web Dev Background",
      stat2Val: "3 Projects",
      stat2Label: "Production & Thesis",
      stat3Val: "B.Sc. Informatics",
      stat3Label: "Universitas Pamulang",
      terminalRole: "Full-Stack Web Developer",
      terminalJson: {
        nameKey: "name",
        nameVal: "Naufal Hanif Fauzi",
        degreeKey: "degree",
        degreeVal: "Bachelor of Informatics Engineering (B.Sc / S.Kom)",
        universityKey: "university",
        universityVal: "Pamulang University",
        roleKey: "role",
        roleVal: "Full-Stack Web Developer",
        coreStackKey: "coreStack",
        aiToolingKey: "aiTooling",
        locationKey: "location",
        locationVal: "South Tangerang, Banten, Indonesia",
      },
      experienceTitle: "PROFESSIONAL WORK EXPERIENCE",
      experiences: [
        {
          role: "Full-Stack Developer",
          company: "PT Oka Iki Indonesia",
          period: "Oct 2025 - Present",
          color: "bg-neo-yellow",
          description: [
            "Served as a Full-Stack Developer focusing on the Laravel ecosystem in end-to-end development of a high-scale multi-seller B2B platform.",
            "Designed and implemented responsive customer interfaces with dynamic multi-language (i18n) localization and affiliate marketing modules.",
            "Developed robust negotiation and Request for Quotation (RFQ) systems within seller panels for large-scale enterprise transactions.",
            "Built comprehensive Admin Dashboard and Finance Management modules to track, audit, and report platform revenue streams.",
          ],
        },
        {
          role: "Full-Stack Developer (Internship / Practical Work)",
          company: "PT Dessert Empire Indonesia",
          period: "May 2024 - Jul 2024",
          color: "bg-neo-blue",
          description: [
            "Designed and built a dedicated web-based monitoring application to track ice cream product data and real-time stock movements.",
            "Developed end-to-end frontend and backend functionality utilizing Native PHP and structured MySQL database.",
            "Authored technical documentation covering system architecture and conducted operational guidance sessions.",
          ],
        },
        {
          role: "Teaching Assistant (Internship)",
          company: "PT Racer Robotic Indonesia",
          period: "Nov 2018 - Feb 2019",
          color: "bg-neo-green",
          description: [
            "Delivered basic robotics and assembly educational modules, and served as event committee for Roboland and IYRC Indonesia robotics competition.",
          ],
        },
      ],
    },
    skills: {
      tag: "02 / SKILLS & TECHNOLOGIES",
      title: "Tech Stack & AI Tooling",
      backendTitle: "Backend & Database",
      frontendTitle: "Frontend & Styling",
      aiTitle: "AI Developer Tooling",
      toolsTitle: "Workflow & Tools",
      categoryNames: {
        Framework: "Framework",
        Language: "Language",
        Database: "Database",
        Styling: "Styling",
        AITool: "AI Tool",
        VersionControl: "Version Control",
        IDE: "IDE",
        Design: "Design",
      },
    },
    projects: {
      tag: "03 / SELECTED PROJECTS",
      title: "Featured Works & Systems",
      tabs: {
        all: "All",
        b2b: "B2B Platform",
        thesis: "Thesis & Research",
        inventory: "Inventory System",
      },
      liveDemo: "Live Demo / Web",
      github: "GitHub",
      featured: "Featured Project",
      repoWeb: "Web System / Repository",
      viewImagesText: "View {count} Images",
      zoomImageText: "Zoom Image",
      clickToViewGallery: "Click to view screenshot gallery",
      clickToZoom: "Click to zoom image",
      closeModal: "Close (Esc)",
      prevImage: "Previous Image (Arrow Left)",
      nextImage: "Next Image (Arrow Right)",
      items: [
        {
          title: "B2B Multi-Seller Platform (SSBO)",
          subtitle: "PT Oka Iki Indonesia",
          description:
            "Large-scale multi-seller B2B e-commerce platform integrated with Request for Quotation (RFQ), real-time pricing negotiation for enterprise buyers, dynamic multi-language localization (i18n), and Affiliate & Finance Management.",
          categoryKey: "b2b",
          tags: ["Laravel 12", "Livewire", "MySQL", "Tailwind CSS", "i18n", "PHP"],
          demoUrl: "https://ssbo.co.id",
          githubUrl: "https://github.com/NaufalHaniff",
          image: "/projects/SSBO B2B Home.png",
          images: [
            "/projects/SSBO B2B Home.png",
            "/projects/SSBO B2B Product.png",
            "/projects/SSBO B2B Dashboard.png",
          ],
          isFeatured: true,
          accentColor: "bg-neo-yellow",
        },
        {
          title: "Electric Vehicle Decision Support System (MOORA)",
          subtitle: "Undergraduate Thesis Project — Universitas Pamulang",
          description:
            "Web-based Decision Support System (DSS) to determine optimal electric vehicle selections objectively using the Multi-Objective Optimization on the basis of Ratio Analysis (MOORA) method with weighted criteria analysis.",
          categoryKey: "thesis",
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
            "Internal web application for real-time ice cream product inventory and stock movement tracking, ensuring structured data handling and comprehensive architectural documentation.",
          categoryKey: "inventory",
          tags: ["Native PHP", "MySQL", "Inventory System", "Bootstrap", "Data Handling"],
          demoUrl: "https://github.com/NaufalHaniff",
          githubUrl: "https://github.com/NaufalHaniff",
          isFeatured: false,
          accentColor: "bg-neo-green",
        },
      ],
    },
    contact: {
      tag: "04 / CONTACT ME",
      title: "Let's Connect & Collaborate",
      cardHeadline: "Have a project idea or want to discuss opportunities?",
      cardDesc:
        "I am always open to discussing full-time roles, freelance contracts, B2B/B2C web architecture, AI developer workflows, or simply having a virtual coffee.",
      emailLabel: "Direct Email",
      phoneLabel: "WhatsApp / Phone",
      locationLabel: "Location",
      locationVal: "South Tangerang, Banten, Indonesia",
      chatWaBtn: "Chat via WhatsApp",
      sendDirectEmailBtn: "Send Direct Email",
      sendEmailAction: "Send Email Message",
      openWaAction: "Open WhatsApp",
      openWorkType: "Open for Remote & On-site",
      nameLabel: "FULL NAME *",
      namePlaceholder: "Enter your name",
      emailLabelInput: "EMAIL ADDRESS *",
      emailPlaceholder: "name@example.com",
      messageLabel: "MESSAGE / PROJECT DETAILS *",
      messagePlaceholder: "Tell me about your project opportunity or questions...",
      sendBtn: "Send Message Now",
      sendingBtn: "Sending Message...",
      successTitle: "Message Sent Successfully!",
      successDesc:
        "Thank you for reaching out! I will review your message and reply as soon as possible.",
      sendAnother: "Send Another Message",
      errRequired: "All form fields are required!",
      errEmail: "Your email format is invalid!",
    },
    footer: {
      allRightsReserved: "All Rights Reserved.",
      subtext: "Built with Next.js & Tailwind CSS • Crafted with Neubrutalism UI",
      backToTop: "Back to top",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio_lang") as Language | null;
    if (savedLang === "id" || savedLang === "en") {
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio_lang", lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === "id" ? "en" : "id";
    setLanguage(nextLang);
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t: dictionaries[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
