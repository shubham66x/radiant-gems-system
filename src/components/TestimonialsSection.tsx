import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Harpreet Kaur",
    role: "Bride, 2024",
    text: "My entire bridal set — from the choker to the maang tikka — was crafted by Radha Jewellers. Every piece was exactly as promised. My sasural couldn't stop praising the quality!",
    rating: 5,
  },
  {
    name: "Rajinder Singh",
    role: "Business Owner",
    text: "I've been buying gold from Radha Jewellers for 15 years. Their buyback policy is unmatched. When I needed funds, they gave me full market value — no questions asked.",
    rating: 5,
  },
  {
    name: "Simran Dhillon",
    role: "Engaged, 2025",
    text: "The engagement ring my fiancé got from here was breathtaking. The diamond certification was genuine, and the price was 20% less than what other jewellers quoted.",
    rating: 5,
  },
  {
    name: "Gurpreet Brar",
    role: "Mother of the Bride",
    text: "We bought jewelry worth ₹15 lakhs for my daughter's wedding. Radha Jewellers gave us a personal consultant who helped design custom pieces. Absolutely worth every rupee.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="testimonials" className="section-padding bg-charcoal relative">
      <div className="absolute top-0 left-0 right-0 gold-divider" />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-gold/70 font-body text-sm tracking-[0.2em] uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
            Loved by <span className="text-gradient-gold">10,000+ Families</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-charcoal border border-gold/15 rounded-lg p-8 hover:border-gold/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-gold/30 mb-4" />
              <p className="font-body text-cream/80 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-lg font-semibold text-cream">{t.name}</div>
                  <div className="font-body text-sm text-gold/60">{t.role}</div>
                </div>
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
