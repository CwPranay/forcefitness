
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Dumbbell, HeartPulse, Sparkles, Trophy } from "lucide-react";

const PROGRAMS = [
  {
    title: "Strength & Conditioning",
    description: "Build raw power and lean muscle with our elite strength training programs and state-of-the-art weights.",
    icon: Dumbbell,
    image: "program-weight",
    tag: "High Intensity"
  },
  {
    title: "Cardio Excellence",
    description: "Improve your cardiovascular health and endurance with top-tier equipment and heart-pumping classes.",
    icon: HeartPulse,
    image: "program-cardio",
    tag: "Endurance"
  },
  {
    title: "Yoga & Mindfulness",
    description: "Find your balance and flexibility in our serene yoga sessions designed for all skill levels.",
    icon: Sparkles,
    image: "program-yoga",
    tag: "Recovery"
  },
  {
    title: "Personal Coaching",
    description: "Achieve results faster with 1-on-1 personalized training plans tailored to your specific goals.",
    icon: Trophy,
    image: "trainer-1",
    tag: "Exclusive"
  }
];

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">Our Programs</Badge>
          <h2 className="text-4xl md:text-5xl mb-6">Experience Fitness Excellence</h2>
          <p className="text-muted-foreground text-lg">
            Whether you're starting out or an elite athlete, our diverse range of programs 
            is designed to challenge you and deliver sustainable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROGRAMS.map((program, idx) => {
            const img = PlaceHolderImages.find(p => p.id === program.image);
            return (
              <Card key={idx} className="group border-none shadow-none bg-transparent hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={img?.imageUrl || ""}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={img?.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-primary text-white border-none">{program.tag}</Badge>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors">
                      <program.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2 font-headline">{program.title}</h3>
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
