"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { Mail, MapPin, Phone, MessageSquare, ArrowUpRight, Send } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-background">
      <div className="max-w-5xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 mb-12 text-center">
          <div className="neo-badge bg-neo-red text-black px-3.5 py-1 rounded-md text-xs inline-flex items-center gap-1.5 -rotate-1">
            <MessageSquare className="h-3.5 w-3.5 stroke-[3]" />
            <span>{t.contact.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mt-2">
            {t.contact.title}
          </h2>
          <div className="h-2 w-24 bg-neo-green border-2 border-black shadow-[2px_2px_0px_0px_#000] mt-1" />
        </div>

        {/* Main Intro Card */}
        <div className="neo-box-lg p-8 sm:p-10 rounded-2xl bg-card text-center mb-10 max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-4 leading-snug">
            {t.contact.cardHeadline}
          </h3>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-medium max-w-2xl mx-auto mb-8">
            {t.contact.cardDesc}
          </p>

          {/* Quick Instant CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/6281288330203"
              target="_blank"
              rel="noreferrer"
              className="neo-btn bg-neo-green text-black px-6 py-3.5 rounded-xl text-sm font-extrabold inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Phone className="h-4 w-4 stroke-[2.5]" />
              <span>{t.contact.chatWaBtn}</span>
              <ArrowUpRight className="h-4 w-4 stroke-[3]" />
            </a>

            <a
              href="mailto:hellonaufalhanif@gmail.com"
              className="neo-btn bg-neo-yellow text-black px-6 py-3.5 rounded-xl text-sm font-extrabold inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Mail className="h-4 w-4 stroke-[2.5]" />
              <span>{t.contact.sendDirectEmailBtn}</span>
              <ArrowUpRight className="h-4 w-4 stroke-[3]" />
            </a>
          </div>
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
          {/* Email Card */}
          <a
            href="mailto:hellonaufalhanif@gmail.com"
            className="neo-box p-6 rounded-2xl bg-card flex flex-col justify-between hover:translate-x-[2px] hover:translate-y-[2px] transition-all group cursor-pointer"
          >
            <div>
              <div className="p-3 rounded-xl border-2 border-black bg-neo-yellow text-black shadow-[2px_2px_0px_0px_#000] w-fit mb-4">
                <Mail className="h-6 w-6 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">
                {t.contact.emailLabel}
              </span>
              <p className="text-sm font-black text-foreground mt-1 break-all">
                hellonaufalhanif@gmail.com
              </p>
            </div>
            <div className="mt-6 pt-4 border-t-2 border-black/10 flex items-center justify-between text-xs font-bold text-foreground/80 group-hover:text-black dark:group-hover:text-white">
              <span>{t.contact.sendEmailAction}</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/6281288330203"
            target="_blank"
            rel="noreferrer"
            className="neo-box p-6 rounded-2xl bg-card flex flex-col justify-between hover:translate-x-[2px] hover:translate-y-[2px] transition-all group cursor-pointer"
          >
            <div>
              <div className="p-3 rounded-xl border-2 border-black bg-neo-green text-black shadow-[2px_2px_0px_0px_#000] w-fit mb-4">
                <Phone className="h-6 w-6 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">
                {t.contact.phoneLabel}
              </span>
              <p className="text-sm font-black text-foreground mt-1">
                +62 812-8833-0203
              </p>
            </div>
            <div className="mt-6 pt-4 border-t-2 border-black/10 flex items-center justify-between text-xs font-bold text-foreground/80 group-hover:text-black dark:group-hover:text-white">
              <span>{t.contact.openWaAction}</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Location Card */}
          <a
            href="https://maps.google.com/?q=Tangerang+Selatan,+Banten,+Indonesia"
            target="_blank"
            rel="noreferrer"
            className="neo-box p-6 rounded-2xl bg-card flex flex-col justify-between hover:translate-x-[2px] hover:translate-y-[2px] transition-all group cursor-pointer"
          >
            <div>
              <div className="p-3 rounded-xl border-2 border-black bg-neo-blue text-black shadow-[2px_2px_0px_0px_#000] w-fit mb-4">
                <MapPin className="h-6 w-6 stroke-[2.5]" />
              </div>
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">
                {t.contact.locationLabel}
              </span>
              <p className="text-sm font-black text-foreground mt-1">
                {t.contact.locationVal}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t-2 border-black/10 flex items-center justify-between text-xs font-bold text-foreground/80 group-hover:text-black dark:group-hover:text-white">
              <span>{t.contact.openWorkType}</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}



