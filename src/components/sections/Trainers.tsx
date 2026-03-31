
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const TRAINERS = [
  {
    name: "Marcus Thorne",
    role: "Head Fitness Coach",
    specialty: "Strength & Power",
    image: "trainer-1"
  },
  {
    name: "Elena Rodriguez",
    role: "Senior Instructor",
    specialty: "Yoga & Flexibility",
    image: "trainer-2"
  },
  {
    name: "David Chen",
    role: "Performance Specialist",
    specialty: "HIIT & Cardio",
    image: "trainer-1"
  }
];

export function Trainers() {
  return (
    <section id="trainers" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">The Experts</Badge>
            <h2 className="text-4xl md:text-5xl">Meet Our Elite Trainers</h2>
            <p className="text-muted-foreground text-lg mt-4">
              Our certified professionals are dedicated to your growth, providing 
              friendly guidance and scientific approaches to your workouts.
            </p>
          </div>
          <div className="flex items-center gap-6 pb-2">
            <div className="text-center">
              <p className="text-3xl font-bold font-headline">15+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Expert Coaches</p>
            </div>
            <div className="w-[1px] h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold font-headline">100%</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Dedication</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TRAINERS.map((trainer, idx) => {
            const img = PlaceHolderImages.find(p => p.id === trainer.image);
            return (
              <Card key={idx} className="border-none shadow-none overflow-hidden bg-white group">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                    <Image
                      src={img?.imageUrl || ""}
                      alt={trainer.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={img?.imageHint}
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 flex justify-around shadow-xl">
                        <Instagram className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                        <Twitter className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                        <Linkedin className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-primary text-sm font-semibold mb-1 uppercase tracking-wider">{trainer.role}</p>
                    <h3 className="text-2xl font-headline mb-2">{trainer.name}</h3>
                    <p className="text-muted-foreground text-sm italic">{trainer.specialty}</p>
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
