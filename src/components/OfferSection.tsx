import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Gift, Sparkles, Clock, Phone } from "lucide-react";

const OfferSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary relative overflow-hidden">
      {/* Decorative bg pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border border-gold/30" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border border-gold/20" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Gift className="w-5 h-5 text-gold" />
            <span className="text-gold font-body text-sm tracking-[0.2em] uppercase">
              Limited Time Offer
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
            Walk In This Week &
            <br />
            <span className="text-gradient-gold">Get Exclusive Benefits</span>
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 my-12">
            {[
              { icon: Sparkles, text: "Free Gold Purity Testing on any jewelry you own" },
              { icon: Gift, text: "₹1,100 OFF on purchases above ₹50,000" },
              { icon: Clock, text: "0% Interest EMI available on select pieces" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="bg-burgundy-light/30 border border-gold/20 rounded-lg p-6 text-center"
              >
                <item.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="font-body text-secondary-foreground text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="tel:+919876543210" className="text-base">
                <Phone className="w-5 h-5" />
                Call to Book Your Visit
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-base">
                WhatsApp Us
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
