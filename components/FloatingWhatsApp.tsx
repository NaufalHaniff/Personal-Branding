"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";

export default function FloatingWhatsApp() {
  const { t } = useLanguage();
  const [showPopup, setShowPopup] = useState(true);

  // Looping 5 seconds visible, 5 seconds hidden
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prefilledText =
    t.contact.floatingWaTemplate ||
    "Halo Naufal Hanif Fauzi, saya melihat portofolio Anda dan tertarik untuk mendiskusikan peluang kerja sama / proyek.";

  const waUrl = `https://wa.me/6281288330203?text=${encodeURIComponent(prefilledText)}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 select-none">
      <div className="relative flex items-center">
        {/* Looping Branding Popup (5s show / 5s hide) */}
        <div
          className={`absolute right-full mr-3.5 top-1/2 -translate-y-1/2 transition-all duration-500 ease-out z-10 ${
            showPopup
              ? "opacity-100 scale-100 translate-x-0 pointer-events-auto"
              : "opacity-0 scale-95 translate-x-2 pointer-events-none"
          }`}
        >
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="block bg-card border-2 border-black shadow-[3px_3px_0px_0px_#000000] rounded-xl px-3.5 py-2.5 whitespace-nowrap hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#000000] transition-all cursor-pointer relative"
          >
            {/* Speech Bubble Arrow Tail */}
            <div className="absolute top-1/2 -right-[7px] -translate-y-1/2 w-3 h-3 bg-card border-t-2 border-r-2 border-black rotate-45" />

            <p className="text-xs sm:text-sm font-black text-foreground leading-tight">
              {t.contact.floatingWaPopupSubtitle || "Tersedia untuk Diskusi Proyek 👋"}
            </p>
          </a>
        </div>

        {/* Enlarged Floating WhatsApp Button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={t.contact.chatWaBtn || "Chat via WhatsApp"}
          title={t.contact.chatWaBtn || "Chat via WhatsApp"}
          className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[2.5px] border-black bg-[#25D366] text-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
        >
          {/* Animated Online Status Indicator */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-neo-yellow border-2 border-black" />
          </span>

          {/* WhatsApp Icon */}
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 fill-black group-hover:scale-110 transition-transform"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
