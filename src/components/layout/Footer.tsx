
import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-headline text-lg font-bold italic">
                F
              </div>
              <span className="font-headline text-xl font-bold tracking-tighter">
                FORCE<span className="text-primary">FITNESS</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed text-sm">
              We provide the tools, environment, and community to help you achieve your 
              highest physical potential. Join the Force today.
            </p>
            <div className="flex gap-4 mt-8">
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-headline text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link href="#about" className="hover:text-primary transition-colors">About Force</Link></li>
              <li><Link href="#programs" className="hover:text-primary transition-colors">Our Programs</Link></li>
              <li><Link href="#trainers" className="hover:text-primary transition-colors">Expert Trainers</Link></li>
              <li><Link href="#pricing" className="hover:text-primary transition-colors">Membership Plans</Link></li>
              <li><Link href="#gallery" className="hover:text-primary transition-colors">Studio Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Contact Support</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-white/60 text-sm mb-4 leading-relaxed">
              Get fitness tips and studio updates directly to your inbox.
            </p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-4 py-3 text-sm font-semibold transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Force Fitness Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/40 text-xs">
            <span>Designed for Peak Performance</span>
            <span>Cleanliness Verified 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
