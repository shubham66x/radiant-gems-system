import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-gold/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-gradient-gold animate-glow-gold mb-3">Radha Jewellers</h3>
            <p className="font-body text-cream/50 text-sm leading-relaxed">
              Ludhiana's most trusted jeweller since 1970. BIS Hallmarked gold, silver & diamond jewelry for every celebration.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-3">Quick Links</h4>
            <div className="space-y-2">
              {["Collections", "About Us", "Testimonials", "Visit Us"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="block font-body text-sm text-cream/50 hover:text-gold transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-3">Contact</h4>
            <div className="space-y-2 font-body text-sm text-cream/50">
              <p>Chaura Bazar, Ludhiana 141008</p>
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="w-4 h-4" /> +91 98765 43210
              </a>
            </div>
          </div>
        </div>
        <div className="gold-divider mb-8" />
        <p className="font-body text-center text-cream/30 text-xs">
          © {new Date().getFullYear()} Radha Jewellers, Ludhiana. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
