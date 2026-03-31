
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "Member for 1 year",
    text: "The cleanest gym in Dombivli. The trainers are actually helpful and don't just push supplements. Highly recommended!",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Member for 6 months",
    text: "Love the atmosphere here. It's safe, professional, and the equipment is always well-maintained. Best decision for my fitness.",
    rating: 5
  },
  {
    name: "Amit Verma",
    role: "Member for 2 years",
    text: "Been to many gyms in the city, but Force Fitness stands out for its discipline and hygiene. Great community vibe.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 px-4 py-1.5 rounded-full uppercase tracking-widest font-bold text-xs">Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-headline">What Our Members Say</h2>
          <p className="text-muted-foreground text-lg mt-4">
            Real stories from our Dombivli community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <Card key={idx} className="border-none rounded-[2.5rem] bg-white shadow-xl shadow-black/5 p-4 hover:-translate-y-2 transition-all duration-500">
              <CardContent className="pt-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="absolute -top-4 -left-2 w-8 h-8 text-primary/10 -z-0" />
                  <p className="text-foreground/80 leading-relaxed mb-8 relative z-10 italic">
                    "{t.text}"
                  </p>
                </div>
                <div className="pt-6 border-t border-border">
                  <h4 className="font-bold text-lg font-headline">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
