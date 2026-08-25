import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import { LanguageProvider } from "@/components/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naufal Hanif Fauzi | Full-Stack Developer",
  description: "Portofolio resmi Full-Stack Developer oleh Naufal Hanif Fauzi — Spesialis ekosistem Laravel, Next.js, MySQL, Tailwind CSS, dan AI-assisted development.",
  keywords: [
    "Naufal Hanif Fauzi",
    "Naufal Hanif",
    "Full-Stack Developer",
    "Laravel Developer",
    "Next.js Developer",
    "Universitas Pamulang",
    "Tailwind CSS",
    "Neubrutalism Portfolio",
  ],
  authors: [{ name: "Naufal Hanif Fauzi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
