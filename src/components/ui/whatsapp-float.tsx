
"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/911234567890?text=Hi%20Force%20Fitness,%20I'm%20interested%20in%20joining%20the%20gym!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/30 transition-all hover:scale-110 flex items-center justify-center animate-float group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 bg-white text-green-600 px-3 py-1.5 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-green-100 hidden md:block">
        Chat with us!
      </span>
    </a>
  );
}
