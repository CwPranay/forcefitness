import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-headline text-xl font-bold italic shadow-lg shadow-primary/20">
                F
              </div>
              <span className="font-headline text-2xl font-bold tracking-tighter">
                FORCE<span className="text-primary">FITNESS</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed text-sm max-w-xs">
              Dombivli's premium fitness destination. We provide a clean, professional environment for your health and performance.
            </p>
            <div className="flex gap-4 mt-10">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline text-lg font-bold mb-8 uppercase tracking-widest text-primary">Quick Links</h4>
            <ul className="space-y-5 text-white/60 text-sm font-medium">
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#programs" className="hover:text-primary transition-colors">Fitness Programs</Link></li>
              <li><Link href="#trainers" className="hover:text-primary transition-colors">Elite Trainers</Link></li>
              <li><Link href="#pricing" className="hover:text-primary transition-colors">Membership</Link></li>
              <li><Link href="#gallery" className="hover:text-primary transition-colors">Studio Tour</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-lg font-bold mb-8 uppercase tracking-widest text-primary">Resources</h4>
            <ul className="space-y-5 text-white/60 text-sm font-medium">
              <li><Link href="#" className="hover:text-primary transition-colors">FAQ & Support</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Member Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-lg font-bold mb-8 uppercase tracking-widest text-primary">Newsletter</h4>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Join 300+ members receiving expert fitness tips.
            </p>
            
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-xs font-medium">
            © {new Date().getFullYear()} Force Fitness Studio. Dombivli East.
          </p>
          <div className="flex gap-8 text-white/40 text-xs font-bold uppercase tracking-widest">
            <span>Premium Environment</span>
            <span>Cleanliness Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}