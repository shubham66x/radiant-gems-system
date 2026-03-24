import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, ShieldAlert, Ban, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: ShieldAlert,
    title: "Fake Purity Claims",
    description: "Most jewellers in Ludhiana sell 18K gold at 22K prices. You lose thousands without knowing.",
  },
  {
    icon: Ban,
    title: "Hidden Making Charges",
    description: "Confusing rate cards and surprise charges at billing. You end up paying 30-40% more than expected.",
  },
  {
    icon: TrendingDown,
    title: "Poor Resale Value",
    description: "Non-hallmarked jewelry loses 20-30% value instantly. Your investment depreciates the day you buy it.",
  },
  {
    icon: AlertTriangle,
    title: "No Design Variety",
    description: "Same old designs everywhere. Your special day deserves unique, handcrafted pieces — not mass-produced copies.",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-cream-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-body text-sm tracking-[0.2em] uppercase mb-4 block">
            The Problem
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Buying Jewelry in Ludhiana?
            <br />
            <span className="text-secondary">Here's What Nobody Tells You.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-background p-8 rounded-lg border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-elegant group"
            >
              <problem.icon className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
