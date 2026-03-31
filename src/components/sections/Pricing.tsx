
"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Basic",
    price: "49",
    description: "Perfect for casual gym-goers who want quality equipment.",
    features: [
      "Access to Gym Floor",
      "Locker Room & Showers",
      "1 Complementary Session",
      "Standard Operating Hours",
      "Mobile App Integration"
    ],
    highlight: false
  },
  {
    name: "Pro Performance",
    price: "89",
    description: "Our most popular plan for serious fitness enthusiasts.",
    features: [
      "Everything in Basic",
      "Unlimited Group Classes",
      "24/7 Premium Access",
      "Nutrition & Diet Plans",
      "Sauna & Steam Room Access",
      "Monthly Assessment"
    ],
    highlight: true,
    badge: "Most Popular"
  },
  {
    name: "Elite Force",
    price: "199",
    description: "The ultimate fitness experience with total guidance.",
    features: [
      "Everything in Pro",
      "Weekly Personal Training",
      "VIP Locker Access",
      "Force Protein Bar Pass",
      "Guest Passes (2/month)",
      "Exclusive Events"
    ],
    highlight: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">Pricing Plans</Badge>
          <h2 className="text-4xl md:text-5xl mb-6 font-headline">Simple Membership Options</h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your lifestyle. No hidden fees, just transparent fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan, idx) => (
            <div
              key={idx}
              className={cn(
                "relative flex flex-col p-8 rounded-3xl transition-all duration-300 border",
                plan.highlight 
                  ? "bg-foreground text-white border-foreground shadow-2xl scale-105 z-10" 
                  : "bg-white text-foreground border-border hover:border-primary/50"
              )}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-white py-1.5 px-4 text-sm font-semibold rounded-full border-none shadow-lg">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-headline mb-2">{plan.name}</h3>
                <p className={cn("text-sm", plan.highlight ? "text-white/70" : "text-muted-foreground")}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-bold font-headline">$</span>
                <span className="text-6xl font-bold font-headline tracking-tight">{plan.price}</span>
                <span className={cn("text-sm", plan.highlight ? "text-white/60" : "text-muted-foreground")}>/month</span>
              </div>

              <div className="flex-1 mb-10 space-y-4">
                {plan.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-center gap-3">
                    <div className={cn(
                      "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center",
                      plan.highlight ? "bg-primary text-white" : "bg-primary/10 text-primary"
                    )}>
                      <Check className="w-3 h-3 font-bold" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={cn(
                  "w-full h-12 text-md rounded-xl font-semibold transition-all",
                  plan.highlight 
                    ? "bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20" 
                    : "bg-secondary text-foreground hover:bg-primary hover:text-white"
                )}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
