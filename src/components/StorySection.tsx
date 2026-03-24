import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="section-padding bg-charcoal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 gold-divider" />
      <div className="absolute bottom-0 left-0 right-0 gold-divider" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-gold/70 font-body text-sm tracking-[0.2em] uppercase mb-6 block"
          >
            Our Legacy
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-cream mb-8"
          >
            From a Small Workshop to
            <br />
            <span className="text-gradient-gold">Ludhiana's Most Loved Jeweller</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-cream/70 font-body text-lg leading-relaxed"
          >
            <p>
              In 1970, Shri Radha Krishan ji opened a small jewelry workshop in the heart of Ludhiana 
              with one simple promise: <strong className="text-gold">"Every piece will be as pure as our intention."</strong>
            </p>
            <p>
              Over five decades later, that promise has made Radha Jewellers the name over 10,000 Punjabi families 
              trust for their most precious moments — weddings, engagements, births, and celebrations.
            </p>
            <p>
              We don't just sell jewelry. We craft heirlooms that carry your family's love through generations. 
              Every piece is handcrafted by master artisans, BIS hallmarked, and backed by our 
              <strong className="text-gold"> 100% buyback guarantee.</strong>
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { number: "55+", label: "Years of Trust" },
              { number: "10,000+", label: "Happy Families" },
              { number: "500+", label: "Unique Designs" },
              { number: "100%", label: "BIS Hallmarked" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-1">
                  {stat.number}
                </div>
                <div className="font-body text-sm text-cream/50 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
