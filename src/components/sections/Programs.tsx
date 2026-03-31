"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, HeartPulse, Sparkles, Trophy } from "lucide-react";

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
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
         <Badge variant="outline" className="mb-4 text-primary border-primary/20 px-4 py-1.5 rounded-full uppercase tracking-widest font-bold text-xs">Our Expertise</Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-headline">
            Premium Fitness Programs
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            We provide professional environments and guidance for every stage of your fitness journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROGRAMS.map((program, idx) => (
            <Card
              key={idx}
              className="group border border-gray-100 hover:border-primary/30 rounded-3xl transition-all duration-500 hover:shadow-xl"
            >
              <CardContent className="p-6">
                
                {/* Tag */}
                <Badge className="mb-4 bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full">
                  {program.tag}
                </Badge>

                {/* Icon */}
                <div className="w-14 h-14 mb-5 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <program.icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl mb-3 font-semibold leading-tight">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {program.description}
                </p>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}