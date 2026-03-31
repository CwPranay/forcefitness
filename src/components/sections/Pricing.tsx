
"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Standard",
    price: "1,499",
    description: "Essential access for consistent fitness enthusiasts.",
    features: [
      "Access to All Gym Floors",
      "Locker & Shower Facilities",
      "Sanitized Equipment",
      "Standard Operating Hours",
      "Mobile Progress App"
    ],
    highlight: false
  },
  {
    name: "Premium Pro",
    price: "2,499",
    description: "The perfect balance of guidance and freedom.",
    features: [
      "Everything in Standard",
      "Unlimited Group Classes",
      "Priority Access",
      "Nutrition & Diet Plans",
      "Sauna & Recovery Spa",
      "Monthly Fitness Checkup"
    ],
    highlight: true,
    badge: "Most Trusted"
  },
  {
    name: "Elite Force",
    price: "4,999",
    description: "A total lifestyle transformation with expert support.",
    features: [
      "Everything in Premium",
      "Weekly Personal Training",
      "Exclusive VIP Lockers",
      "Protein Smoothie Pass",
      "Monthly Guest Passes (3)",
      "Elite Community Access"
    ],
    highlight: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 px-4 py-1.5 rounded-full uppercase tracking-widest font-bold text-xs">Membership</Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-headline">Simple Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            No hidden fees, no complicated contracts. Just premium fitness in Dombivli.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
          {PLANS.map((plan, idx) => (
            <div
              key={idx}
              className={cn(
                "relative flex flex-col p-10 rounded-[3rem] transition-all duration-500 border",
                plan.highlight 
                  ? "bg-white border-primary/20 shadow-2xl scale-105 z-10" 
                  : "bg-white/50 border-border hover:border-primary/30 hover:bg-white"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-white py-2 px-6 text-sm font-bold rounded-full border-none shadow-xl shadow-primary/30">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="mb-10 text-center">
                <h3 className="text-3xl font-headline mb-3">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="mb-10 flex items-baseline justify-center gap-1">
                <span className="text-3xl font-bold font-headline text-primary">₹</span>
                <span className="text-6xl font-bold font-headline tracking-tighter text-foreground">{plan.price}</span>
                <span className="text-muted-foreground font-semibold">/mo</span>
              </div>

              <div className="flex-1 mb-12 space-y-5">
                {plan.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-semibold text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={cn(
                  "w-full h-16 text-lg rounded-2xl font-bold transition-all shadow-lg",
                  plan.highlight 
                    ? "bg-primary hover:bg-primary/90 text-white shadow-primary/20" 
                    : "bg-background text-foreground hover:bg-primary hover:text-white"
                )}
              >
                Join Force
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
