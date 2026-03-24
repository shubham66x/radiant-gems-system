import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import necklaceImg from "@/assets/collection-necklace.jpg";
import banglesImg from "@/assets/collection-bangles.jpg";
import earringsImg from "@/assets/collection-earrings.jpg";
import ringsImg from "@/assets/collection-rings.jpg";

const collections = [
  {
    title: "Bridal Necklaces",
    description: "Temple, Kundan & Polki sets handcrafted for your big day",
    image: necklaceImg,
    tag: "Bestseller",
  },
  {
    title: "Gold Bangles",
    description: "Traditional Meenakari & modern designs from 8gm onwards",
    image: banglesImg,
    tag: "New Arrivals",
  },
  {
    title: "Jhumka & Earrings",
    description: "From classic Chandbalis to contemporary studs",
    image: earringsImg,
    tag: "Trending",
  },
  {
    title: "Rings & Bands",
    description: "Engagement rings & wedding bands in 18K, 22K gold & diamond",
    image: ringsImg,
    tag: "Popular",
  },
];

const CollectionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="collections" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-dark font-body text-sm tracking-[0.2em] uppercase mb-4 block">
            Our Collections
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Crafted for <span className="text-gradient-gold">Every Celebration</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Each piece is designed by master artisans with 22K & 24K pure gold, certified gemstones, and BIS hallmark guarantee.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-lg shadow-elegant cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} collection at Radha Jewellers Ludhiana`}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-gold text-charcoal font-body text-xs font-semibold px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-cream mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-cream/70 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-gold font-body text-sm font-semibold group-hover:gap-4 transition-all duration-300">
                  View Collection <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
