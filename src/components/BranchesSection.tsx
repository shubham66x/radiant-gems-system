import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Star } from "lucide-react";

const branches = [
  {
    name: "Haibowal Kalan (Main Branch)",
    address: "Haibowal Main Rd, Near UCO Bank, Durga Puri, Ludhiana - 141001",
    phone: "+91 98550 80128",
    hours: "Open daily 9:00 AM – 9:00 PM",
    isMain: true,
  },
  {
    name: "Civil Lines / Hambran Road",
    address: "Shop No. 1215/9/15, Near Sabzi Mandi, Hambran Road, Ludhiana - 141001",
    phone: "+91 94176 59017",
    hours: "Opens at 10:00 AM",
    isMain: false,
  },
  {
    name: "Kitchlu Nagar",
    address: "Hambran Road, Main Road, Kitchlu Nagar, Ludhiana - 141001",
    phone: "+91 98150 98083",
    hours: "Open daily",
    isMain: false,
  },
];

const BranchesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="branches" className="section-padding bg-charcoal relative">
      <div className="absolute top-0 left-0 right-0 gold-divider" />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-gold/70 font-body text-sm tracking-[0.2em] uppercase mb-4 block">
            Our Locations
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
            Visit <span className="text-gradient-gold">Our Showrooms</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative bg-charcoal border rounded-lg p-8 hover:border-gold/40 transition-all duration-300 ${
                branch.isMain ? "border-gold/30 shadow-gold" : "border-gold/15"
              }`}
            >
              {branch.isMain && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-gradient-gold text-charcoal font-body text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" /> Main Branch
                  </span>
                </div>
              )}

              <h3 className="font-display text-xl font-semibold text-cream mb-5 mt-1">
                {branch.name}
              </h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="font-body text-cream/70 text-sm">{branch.address}</p>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                  <a
                    href={`tel:${branch.phone.replace(/\s/g, "")}`}
                    className="font-body text-cream/70 text-sm hover:text-gold transition-colors"
                  >
                    {branch.phone}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                  <p className="font-body text-cream/70 text-sm">{branch.hours}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
