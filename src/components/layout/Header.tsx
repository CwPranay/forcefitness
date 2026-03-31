
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-header py-3 shadow-sm" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-headline text-xl font-bold italic group-hover:scale-105 transition-transform shadow-lg shadow-primary/20">
            F
          </div>
          <span className={cn(
            "font-headline text-2xl font-bold tracking-tighter transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}>
            FORCE<span className="text-primary">FITNESS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-semibold hover:text-primary transition-colors",
                isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" size="sm" className={cn(
            "gap-2 font-semibold",
            isScrolled ? "text-foreground" : "text-white hover:bg-white/10"
          )} asChild>
            <a href="tel:+911234567890">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold px-6 shadow-lg shadow-primary/20" asChild>
            <Link href="#pricing">Join Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[60px] bg-background z-40 transition-transform duration-300",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-6 gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-bold border-b pb-4 border-border"
            >
              {item.label}
            </Link>
          ))}
          <div className="grid grid-cols-1 gap-4 pt-4">
            <Button variant="outline" className="gap-2 h-14 text-lg font-bold" asChild>
              <a href="tel:+911234567890">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white h-14 text-lg font-bold shadow-lg shadow-primary/20" asChild>
              <Link href="#pricing" onClick={() => setMobileMenuOpen(false)}>Join Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
