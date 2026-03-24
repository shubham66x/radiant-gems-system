import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Gem, RefreshCw, CreditCard, ParkingCircle, Paintbrush } from "lucide-react";

const benefits = [
  {
    icon: Gem,
    title: "Diverse Collections",
    description: "Specializes in 22K Hallmark gold, 925 silver, and diamond jewellery for every occasion.",
  },
  {
    icon: Paintbrush,
    title: "Custom Designs",
    description: "Custom-made jewellery tailored to your specific style, personality, and design preferences.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    description: "EMI schemes, credit/debit cards, and UPI/NFC mobile payments — buy the way you want.",
  },
  {
    icon: RefreshCw,
    title: "Old Gold Buyback",
    description: "Trade or sell your existing gold with our transparent old gold buy-back option at market rates.",
  },
  {
    icon: ParkingCircle,
    title: "Showroom Amenities",
    description: "Dedicated parking spaces with prime, easily accessible locations across Ludhiana.",
  },
  {
    icon: Shield,
    title: "100% BIS Hallmarked",
    description: "Every piece comes with government-certified BIS hallmark. No compromises on purity.",
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-cream-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-gold-dark font-body text-sm tracking-[0.2em] uppercase mb-4 block">
            Why Radha Jewellers
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            The <span className="text-gradient-gold">Radha Difference</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-8 rounded-lg gold-border hover:shadow-gold transition-all duration-300 text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
