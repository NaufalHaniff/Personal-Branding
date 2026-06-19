"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple verification
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Semua bidang formulir wajib diisi!");
      setStatus("error");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMsg("Format alamat email Anda tidak valid!");
      setStatus("error");
      return;
    }

    setErrorMsg("");
    setStatus("loading");

    // Simulate API request delay
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-secondary/5 glow-orb" />
      
      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 mb-16 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-card/60 text-xs font-semibold text-primary">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>HUBUNGI SAYA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Mari Kolaborasi Bersama
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mt-2" />
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start text-left">
          {/* Info Side (Col 2) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-foreground">
              Ada ide proyek menarik atau ingin berdiskusi?
            </h3>
            
            <p className="text-foreground/70 leading-relaxed">
              Saya selalu terbuka untuk berdiskusi tentang pengembangan aplikasi web, rancangan arsitektur, peluang kolaborasi penuh waktu, maupun sekadar menyapa dan minum kopi digital.
            </p>

            {/* Direct Cards */}
            <div className="flex flex-col gap-4 mt-4">
              <a
                href="mailto:hellonaufalhanif@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card/30 hover:bg-card hover:border-primary/30 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-wider">Kirim Email</h4>
                  <p className="text-sm font-semibold text-foreground mt-0.5">hellonaufalhanif@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/30">
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-wider">Lokasi</h4>
                  <p className="text-sm font-semibold text-foreground mt-0.5">Tangerang Selatan, Banten</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side (Col 3) */}
          <div className="lg:col-span-3 border border-border bg-card/40 rounded-2xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden">
            {status === "success" ? (
              /* Success Panel */
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4 animate-fade-in-up">
                <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-500 animate-bounce">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Pesan Berhasil Terkirim!</h3>
                <p className="max-w-xs text-sm text-foreground/60 leading-relaxed">
                  Terima kasih sudah menghubungi. Saya akan membaca pesan Anda dan membalasnya sesegera mungkin.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-5 py-2.5 rounded-xl border border-border bg-card text-xs font-semibold hover:border-foreground/20 transition-colors"
                >
                  Kirim Pesan Baru
                </button>
              </div>
            ) : (
              /* Form Box */
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                {/* Error Banner */}
                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 text-red-500 text-xs font-medium border border-red-500/20">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-foreground/75 tracking-wide">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                      disabled={status === "loading"}
                      className="px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground text-sm placeholder:text-foreground/30 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all duration-300 disabled:opacity-50"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-foreground/75 tracking-wide">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                      disabled={status === "loading"}
                      className="px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground text-sm placeholder:text-foreground/30 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all duration-300 disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-foreground/75 tracking-wide">
                    Pesan Anda
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan detail penawaran proyek atau pertanyaan Anda di sini..."
                    disabled={status === "loading"}
                    className="px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground text-sm placeholder:text-foreground/30 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all duration-300 resize-none disabled:opacity-50"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-white font-medium px-6 hover:bg-primary/95 transition-all duration-300 shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-75 disabled:cursor-not-allowed select-none btn-glow"
                >
                  {status === "loading" ? (
                    <>
                      <div className="h-4 w-4 rounded-full border-2 border-white/35 border-t-white animate-spin" />
                      <span>Mengirim Pesan...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      <span>Kirim Pesan</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
