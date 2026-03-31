"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Dumbbell, HeartPulse, Sparkles, Trophy } from "lucide-react";

const PROGRAMS = [
  {
    title: "Strength & Conditioning",
    description: "Build raw power and lean muscle with elite strength training equipment.",
    icon: Dumbbell,
    image: "program-weight",
    tag: "Most Popular"
  },
  {
    title: "Cardio Excellence",
    description: "Improve endurance with top-tier treadmills and specialized cardio classes.",
    icon: HeartPulse,
    image: "program-cardio",
    tag: "Endurance"
  },
  {
    title: "Yoga & Mindfulness",
    description: "Find balance and flexibility in our serene, professional yoga studio.",
    icon: Sparkles,
    image: "program-yoga",
    tag: "Wellness"
  },
  {
    title: "Personal Coaching",
    description: "Results-driven 1-on-1 sessions tailored to your individual fitness goals.",
    icon: Trophy,
    image: "trainer-1",
    tag: "Premium"
  }
];

export function Programs() {
  return (
    <section id="programs" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 px-4 py-1.5 rounded-full uppercase tracking-widest font-bold text-xs">Our Expertise</Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-headline">Premium Fitness Programs</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We provide professional environments and guidance for every stage of your fitness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {PROGRAMS.map((program, idx) => {
            const img = PlaceHolderImages.find(p => p.id === program.image);
            return (
              <Card key={idx} className="group border-none shadow-none bg-transparent hover:-translate-y-3 transition-all duration-500">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl shadow-black/5 group-hover:shadow-primary/10 transition-all">
                    <Image
                      src={img?.imageUrl || ""}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint={img?.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-white/90 backdrop-blur-md text-primary font-bold border-none px-4 py-1.5 rounded-full shadow-lg">{program.tag}</Badge>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                      <program.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl mb-3 font-headline leading-tight">{program.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}