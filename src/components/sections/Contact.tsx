
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl mb-6 font-headline">Let's Talk About Your Fitness Journey</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to take the first step? Visit us at the studio or give us a call to discuss your goals with our experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-[2.5rem] border border-border/50 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="text-primary w-7 h-7" />
            </div>
            <h4 className="font-semibold text-xl mb-2 font-headline">Visit Us</h4>
            <p className="text-muted-foreground text-sm">123 Fitness Ave, Wellness District, <br />Strength City, SC 45678</p>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-border/50 text-center flex flex-col items-center group">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Phone className="text-primary w-7 h-7" />
            </div>
            <h4 className="font-semibold text-xl mb-2 font-headline">Call/Support</h4>
            <p className="text-muted-foreground text-sm mb-4 italic">Friendly guidance just a click away.</p>
            <Button className="rounded-xl gap-2 font-bold px-8 shadow-lg shadow-primary/20" asChild>
              <a href="tel:07700077880">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-border/50 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="text-primary w-7 h-7" />
            </div>
            <h4 className="font-semibold text-xl mb-2 font-headline">Operating Hours</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Mon - Fri: 05:00 AM - 11:00 PM</p>
              <p>Sat: 07:00 AM - 09:00 PM</p>
              <p>Sun: 08:00 AM - 06:00 PM</p>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl border bg-secondary/50 flex items-center justify-center">
          <div className="text-center z-10">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4 animate-bounce" />
            <p className="font-bold text-2xl font-headline mb-2">Interactive Map</p>
            <p className="text-muted-foreground font-medium">Force Fitness Studio - Dombivli Location</p>
          </div>
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          {/* Decorative placeholder background for map */}
          <div className="absolute inset-0 -z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
      </div>
    </section>
  );
}
