
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const GALLERY_IMAGES = [
  "gallery-1",
  "gallery-2",
  "gallery-3",
  "gallery-4",
  "hero-gym",
  "program-weight"
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">Facility Tour</Badge>
          <h2 className="text-4xl md:text-5xl mb-6 font-headline">Inside Force Fitness</h2>
          <p className="text-muted-foreground text-lg">
            A premium environment designed for peak performance. We maintain the highest standards of cleanliness and organization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((id, idx) => {
            const img = PlaceHolderImages.find(p => p.id === id);
            return (
              <div 
                key={idx} 
                className={cn(
                  "relative aspect-square rounded-3xl overflow-hidden group cursor-pointer",
                  idx === 0 || idx === 4 ? "md:col-span-2 md:aspect-video" : ""
                )}
              >
                <Image
                  src={img?.imageUrl || ""}
                  alt={img?.description || "Gym facility"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={img?.imageHint}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
