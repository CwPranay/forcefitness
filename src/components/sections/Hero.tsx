
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star, ChevronRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-gym");

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage?.imageUrl || ""}
          alt="Modern Gym Interior"
          fill
          className="object-cover brightness-[0.4]"
          priority
          data-ai-hint="modern gym"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm mb-6 border border-white/20">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>4.9 Star Rated by 500+ Members</span>
          </div>
          
          <h1 className="font-headline text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
            Transform Your <span className="text-primary italic">Body</span>, <br />
            Define Your <span className="text-primary italic">Life</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
            Elevate your fitness journey at our premium studio. Expert coaching, 
            world-class equipment, and a community that pushes you to be your absolute best.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white text-lg rounded-xl shadow-xl shadow-primary/20">
              Start Your Free Trial
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-white border-white/30 hover:bg-white/10 text-lg rounded-xl backdrop-blur-sm">
              View Membership Plans
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Professional Trainers",
              "24/7 Premium Access",
              "Modern Equipment"
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
