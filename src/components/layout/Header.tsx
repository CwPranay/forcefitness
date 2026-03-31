
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
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
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-headline text-xl font-bold italic group-hover:scale-110 transition-transform">
            F
          </div>
          <span className="font-headline text-2xl font-bold tracking-tighter">
            FORCE<span className="text-primary">FITNESS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2 border-primary/20 hover:bg-primary/5" asChild>
            <a href="tel:+1234567890">
              <Phone className="w-4 h-4" />
              Call
            </a>
          </Button>
          <Button variant="outline" size="sm" className="gap-2 text-green-600 border-green-200 hover:bg-green-50" asChild>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white" asChild>
            <Link href="#pricing">Join Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
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
              className="text-xl font-semibold border-b pb-2"
            >
              {item.label}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Button variant="outline" className="gap-2" asChild>
              <a href="tel:+1234567890">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
            <Button variant="outline" className="gap-2 text-green-600 border-green-200" asChild>
              <a href="https://wa.me/1234567890">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
            <Button className="col-span-2 bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="#pricing" onClick={() => setMobileMenuOpen(false)}>Join Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
