"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();

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

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg(t.contact.errRequired);
      setStatus("error");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMsg(t.contact.errEmail);
      setStatus("error");
      return;
    }

    setErrorMsg("");
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 mb-16 text-center">
          <div className="neo-badge bg-neo-red text-black px-3.5 py-1 rounded-md text-xs inline-flex items-center gap-1.5 -rotate-1">
            <MessageSquare className="h-3.5 w-3.5 stroke-[3]" />
            <span>{t.contact.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mt-2">
            {t.contact.title}
          </h2>
          <div className="h-2 w-24 bg-neo-green border-2 border-black shadow-[2px_2px_0px_0px_#000] mt-1" />
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          {/* Info Side (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="neo-box p-6 rounded-2xl bg-card">
              <h3 className="text-xl sm:text-2xl font-black text-foreground mb-3 leading-snug">
                {t.contact.cardHeadline}
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                {t.contact.cardDesc}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="flex flex-col gap-3.5">
              {/* Email */}
              <a
                href="mailto:hellonaufalhanif@gmail.com"
                className="neo-box p-4 rounded-xl bg-card flex items-center gap-4 hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
              >
                <div className="p-3 rounded-lg border-2 border-black bg-neo-yellow text-black shadow-[2px_2px_0px_0px_#000]">
                  <Mail className="h-5 w-5 stroke-[2.5]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase">{t.contact.emailLabel}</span>
                  <p className="text-xs sm:text-sm font-black text-foreground truncate mt-0.5">
                    hellonaufalhanif@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone / WA */}
              <a
                href="https://wa.me/6281288330203"
                target="_blank"
                rel="noreferrer"
                className="neo-box p-4 rounded-xl bg-card flex items-center gap-4 hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
              >
                <div className="p-3 rounded-lg border-2 border-black bg-neo-green text-black shadow-[2px_2px_0px_0px_#000]">
                  <Phone className="h-5 w-5 stroke-[2.5]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase">{t.contact.phoneLabel}</span>
                  <p className="text-xs sm:text-sm font-black text-foreground truncate mt-0.5">
                    +62 812-8833-0203
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="neo-box p-4 rounded-xl bg-card flex items-center gap-4">
                <div className="p-3 rounded-lg border-2 border-black bg-neo-blue text-black shadow-[2px_2px_0px_0px_#000]">
                  <MapPin className="h-5 w-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase">{t.contact.locationLabel}</span>
                  <p className="text-xs sm:text-sm font-black text-foreground mt-0.5">
                    {t.contact.locationVal}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side (Col 7) */}
          <div className="lg:col-span-7 neo-box-lg rounded-2xl p-6 sm:p-8 bg-card relative">
            {status === "success" ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4 animate-fade-in-up">
                <div className="neo-box p-4 rounded-full bg-neo-green text-black animate-bounce">
                  <CheckCircle2 className="h-10 w-10 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-black text-foreground">{t.contact.successTitle}</h3>
                <p className="max-w-sm text-sm text-foreground/80 font-medium leading-relaxed">
                  {t.contact.successDesc}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="neo-btn bg-neo-yellow text-black px-6 py-2.5 rounded-xl text-xs font-black mt-4"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                {status === "error" && (
                  <div className="neo-box p-3 rounded-xl bg-neo-red text-black text-xs font-black inline-flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 stroke-[3]" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-black text-foreground font-mono">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.namePlaceholder}
                      disabled={status === "loading"}
                      className="neo-input p-3 rounded-xl bg-background text-foreground text-sm placeholder:text-foreground/40 font-medium"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-black text-foreground font-mono">
                      {t.contact.emailLabelInput}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.emailPlaceholder}
                      disabled={status === "loading"}
                      className="neo-input p-3 rounded-xl bg-background text-foreground text-sm placeholder:text-foreground/40 font-medium"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-black text-foreground font-mono">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    disabled={status === "loading"}
                    className="neo-input p-3 rounded-xl bg-background text-foreground text-sm placeholder:text-foreground/40 font-medium resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="neo-btn bg-neo-yellow text-black h-12 rounded-xl text-sm font-black inline-flex items-center justify-center gap-2 mt-2 select-none"
                >
                  {status === "loading" ? (
                    <>
                      <div className="h-4 w-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                      <span>{t.contact.sendingBtn}</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 stroke-[2.5]" />
                      <span>{t.contact.sendBtn}</span>
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


