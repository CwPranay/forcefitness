
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
            Ready to take the first step? Reach out to our team or visit our Dombivli studio today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          <div className="bg-white p-10 rounded-[2.5rem] border border-border/50 text-center flex flex-col items-center shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="text-primary w-8 h-8" />
            </div>
            <h4 className="font-semibold text-xl mb-3 font-headline">Visit Us</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Force Fitness Studio, <br />
              Dombivli East, Maharashtra 421201
            </p>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] border-2 border-primary/20 text-center flex flex-col items-center shadow-xl scale-105 z-10">
            <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <Phone className="w-8 h-8" />
            </div>
            <h4 className="font-semibold text-xl mb-3 font-headline">Call Support</h4>
            <p className="text-muted-foreground text-sm mb-6">Expert guidance is just a call away.</p>
            <Button className="rounded-2xl gap-2 font-bold px-10 h-14 text-lg shadow-lg shadow-primary/20 hover:scale-105 transition-transform" asChild>
              <a href="tel:07700077880">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] border border-border/50 text-center flex flex-col items-center shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="text-primary w-8 h-8" />
            </div>
            <h4 className="font-semibold text-xl mb-3 font-headline">Operating Hours</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p className="font-medium">Mon - Fri: 05:00 - 23:00</p>
              <p>Sat - Sun: 07:00 - 20:00</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-5xl mx-auto aspect-video md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl border bg-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7535.36793825705!2d73.0872801935791!3d19.20900090000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795e8411043a1%3A0x6c3adf572afe7f5a!2sFORCE%20FITNESS!5e0!3m2!1sen!2sin!4v1774934452902!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
