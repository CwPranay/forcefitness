
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ShieldCheck, Users, Sparkles, Clock } from "lucide-react";

export function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === "gallery-1");

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
              <Image
                src={aboutImage?.imageUrl || ""}
                alt="Force Fitness Environment"
                fill
                className="object-cover"
                data-ai-hint="gym interior"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-accent rounded-full blur-3xl -z-0" />
            
            {/* Floating Trust Card */}
            <div className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-primary/10 max-w-[240px]">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="text-primary w-5 h-5" />
                <span className="font-bold text-lg">Cleanest in City</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We sanitize every machine hourly to ensure a safe and premium environment for your workout.
              </p>
            </div>
          </div>

          <div>
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">About Our Studio</Badge>
            <h2 className="text-4xl md:text-5xl mb-6 font-headline leading-tight">Beyond a Gym, <br />It's a <span className="text-primary">Force</span> of Nature.</h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Founded on the principles of precision, strength, and community, Force Fitness is more than just a place to workout. 
              We've curated a space that balances high-intensity performance with a welcoming, clean, and modern atmosphere.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-lg">Trust & Quality</h4>
                  <p className="text-sm text-muted-foreground">Certified trainers and premium equipment for maximum safety.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Users className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-lg">Global Community</h4>
                  <p className="text-sm text-muted-foreground">Join a supportive network of fitness enthusiasts and experts.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-lg">Flexible Hours</h4>
                  <p className="text-sm text-muted-foreground">Train on your schedule with our extensive operating hours.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-lg">Modern Aesthetic</h4>
                  <p className="text-sm text-muted-foreground">A clean, bright, and spacious environment that motivates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
