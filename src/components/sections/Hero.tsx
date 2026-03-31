
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Phone, CheckCircle2 } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-gym");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden text-center">
      {/* Background with optimized overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || ""}
          alt="Force Fitness Gym Interior"
          fill
          className="object-cover"
          priority
          data-ai-hint="modern gym interior"
        />
        <div className="absolute inset-0 bg-black/45 z-0" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in flex flex-col items-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-white text-sm font-semibold mb-8 border border-white/20 shadow-xl">
            <span className="text-yellow-400">⭐</span>
            <span>4.9 Rating | 364+ Members</span>
          </div>
          
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl text-white mb-6 leading-[1.1] font-extrabold tracking-tight">
            Train at Dombivli’s <br />
            <span className="text-primary italic">Most Trusted Gym</span> <br />
            – Force Fitness
          </h1>
          
          <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed font-medium">
            Clean environment, friendly trainers, and real fitness results.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Button size="lg" className="h-16 px-10 bg-primary hover:bg-primary/90 text-white text-xl font-bold rounded-2xl shadow-2xl shadow-primary/30 transition-all hover:scale-105" asChild>
              <a href="#pricing">Join Now</a>
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-white border-white/40 hover:bg-white/10 text-xl font-bold rounded-2xl backdrop-blur-sm transition-all hover:scale-105 gap-2" asChild>
              <a href="tel:07700077880">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full">
            {[
              "Verified Cleanliness",
              "Expert Personal Coaching",
              "Top-Tier Modern Equipment"
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-white/95 justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-bold tracking-wide uppercase">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
