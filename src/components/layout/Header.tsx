"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Membership", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "glass-header py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 z-50">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-headline text-xl font-bold italic shadow-lg shadow-primary/20">
            F
          </div>
          <span className={cn(
            "font-headline text-2xl font-bold tracking-tighter transition-colors",
            isScrolled || mobileMenuOpen ? "text-foreground" : "text-white"
          )}>
            FORCE<span className="text-primary">FITNESS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-semibold transition-colors relative group",
                isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"
              )}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" size="icon" className={cn(
            "rounded-full h-11 w-11",
            isScrolled ? "text-foreground hover:bg-primary/10 hover:text-primary" : "text-white hover:bg-white/10"
          )} asChild title="Call Now">
            <a href="tel:07700077880">
              <Phone className="w-5 h-5" />
            </a>
          </Button>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl px-8 shadow-xl shadow-primary/20 transition-all hover:scale-105" asChild>
            <Link href="#contact">Join Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 transition-colors z-50 rounded-xl",
            isScrolled || mobileMenuOpen ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Full Screen Mobile Nav Overlay - Sliding from right */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ease-in-out flex flex-col items-center justify-center",
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center gap-8 w-full px-6">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-3xl font-bold text-foreground hover:text-primary transition-all duration-300",
                mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <div className={cn(
            "flex flex-col gap-4 w-full max-w-sm pt-12 transition-all duration-500 delay-300",
            mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <Button className="bg-primary hover:bg-primary/90 text-white h-16 text-xl font-bold shadow-lg shadow-primary/20 rounded-3xl" asChild>
              <Link href="#pricing" onClick={() => setMobileMenuOpen(false)}>Join Now</Link>
            </Button>
            <Button variant="outline" className="gap-3 h-16 text-xl font-bold rounded-3xl border-2 hover:bg-muted" asChild>
              <a href="tel:07700077880">
                <Phone className="w-6 h-6 text-primary" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
