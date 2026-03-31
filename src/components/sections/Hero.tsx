"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Phone, CheckCircle2 } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-gym");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden text-center bg-white">
      {/* Premium Background with softer overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || ""}
          alt="Force Fitness Modern Gym Interior"
          fill
          className="object-cover"
          priority
          data-ai-hint="bright clean gym"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background/90 z-0" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2.5 rounded-full text-white text-sm font-bold mb-10 border border-white/30 shadow-2xl animate-fade-in">
            <span className="text-yellow-400">⭐</span>
            <span>4.9 Rating | 364+ Happy Members</span>
          </div>
          
          <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.05] font-extrabold tracking-tight drop-shadow-sm animate-fade-in">
            Train at Dombivli’s <br />
            <span className="text-primary italic">Most Trusted Gym</span> <br />
            – Force Fitness
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl leading-relaxed font-medium animate-fade-in delay-100">
            Clean, well-maintained space with friendly trainers and real results. Join the community that prioritizes your health.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto animate-fade-in delay-200">
            <Button size="lg" className="h-16 px-12 bg-primary hover:bg-primary/90 text-white text-xl font-bold rounded-3xl shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95" asChild>
              <a href="#pricing">Join Now</a>
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-12 text-primary border-2 border-white/80 hover:bg-white hover:text-primary text-xl font-bold rounded-3xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 gap-3" asChild>
              <a href="tel:07700077880">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full animate-fade-in delay-300">
            {[
              "Certified Cleanliness",
              "Expert Guidance",
              "Premium Equipment"
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-primary justify-center bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="text-sm font-bold tracking-widest uppercase">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
