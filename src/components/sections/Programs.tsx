
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, HeartPulse, Sparkles, Trophy, Clock } from "lucide-react";

const PROGRAMS = [
  {
    title: "Strength & Conditioning",
    description: "Build raw power and lean muscle with elite strength training equipment.",
    icon: Dumbbell,
    tag: "Most Popular"
  },
  {
    title: "Cardio Excellence",
    description: "Improve endurance with top-tier treadmills and specialized cardio classes.",
    icon: HeartPulse,
    tag: "Endurance"
  },
  {
    title: "Yoga & Mindfulness",
    description: "Find balance and flexibility in our serene, professional yoga studio.",
    icon: Sparkles,
    tag: "Wellness"
  },
  {
    title: "Personal Coaching",
    description: "Results-driven 1-on-1 sessions tailored to your individual fitness goals.",
    icon: Trophy,
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
          {PROGRAMS.map((program, idx) => (
            <Card key={idx} className="group border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="relative aspect-[4/5] rounded-[2.5rem] bg-secondary/30 flex flex-col items-center justify-center mb-8 border-2 border-dashed border-primary/10 transition-all duration-500 group-hover:bg-primary/5 group-hover:border-primary/30">
                  <div className="flex flex-col items-center gap-4 text-primary/40 group-hover:text-primary transition-colors">
                    <Clock className="w-12 h-12" />
                    <span className="font-headline font-bold uppercase tracking-widest text-sm">Coming Soon</span>
                  </div>
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
          ))}
        </div>
      </div>
    </section>
  );
}
