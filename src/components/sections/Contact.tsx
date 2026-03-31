
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">Get In Touch</Badge>
            <h2 className="text-4xl md:text-5xl mb-8 font-headline">Let's Talk About Your Fitness Journey</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">123 Fitness Ave, Wellness District, <br />Strength City, SC 45678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Call/Support</h4>
                  <p className="text-muted-foreground">07700077880</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Operating Hours</h4>
                  <div className="grid grid-cols-2 gap-x-4 text-sm text-muted-foreground">
                    <span>Mon - Fri:</span> <span>05:00 AM - 11:00 PM</span>
                    <span>Saturday:</span> <span>07:00 AM - 09:00 PM</span>
                    <span>Sunday:</span> <span>08:00 AM - 06:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl border bg-secondary/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4 animate-bounce" />
                <p className="font-medium">Interactive Map Integration</p>
                <p className="text-xs text-muted-foreground">Force Fitness Studio Location</p>
              </div>
              <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
            </div>
          </div>

          <div className="bg-secondary/20 p-8 md:p-12 rounded-[2.5rem] border border-white">
            <h3 className="text-2xl font-headline mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input placeholder="John Doe" className="bg-white border-none h-12 rounded-xl px-4" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="bg-white border-none h-12 rounded-xl px-4" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Interested Program</label>
                <select className="w-full bg-white border-none h-12 rounded-xl px-4 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring">
                  <option>Strength Training</option>
                  <option>Cardio & HIIT</option>
                  <option>Yoga & Flexibility</option>
                  <option>Personal Coaching</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Tell us about your goals..." className="bg-white border-none min-h-[150px] rounded-xl p-4" />
              </div>
              <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-xl text-lg shadow-lg shadow-primary/20">
                Send Inquiry
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
